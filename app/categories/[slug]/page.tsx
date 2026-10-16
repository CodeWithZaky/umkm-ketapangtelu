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
    <div className="min-h-screen bg-background">
      {/* Category Hero - update untuk seller */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              UMKM Ketapangtelu
            </Badge>
            <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {category.name}
            </h1>
            <p className="mb-4 text-lg text-muted-foreground">
              {category.description}
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              📍 {category.address}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <div className={`h-2 w-2 rounded-full ${category.color}`} />
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
      <section className="container px-4 py-12">
        <div className="grid auto-rows-[200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => {
            const masonryClass = getMasonryClass(index);
            const isLarge =
              masonryClass.includes("row-span-3") ||
              masonryClass.includes("row-span-2");

            return (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card
                  className={`group h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${masonryClass} overflow-hidden`}
                >
                  <div className="relative h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative flex h-full flex-col justify-end p-4 text-white">
                      <div className="translate-y-2 transform transition-transform duration-300 group-hover:translate-y-0">
                        <Badge
                          variant="secondary"
                          className="mb-2 border-white/30 bg-white/20 text-white"
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
                          className={`mb-2 font-bold text-primary-foreground ${
                            isLarge ? "text-2xl" : "text-xl"
                          }`}
                        >
                          {product.price}
                        </p>

                        {isLarge && (
                          <>
                            <CardDescription className="mb-2 line-clamp-2 text-sm text-white/80">
                              {product.description}
                            </CardDescription>
                            <div className="flex items-center gap-2 text-xs text-white/70">
                              <User className="h-3 w-3" />
                              <span>{product.seller.name}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Hover Effect Indicator */}
                      <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <ArrowLeft className="h-4 w-4 rotate-180" />
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
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Belum Ada Produk</h3>
            <p className="mb-6 text-muted-foreground">
              Produk untuk kategori ini sedang dalam persiapan.
            </p>
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Related UMKM - update untuk menampilkan UMKM lain */}
      <section className="bg-muted/30 py-12">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">UMKM Lainnya</h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            {getCategories()
              .filter((cat) => cat.id !== params.slug)
              .slice(0, 4)
              .map((umkm) => (
                <Link key={umkm.id} href={`/categories/${umkm.id}`}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`h-12 w-12 ${umkm.color} mx-auto mb-4 flex items-center justify-center rounded-full`}
                      >
                        <User className="h-6 w-6 text-white" />
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
