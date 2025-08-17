import TerasiJambret1 from "@/public/umkmImagesData/bapakkusen/terasi-1.jpeg";
import TerasiJambret2 from "@/public/umkmImagesData/bapakkusen/terasi-2.jpeg";

export const bapakKusen = {
  sellerName: "Bapak Kusen",
  productName: "Terasi Jembret",
  phoneNumber: "82223379573",
  subVillage: "Ketapang",
  address:
    "Dusun Ketapang, RT.02 RW.01, Desa Ketapangtelu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Terasi Jembret Asli Ketapangtelu",
  products: [
    {
      id: "terasi-jembret",
      title: "Terasi Jembret",
      price: "Rp 50.000",
      description:
        "Terasi jembret asli Ketapangtelu, terbuat dari bahan alami tanpa pengawet. Renyah dan lezat, cocok untuk camilan atau lauk pendamping.",
      images: [TerasiJambret1, TerasiJambret2],
      link: {
        map: "https://maps.app.goo.gl/NSpv5ci8Bnysqe7B8",
      },
      category: "Terasi",
    },
  ],
};
