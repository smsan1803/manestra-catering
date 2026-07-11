import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faUtensils, faStar } from "@fortawesome/free-solid-svg-icons";

export default function KiSmoMi({ navigate, t }) {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{t.kiSmoMi.eyebrow}</p>
          <h1>{t.kiSmoMi.pageTitle}</h1>
          <div className="section-divider"></div>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-md-6">
              <h2 style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.55rem",
                fontStyle: "italic",
                color: "var(--gold)",
                marginBottom: "1.5rem",
                lineHeight: 1.55,
              }}>
                {t.kiSmoMi.quote}
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem", fontSize: "0.92rem" }}>
                {t.kiSmoMi.p1}
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.92rem" }}>
                {t.kiSmoMi.p2}
              </p>
              <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
                {t.kiSmoMi.btnKontakt}
              </button>
            </div>

            <div className="col-md-6">
              <div className="story-img-wrapper sm">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
                  alt="Kuhinja"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="container">
          <h2 className="text-center mb-1 gold-text" style={{ fontSize: "2rem" }}>
            {t.kiSmoMi.vrijednostiTitle}
          </h2>
          <div className="section-divider centered"></div>

          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="value-card-modern">
                <div className="value-icon-circle">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h3>{t.kiSmoMi.v1title}</h3>
                <p>{t.kiSmoMi.v1desc}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card-modern">
                <div className="value-icon-circle">
                  <FontAwesomeIcon icon={faUtensils} />
                </div>
                <h3>{t.kiSmoMi.v2title}</h3>
                <p>{t.kiSmoMi.v2desc}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card-modern">
                <div className="value-icon-circle">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h3>{t.kiSmoMi.v3title}</h3>
                <p>{t.kiSmoMi.v3desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}