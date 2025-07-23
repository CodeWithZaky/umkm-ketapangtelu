import LogoUmkmKetapangtelu from "@/components/logo-umkm-ketapangtelu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getProductsByCategory, umkmData } from "@/lib/data";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return [{ slug: "ikanasap" }, { slug: "krupukikan" }, { slug: "terasi" }];
}

const categoryInfo = {
  ikanasap: {
    name: "Ikan Asap",
    description:
      "Koleksi lengkap ikan asap berkualitas tinggi dengan cita rasa autentik khas Ketapangtelu",
    color: "bg-orange-500",
  },
  krupukikan: {
    name: "Kerupuk Ikan",
    description:
      "Berbagai jenis kerupuk ikan renyah dan gurih, cocok untuk camilan atau pelengkap makan",
    color: "bg-yellow-500",
  },
  terasi: {
    name: "Terasi",
    description:
      "Terasi premium dengan aroma khas dan rasa yang autentik untuk masakan nusantara",
    color: "bg-red-500",
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const products = getProductsByCategory(params.slug);
  const category = categoryInfo[params.slug as keyof typeof categoryInfo];

  if (!category || products.length === 0) {
    notFound();
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
        <div className="flex items-center px-4 h-16 container">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <LogoUmkmKetapangtelu />
            <span className="font-bold text-primary text-xl">
              UMKM KETAPANGTELU
            </span>
          </div>
        </div>
      </nav>

      {/* Category Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="px-4 container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Kategori Produk
            </Badge>
            <h1 className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-4 font-bold text-transparent text-4xl md:text-5xl">
              {category.name}
            </h1>
            <p className="mb-6 text-muted-foreground text-lg">
              {category.description}
            </p>
            <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${category.color}`} />
                {products.length} Produk Tersedia
              </span>
              <span>•</span>
              <span>Kualitas Premium</span>
              <span>•</span>
              <span>Produksi Lokal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Masonry Grid */}
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
                          {category.name}
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
                          <CardDescription className="text-white/80 text-sm line-clamp-3">
                            {product.description}
                          </CardDescription>
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
              <LogoUmkmKetapangtelu />
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

      {/* Related Categories */}
      <section className="bg-muted/30 py-12">
        <div className="px-4 container">
          <h2 className="mb-8 font-bold text-2xl text-center">
            Kategori Lainnya
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl">
            {Object.entries(categoryInfo)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, info]) => (
                <Link key={slug} href={`/category/${slug}`}>
                  <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 ${info.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                      >
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="mb-2">{info.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {umkmData[slug as keyof typeof umkmData].length} produk
                        tersedia
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
