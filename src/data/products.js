// src/data/products.js

const sharedImages = [
  "/images/product_1.jpg",
  "/images/product_2.jpg",
  "/images/product_3.jpg",
  "../images/product_4.jpg",
  "../images/product_5.jpg",
  "../images/product_6.jpg",
  "../images/product_7.jpg",
  "../images/product_8.jpg",
  "../images/product_9.jpg",

];

export const products = [
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
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
    images: sharedImages
  },
  {
    id: 11,
    title: "Férfi hosszú ujjú póló",
    category: "Póló",
    color: "Sötétszürke",
    condition: "Újszerű",
    price: 5990,
    brand: "Bershka",
    description:
      "Hosszú ujjú férfi póló kellemes tapintású pamut anyagból. Átmeneti időszakra ideális, önmagában vagy pulóver alatt is jól hordható. Letisztult szabása miatt hétköznapi és fél-elegáns szettekhez is passzol. Keveset volt használva, megkímélt állapotú.",
    images: sharedImages
  },
  {
    id: 12,
    title: "Férfi farmerdzseki",
    category: "Kabát",
    color: "Világoskék",
    condition: "Használt",
    price: 13990,
    brand: "Pull & Bear",
    description:
      "Klasszikus farmerdzseki időtálló fazonnal. Strapabíró anyagból készült, mégis kényelmes viseletet biztosít egész nap. Enyhe használati nyomok láthatók rajta, de ez a stílusához jól illik. Tavaszi és őszi napokra kiváló választás.",
    images: sharedImages
  },
  {
    id: 13,
    title: "Férfi elegáns nadrág",
    category: "Nadrág",
    color: "Fekete",
    condition: "Újszerű",
    price: 11990,
    brand: "Zara",
    description:
      "Elegáns férfi nadrág, amely alkalmas irodai viseletre vagy formálisabb eseményekre. Kényelmes szabásának köszönhetően hosszabb viselés során sem kényelmetlen. Anyaga jól tartja a formáját és nem gyűrődik könnyen. Szinte új állapotban van.",
    images: sharedImages
  },
  {
    id: 14,
    title: "Férfi sportfelső",
    category: "Pulóver",
    color: "Sötétkék",
    condition: "Használt",
    price: 7490,
    brand: "Nike",
    description:
      "Sportos stílusú felső aktívabb mindennapokra. Rugalmas és jól szellőző anyagból készült, ezért edzéshez és utcai viselethez is megfelelő. Kényelmes szabású, nem szorít mozgás közben. Normál használati nyomok előfordulhatnak.",
    images: sharedImages
  },
  {
    id: 15,
    title: "Férfi utcai cipő",
    category: "Cipő",
    color: "Szürke",
    condition: "Újszerű",
    price: 15990,
    brand: "Bershka",
    description:
      "Letisztult megjelenésű utcai cipő mindennapi használatra. Könnyű, mégis stabil kialakítású, hosszabb séták során is kényelmes. Modern stílusa miatt sokféle öltözékhez illik. Keveset hordott, nagyon jó állapotban van.",
    images: sharedImages
  },
  {
    id: 16,
    title: "Férfi oversize póló",
    category: "Póló",
    color: "Bézs",
    condition: "Új",
    price: 4490,
    brand: "H&M",
    description:
      "Oversize fazonú póló modern, laza stílusban. Vastagabb pamut anyaga miatt tartós és kényelmes viselet. Különösen jól illik streetwear szettekhez. Soha nem volt hordva, teljesen új állapotú.",
    images: sharedImages
  },
  {
    id: 17,
    title: "Férfi melegítőfelső",
    category: "Pulóver",
    color: "Fekete",
    condition: "Használt",
    price: 8990,
    brand: "Zara",
    description:
      "Kényelmes melegítőfelső mindennapi használatra vagy sportoláshoz. Puha belső bélése kellemes hőérzetet biztosít hűvösebb időben. Jól kombinálható melegítőnadrággal vagy farmerrel is. Használt, de jó állapotú darab.",
    images: sharedImages
  },
  {
    id: 18,
    title: "Férfi rövidnadrág",
    category: "Nadrág",
    color: "Olívazöld",
    condition: "Újszerű",
    price: 6990,
    brand: "Bershka",
    description:
      "Könnyű anyagú rövidnadrág nyári viseletre tervezve. Kényelmes szabásának köszönhetően ideális sétához, utazáshoz vagy otthoni használatra. Anyaga jól szellőzik és gyorsan szárad. Keveset használt, megkímélt állapotban van.",
    images: sharedImages
  },
  {
    id: 19,
    title: "Férfi átmeneti pulóver",
    category: "Pulóver",
    color: "Világosszürke",
    condition: "Használt",
    price: 6490,
    brand: "Pull & Bear",
    description:
      "Átmeneti időre ideális pulóver vékonyabb, de meleg anyagból. Réteges öltözködéshez tökéletes választás. Letisztult megjelenése miatt könnyen kombinálható. Normál használati nyomokkal rendelkezik.",
    images: sharedImages
  },
  {
    id: 20,
    title: "Férfi casual ing",
    category: "Ing",
    color: "Kék",
    condition: "Újszerű",
    price: 9990,
    brand: "Zara",
    description:
      "Casual stílusú férfi ing, amely ideális hétköznapi és munkahelyi viselethez is. Kényelmes szabású, légáteresztő anyagból készült. Farmerrel és elegánsabb nadrággal is jól mutat. Alig hordott, kiváló állapotú darab.",
    images: sharedImages
  }
];