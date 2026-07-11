import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ navigate, t }) {
  // Sigurnosni korak: ako t nije proslijeđen kako treba, aplikacija se neće srušiti
  const activeT = t?.nav ? t : (t?.HR || t?.IST || {});

  const navItems = [
    { label: activeT.nav?.doma || "Početna",       page: "home" },
    { label: activeT.nav?.kiSmoMi || "O nama",    page: "ki-smo-mi" },
    { label: activeT.nav?.caNudimo || "Usluge",   page: "ca-nudimo" },
    { label: activeT.nav?.nasaTrpeza || "Jelovnik", page: "nasa-trpeza" },
    { label: activeT.nav?.kontakt || "Kontakt",    page: "kontakt" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4 mb-md-0">
            <h4>Maneštra Catering</h4>
            <p>{activeT.footer?.desc || ""}</p>
            <div className="footer-social">
              <button className="footer-social-btn" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button className="footer-social-btn" title="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h4>{activeT.footer?.navTitle || "Navigacija"}</h4>
            {navItems.map((item) => (
              <button key={item.page} className="footer-link-btn border-0 bg-transparent" onClick={() => navigate(item.page)}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="col-md-4">
            <h4>{activeT.footer?.kontaktTitle || "Kontakt"}</h4>
            <p className="mb-1">info@manestra-catering.hr</p>
            <p className="mb-1">+385 91 123 4567</p>
            <p>Istra, Hrvatska</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>{activeT.footer?.copyright || "© 2026 Izradila Sandra. Sva prava pridržana."}</p>
        </div>
      </div>
    </footer>
  );
}