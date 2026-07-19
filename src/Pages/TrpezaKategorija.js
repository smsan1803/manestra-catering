export default function TrpezaKategorija({ catKey, t, navigate }) {
  const nt = t.nasaTrpeza;
  const naslov = nt.sekcije?.[catKey] || "";
  const podnaslov = {
    predjela: nt.cat1sub,
    glavna: nt.cat2sub,
    deserti: nt.cat3sub,
    pijaca: nt.cat4sub,
  }[catKey];

  // Podstranica prikazuje SVA jela kategorije (izdvojena + ostala)
  const stavke = nt.meni?.[catKey] || [];

  const sveKategorije = [
    { key: "predjela", page: "trpeza-predjela" },
    { key: "glavna",   page: "trpeza-glavna" },
    { key: "deserti",  page: "trpeza-deserti" },
    { key: "pijaca",   page: "trpeza-pijaca" },
  ];
  const ostale = sveKategorije.filter((k) => k.key !== catKey);

  return (
    <>
      <div className="page-header">
        <div className="container text-center">
          <p className="eyebrow">{nt.eyebrow}</p>
          <h1>{naslov}</h1>
          <div className="section-divider centered"></div>
          <p style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif", fontSize: "0.92rem", fontStyle: "italic" }}>
            {podnaslov}
          </p>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container">
          <div className="gmenu-section gmenu-karta">
            {stavke.map((jelo, i) => (
              <div key={i} className="gmenu-item" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="gmenu-item-head">
                  <h5>{jelo.name}</h5>
                  <div className="gmenu-dots"></div>
                  <span className="gmenu-price">{nt.naUpit}</span>
                </div>
                <p>{jelo.desc}</p>
              </div>
            ))}
          </div>

          <p className="gmenu-end">✦ ✦ ✦</p>

          <div className="trpeza-ostale">
            {ostale.map((k) => (
              <button key={k.key} className="trpeza-ostale-link" onClick={() => navigate(k.page)}>
                {nt.sekcije[k.key]} →
              </button>
            ))}
          </div>

          <p className="menu-note">{nt.note}</p>
          <div className="text-center mb-5" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-outline-gold" onClick={() => navigate("nasa-trpeza")}>
              ← {nt.eyebrow}
            </button>
            <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
              {nt.btnPonuda}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}