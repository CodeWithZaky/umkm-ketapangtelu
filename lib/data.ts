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
        images: ["/placeholder.svg?height=400&width=400&text=Ikan+Asap+Lele"],
        link: { map: "https://goo.gl/maps/xyz123" },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-bandeng-1",
        title: "Ikan Asap Bandeng",
        price: "Rp 25.000",
        description: "Bandeng asap dengan teknik tradisional, rasa otentik.",
        images: [
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Bandeng",
        ],
        link: { map: "https://goo.gl/maps/xyz123" },
        category: "Ikan Asap",
      },
      {
        id: "ikan-asap-tongkol-1",
        title: "Ikan Asap Tongkol",
        price: "Rp 20.000",
        description:
          "Ikan tongkol asap dengan tekstur yang lembut dan rasa yang gurih.",
        images: [
          "/placeholder.svg?height=400&width=400&text=Ikan+Asap+Tongkol",
        ],
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
        images: ["/placeholder.svg?height=400&width=400&text=Keripik+Usus"],
        link: { map: "https://goo.gl/maps/abc123" },
        category: "Keripik",
      },
      {
        id: "keripik-kulit-1",
        title: "Keripik Kulit Ayam",
        price: "Rp 12.000",
        description:
          "Kulit ayam garing dan gurih, cocok untuk lauk atau cemilan.",
        images: ["/placeholder.svg?height=400&width=400&text=Keripik+Kulit"],
        link: { map: "https://goo.gl/maps/abc123" },
        category: "Keripik",
      },
      {
        id: "keripik-singkong-1",
        title: "Keripik Singkong Balado",
        price: "Rp 8.000",
        description: "Singkong renyah dengan bumbu balado pedas manis.",
        images: ["/placeholder.svg?height=400&width=400&text=Keripik+Singkong"],
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
        images: ["/placeholder.svg?height=400&width=400&text=Sirup+Jahe"],
        link: { map: "https://goo.gl/maps/def123" },
        category: "Minuman",
      },
      {
        id: "minuman-kunyit-1",
        title: "Minuman Kunyit Asam",
        price: "Rp 18.000",
        description: "Segar dan menyehatkan, cocok diminum dingin.",
        images: ["/placeholder.svg?height=400&width=400&text=Kunyit+Asam"],
        link: { map: "https://goo.gl/maps/def123" },
        category: "Minuman",
      },
      {
        id: "wedang-uwuh-1",
        title: "Wedang Uwuh Tradisional",
        price: "Rp 15.000",
        description: "Minuman herbal tradisional dengan rempah pilihan.",
        images: ["/placeholder.svg?height=400&width=400&text=Wedang+Uwuh"],
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
        images: ["/placeholder.svg?height=400&width=400&text=Nastar+Keju"],
        link: { map: "https://goo.gl/maps/hij123" },
        category: "Kue Kering",
      },
      {
        id: "kue-kering-kastengel-1",
        title: "Kastengel Premium",
        price: "Rp 40.000",
        description: "Kue keju asin khas lebaran, gurih dan renyah.",
        images: ["/placeholder.svg?height=400&width=400&text=Kastengel"],
        link: { map: "https://goo.gl/maps/hij123" },
        category: "Kue Kering",
      },
      {
        id: "kue-kering-putri-salju-1",
        title: "Putri Salju Coklat",
        price: "Rp 30.000",
        description: "Kue kering lembut dengan taburan gula halus.",
        images: ["/placeholder.svg?height=400&width=400&text=Putri+Salju"],
        link: { map: "https://goo.gl/maps/hij123" },
        category: "Kue Kering",
      },
    ],
  },
  {
    sellerName: "Ahmad Fauzi",
    phoneNumber: "085123456789",
    subVillage: "Krajan",
    address: "RT1 RW1, Dusun Krajan, Desa Ketapangtelu, Karangbinangun",
    productTagline: "Terasi asli, aroma menggoda!",
    products: [
      {
        id: "terasi-udang-1",
        title: "Terasi Udang Premium",
        price: "Rp 8.000",
        description:
          "Terasi udang asli buatan warga dengan aroma kuat dan sedap.",
        images: ["/placeholder.svg?height=400&width=400&text=Terasi+Udang"],
        link: { map: "https://goo.gl/maps/klm123" },
        category: "Terasi",
      },
      {
        id: "terasi-ikan-1",
        title: "Terasi Ikan",
        price: "Rp 6.000",
        description:
          "Terasi ikan dengan cita rasa khas untuk masakan tradisional.",
        images: ["/placeholder.svg?height=400&width=400&text=Terasi+Ikan"],
        link: { map: "https://goo.gl/maps/klm123" },
        category: "Terasi",
      },
    ],
  },
];

// FUNCTIONS

// Get all products from all sellers
export function getAllProducts() {
  const allProducts: Array<{
    id: string;
    title: string;
    price: string;
    description: string;
    images: string[];
    link: { map: string };
    category: string;
    seller: {
      name: string;
      phone: string;
      subVillage: string;
      address: string;
      tagline: string;
    };
  }> = [];

  umkmData.forEach((seller) => {
    seller.products.forEach((product) => {
      allProducts.push({
        ...product,
        seller: {
          name: seller.sellerName,
          phone: seller.phoneNumber,
          subVillage: seller.subVillage,
          address: seller.address,
          tagline: seller.productTagline,
        },
      });
    });
  });

  return allProducts;
}

// Get product by ID
export function getProductById(id: string) {
  const allProducts = getAllProducts();
  return allProducts.find((product) => product.id === id);
}

// Get products by category
export function getProductsByCategory(category: string) {
  const allProducts = getAllProducts();
  return allProducts.filter((product) => product.category === category);
}

// Get all unique categories with product counts
export function getCategories() {
  const allProducts = getAllProducts();
  const categoryMap = new Map<string, number>();

  allProducts.forEach((product) => {
    const count = categoryMap.get(product.category) || 0;
    categoryMap.set(product.category, count + 1);
  });

  const categories = [
    {
      id: "ikan-asap",
      name: "Ikan Asap",
      description: "Ikan asap berkualitas tinggi dengan cita rasa autentik",
      image: "/placeholder.svg?height=200&width=300&text=Ikan+Asap",
      count: categoryMap.get("Ikan Asap") || 0,
      color: "bg-orange-500",
    },
    {
      id: "keripik",
      name: "Keripik",
      description: "Keripik renyah dan gurih untuk camilan",
      image: "/placeholder.svg?height=200&width=300&text=Keripik",
      count: categoryMap.get("Keripik") || 0,
      color: "bg-yellow-500",
    },
    {
      id: "minuman",
      name: "Minuman",
      description: "Minuman tradisional segar dan menyehatkan",
      image: "/placeholder.svg?height=200&width=300&text=Minuman",
      count: categoryMap.get("Minuman") || 0,
      color: "bg-blue-500",
    },
    {
      id: "kue-kering",
      name: "Kue Kering",
      description: "Kue kering homemade dengan berbagai varian rasa",
      image: "/placeholder.svg?height=200&width=300&text=Kue+Kering",
      count: categoryMap.get("Kue Kering") || 0,
      color: "bg-pink-500",
    },
    {
      id: "terasi",
      name: "Terasi",
      description: "Terasi asli buatan warga dengan aroma khas",
      image: "/placeholder.svg?height=200&width=300&text=Terasi",
      count: categoryMap.get("Terasi") || 0,
      color: "bg-red-500",
    },
  ];

  // Filter out categories with 0 products
  return categories.filter((category) => category.count > 0);
}

// Deterministic shuffle using a simple algorithm that doesn't rely on Math.random()
export function getShuffledProducts(limit?: number) {
  const allProducts = getAllProducts();

  // Use a deterministic shuffle based on product IDs
  const shuffled = [...allProducts]
    .sort((a, b) => {
      // Create a simple hash from the product ID for consistent ordering
      const hashA = a.id
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const hashB = b.id
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return hashA - hashB;
    })
    .reverse(); // Reverse to get a different but consistent order

  return limit ? shuffled.slice(0, limit) : shuffled;
}

// For backward compatibility
export function getRandomProducts(limit?: number) {
  return getShuffledProducts(limit);
}

// Get all sellers
export function getSellers() {
  return umkmData.map((seller) => ({
    name: seller.sellerName,
    phone: seller.phoneNumber,
    subVillage: seller.subVillage,
    address: seller.address,
    tagline: seller.productTagline,
    productCount: seller.products.length,
  }));
}

// Get seller information by product ID
export function getSellerByProduct(productId: string) {
  for (const seller of umkmData) {
    const product = seller.products.find((p) => p.id === productId);
    if (product) {
      return {
        name: seller.sellerName,
        phone: seller.phoneNumber,
        subVillage: seller.subVillage,
        address: seller.address,
        tagline: seller.productTagline,
      };
    }
  }
  return null;
}

// Get all products from a specific seller
export function getProductsBySeller(sellerName: string) {
  const seller = umkmData.find((s) => s.sellerName === sellerName);
  if (!seller) return [];

  return seller.products.map((product) => ({
    ...product,
    seller: {
      name: seller.sellerName,
      phone: seller.phoneNumber,
      subVillage: seller.subVillage,
      address: seller.address,
      tagline: seller.productTagline,
    },
  }));
}

// Get products by category key (for URL routing)
export function getProductsByCategoryKey(categoryKey: string) {
  const categoryMap: { [key: string]: string } = {
    "ikan-asap": "Ikan Asap",
    keripik: "Keripik",
    minuman: "Minuman",
    "kue-kering": "Kue Kering",
    terasi: "Terasi",
  };

  const categoryName = categoryMap[categoryKey];
  if (!categoryName) return [];

  return getProductsByCategory(categoryName);
}
