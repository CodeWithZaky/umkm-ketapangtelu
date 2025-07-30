import Hantaran1 from "@/public/umkmImagesData/titin/hanntaran-1.jpg";
import Hantaran2 from "@/public/umkmImagesData/titin/hanntaran-2.jpg";
import Hantaran3 from "@/public/umkmImagesData/titin/hanntaran-3.jpg";
import Hantaran4 from "@/public/umkmImagesData/titin/hanntaran-4.jpg";
import Hantaran5 from "@/public/umkmImagesData/titin/hanntaran-5.jpg";
import NasiKotak from "@/public/umkmImagesData/titin/nasi-kotak.jpg";

export const titin = {
  sellerName: "Titin",
  productName: "Hantaran, Kue Hantaran, Snack Box, & Nasi Kotak",
  phoneNumber: "0812-4973-0455",
  subVillage: "Ketapang",
  address:
    "RT. 02 RW. 02, Dusun Ketapang, Desa Ketapangtelu, Kec. Karangbinangun, Kab. Lamongan",
  productTagline: "Hantaran & Snack Box – Solusi Lengkap untuk Segala Acara!",
  products: [
    {
      id: "hantaran-snackbox-nasikotak",
      title: "Hantaran, Kue, Snack Box & Nasi Kotak",
      price: "Rp 2.000 – Rp 200.000",
      description:
        "Tersedia aneka paket hantaran, kue spesial, snack box, dan nasi kotak. Cocok untuk kebutuhan hajatan, arisan, acara kantor, dan lainnya. Bisa dipesan sesuai permintaan.",
      images: [
        Hantaran1,
        Hantaran2,
        Hantaran3,
        Hantaran4,
        Hantaran5,
        NasiKotak,
      ],
      link: {
        map: "https://maps.app.goo.gl/EnDeemw2PmuGcBCo6",
      },
      category: "Katering & Paket Acara",
    },
  ],
};
