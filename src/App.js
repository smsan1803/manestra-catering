import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CookieBanner from "./Components/CookieBanner";
import Home from "./Pages/Home";
import KiSmoMi from "./Pages/KiSmoMi";
import CaNudimo from "./Pages/CaNudimo";
import NasaTrpeza from "./Pages/NasaTrpeza";
import Kontakt from "./Pages/Kontakt";
import IstarskiRecepti from "./Pages/IstarskiRecepti";
import PravnaStranica from "./Pages/PravnaStranica";
import TrpezaKategorija from "./Pages/TrpezaKategorija";
import translations from "./Translations";

export default function App() {
  // početna stranica iz URL hasha (npr. localhost:3000/#trpeza-glavna)
  const [currentPage, setCurrentPage] = useState(
    window.location.hash.replace("#", "") || "home"
  );
  const [lang, setLang] = useState("IST");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const t = translations[lang] || translations.IST;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // back/forward u pregledniku
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(window.location.hash.replace("#", "") || "home");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (page) => {
    window.location.hash = page === "home" ? "" : page;
    setCurrentPage(page);
    window.scrollTo(0, 0);
    setScrollProgress(0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "ki-smo-mi":        return <KiSmoMi navigate={navigate} t={t} />;
      case "ca-nudimo":        return <CaNudimo navigate={navigate} t={t} />;
      case "nasa-trpeza":      return <NasaTrpeza navigate={navigate} t={t} />;
      case "kontakt":          return <Kontakt t={t} />;
      case "istarski-recepti": return <IstarskiRecepti t={t} lang={lang} />;
      case "politika":         return <PravnaStranica slug="politika-privatnosti" lang={lang} />;
      case "kolacici":         return <PravnaStranica slug="kolacici" lang={lang} />;
      case "trpeza-predjela":  return <TrpezaKategorija catKey="predjela" t={t} navigate={navigate} />;
      case "trpeza-glavna":    return <TrpezaKategorija catKey="glavna"   t={t} navigate={navigate} />;
      case "trpeza-deserti":   return <TrpezaKategorija catKey="deserti"  t={t} navigate={navigate} />;
      case "trpeza-pijaca":    return <TrpezaKategorija catKey="pijaca"   t={t} navigate={navigate} />;
      default:                 return <Home navigate={navigate} t={t} />;
    }
  };

  return (
    <div className={`theme-${theme}`}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "5px",
          width: `${scrollProgress}%`,
          background: "var(--gold)",
          zIndex: 9999,
          transition: "width 0.3s ease-out",
        }}
      />
      <Navbar currentPage={currentPage} navigate={navigate} lang={lang} setLang={setLang} t={t} theme={theme} toggleTheme={toggleTheme} />
      {renderPage()}
      <Footer navigate={navigate} t={t} lang={lang} />
      <CookieBanner lang={lang} navigate={navigate} />
    </div>
  );
}