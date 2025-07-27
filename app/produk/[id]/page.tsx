import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAllProducts, getProductsByCategory } from "@/lib/data";
import { ArrowLeft, Home, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const products = getAllProducts();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

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
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative rounded-lg h-96 overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="gap-2 grid grid-cols-3">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg h-24 overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} ${index + 2}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
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
