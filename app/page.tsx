"use client";

import { Badge } from "@/components/ui/badge";
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
import { Input } from "@/components/ui/input";
import { getAllProducts, umkmData } from "@/lib/data";
import LogoUMKMKetapangelu from "@/public/logo_umkm_ketapangtelu.png";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const allProducts = getAllProducts();

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts;
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allProducts]);

  // Get featured products for carousel
  const featuredProducts = allProducts.slice(0, 5);

  // Get random products for grid (excluding featured ones)
  const randomProducts = allProducts.slice(5, 13);

  const categories = [
    {
      id: "ikanasap",
      name: "Ikan Asap",
      description: "Ikan asap berkualitas tinggi",
      image: "/placeholder.svg?height=200&width=300",
      count: umkmData.ikanasap.length,
    },
    {
      id: "krupukikan",
      name: "Kerupuk Ikan",
      description: "Kerupuk ikan renyah dan gurih",
      image: "/placeholder.svg?height=200&width=300",
      count: umkmData.krupukikan.length,
    },
    {
      id: "terasi",
      name: "Terasi",
      description: "Terasi asli buatan warga",
      image: "/placeholder.svg?height=200&width=300",
      count: umkmData.terasi.length,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <nav className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b w-full">
        <div className="flex justify-between items-center px-4 h-16 container">
          <div className="flex items-center space-x-2">
            <Image
              src={LogoUMKMKetapangelu}
              alt="UMKM Ketapangtelu Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-primary text-xl">
              UMKM KETAPANGTELU
            </span>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground -translate-y-1/2" />
            <Input
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      {!searchQuery && (
        <section className="px-4 py-8 container">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="relative rounded-lg h-[400px] overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="bottom-6 left-6 absolute text-white">
                      <h2 className="mb-2 font-bold text-3xl">
                        {product.title}
                      </h2>
                      <p className="mb-2 text-lg">{product.price}</p>
                      <p className="opacity-90 max-w-md text-sm">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>
      )}

      {/* Category Cards */}
      {!searchQuery && (
        <section className="px-4 py-8 container">
          <h2 className="mb-6 font-bold text-2xl text-center">
            Kategori Produk
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer"
              >
                <CardHeader className="p-0">
                  <div className="relative rounded-t-lg h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="flex justify-between items-center">
                    {category.name}
                    <Badge variant="secondary">{category.count} produk</Badge>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="px-4 py-8 container">
        <h2 className="mb-6 font-bold text-2xl text-center">
          {searchQuery ? `Hasil Pencarian "${searchQuery}"` : "Produk Pilihan"}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              Tidak ada produk yang ditemukan.
            </p>
          </div>
        ) : (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(searchQuery ? filteredProducts : randomProducts).map(
              (product) => (
                <Link key={product.id} href={`/produk/${product.id}`}>
                  <Card className="group hover:shadow-xl h-full transition-all hover:-translate-y-2 duration-300 cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="relative rounded-t-lg h-48 overflow-hidden">
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-4">
                      <CardTitle className="mb-2 text-lg line-clamp-2">
                        {product.title}
                      </CardTitle>
                      <p className="mb-2 font-bold text-primary text-xl">
                        {product.price}
                      </p>
                      <CardDescription className="flex-grow line-clamp-3">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            )}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 mt-12 border-t">
        <div className="px-4 py-8 container">
          <div className="text-center">
            <h3 className="mb-2 font-semibold text-lg">UMKM KETAPANGTELU</h3>
            <p className="text-muted-foreground">
              Produk berkualitas dari UMKM lokal Ketapangtelu
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
