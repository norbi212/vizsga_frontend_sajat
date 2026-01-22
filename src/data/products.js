// src/data/products.js

const sharedImages = [
  "/images/product_1.jpg",
  "/images/product_2.jpg",
  "/images/product_3.jpg",
  "../images/product_5.jpg",
  "../images/product_6.jpg",
  "../images/product_7.jpg",
  "../images/product_8.jpg",
  "../images/product_9.jpg",

];

export const products = [
  // ====== SELLER 101 (10 termék: 7 active, 3 sold) ======
  {
    id: 1,
    title: "Férfi téli kabát",
    category: "Kabát",
    color: "Fekete",
    condition: "Újszerű",
    price: 18990,
    brand: "Zara",
    description:
      "Meleg, vastag anyagú férfi téli kabát hideg időre tervezve. Szélálló külső réteggel és kényelmes béléssel rendelkezik. Városi viselethez és mindennapi használatra is ideális. Keveset hordott, hibátlan állapotban.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 2,
    title: "Szürke férfi pulóver",
    category: "Pulóver",
    color: "Szürke",
    condition: "Használt",
    price: 7990,
    brand: "Bershka",
    description:
      "Puha tapintású, kényelmes pulóver hétköznapi viselethez. Jól tartja a formáját, nem bolyhosodik. Enyhe használati nyomok láthatók rajta, de összességében jó állapotú.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 3,
    title: "Férfi farmernadrág",
    category: "Nadrág",
    color: "Sötétkék",
    condition: "Újszerű",
    price: 10990,
    brand: "Pull & Bear",
    description:
      "Modern szabású farmernadrág strapabíró anyagból. Kényelmes viselet, jól kombinálható sportos és elegánsabb ruhákkal is.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 4,
    title: "Fehér basic póló",
    category: "Póló",
    color: "Fehér",
    condition: "Új",
    price: 3490,
    brand: "H&M",
    description:
      "Egyszerű, letisztult fehér póló, amely minden ruhatár alapdarabja. Légáteresztő pamut anyagból készült, soha nem volt hordva.",
    images: sharedImages,
    status: "sold",
    sellerId: 101
  },
  {
    id: 5,
    title: "Férfi sportcipő",
    category: "Cipő",
    color: "Fekete",
    condition: "Használt",
    price: 12990,
    brand: "Nike",
    description:
      "Kényelmes sportcipő mindennapi használatra. Jó tapadású talppal és párnázott belső résszel. Edzéshez és utcai viselethez is megfelelő.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 6,
    title: "Kapucnis pulóver",
    category: "Pulóver",
    color: "Fekete",
    condition: "Újszerű",
    price: 9990,
    brand: "Zara",
    description:
      "Sportos kapucnis pulóver vastagabb anyagból. Ideális hűvösebb napokra, kényelmes szabással és puha belső résszel.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 7,
    title: "Férfi bőröv",
    category: "Kiegészítő",
    color: "Barna",
    condition: "Új",
    price: 4990,
    brand: "Bershka",
    description:
      "Valódi bőrből készült férfi öv. Elegáns és hétköznapi viselethez egyaránt alkalmas, időtálló darab.",
    images: sharedImages,
    status: "sold",
    sellerId: 101
  },
  {
    id: 8,
    title: "Vászonnadrág",
    category: "Nadrág",
    color: "Bézs",
    condition: "Használt",
    price: 8990,
    brand: "H&M",
    description:
      "Könnyű, nyári viseletre ideális vászonnadrág. Kényelmes szabású, jól szellőző anyagból készült.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 9,
    title: "Átmeneti dzseki",
    category: "Kabát",
    color: "Khaki",
    condition: "Újszerű",
    price: 14990,
    brand: "Zara",
    description:
      "Tavaszi és őszi időszakra alkalmas könnyű dzseki. Szélálló anyag és praktikus zsebek jellemzik.",
    images: sharedImages,
    status: "active",
    sellerId: 101
  },
  {
    id: 10,
    title: "Sportnadrág",
    category: "Nadrág",
    color: "Fekete",
    condition: "Használt",
    price: 6990,
    brand: "Nike",
    description:
      "Rugalmas anyagú sportnadrág edzéshez vagy otthoni használatra. Kényelmes és jól szellőzik.",
    images: sharedImages,
    status: "sold",
    sellerId: 101
  },

  // ====== SELLER 202 ======
  { id: 11, title: "Férfi hosszú ujjú póló", category: "Póló", color: "Sötétszürke", condition: "Újszerű", price: 5990, brand: "Bershka", description: "Hosszú ujjú férfi póló kellemes tapintású pamut anyagból.", images: sharedImages, status: "active", sellerId: 202 },
  { id: 12, title: "Férfi farmerdzseki", category: "Kabát", color: "Világoskék", condition: "Használt", price: 13990, brand: "Pull & Bear", description: "Klasszikus farmerdzseki időtálló fazonnal.", images: sharedImages, status: "active", sellerId: 202 },
  { id: 13, title: "Férfi elegáns nadrág", category: "Nadrág", color: "Fekete", condition: "Újszerű", price: 11990, brand: "Zara", description: "Elegáns férfi nadrág irodai viselethez.", images: sharedImages, status: "active", sellerId: 202 },
  { id: 14, title: "Férfi sportfelső", category: "Pulóver", color: "Sötétkék", condition: "Használt", price: 7490, brand: "Nike", description: "Sportos stílusú felső aktív napokra.", images: sharedImages, status: "sold", sellerId: 202 },
  { id: 15, title: "Férfi utcai cipő", category: "Cipő", color: "Szürke", condition: "Újszerű", price: 15990, brand: "Bershka", description: "Letisztult megjelenésű utcai cipő.", images: sharedImages, status: "active", sellerId: 202 },

  // ====== SELLER 303 ======
  { id: 16, title: "Férfi oversize póló", category: "Póló", color: "Bézs", condition: "Új", price: 4490, brand: "H&M", description: "Oversize fazonú póló modern stílusban.", images: sharedImages, status: "active", sellerId: 303 },
  { id: 17, title: "Férfi melegítőfelső", category: "Pulóver", color: "Fekete", condition: "Használt", price: 8990, brand: "Zara", description: "Kényelmes melegítőfelső mindennapokra.", images: sharedImages, status: "active", sellerId: 303 },
  { id: 18, title: "Férfi rövidnadrág", category: "Nadrág", color: "Olívazöld", condition: "Újszerű", price: 6990, brand: "Bershka", description: "Könnyű nyári rövidnadrág.", images: sharedImages, status: "sold", sellerId: 303 },
  { id: 19, title: "Férfi átmeneti pulóver", category: "Pulóver", color: "Világosszürke", condition: "Használt", price: 6490, brand: "Pull & Bear", description: "Átmeneti időre ideális pulóver.", images: sharedImages, status: "active", sellerId: 303 },
  { id: 20, title: "Férfi casual ing", category: "Ing", color: "Kék", condition: "Újszerű", price: 9990, brand: "Zara", description: "Casual stílusú férfi ing.", images: sharedImages, status: "active", sellerId: 303 },

  // ====== EXTRA 10 TERMÉK (SELLER 404 / 505) ======
  { id: 21, title: "Férfi pamut póló", category: "Póló", color: "Fekete", condition: "Új", price: 3990, brand: "H&M", description: "Alap pamut póló.", images: sharedImages, status: "active", sellerId: 404 },
  { id: 22, title: "Férfi slim farmer", category: "Nadrág", color: "Kék", condition: "Használt", price: 9990, brand: "Zara", description: "Slim fit farmer.", images: sharedImages, status: "active", sellerId: 404 },
  { id: 23, title: "Férfi pulóver", category: "Pulóver", color: "Zöld", condition: "Újszerű", price: 8490, brand: "Bershka", description: "Kényelmes pulóver.", images: sharedImages, status: "sold", sellerId: 404 },
  { id: 24, title: "Férfi ing", category: "Ing", color: "Fehér", condition: "Új", price: 10990, brand: "Pull & Bear", description: "Elegáns fehér ing.", images: sharedImages, status: "active", sellerId: 404 },
  { id: 25, title: "Férfi edzőcipő", category: "Cipő", color: "Fekete", condition: "Használt", price: 13990, brand: "Nike", description: "Edzőcipő sporthoz.", images: sharedImages, status: "active", sellerId: 404 },

  { id: 26, title: "Férfi kabát", category: "Kabát", color: "Szürke", condition: "Újszerű", price: 19990, brand: "Zara", description: "Vastag téli kabát.", images: sharedImages, status: "active", sellerId: 505 },
  { id: 27, title: "Férfi póló", category: "Póló", color: "Kék", condition: "Használt", price: 2990, brand: "H&M", description: "Hétköznapi póló.", images: sharedImages, status: "sold", sellerId: 505 },
  { id: 28, title: "Férfi melegítőnadrág", category: "Nadrág", color: "Fekete", condition: "Használt", price: 7990, brand: "Nike", description: "Kényelmes melegítőnadrág.", images: sharedImages, status: "active", sellerId: 505 },
  { id: 29, title: "Férfi pulóver", category: "Pulóver", color: "Bordó", condition: "Újszerű", price: 8990, brand: "Zara", description: "Őszi pulóver.", images: sharedImages, status: "active", sellerId: 505 },
  { id: 30, title: "Férfi sneaker", category: "Cipő", color: "Fehér", condition: "Újszerű", price: 16990, brand: "Bershka", description: "Utcai sneaker.", images: sharedImages, status: "active", sellerId: 505 }
];
