import { useState } from "react";

export default function NasaTrpeza({ navigate, t }) {
  const [openRecipe, setOpenRecipe] = useState(null);

  const categories = [
    { label: t.nasaTrpeza.cat1, sub: t.nasaTrpeza.cat1sub, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" },
    { label: t.nasaTrpeza.cat2, sub: t.nasaTrpeza.cat2sub, img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80" },
    { label: t.nasaTrpeza.cat3, sub: t.nasaTrpeza.cat3sub, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80" },
    { label: t.nasaTrpeza.cat4, sub: t.nasaTrpeza.cat4sub, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80" },
  ];

  const menuSections = [
    {
      title: t.nasaTrpeza.sec1,
      items: [
        { name: "Istarski pijat Lepše",  desc: "Domaći pršut, istarski sir (kozi i ovčji), pašteta od tartufa, domaće kobasice." },
        { name: "Tartufata na kruhu",    desc: "Svježi kruh s namazom od crnog tartufa i maslinovim uljem." },
        { name: "Carpaccio od tune",     desc: "Tanko narezana tuna, kapari, maslinovo ulje, limun i svježe začinsko bilje." },
        { name: "Bruschette Lepše",      desc: "Prepečeni kruh s rajčicom, bosiljkom i ekstra djevičanskim maslinovim uljem." },
      ],
    },
    {
      title: t.nasaTrpeza.sec2,
      items: [
        { name: "Fuži s tartufima",       desc: "Domaći fuži priprani s crnim istarskim tartufom u elegantnom umaku." },
        { name: "Pljukanci s bolonjezom", desc: "Ručno valjani pljukanci s domaćim mesom i rajčicom." },
        { name: "Janjetina ispod peke",   desc: "Sočna janjetina s povrćem, pripremana na tradicionalan istarski način." },
        { name: "Riba na žaru",           desc: "Svježa jadranska riba s maslinovim uljem i mediteranskim začinima." },
      ],
    },
    {
      title: t.nasaTrpeza.sec3,
      items: [
        { name: "Fritule",                      desc: "Tradicionalni istarski kolačići s aromom rakije i limunom." },
        { name: "Kroštule",                     desc: "Hrskave pečene kroštule, posute šećerom u prahu." },
        { name: "Malvazija istarska",           desc: "Suho bijelo vino karakteristično za Istarski poluotok." },
        { name: "Domaća rakija (biska/medica)", desc: "Tradicionalna istarska rakija od imele ili meda." },
      ],
    },
  ];

  const recepti = [
    {
      key: "r1",
      title: t.recepti.r1title,
      time: t.recepti.r1time,
      diff: t.recepti.r1diff,
      desc: t.recepti.r1desc,
      ing: t.recepti.r1ing,
      steps: t.recepti.r1steps,
      img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80",
    },
    {
      key: "r2",
      title: t.recepti.r2title,
      time: t.recepti.r2time,
      diff: t.recepti.r2diff,
      desc: t.recepti.r2desc,
      ing: t.recepti.r2ing,
      steps: t.recepti.r2steps,
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    },
    {
      key: "r3",
      title: t.recepti.r3title,
      time: t.recepti.r3time,
      diff: t.recepti.r3diff,
      desc: t.recepti.r3desc,
      ing: t.recepti.r3ing,
      steps: t.recepti.r3steps,
      img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    },
    {
      key: "r4",
      title: t.recepti.r4title,
      time: t.recepti.r4time,
      diff: t.recepti.r4diff,
      desc: t.recepti.r4desc,
      ing: t.recepti.r4ing,
      steps: t.recepti.r4steps,
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
    },
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{t.nasaTrpeza.eyebrow}</p>
          <h1>{t.nasaTrpeza.pageTitle}</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      {/* CATEGORY PHOTOS */}
      <div className="section-dark" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="menu-categories">
            {categories.map((cat, i) => (
              <div key={i} className="menu-cat">
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

      {/* MENU LIST */}
      <section className="section-dark" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <h2 className="text-center mb-1 gold-text" style={{ fontSize: "2rem" }}>
            {t.nasaTrpeza.izdvojenoTitle}
          </h2>
          <div className="section-divider centered"></div>
          <div className="mt-4">
            {menuSections.map((section, si) => (
              <div key={si} className="mb-5">
                <p className="menu-section-title">{section.title}</p>
                <div className="row">
                  {section.items.map((item, ii) => (
                    <div key={ii} className="col-md-6">
                      <div className="menu-item">
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                        <span className="price-tag">{t.nasaTrpeza.naUpit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="menu-note">{t.nasaTrpeza.note}</p>
          <div className="text-center mb-5">
            <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
              {t.nasaTrpeza.btnPonuda}
            </button>
          </div>
        </div>
      </section>

      {/* ===== RECEPTI ===== */}
      <section className="section-alt" style={{ padding: "5rem 0" }}>
        <div className="container">
          <p className="eyebrow text-center">{t.recepti.subtitle}</p>
          <h2 className="text-center gold-text mb-1" style={{ fontSize: "2rem" }}>
            {t.recepti.title}
          </h2>
          <div className="section-divider centered"></div>

          <div className="row g-4 mt-3">
            {recepti.map((r) => (
              <div key={r.key} className="col-md-6">
                <div className="recept-card">

                  {/* Slika */}
                  <div className="recept-img-wrapper">
                    <img src={r.img} alt={r.title} />
                    <div className="recept-badges">
                      <span className="recept-badge">⏱ {r.time}</span>
                      <span className="recept-badge">★ {r.diff}</span>
                    </div>
                  </div>

                  {/* Tijelo */}
                  <div className="recept-body">
                    <h3>{r.title}</h3>
                    <p className="recept-desc">{r.desc}</p>

                    {/* Expand/collapse */}
                    <button
                      className="recept-toggle"
                      onClick={() => setOpenRecipe(openRecipe === r.key ? null : r.key)}
                    >
                      {openRecipe === r.key ? "▲" : "▼"}&nbsp;
                      {openRecipe === r.key ? t.recepti.labelSteps : t.recepti.labelIng + " & " + t.recepti.labelSteps}
                    </button>

                    {openRecipe === r.key && (
                      <div className="recept-detail">
                        <p className="recept-label">{t.recepti.labelIng}</p>
                        <ul className="recept-ing">
                          {r.ing.map((i, idx) => (
                            <li key={idx}>{i}</li>
                          ))}
                        </ul>
                        <p className="recept-label" style={{ marginTop: "1rem" }}>
                          {t.recepti.labelSteps}
                        </p>
                        <ol className="recept-steps">
                          {r.steps.map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}