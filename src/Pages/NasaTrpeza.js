import predjelo from "../assets/images/frita_z_sparugami.png";
import glavno from "../assets/images/fuzi_s_tartufima.png";
import desert from "../assets/images/istarske_pastine.jpg";
import pijaca from "../assets/images/bira_od_pira.jpeg";

export default function NasaTrpeza({ navigate, t }) {
  const nt = t.nasaTrpeza;

  const categories = [
    { label: nt.cat1, sub: nt.cat1sub, img: predjelo, page: "trpeza-predjela" },
    { label: nt.cat2, sub: nt.cat2sub, img: glavno,   page: "trpeza-glavna" },
    { label: nt.cat3, sub: nt.cat3sub, img: desert,   page: "trpeza-deserti" },
    { label: nt.cat4, sub: nt.cat4sub, img: pijaca,   page: "trpeza-pijaca" },
  ];

  // Na glavnoj trpezi samo jela s oznakom izdvojeno: true
  const menuSections = [
    { title: nt.sekcije.predjela, items: nt.meni.predjela.filter((j) => j.izdvojeno) },
    { title: nt.sekcije.glavna,   items: nt.meni.glavna.filter((j) => j.izdvojeno) },
    { title: nt.sekcije.deserti,  items: nt.meni.deserti.filter((j) => j.izdvojeno) },
    { title: nt.sekcije.pijaca,   items: nt.meni.pijaca.filter((j) => j.izdvojeno) },
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{nt.eyebrow}</p>
          <h1>{nt.pageTitle}</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      <div className="section-dark" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="menu-categories">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="menu-cat"
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(cat.page)}
                onKeyDown={(e) => { if (e.key === "Enter") navigate(cat.page); }}
              >
                <img src={cat.img} alt={cat.label} />
                <div className="menu-cat-label">
                  <h4>{cat.label}</h4>
                  <p>{cat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-dark" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <h2 className="text-center mb-1 gold-text" style={{ fontSize: "2rem" }}>
            {nt.izdvojenoTitle}
          </h2>
          <div className="section-divider centered"></div>

          <div className="mt-5">
            {menuSections.map((section, si) => (
              <div key={si} className="gmenu-section">
                <div className="gmenu-title">
                  <span>{section.title}</span>
                </div>
                {section.items.map((item, ii) => (
                  <div key={ii} className="gmenu-item">
                    <div className="gmenu-item-head">
                      <h5>{item.name}</h5>
                      <div className="gmenu-dots"></div>
                      <span className="gmenu-price">{nt.naUpit}</span>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="gmenu-end">✦ ✦ ✦</p>
          <p className="menu-note">{nt.note}</p>
          <div className="text-center mb-5">
            <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
              {nt.btnPonuda}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}