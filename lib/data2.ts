type UMKMData = {
  sellerName: string;
  productName: string;
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
    productName: "ikan asap",
    phoneNumber: "086888666222",
    subVillage: "suklen",
    address:
      "rt3, rw4, dusun suklen, desa ketapang telu, kecamatan karangbinangun",
    productTagline: "murah higenis aman",
    products: [
      {
        id: "ikan-asap-lele-1",
        title: "Ikan Asap Lele Premium",
        price: "Rp 15.000",
        description:
          "Ikan asap lele khas Ketapangtelu, diproses dengan bumbu tradisional. Gurih, tahan lama, dan kaya protein. Cocok untuk lauk sehari-hari atau oleh-oleh.",
        images: [
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Lele",
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Lele+2",
        ],
        link: {
          map: "https://goo.gl/maps/xyz123",
        },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-bandeng-1",
        title: "Ikan Asap Bandeng",
        price: "Rp 25.000",
        description:
          "Ikan bandeng asap dengan cita rasa autentik. Diolah dengan teknik pengasapan tradisional yang menghasilkan aroma dan rasa yang khas.",
        images: [
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Bandeng",
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Bandeng+2",
        ],
        link: {
          map: "https://goo.gl/maps/xyz123",
        },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-tongkol-1",
        title: "Ikan Asap Tongkol",
        price: "Rp 20.000",
        description:
          "Ikan tongkol asap dengan tekstur yang lembut dan rasa yang gurih. Diproses higienis dan berkualitas tinggi.",
        images: [
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Tongkol",
        ],
        link: {
          map: "https://goo.gl/maps/xyz123",
        },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-mujair-1",
        title: "Ikan Asap Mujair",
        price: "Rp 18.000",
        description:
          "Ikan mujair asap dengan bumbu rempah pilihan. Tekstur daging yang lembut dan cita rasa yang menggugah selera.",
        images: ["/placeholder.svg?height=400&width=400&text=Ikan+Asap+Mujair"],
        link: {
          map: "https://goo.gl/maps/xyz123",
        },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-patin-1",
        title: "Ikan Asap Patin",
        price: "Rp 22.000",
        description:
          "Ikan patin asap dengan daging tebal dan gurih. Diproses dengan standar kebersihan tinggi untuk kualitas terbaik.",
        images: ["/placeholder.svg?height=400&width=400&text=Ikan+Asap+Patin"],
        link: {
          map: "https://goo.gl/maps/xyz123",
        },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-bawal-1",
        title: "Ikan Asap Bawal",
        price: "Rp 30.000",
        description:
          "Ikan bawal asap premium dengan rasa yang istimewa. Cocok untuk hidangan spesial dan acara keluarga.",
        images: ["/placeholder.svg?height=400&width=400&text=Ikan+Asap+Bawal"],
        link: {
          map: "https://goo.gl/maps/xyz123",
        },
        category: "Ikan Asap",
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
