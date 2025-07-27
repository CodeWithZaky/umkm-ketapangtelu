"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllProducts, getCategories } from "@/lib/data";
import { ArrowLeft, Grid3X3, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function ProductsPage() {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [sortBy, setSortBy] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const categories = getCategories();
  const allProducts = useMemo(() => getAllProducts(), []);

  // Filter and sort products with useMemo to prevent unnecessary recalculations
  const products = useMemo(() => {
    let filteredProducts = [...allProducts];

    // Filter by category
    if (filterCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterCategory
      );
    }

    // Sort products
    switch (sortBy) {
      case "name-asc":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        filteredProducts.sort((a, b) => {
          const priceA = Number.parseInt(a.price.replace(/\D/g, ""));
          const priceB = Number.parseInt(b.price.replace(/\D/g, ""));
          return priceA - priceB;
        });
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => {
          const priceA = Number.parseInt(a.price.replace(/\D/g, ""));
          const priceB = Number.parseInt(b.price.replace(/\D/g, ""));
          return priceB - priceA;
        });
        break;
      default:
        // Use deterministic order based on product ID for consistency
        filteredProducts.sort((a, b) => {
          const hashA = a.id
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const hashB = b.id
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
          return hashB - hashA; // Reverse order for variety
        });
    }

    return filteredProducts;
  }, [allProducts, filterCategory, sortBy]);

  // Reset visible products when filter/sort changes
  useEffect(() => {
    setVisibleProducts(6);
  }, [filterCategory, sortBy]);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleProducts((prev) => Math.min(prev + 6, products.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedProducts = products.slice(0, visibleProducts);
  const hasMore = visibleProducts < products.length;

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
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Kategori
              </Link>
              <Link
                href="/products"
                className="font-medium text-primary text-sm transition-colors"
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
              Beranda
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <span className="font-bold text-primary text-xl">
              UMKM KETAPANGTELU
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="px-4 container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Semua Produk
            </Badge>
            <h1 className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-4 font-bold text-transparent text-4xl md:text-5xl">
              Produk UMKM
            </h1>
            <p className="mb-6 text-muted-foreground text-lg">
              Temukan berbagai produk berkualitas tinggi dari UMKM Ketapangtelu
            </p>
            <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm">
              <span>{allProducts.length} Produk Tersedia</span>
              <span>•</span>
              <span>Kualitas Premium</span>
              <span>•</span>
              <span>Produksi Lokal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="px-4 py-8 container">
        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex sm:flex-row flex-col gap-4">
            {/* Category Filter */}
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Pilih Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="name-asc">Nama A-Z</SelectItem>
                <SelectItem value="name-desc">Nama Z-A</SelectItem>
                <SelectItem value="price-asc">Harga Terendah</SelectItem>
                <SelectItem value="price-desc">Harga Tertinggi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="text-muted-foreground text-sm">
            Menampilkan {displayedProducts.length} dari {products.length} produk
          </div>
        </div>

        {/* Products Grid */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product, index) => (
            <Link key={product.id} href={`/produk/${product.id}`}>
              <Card className="group hover:shadow-xl h-full transition-all hover:-translate-y-2 duration-300 cursor-pointer">
                <div className="relative rounded-t-lg h-64 overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="top-4 right-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary"
                    >
                      {product.category}
                    </Badge>
                  </div>

                  {/* Loading animation for newly loaded items */}
                  {index >= visibleProducts - 6 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent animate-pulse" />
                  )}
                </div>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 group-hover:text-primary text-xl line-clamp-2 transition-colors">
                    {product.title}
                  </CardTitle>
                  <p className="mb-3 font-bold text-primary text-2xl">
                    {product.price}
                  </p>
                  <CardDescription className="mb-3 text-sm line-clamp-2 leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <User className="w-3 h-3" />
                    <span>{product.seller.name}</span>
                    <span>•</span>
                    <span>Dusun {product.seller.subVillage}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              variant="outline"
              size="lg"
              className="bg-transparent px-12 py-3"
            >
              {isLoading ? (
                <>
                  <div className="mr-2 border-primary border-b-2 rounded-full w-4 h-4 animate-spin" />
                  Memuat...
                </>
              ) : (
                <>
                  Lihat Produk Lainnya ({products.length - visibleProducts}{" "}
                  tersisa)
                </>
              )}
            </Button>
          </div>
        )}

        {/* No More Products */}
        {!hasMore && products.length > 6 && (
          <div className="mt-12 py-8 text-center">
            <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
              <Grid3X3 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">
              Semua produk telah ditampilkan
            </p>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="py-16 text-center">
            <div className="flex justify-center items-center bg-muted mx-auto mb-6 rounded-full w-24 h-24">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="mb-2 font-semibold text-xl">Tidak Ada Produk</h3>
            <p className="mb-6 text-muted-foreground">
              Tidak ada produk yang sesuai dengan filter yang dipilih.
            </p>
            <Button
              onClick={() => {
                setFilterCategory("all");
                setSortBy("default");
              }}
              variant="outline"
              className="bg-transparent"
            >
              Reset Filter
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
