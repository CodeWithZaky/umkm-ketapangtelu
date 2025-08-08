import { StaticImageData } from "next/image";
import { bapakKusen } from "./UMKM/bapakkusen";
import { buAwik } from "./UMKM/buawik";
import { ifatunHaniah } from "./UMKM/ifatunhaniah";
import { khoirima } from "./UMKM/khoirima";
import { lailatulMaghfiroh } from "./UMKM/lailatulmaghfiroh";
import { mbakWarda } from "./UMKM/mbakwarda";
import { niswatunafifah } from "./UMKM/niswatunafifah";
import { sitinurhayati } from "./UMKM/sitinurhayati";
import { titin } from "./UMKM/titin";
import { ulfa } from "./UMKM/ulfa";

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

export const umkmData: UMKMData = [
  buAwik,
  bapakKusen,
  ifatunHaniah,
  khoirima,
  lailatulMaghfiroh,
  mbakWarda,
  niswatunafifah,
  sitinurhayati,
  titin,
  ulfa,
];

// Update type untuk getAllProducts function
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

// Update fungsi getCategories untuk return data per seller/UMKM
export function getCategories() {
  return umkmData.map((seller) => ({
    id: seller.sellerName.toLowerCase().replace(/\s+/g, "-"), // slug dari nama seller
    name: seller.sellerName,
    description: `${seller.productTagline} - ${seller.products.length} produk tersedia`,
    image:
      seller.products[0]?.images[0] ||
      "/placeholder.svg?height=200&width=300&text=UMKM",
    count: seller.products.length,
    color: getSellerColor(seller.sellerName), // Warna berdasarkan seller
    subVillage: seller.subVillage,
    address: seller.address,
    phone: seller.phoneNumber,
    tagline: seller.productTagline,
  }));
}

// Fungsi helper untuk warna seller
function getSellerColor(sellerName: string) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-yellow-500",
  ];

  // Hash nama seller untuk konsistensi warna
  const hash = sellerName
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
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

// Update fungsi getProductsByCategoryKey untuk ambil produk berdasarkan seller
export function getProductsByCategoryKey(categoryKey: string) {
  // Convert slug kembali ke nama seller
  const sellerName = categoryKey
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return getProductsBySeller(sellerName);
}

// Tambah fungsi untuk mendapatkan seller berdasarkan slug
export function getSellerBySlug(slug: string) {
  const sellerName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return umkmData.find((seller) => seller.sellerName === sellerName);
}
