"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { umkmData, getAllProducts } from "@/lib/data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const allProducts = getAllProducts()

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allProducts
    return allProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, allProducts])

  // Get featured products for carousel
  const featuredProducts = allProducts.slice(0, 5)

  // Get random products for grid (excluding featured ones)
  const randomProducts = allProducts.slice(5, 13)

  const categories = [
    {
      id: "ikanasap",
      name: "Ikan Asap",
      description: "Ikan asap berkualitas tinggi",
      image: "/placeholder.svg?height=200&width=300",
      count: umkmData.ikanasap.length,
    },
    {
      id: "krupukikan",
      name: "Kerupuk Ikan",
      description: "Kerupuk ikan renyah dan gurih",
      image: "/placeholder.svg?height=200&width=300",
      count: umkmData.krupukikan.length,
    },
    {
      id: "terasi",
      name: "Terasi",
      description: "Terasi asli buatan warga",
      image: "/placeholder.svg?height=200&width=300",
      count: umkmData.terasi.length,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">UMKM KETAPANGTELU</span>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      {!searchQuery && (
        <section className="container px-4 py-8">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                      <p className="text-lg mb-2">{product.price}</p>
                      <p className="text-sm opacity-90 max-w-md">{product.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>
      )}

      {/* Category Cards */}
      {!searchQuery && (
        <section className="container px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Kategori Produk</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="flex items-center justify-between">
                    {category.name}
                    <Badge variant="secondary">{category.count} produk</Badge>
                  </CardTitle>
                  <CardDescription className="mt-2">{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="container px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {searchQuery ? `Hasil Pencarian "${searchQuery}"` : "Produk Pilihan"}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Tidak ada produk yang ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(searchQuery ? filteredProducts : randomProducts).map((product) => (
              <Link key={product.id} href={`/produk/${product.id}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <CardTitle className="text-lg mb-2 line-clamp-2">{product.title}</CardTitle>
                    <p className="text-xl font-bold text-primary mb-2">{product.price}</p>
                    <CardDescription className="line-clamp-3 flex-grow">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-12">
        <div className="container px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">UMKM KETAPANGTELU</h3>
            <p className="text-muted-foreground">Produk berkualitas dari UMKM lokal Ketapangtelu</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
