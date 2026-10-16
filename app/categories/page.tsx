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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Semua Kategori
            </Badge>
            <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Kategori Produk
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Jelajahi berbagai kategori produk UMKM berkualitas tinggi dari
              Ketapangtelu
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="group h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Color Indicator */}
                  <div
                    className={`absolute left-4 top-4 h-4 w-4 ${category.color} rounded-full shadow-lg`}
                  />

                  {/* Product Count Badge */}
                  <div className="absolute right-4 top-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary"
                    >
                      {category.count} produk
                    </Badge>
                  </div>

                  {/* Category Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <CardTitle className="mb-2 text-2xl transition-colors group-hover:text-primary-foreground">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-white/90">
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
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Produk Rekomendasi</h2>
            <p className="text-muted-foreground">
              Produk pilihan dari berbagai kategori
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((product) => (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card className="group h-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-xs text-primary"
                      >
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="mb-2 line-clamp-2 text-sm">
                      {product.title}
                    </CardTitle>
                    <p className="mb-1 text-lg font-bold text-primary">
                      {product.price}
                    </p>
                    <CardDescription className="line-clamp-2 text-xs">
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
