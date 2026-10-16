"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Search } from "lucide-react";

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

      {/* UMKM — Carousel */}
      {!searchQuery && (
        <section className="container px-4 py-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                UMKM Ketapangtelu
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Kenali pelaku usaha di setiap dusun.
              </p>
            </div>
            <Link
              href="/categories"
              className="flex shrink-0 items-center gap-1 rounded text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Lihat semua
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Carousel
            opts={{ align: "start", loop: false, dragFree: true }}
            className="w-full"
            aria-label="Daftar UMKM"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {categories.map((umkm) => (
                <CarouselItem
                  key={umkm.id}
                  className="basis-[42%] pl-3 sm:basis-1/3 sm:pl-4 md:basis-1/4 lg:basis-1/5"
                >
                  <Link
                    href={`/categories/${umkm.id}`}
                    className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={umkm.image || "/placeholder.svg"}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 42vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-2.5 line-clamp-2 text-sm font-semibold leading-snug group-hover:underline">
                      {umkm.name}
                    </h3>
                    <div className="mt-0.5 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                      <span className="truncate">Dusun {umkm.subVillage}</span>
                      <span className="shrink-0">{umkm.count} produk</span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}

              {/* Slide terakhir */}
              <CarouselItem className="basis-[42%] pl-3 sm:basis-1/3 sm:pl-4 md:basis-1/4 lg:basis-1/5">
                <Link
                  href="/categories"
                  className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/40 p-4 text-center transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">
                    Lihat UMKM lainnya
                  </span>
                </Link>
              </CarouselItem>
            </CarouselContent>

            {/* Panah hanya di layar lebar, sejajar dengan tengah foto */}
            <CarouselPrevious className="left-2 top-[calc(50%-1.75rem)] hidden h-9 w-9 border bg-background/95 shadow-sm disabled:invisible md:flex" />
            <CarouselNext className="right-2 top-[calc(50%-1.75rem)] hidden h-9 w-9 border bg-background/95 shadow-sm disabled:invisible md:flex" />
          </Carousel>
        </section>
      )}

      {/* Products */}
      <section id="produk" className="container scroll-mt-20 px-4 py-8">
        {searchQuery ? (
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <h2 className="break-words text-2xl font-bold tracking-tight">
                Hasil pencarian &ldquo;{searchQuery}&rdquo;
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {filteredProducts.length} produk ditemukan
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent"
              onClick={clearSearch}
            >
              Hapus pencarian
            </Button>
          </div>
        ) : (
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Produk pilihan
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Hasil karya warga, diacak setiap kali halaman dibuka.
            </p>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="mx-auto max-w-sm py-16 text-center">
            <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
            <p className="font-medium">Produk tidak ditemukan</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tidak ada hasil untuk &ldquo;{searchQuery}&rdquo;. Periksa ejaan
              atau coba kata yang lebih umum.
            </p>
            <Button className="mt-5" onClick={clearSearch}>
              Lihat semua produk
            </Button>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-5">
              {(searchQuery
                ? filteredProducts
                : shuffledProducts.slice(0, visibleProducts)
              ).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/produk/${product.id}`}
                    className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-2.5 truncate text-xs text-muted-foreground">
                      {product.category}
                    </p>
                    <h3 className="mt-0.5 line-clamp-2 text-[15px] font-medium leading-snug group-hover:underline">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-base font-bold text-primary sm:text-lg">
                      {product.price}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            {!searchQuery && visibleProducts < shuffledProducts.length && (
              <div className="mt-10 text-center">
                <Button
                  onClick={() =>
                    setVisibleProducts((p) =>
                      Math.min(p + 8, shuffledProducts.length),
                    )
                  }
                  variant="outline"
                  className="h-11 bg-transparent px-8"
                >
                  Tampilkan{" "}
                  {Math.min(8, shuffledProducts.length - visibleProducts)}{" "}
                  produk lagi
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Menampilkan {visibleProducts} dari {shuffledProducts.length}{" "}
                  produk
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
