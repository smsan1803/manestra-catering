import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import logoIcon from "../assets/images/logo-full.png";

export default function Navbar({ currentPage, navigate, lang, setLang, t, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.doma,            page: "home" },
    { label: t.nav.kiSmoMi,         page: "ki-smo-mi" },
    { label: t.nav.caNudimo,        page: "ca-nudimo" },
    { label: t.nav.nasaTrpeza,      page: "nasa-trpeza" },
    { label: t.nav.istarskiRecepti, page: "istarski-recepti" },
    { label: t.nav.kontakt,         page: "kontakt" },
  ];

  const handleNavigate = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* Brand */}
          <button className="navbar-brand-btn" onClick={() => handleNavigate("home")}>
            <img
              src={logoIcon}
              alt="Maneštra Catering logo"
              className="navbar-logo-img"
            />
          </button>

          {/* Desktop nav */}
          <div className="desktop-nav d-flex align-items-center" style={{ gap: "0.25rem" }}>
            {navItems.map((item) => (
              <button
                key={item.page}
                className={`nav-link-btn ${currentPage === item.page ? "active" : ""}`}
                onClick={() => handleNavigate(item.page)}
              >
                {item.label}
              </button>
            ))}
            <div
              className="d-flex align-items-center"
              style={{
                borderLeft: "1px solid rgba(201,168,76,0.3)",
                marginLeft: "1rem",
                paddingLeft: "1rem",
              }}
            >
              {["IST", "HR", "EN"].map((l) => (
                <button
                  key={l}
                  className={`lang-btn ${lang === l ? "active" : ""}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                style={{ marginLeft: "0.75rem" }}
                aria-label="Promijeni temu"
                title="Promijeni temu"
              >
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
              </button>
            </div>
          </div>

          {/* Mobile: jezik + hamburger zajedno, jezik uvijek vidljiv */}
          <div className="mobile-top-controls d-flex align-items-center">
            <div className="mobile-lang-top">
              {["IST", "HR", "EN"].map((l) => (
                <button
                  key={l}
                  className={`lang-btn ${lang === l ? "active" : ""}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              className="theme-toggle-btn mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label="Promijeni temu"
              title="Promijeni temu"
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
            </button>

            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Izbornik"
            >
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={`mobile-nav-link ${currentPage === item.page ? "active" : ""}`}
                onClick={() => handleNavigate(item.page)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}