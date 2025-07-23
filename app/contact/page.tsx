import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";

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
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@umkm_ketapangtelu",
      url: "https://instagram.com/umkm_ketapangtelu",
      icon: Instagram,
    },
  ];

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
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Produk
              </Link>
              <Link
                href="/contact"
                className="font-medium text-primary text-sm transition-colors"
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
              Beranda
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <span className="font-bold text-primary text-xl">
              UMKM KETAPANGTELU
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="px-4 container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Hubungi Kami
            </Badge>
            <h1 className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-4 font-bold text-transparent text-4xl md:text-5xl">
              Kontak & Informasi
            </h1>
            <p className="mb-6 text-muted-foreground text-lg">
              Kami siap membantu Anda dengan informasi produk UMKM dan kerjasama
              yang berkelanjutan
            </p>
            <div className="flex justify-center items-center gap-4 text-muted-foreground text-sm">
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
      <section className="px-4 py-12 container">
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Persons */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 font-bold text-2xl">Contact Person</h2>
              <div className="space-y-6">
                {contactPersons.map((person, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg p-6 transition-shadow duration-300"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3">
                        <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg">{person.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            {person.role}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{person.phone}</span>
                      </div>
                      <Link
                        href={person.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="justify-start bg-green-50 hover:bg-green-100 border-green-200 w-full"
                        >
                          <Phone className="mr-2 w-4 h-4 text-green-600" />
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
              <h2 className="mb-6 font-bold text-2xl">Media Sosial</h2>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="hover:shadow-lg p-4 transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                      <CardContent className="flex items-center gap-4 p-0">
                        <div className="flex justify-center items-center bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg w-12 h-12">
                          <social.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{social.platform}</h3>
                          <p className="text-muted-foreground text-sm">
                            {social.handle}
                          </p>
                        </div>
                        <ArrowLeft className="w-4 h-4 text-muted-foreground rotate-180" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <h2 className="mb-6 font-bold text-2xl">Email</h2>
              <Card className="p-6">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="flex justify-center items-center bg-blue-100 rounded-lg w-12 h-12">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Email Resmi</h3>
                    <Link
                      href="mailto:umkm.ketapangtelu@gmail.com"
                      className="text-primary text-sm hover:underline"
                    >
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
              <h2 className="mb-6 font-bold text-2xl">Lokasi</h2>

              {/* Google Maps Embed */}
              <Card className="overflow-hidden">
                <div className="relative bg-muted h-64">
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
                    <MapPin className="flex-shrink-0 mt-1 w-5 h-5 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Desa Ketapangtelu</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Kecamatan Karangbinangun, Kabupaten Lamongan
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
                  <span className="font-medium text-sm">08:00 - 17:00 WIB</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sabtu</span>
                  <span className="font-medium text-sm">08:00 - 15:00 WIB</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm">Minggu</span>
                  <span className="font-medium text-muted-foreground text-sm">
                    Tutup
                  </span>
                </div>
                <Separator />
                <div className="bg-primary/5 mt-4 p-3 rounded-lg">
                  <p className="text-muted-foreground text-xs">
                    * Untuk konsultasi dan pemesanan produk dapat dilakukan
                    kapan saja melalui WhatsApp
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="gap-4 grid grid-cols-2">
              <Link href="/products">
                <Button className="w-full h-12">Lihat Produk</Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="outline"
                  className="bg-transparent w-full h-12"
                >
                  Jelajahi Kategori
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="px-4 container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl">Pertanyaan Umum</h2>
            <p className="text-muted-foreground">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">
                  Bagaimana cara memesan produk?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Anda dapat menghubungi kami melalui WhatsApp atau Instagram
                  untuk melakukan pemesanan. Tim kami akan membantu proses
                  pemesanan hingga pengiriman.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">
                  Apakah ada pengiriman ke luar kota?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ya, kami melayani pengiriman ke seluruh Indonesia. Biaya
                  pengiriman akan disesuaikan dengan lokasi tujuan dan berat
                  produk.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">
                  Bagaimana dengan kualitas produk?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Semua produk UMKM kami diproduksi dengan standar kualitas
                  tinggi dan higienis. Kami menjamin kesegaran dan kualitas
                  setiap produk yang dikirim.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">
                  Apakah bisa kerjasama untuk reseller?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Tentu saja! Kami terbuka untuk kerjasama reseller dan
                  distributor. Hubungi tim kami untuk informasi lebih lanjut
                  mengenai program kemitraan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
