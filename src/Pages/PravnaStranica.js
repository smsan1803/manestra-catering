import { useState, useEffect } from "react";

const API_BASE = "http://localhost:8080/wordpress/wp-json/wp/v2";

const lines = (txt) => (txt || "").split("\n").map((l) => l.trim()).filter(Boolean);

export default function PravnaStranica({ slug, lang = "IST" }) {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(false);
  const L = lang.toLowerCase();

  useEffect(() => {
    setPage(null);
    setError(false);
    fetch(`${API_BASE}/pages?slug=${slug}`)
      .then((res) => { if (!res.ok) throw new Error("API"); return res.json(); })
      .then((data) => { if (!data.length) throw new Error("empty"); setPage(data[0]); })
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="page-header"><div className="container">
        <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Sadržaj trenutno nije dostupan.</p>
      </div></div>
    );
  }
  if (!page) {
    return (
      <div className="page-header"><div className="container">
        <p style={{ color: "var(--text-muted)" }}>...</p>
      </div></div>
    );
  }

  const acf = page.acf || {};
  const content = lines(acf[`sadrzaj_${L}`] || acf.sadrzaj_ist);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div className="section-divider"></div>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container" style={{ maxWidth: 820 }}>
          {content.map((line, i) =>
            line.endsWith(":") ? (
              <h5 key={i} className="pravna-sub">{line.slice(0, -1)}</h5>
            ) : (
              <p key={i} className="pravna-p">{line}</p>
            )
          )}
        </div>
      </section>
    </>
  );
}