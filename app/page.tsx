"use client";

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
  type CarouselApi,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getAllProducts, getCategories, getShuffledProducts } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(3);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [api, setApi] = useState<CarouselApi>();

  const allProducts = useMemo(() => getAllProducts(), []);
  const categories = useMemo(() => getCategories(), []);
  const shuffledProducts = useMemo(() => getShuffledProducts(), []);

  // Auto-play carousel setup
  useEffect(() => {
    if (!api) return;

    const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });

    // Enable infinite loop
    api.on("select", () => {
      // This ensures infinite scrolling
    });
  }, [api]);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts;
    return allProducts.filter((product: any) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allProducts]);

  // Get featured products for carousel (first 6 products)
  const featuredProducts = useMemo(
    () => allProducts.slice(0, 6),
    [allProducts]
  );

  const navigationItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Kategori", href: "/categories" },
    { name: "Produk", href: "/products" },
    { name: "Kontak", href: "/contact" },
  ];

  const handleLoadMoreCategories = () => {
    setVisibleCategories((prev) => Math.min(prev + 3, categories.length));
  };

  const handleLoadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 8, shuffledProducts.length));
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <nav className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b w-full">
        {/* Desktop Navigation */}
        <div className="hidden md:block border-b border-border/40">
          <div className="px-4 container">
            <div className="flex justify-center items-center space-x-8 h-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 h-16 container">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            {!isSearchExpanded && (
              <>
                <ShoppingBag className="w-6 h-6 text-primary" />
                <span className="font-bold text-primary text-xl">
                  UMKM KETAPANGTELU
                </span>
              </>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            {/* Desktop Search */}
            <div className="hidden md:block relative w-full max-w-md">
              <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground -translate-y-1/2" />
              <Input
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Mobile Search */}
            <div className="md:hidden relative flex items-center">
              {!isSearchExpanded ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchExpanded(true)}
                >
                  <Search className="w-5 h-5" />
                </Button>
              ) : (
                <div className="slide-in-from-right-2 flex items-center space-x-2 animate-in duration-200">
                  <div className="w-full">
                    <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground -translate-y-1/2" />
                    <Input
                      placeholder="Cari produk..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 text-sm"
                      autoFocus
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsSearchExpanded(false);
                      setSearchQuery("");
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      {!searchQuery && (
        <section className="px-4 py-8 container">
          <Carousel
            className="w-full"
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {featuredProducts.map((product: any, index: number) => (
                <CarouselItem key={index}>
                  <Link href={`/produk/${product.id}`}>
                    <div className="group relative rounded-lg h-[400px] overflow-hidden cursor-pointer">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="bottom-6 left-6 absolute text-white">
                        <Badge
                          variant="secondary"
                          className="bg-white/20 mb-2 border-white/30 text-white"
                        >
                          {product.category}
                        </Badge>
                        <h2 className="mb-2 font-bold text-3xl">
                          {product.title}
                        </h2>
                        <p className="mb-2 font-semibold text-primary-foreground text-lg">
                          {product.price}
                        </p>
                        <p className="opacity-90 max-w-md text-sm line-clamp-2">
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

      {/* Category Cards */}
      {!searchQuery && (
        <section className="px-4 py-8 container">
          <h2 className="mb-6 font-bold text-2xl text-center">
            Kategori Produk
          </h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            {categories.slice(0, visibleCategories).map((category) => (
              <Link key={category.id} href={`/category/${category.id}`}>
                <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer">
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
              </Link>
            ))}
          </div>

          {/* Load More Categories Button */}
          {visibleCategories < categories.length && (
            <div className="mt-8 text-center">
              <Button
                onClick={handleLoadMoreCategories}
                variant="outline"
                className="bg-transparent px-8"
              >
                Lihat Kategori Lainnya
              </Button>
            </div>
          )}
        </section>
      )}

      {/* Products Grid */}
      <section className="px-4 py-8 container">
        <h2 className="mb-6 font-bold text-2xl text-center">
          {searchQuery ? `Hasil Pencarian "${searchQuery}"` : "Produk Pilihan"}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="py-12 text-center">
            <div className="flex justify-center items-center bg-muted mx-auto mb-6 rounded-full w-24 h-24">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              Tidak ada produk yang ditemukan untuk "{searchQuery}".
            </p>
            <Button
              variant="outline"
              className="bg-transparent mt-4"
              onClick={() => setSearchQuery("")}
            >
              Hapus Pencarian
            </Button>
          </div>
        ) : (
          <>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(searchQuery
                ? filteredProducts
                : shuffledProducts.slice(0, visibleProducts)
              ).map((product: any) => (
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
                        <div className="top-2 right-2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-primary"
                          >
                            {product.category}
                          </Badge>
                        </div>
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
              ))}
            </div>

            {/* Load More Products Button */}
            {!searchQuery && visibleProducts < shuffledProducts.length && (
              <div className="mt-8 text-center">
                <Button
                  onClick={handleLoadMoreProducts}
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

      {/* Footer */}
      <footer className="bg-muted/50 mt-12 border-t">
        <div className="px-4 py-8 container">
          <div className="text-center">
            <h3 className="mb-2 font-semibold text-lg">UMKM KETAPANGTELU</h3>
            <p className="text-muted-foreground">
              Produk berkualitas dari UMKM lokal Ketapangtelu
            </p>
            <div className="flex justify-center space-x-6 mt-4 text-muted-foreground text-sm">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
