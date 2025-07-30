import KerupukIkanBandeng1 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-1.jpg";
import KerupukIkanBandeng10 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-10.jpg";
import KerupukIkanBandeng11 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-11.jpg";
import KerupukIkanBandeng12 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-12.jpg";
import KerupukIkanBandeng2 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-2.jpg";
import KerupukIkanBandeng3 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-3.jpg";
import KerupukIkanBandeng4 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-4.jpg";
import KerupukIkanBandeng5 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-5.jpg";
import KerupukIkanBandeng6 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-6.jpg";
import KerupukIkanBandeng7 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-7.jpg";
import KerupukIkanBandeng8 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-8.jpg";
import KerupukIkanBandeng9 from "@/public/umkmImagesData/sitinurhayati/krupuk-ikan-bandeng/kerupuk-ikan-bandeng-9.jpg";

import KerupukSamiler1 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler/kerupuk-samiler-1.jpeg";
import KerupukSamiler2 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler/kerupuk-samiler-2.jpeg";
import KerupukSamiler3 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler/kerupuk-samiler-3.jpeg";

import KerupukSamilerMatang1 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler-matang/kerupuk-samiler-matang-1.jpg";
import KerupukSamilerMatang2 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler-matang/kerupuk-samiler-matang-2.jpg";
import KerupukSamilerMatang3 from "@/public/umkmImagesData/sitinurhayati/kerupuk-samiler-matang/kerupuk-samiler-matang-3.jpg";

export const sitinurhayati = {
  sellerName: "Siti Nur Hayati",
  productName: "Kerupuk & Ikan Asap",
  phoneNumber: "086888666222",
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
        KerupukIkanBandeng8,
        KerupukIkanBandeng9,
        KerupukIkanBandeng10,
        KerupukIkanBandeng11,
        KerupukIkanBandeng12,
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
