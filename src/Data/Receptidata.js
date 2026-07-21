// Statični podaci o receptima — zamjena za WordPress REST API poziv.
// Slike se importaju iz src/assets/recepti/ pa ih tamo treba staviti
// (točno pod ovim imenima datoteka, ili promijeni imena importa ispod).

import cukerancici from "../assets/recepti/cukerancici.jpg";
import manestraZBobici from "../assets/recepti/manestra_z_bobici.jpeg";
import fuziSTartufima from "../assets/recepti/fuzi_s_tartufima.png";

const receptiData = [
  {
    id: 16,
    title: { rendered: "Cukerančići" },
    image: cukerancici,
    acf: {
      vrijeme: "1 h (+ 2 h odmaranja)",
      tezina: "Srednje",
      porcije: 40,
      opis_ist:
        "Meke paštine z aromon rakije, ruma i agrumi — brez njih ni istarske fešte ni ženidbe.",
      opis_hr:
        "Mekani keksići s aromom rakije, ruma i agruma — bez njih nema istarske fešte ni svadbe.",
      opis_en:
        "Soft Istrian cukerančići with grappa, rum and citrus aroma — no Istrian feast or wedding is complete without them.",
      sastojci_ist: `Tijesto:
5 jaji
350 g cukera
1 vanilin cuker
prstohvat soli
150 ml ulja
150 g maslaca
1 kg glatke muke
25 g amonijaka
100 ml mlika
naribana korica naranče i limuna
malo arome kruškovca
malo ruma
Namakanje:
malvazija
malo ruma
malo kruškovca
vanilin cuker
Posip:
kristal cuker`,
      sastojci_hr: `Tijesto:
5 jaja
350 g šećera
1 vanilin šećer
prstohvat soli
150 ml ulja
150 g maslaca
1 kg glatkog brašna
25 g amonijaka
100 ml mlijeka
naribana korica naranče i limuna
malo arome kruškovca
malo ruma
Namakanje:
malvazija
malo ruma
malo kruškovca
vanilin šećer
Posip:
kristal šećer`,
      sastojci_en: `Dough:
5 eggs
350 g sugar
1 vanilla sugar
pinch of salt
150 ml oil
150 g butter
1 kg all-purpose flour
25 g baker's ammonia
100 ml milk
grated orange and lemon zest
a splash of pear brandy
a splash of rum
Soaking:
Malvasia wine
a splash of rum
a splash of pear brandy
vanilla sugar
Topping:
granulated sugar`,
      priprema_ist: `Umuti jaja z cukeron, vanilijon i koricami agrumi dok ne bude pjenasto, pa umišaj ulje, kruškovac, rum i meki maslac.
Muku prospi na panjaro, u sredini napravi škulju za amonijak i prelij ga z teplin mlikon, pa sve zamisi u glatko tišće.
Tišće pušti da počiva 2 ure na sobnoj temperaturi.
Oblikuj valjčiće od cca 20 cm, zariži "grančice" i savij he u polumisec.
Peći 8-10 minuti na 180-200°C dok ne porumene.
Za namakanje pomišaj malvaziju, rum, kruškovac i vaniliju — uhlađene cukerančiće umoči, pospi z cukeron i pušti da se posuše.`,
      priprema_hr: `Umuti jaja sa šećerom, vanilijom i koricama agruma dok smjesa ne postane pjenasta, pa umiješaj ulje, kruškovac, rum i omekšali maslac.
Brašno prospi na radnu površinu, u sredini napravi rupicu za amonijak i prelij ga toplim mlijekom, pa sve zamijesi u glatko tijesto.
Tijesto ostavi da odmara 2 sata na sobnoj temperaturi.
Oblikuj valjčiće od oko 20 cm, zareži "grančice" i savij ih u polumjesec.
Peci 8-10 minuta na 180-200°C dok ne porumene.
Za namakanje pomiješaj malvaziju, rum, kruškovac i vaniliju — ohlađene cukerančiće umoči, pospi šećerom i ostavi da se osuše.`,
      priprema_en: `Umuti jaja sa šećerom, vanilijom i koricama agruma dok smjesa ne postane pjenasta, pa umiješaj ulje, kruškovac, rum i omekšali maslac.
Brašno prospi na radnu površinu, u sredini napravi rupicu za amonijak i prelij ga toplim mlijekom, pa sve zamijesi u glatko tijesto.
Tijesto ostavi da odmara 2 sata na sobnoj temperaturi.
Oblikuj valjčiće od oko 20 cm, zareži "grančice" i savij ih u polumjesec.
Peci 8-10 minuta na 180-200°C dok ne porumene.
Za namakanje pomiješaj malvaziju, rum, kruškovac i vaniliju — ohlađene cukerančiće umoči, pospi šećerom i ostavi da se osuše.`,
    },
  },
  {
    id: 11,
    title: { rendered: "Maneštra z bobići" },
    image: manestraZBobici,
    acf: {
      vrijeme: "90 min",
      tezina: "Srednje",
      porcije: 6,
      opis_ist:
        "Gusta istarska maneštra z trukinjon i fažolon — jelo ki grije dušu, kakovo su kuhale naše nonice.",
      opis_hr:
        "Gusta istarska maneštra s kukuruzom i grahom — jelo koje grije dušu, kakvo su kuhale naše bake.",
      opis_en:
        "Thick Istrian minestrone with corn and beans — a soul-warming dish, just like our grandmothers used to make.",
      sastojci_ist: `300 g trukinje (ranije namočiti)
200 g suhega mesa ili pancete
300 g kumpiri
200 g fažola
1 žbulja, 2 glavice česna
javorov list, so, papar`,
      sastojci_hr: `300 g kukuruza (prethodno namočiti)
200 g suhog mesa ili pancete
300 g krumpira
200 g graha
1 luk, 2 češnja češnjaka
lovorov list, sol, papar`,
      sastojci_en: `300 g dried corn (soaked overnight)
200 g cured meat or pancetta
300 g potatoes
200 g beans
1 onion, 2 garlic cloves
bay leaf, salt, pepper`,
      priprema_ist: `Fažo i trukinju se namoči priko noći.
U veliken loncu prodinstaj žbulju i česan, dodaj suho meso.
Dodaj fažo, trukinju i javor. Zalij z vodon i kuhaj uru vrimena.
Dodaj kumpire narizane na kocke i kuhaj još po ure.
Maneštra mora biti gusta — po potribi speštaj malo kumpire.`,
      priprema_hr: `Grah i kukuruz namoči preko noći.
U velikom loncu prodinstaj luk i češnjak, dodaj suho meso.
Dodaj grah, kukuruz i lovor. Zalij vodom i kuhaj sat vremena.
Dodaj krumpir narezan na kockice i kuhaj još pola sata.
Maneštra mora biti gusta — po potrebi zgnječi malo krumpira.`,
      priprema_en: `Soak the beans and corn overnight.
In a large pot, sauté the onion and garlic, add the cured meat.
Add beans, corn and bay leaf. Cover with water and cook for an hour.
Add diced potatoes and cook for another 30 minutes.
The maneštra must be thick — mash a few potatoes if needed.`,
    },
  },
  {
    id: 7,
    title: { rendered: "Fuži s tartufima" },
    image: fuziSTartufima,
    acf: {
      vrijeme: "30 min",
      tezina: "Srednje",
      porcije: 4,
      opis_ist:
        "Domaći fuži z friškin črnin tartufon, maslacon i kapljon domačega ulja od ulik —  samo čisti gušt Istre.",
      opis_hr:
        "Domaći fuži sa svježim crnim tartufom, maslacem i kapljom domaćeg maslinovog ulja — samo čisti okus Istre.",
      opis_en:
        "Homemade fuži with fresh black truffle, butter and a drizzles of olive oil — just the pure taste of Istria.",
      sastojci_ist: `400 g fuži (domaćih ili kupovnih)
60 g svježega črnega tartufa
60 g maslaca
2 žlice domačega ulja od ulik
1 režanj česna
so, papar
malo ribanega parmezana (po želji)`,
      sastojci_hr: `400 g fuža (domaćih ili kupovnih)
60 g svježeg crnog tartufa
60 g maslaca
2 žlice maslinovog ulja
1 režanj češnjaka
sol, papar
malo ribanog parmezana (po želji)`,
      sastojci_en: `400 g fuži pasta (homemade or store-bought)
60 g fresh black truffle
60 g butter
2 tbsp olive oil
1 garlic clove
salt, pepper
grated Parmesan to taste (optional)`,
      priprema_ist: `Fuže skuhaj u posoljenoj vodi al dente, ucidi i puš šalicu vode od kuhanja.
Na pašuri pomalo zagrij maslac  i domačeg ulje od ulik, dodaj cijeli režanj česna da pušti aromu, pa ga zvadi.
Hiti unutra fuže i malo vode od kuhanja, mišaj dok se ne napravi kremasti toč.
Makni z vognja, naribaj po tartufa direktno u pašuru i promišaj.
Posluži zajno, pospi z ostatkon friško naribanega tartufa i po žeji z parmezanon.`,
      priprema_hr: `Fuže skuhaj u posoljenoj vodi al dente, ocijedi i sačuvaj šalicu vode od kuhanja.
U tavi lagano zagrij maslac i maslinovo ulje, dodaj cijeli režanj češnjaka da pusti aromu, pa ga izvadi.
Ubaci fuže i malo vode od kuhanja, miješaj dok se ne stvori kremasti umak.
Makni s vatre, naribaj pola tartufa izravno u tavu i lagano promiješaj.
Posluži odmah, pospi ostatkom svježe naribanog tartufa i po želji parmezanom.`,
      priprema_en: `Cook the fuži in salted water until al dente, drain and keep a cup of the cooking water.
Gently heat the butter and olive oil in a pan, add a whole garlic clove to release its aroma, then remove it.
Add the pasta and a splash of cooking water, stirring until a creamy sauce forms.
Remove from heat, grate half the truffle directly into the pan and toss gently.
Serve immediately, topped with the remaining freshly grated truffle and Parmesan if desired.`,
    },
  },
];

export default receptiData;