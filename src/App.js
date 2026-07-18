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
import translations from "./Translations";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("IST");
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const navigate = (page) => {
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
      case "politika":         return <PravnaStranica slug="pravila-privatnosti" lang={lang} />;
      case "kolacici":         return <PravnaStranica slug="kolacici" lang={lang} />;
      default:                 return <Home navigate={navigate} t={t} />;
    }
  };

  return (
    <div>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "1px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 20%, #C9A84C 50%, rgba(201,168,76,0.4) 80%, transparent 100%)",
          boxShadow: "0 0 8px rgba(201,168,76,0.6), 0 0 20px rgba(201,168,76,0.3)",
          zIndex: 9999,
          transition: "width 0.9s ease",
        }}
      />
      <Navbar currentPage={currentPage} navigate={navigate} lang={lang} setLang={setLang} t={t} />
      {renderPage()}
      <Footer navigate={navigate} t={t} lang={lang} />
      <CookieBanner lang={lang} navigate={navigate} />
    </div>
  );
}