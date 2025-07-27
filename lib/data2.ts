type UMKMData = {
  sellerName: string;
  phoneNumber: string;
  subVillage: string;
  address: string;
  productTagline: string;
  products: {
    id: string;
    title: string;
    price: string;
    description: string;
    images: string[];
    link: {
      map: string;
    };
    category: string;
  }[];
}[];

export const umkmData: UMKMData = [
  {
    sellerName: "Siti Nur Hayati",
    phoneNumber: "086888666222",
    subVillage: "Suklen",
    address: "RT3 RW4, Dusun Suklen, Desa Ketapangtelu, Karangbinangun",
    productTagline: "Murah, higienis, dan penuh gizi!",
    products: [
      {
        id: "ikan-asap-lele-1",
        title: "Ikan Asap Lele Premium",
        price: "Rp 15.000",
        description:
          "Lele asap gurih khas desa, cocok untuk lauk dan oleh-oleh.",
        images: ["/img/lele-1.png"],
        link: { map: "https://goo.gl/maps/xyz123" },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-bandeng-1",
        title: "Ikan Asap Bandeng",
        price: "Rp 25.000",
        description: "Bandeng asap dengan teknik tradisional, rasa otentik.",
        images: ["/img/bandeng-1.png"],
        link: { map: "https://goo.gl/maps/xyz123" },
        category: "Ikan Asap",
      },
    ],
  },
  {
    sellerName: "Siti Aisah",
    phoneNumber: "086888777111",
    subVillage: "Pupuk",
    address: "RT1 RW3, Dusun Suklen, Desa Ketapangtelu, Karangbinangun",
    productTagline: "Gurih kriuk sampai ketagihan!",
    products: [
      {
        id: "keripik-usus-1",
        title: "Keripik Usus Gurih",
        price: "Rp 10.000",
        description: "Usus ayam gurih digoreng renyah, cocok untuk camilan.",
        images: ["/img/keripik-usus-1.png"],
        link: { map: "https://goo.gl/maps/abc123" },
        category: "Keripik",
      },
      {
        id: "keripik-kulit-1",
        title: "Keripik Kulit Ayam",
        price: "Rp 12.000",
        description:
          "Kulit ayam garing dan gurih, cocok untuk lauk atau cemilan.",
        images: ["/img/keripik-kulit-1.png"],
        link: { map: "https://goo.gl/maps/abc123" },
        category: "Keripik",
      },
    ],
  },
  {
    sellerName: "Budi Santoso",
    phoneNumber: "089912345678",
    subVillage: "Kemantren",
    address: "RT2 RW5, Dusun Kemantren, Desa Ketapangtelu, Karangbinangun",
    productTagline: "Segar dan alami dari desa!",
    products: [
      {
        id: "sirup-jahe-1",
        title: "Sirup Jahe Merah",
        price: "Rp 20.000",
        description: "Minuman tradisional untuk daya tahan tubuh.",
        images: ["/img/sirup-jahe-1.png"],
        link: { map: "https://goo.gl/maps/def123" },
        category: "Minuman",
      },
      {
        id: "minuman-kunyit-1",
        title: "Minuman Kunyit Asam",
        price: "Rp 18.000",
        description: "Segar dan menyehatkan, cocok diminum dingin.",
        images: ["/img/kunyit-1.png"],
        link: { map: "https://goo.gl/maps/def123" },
        category: "Minuman",
      },
    ],
  },
  {
    sellerName: "Rina Kartika",
    phoneNumber: "087788899900",
    subVillage: "Mojosari",
    address: "RT4 RW2, Dusun Mojosari, Desa Ketapangtelu, Karangbinangun",
    productTagline: "Manis legit bikin nagih!",
    products: [
      {
        id: "kue-kering-nastar-1",
        title: "Kue Nastar Keju",
        price: "Rp 35.000",
        description: "Nastar homemade isi nanas dan taburan keju.",
        images: ["/img/nastar-1.png"],
        link: { map: "https://goo.gl/maps/hij123" },
        category: "Kue Kering",
      },
      {
        id: "kue-kering-kastengel-1",
        title: "Kastengel Premium",
        price: "Rp 40.000",
        description: "Kue keju asin khas lebaran, gurih dan renyah.",
        images: ["/img/kastengel-1.png"],
        link: { map: "https://goo.gl/maps/hij123" },
        category: "Kue Kering",
      },
    ],
  },
];

/// FUNCTIONS ///
// getAllProduk
// getProductById
// getProductsByCategory
// getCategories
// getShuffledProducts
// getRandomProducts
