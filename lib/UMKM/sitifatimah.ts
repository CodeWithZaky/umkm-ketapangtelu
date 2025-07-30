import KeripikUsus1 from "@/public/umkmImagesData/sitifatimah/keripik-usus-1.jpg";
import KeripikUsus2 from "@/public/umkmImagesData/sitifatimah/keripik-usus-2.jpg";
import KeripikUsus3 from "@/public/umkmImagesData/sitifatimah/keripik-usus-3.jpg";
import KeripikUsus4 from "@/public/umkmImagesData/sitifatimah/keripik-usus-4.jpg";
import KeripikUsus5 from "@/public/umkmImagesData/sitifatimah/keripik-usus-5.jpg";

export const sitiFatimah = {
  sellerName: "Siti Fatimah",
  productName: "Kripik Usus",
  phoneNumber: "085735421016",
  subVillage: "Suklen",
  address:
    "RT. 01 RW. 04, Dusun Suklen, Desa Ketapangtelu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Kripik Usus – Camilan Gurih dalam Kemasan Praktis!",
  products: [
    {
      id: "kripik-usus",
      title: "Kripik Usus Kecil",
      price: "Rp 1.000 / bungkus",
      description:
        "Keripik usus yang renyah dan gurih, dikemas dalam ukuran kecil yang praktis. Cocok sebagai camilan harian maupun teman santai.",
      images: [
        KeripikUsus1,
        KeripikUsus2,
        KeripikUsus3,
        KeripikUsus4,
        KeripikUsus5,
      ],
      link: {
        map: "https://maps.app.goo.gl/EnDeemw2PmuGcBCo6",
      },
      category: "Kripik & Camilan",
    },
  ],
};
