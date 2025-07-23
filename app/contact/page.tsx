import Link from "next/link"
import { ArrowLeft, ShoppingBag, Instagram, Phone, Mail, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  const contactPersons = [
    {
      name: "Ahmad Rizki Pratama",
      role: "Koordinator KKN",
      phone: "+62 812-3456-7890",
      whatsapp: "https://wa.me/6281234567890",
    },
    {
      name: "Siti Nurhaliza",
      role: "Koordinator UMKM",
      phone: "+62 813-9876-5432",
      whatsapp: "https://wa.me/6281398765432",
    },
  ]

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@umkm_ketapangtelu",
      url: "https://instagram.com/umkm_ketapangtelu",
      icon: Instagram,
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
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
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
              <Link href="/contact" className="text-sm font-medium text-primary transition-colors">
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
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Kontak & Informasi
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Kami siap membantu Anda dengan informasi produk UMKM dan kerjasama yang berkelanjutan
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                24/7 Online
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Respon Cepat
              </span>
              <span>•</span>
              <span>Konsultasi Gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Persons */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Person</h2>
              <div className="space-y-6">
                {contactPersons.map((person, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg">{person.name}</h3>
                          <p className="text-sm text-muted-foreground">{person.role}</p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{person.phone}</span>
                      </div>
                      <Link href={person.whatsapp} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-green-50 hover:bg-green-100 border-green-200"
                        >
                          <Phone className="w-4 h-4 mr-2 text-green-600" />
                          WhatsApp
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Media Sosial</h2>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="flex items-center gap-4 p-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <social.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{social.platform}</h3>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                        <ArrowLeft className="w-4 h-4 rotate-180 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Email</h2>
              <Card className="p-6">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Email Resmi</h3>
                    <Link href="mailto:umkm.ketapangtelu@gmail.com" className="text-sm text-primary hover:underline">
                      umkm.ketapangtelu@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map and Location */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Lokasi</h2>

              {/* Google Maps Embed */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0123456789!2d112.1234567!3d-7.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKetapangtelu%2C%20Lamongan!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Desa Ketapangtelu</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Kecamatan Sukodadi, Kabupaten Lamongan
                        <br />
                        Jawa Timur, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Senin - Jumat</span>
                  <span className="text-sm font-medium">08:00 - 17:00 WIB</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sabtu</span>
                  <span className="text-sm font-medium">08:00 - 15:00 WIB</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm">Minggu</span>
                  <span className="text-sm font-medium text-muted-foreground">Tutup</span>
                </div>
                <Separator />
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    * Untuk konsultasi dan pemesanan produk dapat dilakukan kapan saja melalui WhatsApp
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/products">
                <Button className="w-full h-12">Lihat Produk</Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" className="w-full h-12 bg-transparent">
                  Jelajahi Kategori
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pertanyaan Umum</h2>
            <p className="text-muted-foreground">Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Bagaimana cara memesan produk?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Anda dapat menghubungi kami melalui WhatsApp atau Instagram untuk melakukan pemesanan. Tim kami akan
                  membantu proses pemesanan hingga pengiriman.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Apakah ada pengiriman ke luar kota?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ya, kami melayani pengiriman ke seluruh Indonesia. Biaya pengiriman akan disesuaikan dengan lokasi
                  tujuan dan berat produk.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Bagaimana dengan kualitas produk?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Semua produk UMKM kami diproduksi dengan standar kualitas tinggi dan higienis. Kami menjamin kesegaran
                  dan kualitas setiap produk yang dikirim.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Apakah bisa kerjasama untuk reseller?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tentu saja! Kami terbuka untuk kerjasama reseller dan distributor. Hubungi tim kami untuk informasi
                  lebih lanjut mengenai program kemitraan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
