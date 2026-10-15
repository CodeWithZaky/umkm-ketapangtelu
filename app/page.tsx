"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAllProducts, getCategories, getShuffledProducts } from "@/lib/data";
import { useSearch } from "@/context/search-context";

export default function HomePage() {
  const { searchQuery, clearSearch } = useSearch();
  const [visibleCategories, setVisibleCategories] = useState(3);
  const [visibleProducts, setVisibleProducts] = useState(8);

  const allProducts = useMemo(() => getAllProducts(), []);
  const categories = useMemo(() => getCategories(), []);
  const shuffledProducts = useMemo(() => getShuffledProducts(), []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts;
    const q = searchQuery.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }, [searchQuery, allProducts]);

  const featuredProducts = useMemo(
    () => allProducts.slice(0, 6),
    [allProducts],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      {!searchQuery && (
        <section className="container px-4 py-8">
          <Carousel
            className="w-full"
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index}>
                  <Link href={`/produk/${product.id}`}>
                    <div className="group relative h-[400px] cursor-pointer overflow-hidden rounded-lg">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        quality={90}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge
                          variant="secondary"
                          className="mb-2 border-white/30 bg-white/20 text-white"
                        >
                          {product.category}
                        </Badge>
                        <h2 className="mb-2 text-3xl font-bold">
                          {product.title}
                        </h2>
                        <p className="mb-2 text-lg font-semibold text-primary-foreground">
                          {product.price}
                        </p>
                        <p className="line-clamp-2 max-w-md text-sm opacity-90">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>
      )}

      {/* UMKM */}
      {!searchQuery && (
        <section className="container px-4 py-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            UMKM Ketapangtelu
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.slice(0, visibleCategories).map((umkm) => (
              <Link key={umkm.id} href={`/category/${umkm.id}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={umkm.image || "/placeholder.svg"}
                        alt={umkm.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="flex items-center justify-between">
                      {umkm.name}
                      <Badge variant="secondary">{umkm.count} produk</Badge>
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm">
                      📍 Dusun {umkm.subVillage}
                    </CardDescription>
                    <CardDescription className="mt-2 line-clamp-2">
                      {umkm.tagline}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {visibleCategories < categories.length && (
            <div className="mt-8 text-center">
              <Button
                onClick={() =>
                  setVisibleCategories((p) =>
                    Math.min(p + 3, categories.length),
                  )
                }
                variant="outline"
                className="bg-transparent px-8"
              >
                Lihat UMKM Lainnya
              </Button>
            </div>
          )}
        </section>
      )}

      {/* Products */}
      <section className="container px-4 py-8">
        <h2 className="mb-6 text-center text-2xl font-bold">
          {searchQuery ? `Hasil Pencarian "${searchQuery}"` : "Produk Pilihan"}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              Tidak ada produk yang ditemukan untuk "{searchQuery}".
            </p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={clearSearch}
            >
              Hapus Pencarian
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(searchQuery
                ? filteredProducts
                : shuffledProducts.slice(0, visibleProducts)
              ).map((product) => (
                <Link key={product.id} href={`/produk/${product.id}`}>
                  <Card className="group h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardHeader className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-primary"
                          >
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col p-4">
                      <CardTitle className="mb-2 line-clamp-2 text-lg">
                        {product.title}
                      </CardTitle>
                      <p className="mb-2 text-xl font-bold text-primary">
                        {product.price}
                      </p>
                      <CardDescription className="line-clamp-3 flex-grow">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {!searchQuery && visibleProducts < shuffledProducts.length && (
              <div className="mt-8 text-center">
                <Button
                  onClick={() =>
                    setVisibleProducts((p) =>
                      Math.min(p + 8, shuffledProducts.length),
                    )
                  }
                  variant="outline"
                  className="bg-transparent px-8"
                >
                  Lihat Produk Lainnya (
                  {shuffledProducts.length - visibleProducts} tersisa)
                </Button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
