import predjelo from "../assets/images/frita_z_sparugami.png";
import glavno from "../assets/images/fuzi_s_tartufima.png";
import desert from "../assets/images/istarske_pastine.jpg";
import pijaca from "../assets/images/bira_od_pira.jpeg";

export default function NasaTrpeza({ navigate, t }) {

  const categories = [
    { label: t.nasaTrpeza.cat1, sub: t.nasaTrpeza.cat1sub, img: predjelo },
    { label: t.nasaTrpeza.cat2, sub: t.nasaTrpeza.cat2sub, img: glavno },
    { label: t.nasaTrpeza.cat3, sub: t.nasaTrpeza.cat3sub, img: desert },
    { label: t.nasaTrpeza.cat4, sub: t.nasaTrpeza.cat4sub, img: pijaca },
  ];

    const menuSections = [
        {
            title: t.nasaTrpeza.sec1,
            items: [
                { name: "Istarski pijat Lepše", desc: "Domaći pršut, istarski sir (kozi i ovčji), pašteta od tartufa, domaće kobasice." },
                { name: "Tartufata na kruhu", desc: "Svježi kruh s namazom od crnog tartufa i maslinovim uljem." },
                { name: "Carpaccio od tune", desc: "Tanko narezana tuna, kapari, maslinovo ulje, limun i svježe začinsko bilje." },
                { name: "Bruschette Lepše", desc: "Prepečeni kruh s rajčicom, bosiljkom i ekstra djevičanskim maslinovim uljem." },
            ],
        },
        {
            title: t.nasaTrpeza.sec2,
            items: [
                { name: "Fuži s tartufima", desc: "Domaći fuži priprani s crnim istarskim tartufom u elegantnom umaku." },
                { name: "Pljukanci s bolonjezom", desc: "Ručno valjani pljukanci s domaćim mesom i rajčicom." },
                { name: "Janjetina ispod peke", desc: "Sočna janjetina s povrćem, pripremana na tradicionalan istarski način." },
                { name: "Riba na žaru", desc: "Svježa jadranska riba s maslinovim uljem i mediteranskim začinima." },
            ],
        },
        {
            title: t.nasaTrpeza.sec3,
            items: [
                { name: "Cukerančići", desc: "Tradicionalni istarski kolačići s aromom rakije i limunom." },
                { name: "Kroštule", desc: "Hrskave pečene kroštule, posute šećerom u prahu." },
                { name: "Malvazija istarska", desc: "Suho bijelo vino karakteristično za Istarski poluotok." },
                { name: "Domaća rakija (biska/medica)", desc: "Tradicionalna istarska rakija od imele ili meda." },
            ],
        },
    ];

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <p className="eyebrow">{t.nasaTrpeza.eyebrow}</p>
                    <h1>{t.nasaTrpeza.pageTitle}</h1>
                    <div className="section-divider"></div>
                </div>
            </div>

            <div className="section-dark" style={{ paddingTop: "3rem" }}>
                <div className="container">
                    <div className="menu-categories">
                        {categories.map((cat, i) => (
                            <div key={i} className="menu-cat">
                                <img src={cat.img} alt={cat.label} />
                                <div className="menu-cat-label">
                                    <h4>{cat.label}</h4>
                                    <p>{cat.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="section-dark" style={{ paddingBottom: "2rem" }}>
                <div className="container">
                    <h2 className="text-center mb-1 gold-text" style={{ fontSize: "2rem" }}>
                        {t.nasaTrpeza.izdvojenoTitle}
                    </h2>
                    <div className="section-divider centered"></div>
                    <div className="mt-4">
                        {menuSections.map((section, si) => (
                            <div key={si} className="mb-5">
                                <p className="menu-section-title">{section.title}</p>
                                <div className="row">
                                    {section.items.map((item, ii) => (
                                        <div key={ii} className="col-md-6">
                                            <div className="menu-item">
                                                <h5>{item.name}</h5>
                                                <p>{item.desc}</p>
                                                <span className="price-tag">{t.nasaTrpeza.naUpit}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="menu-note">{t.nasaTrpeza.note}</p>
                    <div className="text-center mb-5">
                        <button className="btn-gold-shine" onClick={() => navigate("kontakt")}>
                            {t.nasaTrpeza.btnPonuda}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}