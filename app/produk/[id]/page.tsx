import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAllProducts } from "@/lib/data";
import { ArrowLeft, ExternalLink, Instagram } from "lucide-react";
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
  return products.map((product: any) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const products = getAllProducts();
  const product = products.find((p: any) => p.id === params.id);

  if (!product) {
    notFound();
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
                {product.images.slice(1).map((image: string, index: number) => (
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
            {/* Social Media Links */}
            {product.link && product.link.length > 0 && (
              <div>
                <h2 className="mb-3 font-semibold text-xl">Hubungi Penjual</h2>
                <div className="space-y-2">
                  {product.link.map((url: string, index: number) => (
                    <div key={index}>
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="justify-start bg-transparent w-full"
                        >
                          <Instagram className="mr-2 w-4 h-4" />
                          Instagram
                          <ExternalLink className="ml-auto w-4 h-4" />
                        </Button>
                      </Link>
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="justify-start bg-transparent w-full"
                        >
                          <Instagram className="mr-2 w-4 h-4" />
                          Instagram
                          <ExternalLink className="ml-auto w-4 h-4" />
                        </Button>
                      </Link>
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="justify-start bg-transparent w-full"
                        >
                          <Instagram className="mr-2 w-4 h-4" />
                          Instagram
                          <ExternalLink className="ml-auto w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                  <span className="text-muted-foreground">Asal:</span>
                  <span className="font-medium">Ketapangtelu</span>
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
        <div className="mt-12">
          <h2 className="mb-6 font-bold text-2xl">Produk Lainnya</h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter(
                (p: any) =>
                  p.category === product.category && p.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct: any) => (
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
                      <p className="font-bold text-primary text-sm">
                        {relatedProduct.price}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
