import BackToHome from "@/components/back-to-home";
import DetailProductImage from "@/components/detail-product-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAllProducts, getProductsByCategory } from "@/lib/data";
import { Home, MapPin, Phone, User } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <DetailProductImage product={product} />

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
              <p className="mb-4 text-3xl font-bold text-primary">
                {product.price}
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="mb-3 text-xl font-semibold">Deskripsi Produk</h2>
              <p className="leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Seller Information */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Informasi Penjual</h2>
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">{product.seller.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.seller.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        Dusun {product.seller.subVillage}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.seller.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`https://wa.me/62${product.seller.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
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
                        <MapPin className="mr-2 h-4 w-4" />
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
            <h2 className="mb-6 text-2xl font-bold">Produk Sejenis</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/produk/${relatedProduct.id}`}
                >
                  <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="relative h-32 overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedProduct.images[0] || "/placeholder.svg"}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <CardTitle className="mb-1 line-clamp-2 text-sm">
                        {relatedProduct.title}
                      </CardTitle>
                      <p className="mb-1 text-sm font-bold text-primary">
                        {relatedProduct.price}
                      </p>
                      <p className="text-xs text-muted-foreground">
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
