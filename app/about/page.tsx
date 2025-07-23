import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Users, Award, Heart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const teamMembers = [
    {
      division: "Koordinator",
      members: ["Ahmad Rizki Pratama", "Siti Nurhaliza"],
    },
    {
      division: "Divisi Pemasaran",
      members: ["Budi Santoso", "Dewi Sartika", "Eko Prasetyo"],
    },
    {
      division: "Divisi Teknologi",
      members: ["Fajar Nugroho", "Gita Permata", "Hendra Wijaya"],
    },
    {
      division: "Divisi Dokumentasi",
      members: ["Indira Sari", "Joko Widodo", "Kartika Dewi"],
    },
    {
      division: "Divisi Keuangan",
      members: ["Lestari Wulandari", "Muhammad Iqbal"],
    },
    {
      division: "Divisi Hubungan Masyarakat",
      members: ["Nanda Pratiwi", "Oki Setiawan", "Putri Maharani"],
    },
  ]

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
              <Link href="/about" className="text-sm font-medium text-primary transition-colors">
                Tentang
              </Link>
              <Link
                href="/categories"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
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

      {/* Hero Section with Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=KKN+Team+Photo"
            alt="KKN Kelompok 12 Team Photo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative container px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Tentang Kami
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              KKN KELOMPOK 12
              <br />
              <span className="text-primary-foreground">UNISLA X DESA KETAPANGTELU</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Membangun dan memberdayakan UMKM lokal melalui inovasi teknologi dan kolaborasi yang berkelanjutan
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>15 Mahasiswa</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>6 Divisi</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>1 Misi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-none shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi katalis dalam pengembangan UMKM Desa Ketapangtelu yang berkelanjutan, inovatif, dan berdaya
                  saing tinggi melalui pemanfaatan teknologi digital dan pemberdayaan masyarakat lokal.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-none shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Mengembangkan platform digital untuk memasarkan produk UMKM lokal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Memberikan pelatihan dan pendampingan kepada pelaku UMKM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Membangun jaringan kerjasama yang berkelanjutan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Meningkatkan kesadaran masyarakat terhadap produk lokal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Credits */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tim KKN Kelompok 12</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mahasiswa UNISLA yang berdedikasi untuk memajukan UMKM Desa Ketapangtelu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((team, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-center text-primary">{team.division}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {team.members.map((member, memberIndex) => (
                      <li key={memberIndex} className="text-center py-2 px-3 bg-muted/50 rounded-lg text-sm">
                        {member}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Mari Bersama Memajukan UMKM Lokal</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dukung produk-produk berkualitas dari UMKM Ketapangtelu dan jadilah bagian dari gerakan pemberdayaan
              ekonomi lokal yang berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="px-8">
                  Lihat Produk UMKM
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-8 bg-transparent">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
