import { useState } from "react";

const FORM_ID = 878;
const CF7_URL = `https://front3.edukacija.online/backend/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;

export default function Kontakt({ t }) {
  const kt = t?.kontakt || {};

  const [form, setForm] = useState({
    ime: "", email: "", telefon: "",
    vrstaEventa: "", datum: "", brGostiju: "", poruka: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg("");

    const data = new FormData();
    data.append("_wpcf7_unit_tag", `wpcf7-f${FORM_ID}-react`);
    data.append("ime", form.ime);
    data.append("email", form.email);
    data.append("telefon", form.telefon);
    data.append("vrsta", form.vrstaEventa || (kt.vrstaOptions?.[0] ?? ""));
    data.append("datum", form.datum);
    data.append("gosti", form.brGostiju);
    data.append("poruka", form.poruka);

    try {
      const res = await fetch(CF7_URL, { method: "POST", body: data });
      const json = await res.json();

      if (json.status === "mail_sent" || json.status === "mail_failed") {
        // mail_failed = upit JE spremljen (Flamingo), samo lokalni server ne šalje e-mail
        setSent(true);
      } else if (json.status === "validation_failed") {
        setErrorMsg(json.message || "Provjerite unesene podatke.");
      } else {
        setErrorMsg("Došlo je do greške. Pokušajte ponovno.");
      }
    } catch {
      setErrorMsg("Nije moguće poslati upit. Provjerite je li server pokrenut.");
    }
    setSending(false);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="eyebrow">{kt.eyebrow || "Kontakt"}</p>
          <h1>{kt.pageTitle || "Kontaktirajte nas"}</h1>
          <div className="section-divider"></div>
          <p style={{ color: "var(--text-muted)", maxWidth: 430, fontSize: "0.92rem", fontFamily: "Inter, sans-serif" }}>
            {kt.pageDesc || ""}
          </p>
        </div>
      </div>

      <section className="section-pad section-dark">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* KONTAKT INFO */}
            <div className="col-md-4">
              <div className="contact-info-card">
                <h3>{kt.infoTitle || "Kontakt podaci"}</h3>
                <div className="contact-detail">
                  <p className="clabel">{kt.labelEmail || "E-mail"}</p>
                  <p className="cvalue">
                    <a href="mailto:info@manestra-catering.hr">info@manestra-catering.hr</a>
                  </p>
                </div>
                <div className="contact-detail">
                  <p className="clabel">{kt.labelTel || "Telefon"}</p>
                  <p className="cvalue">+385 91 123 4567</p>
                </div>
                <div className="contact-detail">
                  <p className="clabel">{kt.labelAdresa || "Adresa"}</p>
                  <p className="cvalue">Istra, Hrvatska</p>
                </div>
                <div className="contact-detail">
                  <p className="clabel">{kt.labelRadno || "Radno vrijeme"}</p>
                  <p className="cvalue">
                    {kt.radnoTjed || "Pon – Pet: 9:00 – 18:00"}<br />
                    {kt.radnoSub || "Subota: 10:00 – 14:00"}
                  </p>
                </div>
              </div>
            </div>

            {/* FORMA */}
            <div className="col-md-8">
              <div className="form-card">
                <h3>{kt.formTitle || "Pošaljite upit"}</h3>

                {sent ? (
                  <div className="text-center py-5" style={{ color: "var(--gold)" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                    <h4 style={{ color: "var(--gold)", fontFamily: "Playfair Display, serif" }}>
                      {kt.sentTitle || "Upit je poslan!"}
                    </h4>
                    <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>
                      {kt.sentDesc || "Javit ćemo vam se u najkraćem mogućem roku."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">

                      <div className="col-md-6">
                        <label className="form-label-custom">{kt.labelIme || "Ime i prezime / Tvrtka"}</label>
                        <input type="text" name="ime" className="form-control-custom"
                          placeholder={kt.placeholderIme || "Vaše ime"} value={form.ime} onChange={handleChange} required />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label-custom">{kt.labelEmailForm || "E-mail adresa"}</label>
                        <input type="email" name="email" className="form-control-custom"
                          placeholder={kt.placeholderEmail || "vas@email.hr"} value={form.email} onChange={handleChange} required />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label-custom">{kt.labelTelForm || "Telefon"}</label>
                        <input type="tel" name="telefon" className="form-control-custom"
                          placeholder={kt.placeholderTel || "+385 91 ..."} value={form.telefon} onChange={handleChange} />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label-custom">{kt.labelVrsta || "Vrsta događaja"}</label>
                        <select name="vrstaEventa" className="form-control-custom" value={form.vrstaEventa} onChange={handleChange}>
                          {(kt.vrstaOptions || ["Vjenčanje", "Poslovni domjenak", "Fešta / svečanost", "Krštenje", "Obljetnica", "Ostalo"])
                            .map((opt) => <option key={opt}>{opt}</option>)}
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label-custom">{kt.labelDatum || "Planirani datum"}</label>
                        <input type="date" name="datum" className="form-control-custom" value={form.datum} onChange={handleChange} />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label-custom">{kt.labelGosti || "Broj gostiju"}</label>
                        <input type="number" name="brGostiju" className="form-control-custom"
                          placeholder={kt.placeholderGosti || "npr. 80"} value={form.brGostiju} onChange={handleChange} />
                      </div>

                      <div className="col-12">
                        <label className="form-label-custom">{kt.labelPoruka || "Vaša poruka / želje"}</label>
                        <textarea name="poruka" className="form-control-custom"
                          placeholder={kt.placeholderPoruka || "Opišite vaš event..."} value={form.poruka} onChange={handleChange} />
                      </div>

                      {errorMsg && (
                        <div className="col-12">
                          <p style={{ color: "#d9756b", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", margin: 0 }}>
                            {errorMsg}
                          </p>
                        </div>
                      )}

                      <div className="col-12 text-end">
                        <button type="submit" className="btn-gold" disabled={sending} style={{ opacity: sending ? 0.6 : 1 }}>
                          {sending ? "..." : (kt.btnSalji || "Pošalji upit")}
                        </button>
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