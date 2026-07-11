export default function CaNudimo({ navigate, t }) {
  const services = [
    {
      number: t.caNudimo.s1number,
      title: t.caNudimo.s1title,
      desc1: t.caNudimo.s1desc1,
      desc2: t.caNudimo.s1desc2,
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80",
      imgLeft: true,
    },
    {
      number: t.caNudimo.s2number,
      title: t.caNudimo.s2title,
      desc1: t.caNudimo.s2desc1,
      desc2: t.caNudimo.s2desc2,
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
      imgLeft: false,
    },
    {
      number: t.caNudimo.s3number,
      title: t.caNudimo.s3title,
      desc1: t.caNudimo.s3desc1,
      desc2: "",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=700&q=80",
      imgLeft: true,
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{t.caNudimo.eyebrow}</p>
          <h1>{t.caNudimo.pageTitle}</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container">
          {services.map((s, i) => (
            <div key={i} className="service-row">
              <div className="row align-items-center g-5">
                {s.imgLeft ? (
                  <>
                    <div className="col-md-5">
                      <div className="img-wrapper">
                        <img src={s.img} alt={s.title} />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <p className="service-number">{s.number}</p>
                      <h3>{s.title}</h3>
                      <div className="section-divider"></div>
                      <p>{s.desc1}</p>
                      {s.desc2 && <p>{s.desc2}</p>}
                      <button className="btn-outline-gold" onClick={() => navigate("kontakt")}>
                        {t.caNudimo.btnPonuda}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-7">
                      <p className="service-number">{s.number}</p>
                      <h3>{s.title}</h3>
                      <div className="section-divider"></div>
                      <p>{s.desc1}</p>
                      {s.desc2 && <p>{s.desc2}</p>}
                      <button className="btn-outline-gold" onClick={() => navigate("kontakt")}>
                        {t.caNudimo.btnPonuda}
                      </button>
                    </div>
                    <div className="col-md-5">
                      <div className="img-wrapper">
                        <img src={s.img} alt={s.title} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          <div className="text-center mt-5">
            <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
              {t.caNudimo.btnIndividualna}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}