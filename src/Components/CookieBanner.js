import { useState, useEffect } from "react";

const TEXTS = {
  IST: {
    text: "Ova stranica koristi samo nužne tehničke kolačiće potribne za rad stranice.",
    more: "Više o kolačići",
    accept: "Prihvati",
    decline: "Odbij",
  },
  HR: {
    text: "Ova stranica koristi samo nužne tehničke kolačiće potrebne za rad stranice.",
    more: "Više o kolačićima",
    accept: "Prihvati",
    decline: "Odbij",
  },
  EN: {
    text: "This site only uses essential technical cookies required for it to work.",
    more: "More about cookies",
    accept: "Accept",
    decline: "Decline",
  },
};

export default function CookieBanner({ lang = "IST", navigate }) {
  const [visible, setVisible] = useState(false);
  const txt = TEXTS[lang] || TEXTS.IST;

  useEffect(() => {
    if (!localStorage.getItem("cookieChoice")) setVisible(true);
  }, []);

  const choose = (choice) => {
    localStorage.setItem("cookieChoice", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        {txt.text}{" "}
        <button
          className="cookie-more"
          onClick={() => { navigate("kolacici"); }}
        >
          {txt.more}
        </button>
      </p>
      <div className="cookie-actions">
        <button className="btn-gold cookie-btn" onClick={() => choose("accepted")}>
          {txt.accept}
        </button>
        <button className="btn-outline-gold cookie-btn" onClick={() => choose("declined")}>
          {txt.decline}
        </button>
      </div>
    </div>
  );
}