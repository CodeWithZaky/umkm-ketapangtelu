import { StaticImageData } from "next/image";
import { sitinurhayati } from "./UMKM/sitinurhayati";

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
    images: StaticImageData[];
    link: {
      map: string;
    };
    category: string;
  }[];
}[];

export const umkmData: UMKMData = [sitinurhayati];

// Get all products from all sellers
export function getAllProducts() {
  const allProducts: Array<{
    id: string;
    title: string;
    price: string;
    description: string;
    images: StaticImageData[];
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
