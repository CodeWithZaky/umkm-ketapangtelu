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
import { Grid3X3, Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface ProductsClientProps {
  initialQuery: string;
}

export default function ProductsClient({ initialQuery }: ProductsClientProps) {
  const router = useRouter();

  const [visibleProducts, setVisibleProducts] = useState(6);
  const [sortBy, setSortBy] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const categories = getCategories();
  const allProducts = useMemo(() => getAllProducts(), []);

  const isSearching = initialQuery.trim().length > 0;

  // Filter and sort products
  const products = useMemo(() => {
    let filteredProducts = [...allProducts];

    // 🔍 Filter by search query
    if (initialQuery.trim()) {
      const q = initialQuery.toLowerCase().trim();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.seller?.name?.toLowerCase().includes(q) ||
          product.seller?.subVillage?.toLowerCase().includes(q),
      );
    }

    // Filter by category
    if (filterCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterCategory,
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
        filteredProducts.sort((a, b) => {
          const hashA = a.id
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const hashB = b.id
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
          return hashB - hashA;
        });
    }

    return filteredProducts;
  }, [allProducts, filterCategory, sortBy, initialQuery]);

  // Reset visible products when filter/sort/query changes
  useEffect(() => {
    setVisibleProducts(6);
  }, [filterCategory, sortBy, initialQuery]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts((prev) => Math.min(prev + 6, products.length));
      setIsLoading(false);
    }, 500);
  };

  const handleClearSearch = () => {
    router.push("/products");
  };

  const displayedProducts = products.slice(0, visibleProducts);
  const hasMore = visibleProducts < products.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              {isSearching ? "Hasil Pencarian" : "Semua Produk"}
            </Badge>
            <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {isSearching ? `"${initialQuery}"` : "Produk UMKM"}
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              {isSearching
                ? `${products.length} produk ditemukan untuk pencarianmu`
                : "Temukan berbagai produk berkualitas tinggi dari UMKM Ketapangtelu"}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{allProducts.length} Produk Tersedia</span>
              <span>•</span>
              <span>Kualitas Premium</span>
              <span>•</span>
              <span>Produksi Lokal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Search Indicator */}
      {isSearching && (
        <section className="container px-4 pt-6">
          <div className="flex items-center justify-between gap-4 rounded-lg border bg-muted/50 px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Mencari:</span>
              <span className="font-semibold">"{initialQuery}"</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="gap-1"
            >
              <X className="h-4 w-4" />
              Hapus Pencarian
            </Button>
          </div>
        </section>
      )}

      {/* Filters and Sort */}
      <section className="container px-4 py-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-4 sm:flex-row">
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

          <div className="text-sm text-muted-foreground">
            Menampilkan {displayedProducts.length} dari {products.length} produk
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product, index) => (
            <Link key={product.id} href={`/produk/${product.id}`}>
              <Card className="group h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary"
                    >
                      {product.category}
                    </Badge>
                  </div>

                  {index >= visibleProducts - 6 && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-primary/10 to-transparent" />
                  )}
                </div>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 line-clamp-2 text-xl transition-colors group-hover:text-primary">
                    {product.title}
                  </CardTitle>
                  <p className="mb-3 text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                  <CardDescription className="mb-3 line-clamp-2 text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span>{product.seller.name}</span>
                    <span>•</span>
                    <span>Dusun {product.seller.subVillage}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
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
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-primary" />
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
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Grid3X3 className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground">
              Semua produk telah ditampilkan
            </p>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              {isSearching ? (
                <Search className="h-12 w-12 text-muted-foreground" />
              ) : (
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              )}
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {isSearching
                ? `Tidak Ada Hasil untuk "${initialQuery}"`
                : "Tidak Ada Produk"}
            </h3>
            <p className="mb-6 text-muted-foreground">
              {isSearching
                ? "Coba kata kunci lain atau periksa ejaan pencarianmu."
                : "Tidak ada produk yang sesuai dengan filter yang dipilih."}
            </p>
            <Button
              onClick={() => {
                if (isSearching) {
                  handleClearSearch();
                } else {
                  setFilterCategory("all");
                  setSortBy("default");
                }
              }}
              variant="outline"
              className="bg-transparent"
            >
              {isSearching ? "Hapus Pencarian" : "Reset Filter"}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
