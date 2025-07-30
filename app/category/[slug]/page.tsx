import BackToHome from "@/components/back-to-home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  getCategories,
  getProductsByCategoryKey,
  getSellerBySlug,
} from "@/lib/data";
import { ArrowLeft, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Update generateStaticParams untuk slug seller
export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    slug: category.id,
  }));
}

// Update categoryInfo untuk menggunakan data seller
export default function CategoryPage({ params }: CategoryPageProps) {
  const products = getProductsByCategoryKey(params.slug);
  const seller = getSellerBySlug(params.slug);

  if (!seller || products.length === 0) {
    notFound();
  }

  // Buat category info dari data seller
  const category = {
    name: seller.sellerName,
    description: `${seller.productTagline} - Produk berkualitas dari Dusun ${seller.subVillage}`,
    color: getSellerColor(seller.sellerName),
    subVillage: seller.subVillage,
    address: seller.address,
    phone: seller.phoneNumber,
    tagline: seller.productTagline,
  };

  // Fungsi helper untuk warna seller (sama seperti di data.ts)
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

    const hash = sellerName
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }

  // Create masonry layout pattern - different heights for visual variety
  const getMasonryClass = (index: number) => {
    const patterns = [
      "row-span-2", // tall
      "row-span-1", // normal
      "row-span-1", // normal
      "row-span-3", // extra tall
      "row-span-1", // normal
      "row-span-2", // tall
      "row-span-1", // normal
      "row-span-1", // normal
      "row-span-2", // tall
    ];
    return patterns[index % patterns.length];
  };

  // Update hero section untuk menampilkan info seller
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b w-full">
        {/* Desktop Navigation */}
        <div className="hidden md:block border-b border-border/40">
          <div className="px-4 container">
            <div className="flex justify-center items-center space-x-8 h-12">
              <Link
                href="/"
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Tentang
              </Link>
              <Link
                href="/categories"
                className="font-medium text-primary text-sm transition-colors"
              >
                Kategori
              </Link>
              <Link
                href="/products"
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Produk
              </Link>
              <Link
                href="/contact"
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Kontak
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <BackToHome />
      </nav>

      {/* Category Hero - update untuk seller */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="px-4 container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              UMKM Ketapangtelu
            </Badge>
            <h1 className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-4 font-bold text-transparent text-4xl md:text-5xl">
              {category.name}
            </h1>
            <p className="mb-4 text-muted-foreground text-lg">
              {category.description}
            </p>
            <p className="mb-6 text-muted-foreground text-sm">
              📍 {category.address}
            </p>
            <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${category.color}`} />
                {products.length} Produk Tersedia
              </span>
              <span>•</span>
              <span>Dusun {category.subVillage}</span>
              <span>•</span>
              <span>Produksi Lokal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - update badge untuk menampilkan nama seller */}
      <section className="px-4 py-12 container">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[200px]">
          {products.map((product, index) => {
            const masonryClass = getMasonryClass(index);
            const isLarge =
              masonryClass.includes("row-span-3") ||
              masonryClass.includes("row-span-2");

            return (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full ${masonryClass} overflow-hidden`}
                >
                  <div className="relative h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative flex flex-col justify-end p-4 h-full text-white">
                      <div className="transition-transform translate-y-2 group-hover:translate-y-0 duration-300 transform">
                        <Badge
                          variant="secondary"
                          className="bg-white/20 mb-2 border-white/30 text-white"
                        >
                          {product.category}
                        </Badge>

                        <CardTitle
                          className={`mb-2 line-clamp-2 ${
                            isLarge ? "text-xl" : "text-lg"
                          }`}
                        >
                          {product.title}
                        </CardTitle>

                        <p
                          className={`font-bold text-primary-foreground mb-2 ${
                            isLarge ? "text-2xl" : "text-xl"
                          }`}
                        >
                          {product.price}
                        </p>

                        {isLarge && (
                          <>
                            <CardDescription className="mb-2 text-white/80 text-sm line-clamp-2">
                              {product.description}
                            </CardDescription>
                            <div className="flex items-center gap-2 text-white/70 text-xs">
                              <User className="w-3 h-3" />
                              <span>{product.seller.name}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Hover Effect Indicator */}
                      <div className="top-4 right-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm rounded-full w-8 h-8">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="py-16 text-center">
            <div className="flex justify-center items-center bg-muted mx-auto mb-6 rounded-full w-24 h-24">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold text-xl">Belum Ada Produk</h3>
            <p className="mb-6 text-muted-foreground">
              Produk untuk kategori ini sedang dalam persiapan.
            </p>
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Related UMKM - update untuk menampilkan UMKM lain */}
      <section className="bg-muted/30 py-12">
        <div className="px-4 container">
          <h2 className="mb-8 font-bold text-2xl text-center">UMKM Lainnya</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl">
            {getCategories()
              .filter((cat) => cat.id !== params.slug)
              .slice(0, 4)
              .map((umkm) => (
                <Link key={umkm.id} href={`/category/${umkm.id}`}>
                  <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 ${umkm.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                      >
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="mb-2">{umkm.name}</CardTitle>
                      <CardDescription className="mb-1 text-sm">
                        Dusun {umkm.subVillage}
                      </CardDescription>
                      <CardDescription className="text-xs">
                        {umkm.count} produk tersedia
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
