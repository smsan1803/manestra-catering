import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, faGaugeHigh, faCarrot, faUtensils, faChevronDown,
  faPrint, faMobileScreenButton, faUsers, faMinus, faPlus,
} from "@fortawesome/free-solid-svg-icons";

const API_BASE = "https://front3.edukacija.online/backend/wp-json/wp/v2";
const CPT_SLUG = "recepti-sandra";

const DIFF_MAP = {
  Lako: { IST: "Lako", HR: "Lako", EN: "Easy" },
  Srednje: { IST: "Srednje", HR: "Srednje", EN: "Medium" },
  Tesko: { IST: "Teško", HR: "Teško", EN: "Hard" },
};

const lines = (txt) => (txt || "").split("\n").map((l) => l.trim()).filter(Boolean);

// Skalira vodeći broj u retku (npr. "350 g cukera" ×2 → "700 g cukera")
const scaleLine = (line, f) =>
  line.replace(/^(\d+(?:[.,]\d+)?)/, (m) => {
    const n = parseFloat(m.replace(",", ".")) * f;
    const r = Math.round(n * 10) / 10;
    return Number.isInteger(r) ? String(r) : r.toFixed(1).replace(".", ",");
  });

export default function IstarskiRecepti({ t, lang = "IST" }) {
  const [recepti, setRecepti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [porcije, setPorcije] = useState({});
  const [cooking, setCooking] = useState(false);
  const wakeLockRef = useRef(null);

  const rt = t?.recepti || {};
  const L = lang.toLowerCase();

  useEffect(() => {
    const start = Date.now();
    const MIN_LOADER = 500; // loader traje najmanje pola sekunde — nema treptaja

    fetch(`${API_BASE}/${CPT_SLUG}?_embed&per_page=12`)
      .then((res) => { if (!res.ok) throw new Error("API"); return res.json(); })
      .then((data) => {
        const wait = Math.max(0, MIN_LOADER - (Date.now() - start));
        setTimeout(() => { setRecepti(data); setLoading(false); }, wait);
      })
      .catch(() => {
        const wait = Math.max(0, MIN_LOADER - (Date.now() - start));
        setTimeout(() => { setError(true); setLoading(false); }, wait);
      });
  }, []);

  // "Ne gasi ekran" — Wake Lock API
  useEffect(() => {
    const request = async () => {
      try {
        wakeLockRef.current = await navigator.wakeLock.request("screen");
      } catch { setCooking(false); }
    };
    if (cooking && "wakeLock" in navigator) {
      request();
      const onVis = () => { if (cooking && document.visibilityState === "visible") request(); };
      document.addEventListener("visibilitychange", onVis);
      return () => {
        document.removeEventListener("visibilitychange", onVis);
        wakeLockRef.current?.release();
      };
    }
    wakeLockRef.current?.release();
  }, [cooking]);

  const getImage = (r) =>
    r.acf?.slika_recepta ||
    r._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=80";

  const handlePrint = (title, meta, sastojci, priprema) => {
    const w = window.open("", "_blank");
    w.document.write(`<html><head><title>${title}</title><style>
      body{font-family:Georgia,serif;max-width:640px;margin:2rem auto;color:#222;line-height:1.6}
      h1{border-bottom:2px solid #C9A84C;padding-bottom:.4rem}
      h3{color:#8a6d1f;text-transform:uppercase;font-size:.85rem;letter-spacing:.1em}
      .meta{color:#666;font-size:.9rem}
      li{margin-bottom:.25rem}.sub{font-weight:bold;list-style:none;margin-left:-1.2rem;margin-top:.6rem}
    </style></head><body>
      <h1>${title}</h1><p class="meta">${meta}</p>
      <h3>${rt.labelIng || "Sastojci"}</h3><ul>${sastojci
        .map((s) => s.endsWith(":") ? `<li class="sub">${s}</li>` : `<li>${s}</li>`).join("")}</ul>
      <h3>${rt.labelSteps || "Priprema"}</h3><ol>${priprema.map((p) => `<li>${p}</li>`).join("")}</ol>
    </body></html>`);
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{rt.title || "Istrijanski recepti"}</p>
          <h1>{rt.subtitle || "Kuhajmo zajedno"}</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container">
          {openId !== null && (
            <button type="button" className="recepti-back-btn" onClick={() => setOpenId(null)}>
              ← {rt.labelBack || "Natrag na sve recepte"}
            </button>
          )}

          {loading && (
            <div className="recepti-loader">
              <div className="pot">
                <span className="steam"></span>
                <span className="steam"></span>
                <span className="steam"></span>
                <div className="pot-lid"></div>
                <div className="pot-body"></div>
              </div>
              <p>{rt.loading || "Maneštra se kuha..."}</p>
            </div>
          )}

          {!loading && error && (
            <p style={{ color: "var(--text-muted)", fontStyle: "italic", textAlign: "center" }}>
              {rt.error || "Recepti trenutno nisu dostupni. Pokušajte kasnije."}
            </p>
          )}

          {!loading && !error && (
          <div className="row g-4">
            {recepti.map((r, i) => {
              const acf = r.acf || {};
              const base = parseInt(acf.porcije) || 4;
              const cur = porcije[r.id] ?? base;
              const factor = cur / base;
              const step = base >= 20 ? 5 : 1;

              const opis = acf[`opis_${L}`] || acf.opis_ist || "";
              const sastojci = lines(acf[`sastojci_${L}`] || acf.sastojci_ist)
                .map((s) => (s.endsWith(":") ? s : scaleLine(s, factor)));
              const priprema = lines(acf[`priprema_${L}`] || acf.priprema_ist);
              const tezinaKey = acf.tezina ? acf.tezina.charAt(0).toUpperCase() + acf.tezina.slice(1).toLowerCase() : "";
              const tezina = DIFF_MAP[tezinaKey]?.[lang] || acf.tezina || "";
              const open = openId === r.id;
              const title = r.title.rendered.replace(/<[^>]+>/g, "");
              const anyOpen = openId !== null;

              // Kad je jedan recept otvoren, ostali se sakriju, a otvoreni ide na punu širinu
              const colClass = !anyOpen ? "col-12 col-md-6" : (open ? "col-12" : "d-none");

              return (
                <div key={r.id} className={colClass}>
                  <div className="recept-card" style={{ animationDelay: `${i * 0.12}s` }}>
                    <img src={getImage(r)} alt={title} />
                    <div className="recept-card-body">
                      <h3 dangerouslySetInnerHTML={{ __html: r.title.rendered }} />
                      <p className="recept-desc">{opis}</p>

                      <div className="recept-meta">
                        {acf.vrijeme && <span><FontAwesomeIcon icon={faClock} />{acf.vrijeme}</span>}
                        {tezina && <span><FontAwesomeIcon icon={faGaugeHigh} />{tezina}</span>}
                      </div>

                      <div className="d-flex align-items-center gap-2 flex-wrap" style={{ marginTop: "0.75rem" }}>
                        <button type="button" className={`recept-toggle ${open ? "open" : ""}`} style={{ marginTop: 0 }}
                          onClick={() => setOpenId(open ? null : r.id)}>
                          {rt.labelIng || "Sastojci"} <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <button type="button" className="recept-toggle" style={{ marginTop: 0 }}
                          onClick={() => handlePrint(title, `${acf.vrijeme || ""} · ${tezina} · ${cur} ${rt.labelServings || "porcija"}`, sastojci, priprema)}>
                          <FontAwesomeIcon icon={faPrint} /> Print
                        </button>
                      </div>

                      {open && (
                        <div className="recept-details">

                          <button
                            type="button"
                            className={`recept-toggle wake-btn ${cooking ? "cooking" : ""}`}
                            style={{ marginTop: 0, marginBottom: "1.25rem" }}
                            onClick={() => setCooking(!cooking)}
                            title="Drži ekran upaljen dok kuhaš"
                          >
                            <FontAwesomeIcon icon={faMobileScreenButton} />{" "}
                            {cooking ? (rt.cookingOn || "Ekran ostaje upaljen ✓") : (rt.cookingOff || "Ne gasi ekran, kuham")}
                          </button>

                          {acf.porcije && (
                            <div className="porcije-control">
                              <span><FontAwesomeIcon icon={faUsers} /> {rt.labelServings || "Porcije"}</span>
                              <button type="button"
                                onClick={() => setPorcije((p) => ({ ...p, [r.id]: Math.max(1, cur - step) }))}>
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <strong>{cur}</strong>
                              <button type="button"
                                onClick={() => setPorcije((p) => ({ ...p, [r.id]: cur + step }))}>
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                          )}

                          {sastojci.length > 0 && (
                            <>
                              <h5><FontAwesomeIcon icon={faCarrot} />{rt.labelIng || "Sastojci"}</h5>
                              <ul>
                                {sastojci.map((s, si) =>
                                  s.endsWith(":") ? (
                                    <li key={si} className="sastojci-sub">{s.slice(0, -1)}</li>
                                  ) : (
                                    <li key={si}>{s}</li>
                                  )
                                )}
                              </ul>
                            </>
                          )}

                          {priprema.length > 0 && (
                            <>
                              <h5><FontAwesomeIcon icon={faUtensils} />{rt.labelSteps || "Priprema"}</h5>
                              <ol>{priprema.map((p, pi) => <li key={pi}>{p}</li>)}</ol>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      </section>
    </>
  );
}