export const contact = {
  phoneDisplay: "+36 70 433 2901",
  phoneHref: "tel:+36704332901",
  email: "info.profiautokozmetika@gmail.com",
  address: "Budapest, külső Váci út 51.",
  maps: "https://www.google.com/maps/search/?api=1&query=Budapest%2C%20k%C3%BCls%C5%91%20V%C3%A1ci%20%C3%BAt%2051.",
} as const;

export type Photo = {
  src: string;
  alt: string;
};

export const images = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Fekete sportautó oldalnézetben, sötét stúdióban",
  },
  polirozas: {
    src: "/images/polirozas.jpg",
    alt: "Fekete motorháztető gépi polírozása",
  },
  felni: {
    src: "/images/felni.jpg",
    alt: "Alufelni tisztítása ecsettel",
  },
  folia: {
    src: "/images/folia.jpg",
    alt: "Átlátszó karosszériavédő fólia felhelyezése a fényszóró fölé",
  },
  keramia: {
    src: "/images/keramia.jpg",
    alt: "Vízcseppek a sötét, kezelt motorháztetőn",
  },
  bor: {
    src: "/images/bor.jpg",
    alt: "Perforált bőrülés tisztítása kefével",
  },
  tetokarpit: {
    src: "/images/tetokarpit.jpg",
    alt: "Tetőkárpit tisztítása kárpittisztító géppel",
  },
  kormany: {
    src: "/images/kormany.jpg",
    alt: "Fekete bőr kormány az utastérben",
  },
  konzol: {
    src: "/images/konzol.jpg",
    alt: "Sötét középkonzol és műanyag felületek",
  },
} as const satisfies Record<string, Photo>;

export type Service = {
  index: string;
  title: string;
  text: string;
  href: string;
  image: Photo;
  position?: string;
};

export const services: readonly Service[] = [
  {
    index: "01",
    title: "Autópolírozás",
    text: "A fényezés megújítása, a felületi karcok csökkentése és a mélyebb fényesség visszaállítása professzionális polírozási eljárásokkal.",
    href: "/szolgaltatasok/autopolirozas",
    image: images.polirozas,
  },
  {
    index: "02",
    title: "Belső autókozmetika",
    text: "A szövet- és bőrfelületek, a tetőkárpit és a belső műanyag elemek alapos tisztítása a rendezett, ápolt utastérért.",
    href: "/szolgaltatasok/belso-autokozmetika",
    image: images.bor,
  },
  {
    index: "03",
    title: "Karosszériavédő fóliázás",
    text: "Átlátszó, karcvédő fóliával óvhatja autója fényezését a mindennapi használatból eredő sérülésektől.",
    href: "/szolgaltatasok/foliazas-es-keramia#karosszeria",
    image: images.folia,
  },
  {
    index: "04",
    title: "Ablakfóliázás",
    text: "Hővédő és biztonsági ablakfóliázási megoldások az autó üvegfelületeire.",
    href: "/szolgaltatasok/foliazas-es-keramia#ablak",
    image: images.hero,
    position: "center 46%",
  },
  {
    index: "05",
    title: "Kerámiabevonat",
    text: "Modern felületvédelmi megoldás, amely hozzájárul a fényezés tartósabb védelméhez és látványos megjelenéséhez. 1–5 év garanciával.",
    href: "/szolgaltatasok/foliazas-es-keramia#keramia",
    image: images.keramia,
  },
];

export const whyPoints = [
  "Célzott autóápolási megoldások",
  "Külső és belső felületek professzionális kezelése",
  "Korszerű felületvédelmi technológiák",
  "Az autó állapotához igazított szolgáltatások",
] as const;

export const quoteServices = [
  "Autópolírozás",
  "Fényezés-restaurálás",
  "Belső tisztítás",
  "Szövet- és bőrtisztítás",
  "Karosszériavédő fóliázás",
  "Ablakfóliázás",
  "Kerámiabevonat",
  "Egyéb",
] as const;

export type GalleryCategory = "polirozas" | "belso" | "foliazas" | "keramia";

export type Work = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: Photo;
  width: number;
  height: number;
};

export const works: readonly Work[] = [
  {
    id: "feher-fenyezes",
    title: "Fehér fényezés",
    category: "polirozas",
    image: { src: "/images/galeria/01.webp", alt: "Fehér SUV fényes karosszériája" },
    width: 1360,
    height: 765,
  },
  {
    id: "utaster",
    title: "Utastér",
    category: "belso",
    image: { src: "/images/galeria/02.webp", alt: "Sötét bőr utastér kék hangulatfénnyel" },
    width: 1024,
    height: 768,
  },
  {
    id: "fekete-fenyezes",
    title: "Fekete fényezés",
    category: "polirozas",
    image: { src: "/images/galeria/03.webp", alt: "Fekete SUV fényes hátsó karosszériája" },
    width: 1360,
    height: 994,
  },
  {
    id: "ezust",
    title: "Ezüst karosszéria",
    category: "polirozas",
    image: { src: "/images/galeria/04.webp", alt: "Ezüst terepjáró fényes motorházteteje" },
    width: 1360,
    height: 1020,
  },
  {
    id: "muhely",
    title: "Műhelyben",
    category: "polirozas",
    image: { src: "/images/galeria/05.webp", alt: "Fekete autó a műhelyben, fényes motorháztetővel" },
    width: 1360,
    height: 1000,
  },
  {
    id: "folia-felhelyezes",
    title: "Fólia felhelyezése",
    category: "foliazas",
    image: { src: "/images/galeria/06.webp", alt: "Karosszériavédő fólia illesztése kék autó lökhárítójára" },
    width: 1360,
    height: 1020,
  },
  {
    id: "sotet-karosszeria",
    title: "Sötét karosszéria",
    category: "polirozas",
    image: { src: "/images/galeria/07.webp", alt: "Sötét kupé fényes orra és hűtőrácsa" },
    width: 1360,
    height: 978,
  },
  {
    id: "vilagos-utaster",
    title: "Világos utastér",
    category: "belso",
    image: { src: "/images/galeria/08.webp", alt: "Világos bőr kormány és első ülések" },
    width: 800,
    height: 600,
  },
  {
    id: "ablakfolia",
    title: "Ablakfólia",
    category: "foliazas",
    image: { src: "/images/galeria/09.webp", alt: "Sötét kabrió a fóliázó műhelyben" },
    width: 1318,
    height: 1020,
  },
  {
    id: "fekete-kupe",
    title: "Fekete kupé",
    category: "polirozas",
    image: { src: "/images/galeria/10.webp", alt: "Fekete kupé fényes motorházteteje" },
    width: 1360,
    height: 967,
  },
  {
    id: "borulesek",
    title: "Bőrülések",
    category: "belso",
    image: { src: "/images/galeria/11.webp", alt: "Fekete bőr hátsó ülések az utastérben" },
    width: 1360,
    height: 1020,
  },
  {
    id: "sotet-suv",
    title: "Sötét SUV",
    category: "polirozas",
    image: { src: "/images/galeria/12.webp", alt: "Sötét SUV fényes eleje" },
    width: 1360,
    height: 1020,
  },
  {
    id: "keramia",
    title: "Kerámiabevonat",
    category: "keramia",
    image: images.keramia,
    width: 2000,
    height: 1116,
  },
];

export type ChapterContent = {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  note?: string;
  image?: Photo;
  imagePosition?: string;
  flip?: boolean;
};

export type ServicePageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroImage?: Photo;
  heroPosition?: string;
  highlight?: string;
  ctaLabel?: string;
  chapters: readonly ChapterContent[];
  cta: {
    title: string;
    text: string;
    highlight?: string;
  };
};

export const polishPage: ServicePageContent = {
  metaTitle: "Autópolírozás",
  metaDescription:
    "Fényezésrestaurálás, karceltávolítás és fényesítő polírozás Budapesten. A Profi Autókozmetika visszaadja a fényezés mélyebb ragyogását.",
  eyebrow: "AUTÓPOLÍROZÁS · FÉNYEZÉSRESTAURÁLÁS",
  title: "Új fény. Megújult megjelenés.",
  highlight: "fény",
  lead: "A fényezés állapota alapvetően meghatározza autója megjelenését. A professzionális polírozás segíthet csökkenteni a felületi karcok láthatóságát, javítani a fényezés tisztaságát és visszaadni annak mélyebb ragyogását.",
  heroImage: images.polirozas,
  ctaLabel: "Ajánlatot kérek",
  chapters: [
    {
      index: "01",
      eyebrow: "FÉNYEZÉSRESTAURÁLÁS",
      title: "Hozza vissza a fényezés eredeti karakterét.",
      paragraphs: [
        "Az idő múlásával a fényezés veszít fényéből. A mindennapi használat, a mosások és a környezeti hatások apró felületi sérüléseket és esztétikai hibákat okozhatnak.",
        "A megfelelő polírozási eljárással javítható a lakkréteg megjelenése, csökkenthető számos felületi hiba láthatósága, és egységesebb, ragyogóbb felület érhető el.",
      ],
    },
    {
      index: "02",
      eyebrow: "KARCELTÁVOLÍTÁS",
      title: "Kevesebb látható karc. Tisztább felületek.",
      paragraphs: [
        "A fényezésen megjelenő mosási karcok és egyéb felületi hibák jelentősen ronthatják az autó összképét.",
        "A polírozás során a fényezés állapotának megfelelő technikával dolgozunk, hogy a lehető legjobb esztétikai eredményt érjük el.",
      ],
      note: "A ténylegesen elérhető eredmény minden esetben a karcok mélységétől és a fényezés állapotától függ.",
      image: images.felni,
      flip: true,
    },
    {
      index: "03",
      eyebrow: "FÉNYESÍTŐ POLÍROZÁS",
      title: "A ragyogás, amely kiemeli autója formáit.",
      paragraphs: [
        "A fényesítő polírozás célja a fényezés optikai megjelenésének javítása, a fény mélységének kiemelése és az egységesebb felület kialakítása.",
        "Az eredmény egy tisztább, fényesebb és látványosabb karosszéria.",
      ],
      image: images.hero,
      imagePosition: "center 62%",
    },
  ],
  cta: {
    title: "Ideje újra ragyogni hagyni a fényezést.",
    text: "Kérjen ajánlatot autója polírozására!",
    highlight: "ragyogni",
  },
};

export const interiorPage: ServicePageContent = {
  metaTitle: "Belső autókozmetika",
  metaDescription:
    "Szövet- és bőrtisztítás, tetőkárpit- és műanyag tisztítás Budapesten. Igényes, ápolt utastér a Profi Autókozmetikánál.",
  eyebrow: "BELSŐ TISZTÍTÁS · KÁRPITÁPOLÁS",
  title: "A prémium élmény az utastérben kezdődik.",
  highlight: "prémium",
  lead: "Az autó belső tere legalább annyira fontos, mint a külső megjelenés. A szövet- és bőrfelületek, a tetőkárpit és a műanyag elemek megfelelő tisztítása hozzájárul az igényes, ápolt utastér kialakításához.",
  heroImage: images.kormany,
  chapters: [
    {
      index: "01",
      eyebrow: "SZÖVET- ÉS BŐRTISZTÍTÁS",
      title: "Minden felület megérdemli a megfelelő ápolást.",
      paragraphs: [
        "Az autóülések és kárpitozott felületek a mindennapi használat során könnyen szennyeződhetnek. A szövet- és bőrfelületek eltérő tisztítási megközelítést igényelnek.",
        "A megfelelő tisztítási eljárással javítható az ülések és egyéb belső felületek megjelenése, miközben megőrizzük azok anyagának sajátosságait.",
      ],
      image: images.bor,
    },
    {
      index: "02",
      eyebrow: "TETŐKÁRPIT TISZTÍTÁS",
      title: "Tiszta részletek egészen a mennyezetig.",
      paragraphs: [
        "A tetőkárpit tisztítása gyakran kimarad az általános autóápolásból, pedig a szennyeződések ezen a felületen is megjelenhetnek.",
        "A megfelelő technikával végzett tisztítás segít felfrissíteni az utastér egyik legnagyobb textilfelületét.",
      ],
      image: images.tetokarpit,
      flip: true,
    },
    {
      index: "03",
      eyebrow: "MŰANYAG TISZTÍTÁS",
      title: "Az utastér minden részlete számít.",
      paragraphs: [
        "A műszerfal, az ajtóburkolatok és az egyéb műanyag elemek rendszeres ápolást igényelnek.",
        "A felületek alapos tisztításával rendezettebb, igényesebb összkép alakítható ki az utastérben.",
      ],
      image: images.konzol,
    },
  ],
  cta: {
    title: "Üljön vissza egy tiszta, ápolt autóba.",
    text: "Kérjen ajánlatot belső autókozmetikai szolgáltatásainkra!",
    highlight: "tiszta",
  },
};

export const filmPage: ServicePageContent = {
  metaTitle: "Fóliázás és kerámia",
  metaDescription:
    "Karosszériavédő fólia, hővédő és biztonsági ablakfóliázás, valamint 1–5 év garanciás kerámiabevonat Budapesten.",
  eyebrow: "FELÜLETVÉDELEM · PRÉMIUM MEGOLDÁSOK",
  title: "Védelem, amely megőrzi az értéket.",
  highlight: "értéket",
  lead: "Az autó külső felületei folyamatosan ki vannak téve a mindennapi használat hatásainak. A megfelelő fóliázási és felületvédelmi megoldások segíthetnek megőrizni a jármű esztétikai állapotát.",
  chapters: [
    {
      id: "karosszeria",
      index: "01",
      eyebrow: "KAROSSZÉRIAVÉDŐ FÓLIA",
      title: "Láthatatlan védelem. Megőrzött fényezés.",
      paragraphs: [
        "Az átlátszó karosszériavédő fólia olyan felületvédelmi megoldás, amely a fényezés megóvását szolgálja.",
        "A megfelelően kiválasztott és felhelyezett fólia segíthet megvédeni az érintett karosszériaelemeket a mindennapi használat során előforduló kisebb mechanikai hatásoktól.",
        "A fólia átlátszó kialakításának köszönhetően az autó eredeti megjelenése megőrizhető.",
      ],
      image: images.folia,
    },
    {
      id: "ablak",
      index: "02",
      eyebrow: "HŐVÉDŐ ÉS BIZTONSÁGI ABLAKFÓLIÁZÁS",
      title: "Komfort és védelem az üvegfelületeken.",
      paragraphs: [
        "A professzionális ablakfóliázás nem csupán esztétikai kérdés. A megfelelő hővédő fólia hozzájárulhat az utastérbe jutó napsugárzás és hőterhelés csökkentéséhez.",
        "A biztonsági fóliák pedig az üvegfelületek védelmére kínálnak további megoldást.",
      ],
      note: "A fólia kiválasztása során fontos az adott üvegfelület és a vonatkozó előírások figyelembevétele.",
      image: { src: images.hero.src, alt: "Sportautó üvegfelületei oldalnézetben" },
      imagePosition: "center 42%",
      flip: true,
    },
    {
      id: "keramia",
      index: "03",
      eyebrow: "KERÁMIABEVONAT",
      title: "Mélyebb fény. Tartós felületvédelem.",
      paragraphs: [
        "A kerámiabevonat modern megoldás az autó fényezésének védelmére és megjelenésének kiemelésére.",
        "A megfelelően előkészített felületen alkalmazott bevonat hozzájárulhat a fényezés esztétikai állapotának megőrzéséhez, valamint megkönnyítheti a későbbi tisztítást.",
        "1–5 év garanciával elérhető kerámiabevonatok.",
      ],
      note: "A garancia időtartama az alkalmazott bevonattól és a választott konstrukciótól függ.",
      image: images.keramia,
    },
  ],
  cta: {
    title: "Válassza ki autója számára a megfelelő védelmet.",
    text: "Vegye fel velünk a kapcsolatot, és egyeztessünk a lehetőségekről!",
    highlight: "védelmet",
  },
};

export const nav = [
  { href: "/", label: "Főoldal" },
  { href: "/galeria", label: "Galéria" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;
