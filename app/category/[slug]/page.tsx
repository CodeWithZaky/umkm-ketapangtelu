import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { umkmData, getProductsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [{ slug: "ikanasap" }, { slug: "krupukikan" }, { slug: "terasi" }]
}

const categoryInfo = {
  ikanasap: {
    name: "Ikan Asap",
    description: "Koleksi lengkap ikan asap berkualitas tinggi dengan cita rasa autentik khas Ketapangtelu",
    color: "bg-orange-500",
  },
  krupukikan: {
    name: "Kerupuk Ikan",
    description: "Berbagai jenis kerupuk ikan renyah dan gurih, cocok untuk camilan atau pelengkap makan",
    color: "bg-yellow-500",
  },
  terasi: {
    name: "Terasi",
    description: "Terasi premium dengan aroma khas dan rasa yang autentik untuk masakan nusantara",
    color: "bg-red-500",
  },
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const products = getProductsByCategory(params.slug)
  const category = categoryInfo[params.slug as keyof typeof categoryInfo]

  if (!category || products.length === 0) {
    notFound()
  }

  // Create masonry layout pattern - different heights for visual variety
  const getMasonryClass = (index: number) => {
    const patterns = [
      "row-span-2", // tall
      "row-span-1", // normal
      "row-span-1", // normal
      "row-span-3", // extra tall
      "row-span-1", // normal
      "row-span-2", // tall
      "row-span-1", // normal
      "row-span-1", // normal
      "row-span-2", // tall
    ]
    return patterns[index % patterns.length]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Desktop Navigation */}
        <div className="hidden md:block border-b border-border/40">
          <div className="container px-4">
            <div className="flex items-center justify-center h-12 space-x-8">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Tentang
              </Link>
              <Link href="/categories" className="text-sm font-medium text-primary transition-colors">
                Kategori
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Produk
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Kontak
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container flex h-16 items-center px-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">UMKM KETAPANGTELU</span>
          </div>
        </div>
      </nav>

      {/* Category Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm">
              Kategori Produk
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${category.color}`} />
                {products.length} Produk Tersedia
              </span>
              <span>•</span>
              <span>Kualitas Premium</span>
              <span>•</span>
              <span>Produksi Lokal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Masonry Grid */}
      <section className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[200px]">
          {products.map((product, index) => {
            const masonryClass = getMasonryClass(index)
            const isLarge = masonryClass.includes("row-span-3") || masonryClass.includes("row-span-2")

            return (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full ${masonryClass} overflow-hidden`}
                >
                  <div className="relative h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative h-full flex flex-col justify-end p-4 text-white">
                      <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                        <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                          {category.name}
                        </Badge>

                        <CardTitle className={`mb-2 line-clamp-2 ${isLarge ? "text-xl" : "text-lg"}`}>
                          {product.title}
                        </CardTitle>

                        <p className={`font-bold text-primary-foreground mb-2 ${isLarge ? "text-2xl" : "text-xl"}`}>
                          {product.price}
                        </p>

                        {isLarge && (
                          <CardDescription className="text-white/80 line-clamp-3 text-sm">
                            {product.description}
                          </CardDescription>
                        )}
                      </div>

                      {/* Hover Effect Indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Belum Ada Produk</h3>
            <p className="text-muted-foreground mb-6">Produk untuk kategori ini sedang dalam persiapan.</p>
            <Link href="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Related Categories */}
      <section className="bg-muted/30 py-12">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Kategori Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {Object.entries(categoryInfo)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, info]) => (
                <Link key={slug} href={`/category/${slug}`}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 ${info.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                      >
                        <ShoppingBag className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="mb-2">{info.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {umkmData[slug as keyof typeof umkmData].length} produk tersedia
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
