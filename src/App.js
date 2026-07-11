import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import KiSmoMi from "./Pages/KiSmoMi";
import CaNudimo from "./Pages/CaNudimo";
import NasaTrpeza from "./Pages/NasaTrpeza";
import Kontakt from "./Pages/Kontakt";
import translations from "./Translations";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("IST");

  const t = translations[lang];

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    // Prosljeđujemo točan jezik (npr. translations.HR ili translations.IST) ovisno o odabranom 'lang'
    switch (currentPage) {
      case "ki-smo-mi":   return <KiSmoMi navigate={navigate} t={translations[lang]} />;
      case "ca-nudimo":   return <CaNudimo navigate={navigate} t={translations[lang]} />;
      case "nasa-trpeza": return <NasaTrpeza navigate={navigate} t={translations[lang]} />;
      case "kontakt":     return <Kontakt t={translations[lang]} />;
      default:            return <Home navigate={navigate} t={translations[lang]} />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} navigate={navigate} lang={lang} setLang={setLang} t={translations[lang]} />
      {renderPage()}
      <Footer navigate={navigate} t={translations[lang]} lang={lang} />
    </div>
  );
}