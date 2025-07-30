import LogoUmkmKetapangtelu from "@/components/logo-umkm-ketapangtelu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, Heart, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      division: "Koordinator Desa",
      members: ["Ahmad Zaky Ubaidillah"],
    },
    {
      division: "Wakil Koordinator Desa",
      members: ["Auliah Riska K."],
    },
    {
      division: "Koordinator Lapangan",
      members: ["M. Falas Jati I.R."],
    },
    {
      division: "Sekretaris",
      members: ["Fifin Ida Auliyah", "Nihaya Alifiya C."],
    },
    {
      division: "Bendahara",
      members: ["Diana Rahma S.", "Frah Hanun A."],
    },
    {
      division: "Sie Acara",
      members: [
        "M. Khafid Abdullah (co)",
        "Camelia F. M.",
        "Fina Nur Azizah",
        "Silvia Tri Utami",
        "Della Riski",
        "Hanif Widya Wirawan",
      ],
    },
    {
      division: "Sie Logistik",
      members: [
        "Maheswara (co)",
        "Ilman Data",
        "Serly Alkhila",
        "Deswita A. M",
        "Alfina M.",
        "Sania Sallamah",
        "Muhammad Dimas Taufiqurrohman",
      ],
    },
    {
      division: "Sie Humas",
      members: [
        "Eka Putri R. J (co)",
        "A Fauzil Adhim F",
        "Sayid Ubaidillah I",
        "Kharomah Siska L",
        "Tia Putri",
      ],
    },
    {
      division: "Sie Publikasi, Dokumentasi, dan Desain (PDD)",
      members: [
        "Qori Resiana (co)",
        "Febri Dwi S.",
        "Fatma Putri F",
        "Suci Shochitafatul",
        "Erika Putri N.",
      ],
    },
    {
      division: "Sie Keamanan",
      members: ["Abid Galih P. (co)", "Wiwin Annisa", "Abdul Muiz L"],
    },
  ];

  const totalMembers = teamMembers.reduce(
    (acc, team) => acc + team.members.length,
    0
  );

  const countDivisionMembers = teamMembers.length;

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
                className="font-medium text-primary text-sm transition-colors"
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
                className="font-medium text-muted-foreground hover:text-primary text-sm transition-colors"
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
            <LogoUmkmKetapangtelu />
            <span className="font-bold text-primary text-xl">
              UMKM KETAPANGTELU
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=KKN+Team+Photo"
            // src={Mememe}
            alt="KKN Kelompok 12 Team Photo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative px-4 container">
          <div className="mx-auto max-w-4xl text-white text-center">
            <Badge
              variant="secondary"
              className="bg-white/20 mb-6 border-white/30 text-white"
            >
              Tentang Kami
            </Badge>
            <h1 className="flex flex-col justify-center items-center gap-5 mb-6 font-bold text-4xl md:text-6xl leading-tight">
              <span className="text-primary-foreground">KKN KELOMPOK 12</span>
              <span className="text-primary-foreground text-9xl">X</span>
              <span className="text-primary-foreground">DESA KETAPANGTELU</span>
            </h1>
            <p className="mb-8 text-white/90 text-xl md:text-2xl leading-relaxed">
              Membangun dan memberdayakan UMKM lokal melalui inovasi teknologi
              dan kolaborasi yang berkelanjutan
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{totalMembers} Mahasiswa</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>{countDivisionMembers} Divisi</span>
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
      <section className="bg-muted/30 py-16">
        <div className="px-4 container">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl">
            <Card className="shadow-lg p-8 border-none">
              <CardHeader className="pb-6 text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi katalis dalam pengembangan UMKM Desa Ketapangtelu yang
                  berkelanjutan, inovatif, dan berdaya saing tinggi melalui
                  pemanfaatan teknologi digital dan pemberdayaan masyarakat
                  lokal.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg p-8 border-none">
              <CardHeader className="pb-6 text-center">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-16 h-16">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-primary mt-2 rounded-full w-2 h-2" />
                    <span>
                      Mengembangkan platform digital untuk memasarkan produk
                      UMKM lokal
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-primary mt-2 rounded-full w-2 h-2" />
                    <span>
                      Memberikan pelatihan dan pendampingan kepada pelaku UMKM
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-primary mt-2 rounded-full w-2 h-2" />
                    <span>Membangun jaringan kerjasama yang berkelanjutan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-primary mt-2 rounded-full w-2 h-2" />
                    <span>
                      Meningkatkan kesadaran masyarakat terhadap produk lokal
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Credits */}
      <section className="py-16">
        <div className="px-4 container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Tim KKN Kelompok 12
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Mahasiswa UNISLA yang berdedikasi untuk memajukan UMKM Desa
              Ketapangtelu
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
            {teamMembers.map((team, index) => (
              <Card
                key={index}
                className="hover:shadow-lg p-6 transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-lg text-center">
                    {team.division}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {team.members.map((member, memberIndex) => (
                      <li
                        key={memberIndex}
                        className="bg-muted/50 px-3 py-2 rounded-lg text-sm text-center"
                      >
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
      <section className="bg-primary/5 py-16">
        <div className="px-4 container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-3xl">
              Mari Bersama Memajukan UMKM Lokal
            </h2>
            <p className="mb-8 text-muted-foreground text-lg">
              Dukung produk-produk berkualitas dari UMKM Ketapangtelu dan
              jadilah bagian dari gerakan pemberdayaan ekonomi lokal yang
              berkelanjutan.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Link href="/products">
                <Button size="lg" className="px-8">
                  Lihat Produk UMKM
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent px-8"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
