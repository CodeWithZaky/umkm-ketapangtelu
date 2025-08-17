import KerupukIkanBandeng1 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-1.jpeg";
import KerupukIkanBandeng2 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-2.jpeg";
import KerupukIkanBandeng3 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-3.jpeg";
import KerupukIkanBandeng4 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-4.jpeg";
import KerupukIkanBandeng5 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-5.jpeg";
import KerupukIkanBandeng6 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-6.jpeg";
import KerupukIkanBandeng7 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-7.jpeg";

import KerupukSamiler1 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler/kerupuk-samiler-1.jpeg";
import KerupukSamiler2 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler/kerupuk-samiler-2.jpeg";
import KerupukSamiler3 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler/kerupuk-samiler-3.jpeg";

import KerupukSamilerMatang1 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler-matang/kerupuk-samiler-matang-1.jpeg";
import KerupukSamilerMatang2 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler-matang/kerupuk-samiler-matang-2.jpeg";
import KerupukSamilerMatang3 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler-matang/kerupuk-samiler-matang-3.jpeg";

export const sitinurhayati = {
  sellerName: "Siti Nur Hayati",
  productName: "Kerupuk & Ikan Asap",
  phoneNumber: "85812353332",
  subVillage: "Suklen",
  address:
    "RT 03 RW 04, Dusun Suklen, Desa Ketapangtelu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Produk Olahan Ikan – Murah, Higienis, dan Aman",
  products: [
    {
      id: "kerupuk-ikan-bandeng-mentah",
      title: "Kerupuk Ikan Bandeng Mentah",
      price: "Rp 10.000",
      description:
        "Kerupuk ikan bandeng mentah khas Desa Ketapangtelu, diolah dari bahan alami tanpa pengawet. Siap digoreng untuk menjadi camilan gurih atau pelengkap lauk.",
      images: [
        KerupukIkanBandeng1,
        KerupukIkanBandeng2,
        KerupukIkanBandeng3,
        KerupukIkanBandeng4,
        KerupukIkanBandeng5,
        KerupukIkanBandeng6,
        KerupukIkanBandeng7,
      ],
      link: {
        map: "https://maps.app.goo.gl/R5sNYwSJe3VN1r479?g_st=aw",
      },
      category: "Kerupuk Ikan",
    },
    {
      id: "kerupuk-samiler-mentah",
      title: "Kerupuk Samiler Mentah",
      price: "Rp 10.000",
      description:
        "Kerupuk samiler mentah khas Ketapangtelu, dibuat dari bahan berkualitas tanpa bahan pengawet. Teksturnya renyah dan cocok untuk gorengan rumahan.",
      images: [KerupukSamiler1, KerupukSamiler2, KerupukSamiler3],
      link: {
        map: "https://maps.app.goo.gl/R5sNYwSJe3VN1r479?g_st=aw",
      },
      category: "Kerupuk Tradisional",
    },
    {
      id: "kerupuk-samiler-matang",
      title: "Kerupuk Samiler Matang",
      price: "Rp 1.000",
      description:
        "Kerupuk samiler yang telah digoreng dan siap disantap. Praktis dan cocok untuk cemilan maupun teman makan, dengan harga sangat terjangkau.",
      images: [
        KerupukSamilerMatang1,
        KerupukSamilerMatang2,
        KerupukSamilerMatang3,
      ],
      link: {
        map: "https://maps.app.goo.gl/R5sNYwSJe3VN1r479?g_st=aw",
      },
      category: "Kerupuk Siap Saji",
    },
  ],
};
