import BackToHome from "@/components/back-to-home";
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
  Users,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactPersons = [
    {
      name: "Fadhil",
      role: "Ketua Karangtaruna",
      phone: "+62 813-5805-3354",
      whatsapp: "https://wa.me/6281358053354",
    },
    {
      name: "A. Zaky Ubaidillah",
      role: "Koordinator KKN",
      phone: "+62 857-4953-4548",
      whatsapp: "https://wa.me/6285749534548",
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              Hubungi Kami
            </Badge>
            <h1 className="mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Kontak & Informasi
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Kami siap membantu Anda dengan informasi produk UMKM dan kerjasama
              yang berkelanjutan
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                24 jam respon
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Persons */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Person</h2>
              <div className="space-y-6">
                {contactPersons.map((person, index) => (
                  <Card
                    key={index}
                    className="p-6 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg">{person.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {person.role}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{person.phone}</span>
                      </div>
                      <Link
                        href={person.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start border-green-200 bg-green-50 hover:bg-green-100"
                        >
                          <Phone className="mr-2 h-4 w-4 text-green-600" />
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
              <h2 className="mb-6 text-2xl font-bold">Media Sosial</h2>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="cursor-pointer p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="flex items-center gap-4 p-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
                          <social.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{social.platform}</h3>
                          <p className="text-sm text-muted-foreground">
                            {social.handle}
                          </p>
                        </div>
                        <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Email</h2>
              <Card className="p-6">
                <CardContent className="flex items-center gap-4 p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Email Resmi</h3>
                    <Link
                      href="mailto:umkm.ketapangtelu@gmail.com"
                      className="text-sm text-primary hover:underline"
                    >
                      umkmketapangtelu@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map and Location */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Lokasi</h2>

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
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-semibold">Desa Ketapangtelu</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
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
                  <Clock className="h-5 w-5 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Senin - Jumat</span>
                  <span className="text-sm font-medium">08:00 - 17:00 WIB</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sabtu</span>
                  <span className="text-sm font-medium">08:00 - 15:00 WIB</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Minggu</span>
                  <span className="text-sm font-medium text-muted-foreground">
                    Tutup
                  </span>
                </div>
                <Separator />
                <div className="mt-4 rounded-lg bg-primary/5 p-3">
                  <p className="text-xs text-muted-foreground">
                    * Untuk konsultasi dan pemesanan produk dapat dilakukan
                    kapan saja melalui WhatsApp
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/products">
                <Button className="h-12 w-full">Lihat Produk</Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="outline"
                  className="h-12 w-full bg-transparent"
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
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Pertanyaan Umum</h2>
            <p className="text-muted-foreground">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">
                  Bagaimana cara memesan produk?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
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
