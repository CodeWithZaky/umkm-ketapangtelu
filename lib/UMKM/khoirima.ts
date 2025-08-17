import Kue1 from "@/public/umkmImagesData/khoirima/kue-1.jpeg";
import Kue2 from "@/public/umkmImagesData/khoirima/kue-2.jpeg";
import Kue3 from "@/public/umkmImagesData/khoirima/kue-3.jpeg";
import Kue4 from "@/public/umkmImagesData/khoirima/kue-4.jpeg";
import Kue5 from "@/public/umkmImagesData/khoirima/kue-5.jpeg";

export const khoirima = {
  sellerName: "Khoirima",
  productName: "Jajanan Pasar dan Kue",
  phoneNumber: "85706078149",
  subVillage: "Mediyeng",
  address:
    "RT. 02 RW. 04, Dusun Mediyeng, Desa Ketapang Telu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Jajanan Pasar & Kue – Tradisional, Lezat, dan Bisa Pesan!",
  products: [
    {
      id: "jajanan-pasar",
      title: "Jajanan Pasar dan Kue",
      price: "Rp 2.000 – Rp 2.500",
      description:
        "Tersedia beragam pilihan jajanan pasar dan kue tradisional yang dibuat sesuai pesanan. Cocok untuk acara, hajatan, maupun suguhan harian.",
      images: [Kue1, Kue2, Kue3, Kue4, Kue5],
      link: {
        map: "https://maps.app.goo.gl/nB6PMwGWXetKSrtz6",
      },
      category: "Jajanan Tradisional",
    },
  ],
};
