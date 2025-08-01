import Bonggolan1 from "@/public/umkmImagesData/lailatulmaghfiroh/bonggolan-1.jpg";
import Bonggolan2 from "@/public/umkmImagesData/lailatulmaghfiroh/bonggolan-2.jpg";

export const lailatulMaghfiroh = {
  sellerName: "Lailatul Maghfiroh",
  productName: "Bonggolan Ikan Bandeng",
  phoneNumber: "085730043776",
  subVillage: "Pupuk",
  address:
    "Dusun Pupuk, RT. 02 RW. 03, Desa Ketapangtelu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Bonggolan Ikan Bandeng – Camilan Gurih Khas Ketapangtelu",
  products: [
    {
      id: "bonggolan-besar",
      title: "Bonggolan Ikan Bandeng (Besar)",
      price: "Rp 5.000 / pcs",
      description:
        "Bonggolan berukuran besar yang terbuat dari campuran ikan bandeng segar, tepung kanji, bawang putih, penyedap rasa, dan garam. Cocok untuk camilan atau lauk praktis.",
      images: [Bonggolan2],
      link: {
        map: "https://maps.app.goo.gl/zYpVN5CKwWkthsJC9",
      },
      category: "Olahan Ikan",
    },
    {
      id: "bonggolan-kecil",
      title: "Bonggolan Ikan Bandeng (Kecil)",
      price: "Rp 3.000 / pcs",
      description:
        "Bonggolan ukuran kecil dengan rasa gurih khas dari ikan bandeng dan bumbu tradisional. Lezat dinikmati kapan saja.",
      images: [Bonggolan1],
      link: {
        map: "https://maps.app.goo.gl/zYpVN5CKwWkthsJC9",
      },
      category: "Olahan Ikan",
    },
  ],
};
