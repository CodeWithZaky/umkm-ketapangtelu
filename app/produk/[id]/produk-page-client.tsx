"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getAllProducts, getProductsByCategory } from "@/lib/data";
import { ArrowLeft, Home, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPageClient({ params }: ProductPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const products = getAllProducts();
    const foundProduct = products.find((p) => p.id === params.id);

    if (!foundProduct) {
      notFound();
      return;
    }

    setProduct(foundProduct);

    // Get related products from the same category
    const related = getProductsByCategory(foundProduct.category)
      .filter((p) => p.id !== foundProduct.id)
      .slice(0, 4);

    setRelatedProducts(related);
  }, [params.id]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!product) {
    return (
      <div className="flex justify-center items-center bg-background min-h-screen">
        <div className="text-center">
          <div className="mx-auto mb-4 border-primary border-b-2 rounded-full w-12 h-12 animate-spin"></div>
          <p>Memuat produk...</p>
        </div>
      </div>
    );
  }

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
              Kembali
            </Button>
          </Link>
          <span className="font-bold text-primary text-xl">
            UMKM KETAPANGTELU
          </span>
        </div>
      </nav>

      <div className="px-4 py-8 container">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Product Images Carousel */}
          <div className="space-y-4">
            {/* Main Carousel */}
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent>
                {product.images.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg h-96 overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.title} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {product.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="gap-2 grid grid-cols-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`relative h-20 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      current === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="mb-4 font-bold text-3xl">{product.title}</h1>
              <p className="mb-4 font-bold text-primary text-3xl">
                {product.price}
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="mb-3 font-semibold text-xl">Deskripsi Produk</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Seller Information */}
            <div>
              <h2 className="mb-4 font-semibold text-xl">Informasi Penjual</h2>
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">{product.seller.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {product.seller.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">
                        Dusun {product.seller.subVillage}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {product.seller.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`https://wa.me/62${product.seller.phone.substring(
                        1
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="flex-1">
                        <Phone className="mr-2 w-4 h-4" />
                        WhatsApp
                      </Button>
                    </Link>
                    <Link
                      href={product.link.map}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                      >
                        <MapPin className="mr-2 w-4 h-4" />
                        Lokasi
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* Additional Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Produk</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kategori:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Penjual:</span>
                  <span className="font-medium">{product.seller.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lokasi:</span>
                  <span className="font-medium">
                    Dusun {product.seller.subVillage}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="outline" className="text-green-600">
                    Tersedia
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 font-bold text-2xl">Produk Sejenis</h2>
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/produk/${relatedProduct.id}`}
                >
                  <Card className="group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="relative rounded-t-lg h-32 overflow-hidden">
                        <Image
                          src={relatedProduct.images[0] || "/placeholder.svg"}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <CardTitle className="mb-1 text-sm line-clamp-2">
                        {relatedProduct.title}
                      </CardTitle>
                      <p className="mb-1 font-bold text-primary text-sm">
                        {relatedProduct.price}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {relatedProduct.seller.name}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
