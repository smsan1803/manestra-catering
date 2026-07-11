import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Kontakt({ t }) {
  const [form, setForm] = useState({
    ime: "", email: "", telefon: "",
    vrstaEventa: "", datum: "", brGostiju: "", poruka: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{t.kontakt.eyebrow}</p>
          <h1>{t.kontakt.pageTitle}</h1>
          <div className="section-divider"></div>
          <p style={{ color: "var(--text-muted)", maxWidth: 430, fontSize: "0.92rem", fontFamily: "Inter, sans-serif" }}>
            {t.kontakt.pageDesc}
          </p>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="contact-info-card">
                <h3>{t.kontakt.infoTitle}</h3>

                <div className="contact-icon-row">
                  <div className="contact-icon-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="clabel">{t.kontakt.labelEmail}</p>
                    <p className="cvalue">info@manestra-catering.hr</p>
                  </div>
                </div>

                <div className="contact-icon-row">
                  <div className="contact-icon-box">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className="clabel">{t.kontakt.labelTel}</p>
                    <p className="cvalue">+385 91 123 4567</p>
                  </div>
                </div>

                <div className="contact-icon-row">
                  <div className="contact-icon-box">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <p className="clabel">{t.kontakt.labelAdresa}</p>
                    <p className="cvalue">Istra, Hrvatska</p>
                  </div>
                </div>

                <div className="contact-icon-row">
                  <div className="contact-icon-box">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div>
                    <p className="clabel">{t.kontakt.labelRadno}</p>
                    <p className="cvalue">
                      {t.kontakt.radnoTjed}<br />{t.kontakt.radnoSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="form-card">
                <h3>{t.kontakt.formTitle}</h3>
                {sent ? (
                  <div className="text-center py-5" style={{ color: "var(--gold)" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                    <h4 style={{ color: "var(--gold)", fontFamily: "Playfair Display, serif" }}>
                      {t.kontakt.sentTitle}
                    </h4>
                    <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                      {t.kontakt.sentDesc}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label-custom">{t.kontakt.labelIme}</label>
                        <input type="text" name="ime" className="form-control-custom" placeholder={t.kontakt.placeholderIme} value={form.ime} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label-custom">{t.kontakt.labelEmailForm}</label>
                        <input type="email" name="email" className="form-control-custom" placeholder={t.kontakt.placeholderEmail} value={form.email} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label-custom">{t.kontakt.labelTelForm}</label>
                        <input type="tel" name="telefon" className="form-control-custom" placeholder={t.kontakt.placeholderTel} value={form.telefon} onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label-custom">{t.kontakt.labelVrsta}</label>
                        <select name="vrstaEventa" className="form-control-custom" value={form.vrstaEventa} onChange={handleChange}>
                          {t.kontakt.vrstaOptions.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label-custom">{t.kontakt.labelDatum}</label>
                        <input type="date" name="datum" className="form-control-custom" value={form.datum} onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label-custom">{t.kontakt.labelGosti}</label>
                        <input type="number" name="brGostiju" className="form-control-custom" placeholder={t.kontakt.placeholderGosti} value={form.brGostiju} onChange={handleChange} />
                      </div>
                      <div className="col-12">
                        <label className="form-label-custom">{t.kontakt.labelPoruka}</label>
                        <textarea name="poruka" className="form-control-custom" placeholder={t.kontakt.placeholderPoruka} value={form.poruka} onChange={handleChange} />
                      </div>
                      <div className="col-12 text-end">
                        <button type="submit" className="btn-gold-shine">{t.kontakt.btnSalji}</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}