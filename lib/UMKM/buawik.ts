import KeripikPisang1 from "@/public/umkmImagesData/buawik/keripik-pisang-1.jpg";
import KeripikPisang2 from "@/public/umkmImagesData/buawik/keripik-pisang-2.jpg";
import KeripikPisang3 from "@/public/umkmImagesData/buawik/keripik-pisang-3.jpg";
import KeripikPisang4 from "@/public/umkmImagesData/buawik/keripik-pisang-4.jpg";
import KeripikPisang5 from "@/public/umkmImagesData/buawik/keripik-pisang-5.jpg";

export const buAwik = {
  sellerName: "Bu Awik (Bu Kades)",
  productName: "Kripik Pisang By. Bu Jaguar",
  phoneNumber: "+62 823-3680-3102",
  subVillage: "Ketapang",
  address:
    "Dusun Ketapang, Desa Ketapangtelu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Kripik Pisang Bu Jaguar – Renyah, Lumer, dan Kaya Rasa!",
  products: [
    {
      id: "kripik-pisang-varian",
      title: "Kripik Pisang & Kripik Pisang Lumer",
      price: "Rp 18.000 – Rp 33.000",
      description:
        "Nikmati aneka kripik pisang dan kripik pisang lumer dari Bu Jaguar dengan berbagai varian rasa yang lezat dan menggugah selera. Cocok untuk camilan santai maupun oleh-oleh khas desa.",
      images: [
        KeripikPisang1,
        KeripikPisang2,
        KeripikPisang3,
        KeripikPisang4,
        KeripikPisang5,
      ],
      link: {
        map: "https://maps.app.goo.gl/EnDeemw2PmuGcBCo6",
      },
      category: "Kripik & Camilan",
    },
  ],
};
