import { useState, useEffect } from "react";
import slide1 from "../assets/images/vino_pogled.png";
import slide2 from "../assets/images/tartufi.jpg";
import slide3 from "../assets/images/istarska_supa.jpg";
import slide4 from "../assets/images/kobasice_kanica_na_grdelah.png";
import slide5 from "../assets/images/kamena_kuca_tradicija.jpg";
import kuhanjeImg from "../assets/images/kuhanje.jpeg";

const heroSlides = [
  { img: slide1, alt: "Vino-pogled" },
  { img: slide2, alt: "Tartufi" },
  { img: slide3, alt: "Istarska supa" },
  { img: slide4, alt: "Kobasice kanica" },
  { img: slide5, alt: "Kamena kuća tradicija" },
];

export default function Home({ navigate, t }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 700);
    setCurrent(index);
  };

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  return (
    <>
      {/* ===== HERO SLIDER ===== */}
      <section className="hero-slider">

        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1 className={`hero-title ${animating ? "fade-out" : "fade-in"}`}>
                  {t.hero.title}
                </h1>
                <h2 className={`hero-subtitle ${animating ? "fade-out" : "fade-in"}`}>
                  {t.hero.subtitle}
                </h2>
                <p className={`hero-desc ${animating ? "fade-out" : "fade-in"}`}>
                  {t.hero.desc}
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
                    {t.hero.btnPonuda}
                  </button>
                  <button className="btn-outline-gold" onClick={() => navigate("ca-nudimo")}>
                    {t.hero.btnNudimo}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="slider-arrow slider-prev" onClick={prev}>&#8249;</button>
        <button className="slider-arrow slider-next" onClick={next}>&#8250;</button>

        <div className="slider-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="slider-progress">
          <div key={current} className="slider-progress-bar" />
        </div>

      </section>


      {/* ===== ČA NUDIMO ===== */}
      <section className="section-pad section-dark">
        <div className="container">
          <h2 className="text-center gold-text mb-1" style={{ fontSize: "2.1rem" }}>
            {t.home.caNudimoTitle}
          </h2>
          <div className="section-divider centered"></div>

          <div className="row g-4 mt-2">
            {[
              {
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
                title: t.home.zenidbeTitle,
                desc: t.home.zenidbeDesc,
              },
              {
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
                title: t.home.domjenkiTitle,
                desc: t.home.domjenkiDesc,
              },
              {
                img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80",
                title: t.home.festeTitle,
                desc: t.home.festeDesc,
              },
            ].map((card, i) => (
              <div className="col-md-4" key={i}>
                <div className="uiverse-card">
                  <div className="uiverse-card-content">
                    <img src={card.img} alt={card.title} />
                    <div className="uiverse-card-body">
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                      <button
                        className="btn-outline-gold"
                        onClick={() => navigate("ca-nudimo")}
                      >
                        {t.home.btnMore}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NAŠA ŠTORIJA ===== */}
      <section className="section-pad section-alt">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-md-5">
              <div className="story-img-wrapper">
                <img
                  src={kuhanjeImg}
                  alt="Kuhinja"
                />
              </div>
            </div>

            <div className="col-md-7">
              <p className="eyebrow">{t.home.storijaEyebrow}</p>
              <h2 className="gold-text" style={{ fontSize: "2.4rem", marginBottom: "0.4rem" }}>
                {t.home.storijaTitle}
              </h2>
              <div className="section-divider"></div>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>
                {t.home.storijaDesc}
              </p>
              <button className="btn-outline-gold" onClick={() => navigate("ki-smo-mi")}>
                {t.home.btnKiSmoMi}
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}