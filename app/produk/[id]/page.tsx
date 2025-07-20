import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getAllProducts } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const products = getAllProducts()
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Button>
          </Link>
          <span className="text-xl font-bold text-primary">UMKM KETAPANGTELU</span>
        </div>
      </nav>

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24 overflow-hidden rounded-lg">
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
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-3">Deskripsi Produk</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Social Media Links */}
            {product.link && product.link.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Hubungi Penjual</h2>
                <div className="space-y-2">
                  {product.link.map((url, index) => (
                    <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                    </Link>
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
          <h2 className="text-2xl font-bold mb-6">Produk Lainnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/produk/${relatedProduct.id}`}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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
                      <CardTitle className="text-sm mb-1 line-clamp-2">{relatedProduct.title}</CardTitle>
                      <p className="text-sm font-bold text-primary">{relatedProduct.price}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
