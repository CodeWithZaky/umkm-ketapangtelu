import BackToHome from "@/components/back-to-home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getCategories, getRandomProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  const categories = getCategories();
  const recommendedProducts = getRandomProducts(8);

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
                className="font-medium text-primary text-sm transition-colors"
              >
                Kategori
              </Link>
              <Link
                href="/products"
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
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
        {/* <div className="flex items-center px-4 h-16 container">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Beranda
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <LogoUmkmKetapangtelu />
            <span className="font-bold text-primary text-xl">
              UMKM KETAPANGTELU
            </span>
          </div>
        </div> */}
        <BackToHome />
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="px-4 container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Semua Kategori
            </Badge>
            <h1 className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-4 font-bold text-transparent text-4xl md:text-5xl">
              Kategori Produk
            </h1>
            <p className="mb-6 text-muted-foreground text-lg">
              Jelajahi berbagai kategori produk UMKM berkualitas tinggi dari
              Ketapangtelu
            </p>
            <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm">
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
      <section className="px-4 py-12 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Card className="group hover:shadow-xl h-full transition-all hover:-translate-y-2 duration-300 cursor-pointer">
                <div className="relative rounded-t-lg h-64 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Color Indicator */}
                  <div
                    className={`absolute top-4 left-4 w-4 h-4 ${category.color} rounded-full shadow-lg`}
                  />

                  {/* Product Count Badge */}
                  <div className="top-4 right-4 absolute">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary"
                    >
                      {category.count} produk
                    </Badge>
                  </div>

                  {/* Category Info Overlay */}
                  <div className="right-0 bottom-0 left-0 absolute p-6 text-white">
                    <CardTitle className="mb-2 group-hover:text-primary-foreground text-2xl transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-white/90 line-clamp-2">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-muted/30 py-12">
        <div className="px-4 container">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl">Produk Rekomendasi</h2>
            <p className="text-muted-foreground">
              Produk pilihan dari berbagai kategori
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((product) => (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card className="group hover:shadow-lg h-full transition-all hover:-translate-y-1 duration-300 cursor-pointer">
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
                        className="bg-white/90 text-primary text-xs"
                      >
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="mb-2 text-sm line-clamp-2">
                      {product.title}
                    </CardTitle>
                    <p className="mb-1 font-bold text-primary text-lg">
                      {product.price}
                    </p>
                    <CardDescription className="text-xs line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products">
              <Button variant="outline" className="bg-transparent px-8">
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
