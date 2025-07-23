import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCategories, getRandomProducts } from "@/lib/data"

export default function CategoriesPage() {
  const categories = getCategories()
  const recommendedProducts = getRandomProducts(8)

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
              Beranda
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">UMKM KETAPANGTELU</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm">
              Semua Kategori
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kategori Produk
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Jelajahi berbagai kategori produk UMKM berkualitas tinggi dari Ketapangtelu
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{categories.length} Kategori Tersedia</span>
              <span>•</span>
              <span>Produk Lokal</span>
              <span>•</span>
              <span>Kualitas Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Color Indicator */}
                  <div className={`absolute top-4 left-4 w-4 h-4 ${category.color} rounded-full shadow-lg`} />

                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {category.count} produk
                    </Badge>
                  </div>

                  {/* Category Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary-foreground transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-white/90 line-clamp-2">{category.description}</CardDescription>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-muted/30 py-12">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Produk Rekomendasi</h2>
            <p className="text-muted-foreground">Produk pilihan dari berbagai kategori</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge variant="secondary" className="bg-white/90 text-primary text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="text-sm mb-2 line-clamp-2">{product.title}</CardTitle>
                    <p className="text-lg font-bold text-primary mb-1">{product.price}</p>
                    <CardDescription className="text-xs line-clamp-2">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" className="px-8 bg-transparent">
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
