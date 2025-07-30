import BackToHome from "@/components/back-to-home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Heart,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      division: "Koordinator Desa",
      members: ["Ahmad Zaky Ubaidillah"],
      color: "from-blue-500 to-blue-600",
      icon: "👑",
    },
    {
      division: "Wakil Koordinator Desa",
      members: ["Auliah Riska K."],
      color: "from-purple-500 to-purple-600",
      icon: "🎯",
    },
    {
      division: "Koordinator Lapangan",
      members: ["M. Falas Jati I.R."],
      color: "from-green-500 to-green-600",
      icon: "🏃‍♂️",
    },
    {
      division: "Sekretaris",
      members: ["Fifin Ida Auliyah", "Nihaya Alifiya C."],
      color: "from-orange-500 to-orange-600",
      icon: "📝",
    },
    {
      division: "Bendahara",
      members: ["Diana Rahma S.", "Frah Hanun A."],
      color: "from-pink-500 to-pink-600",
      icon: "💰",
    },
    {
      division: "Sie Acara",
      members: [
        "M. Khafidz Abdullah (co)",
        "Camelia F. M.",
        "Fina Nur Azizah",
        "Silvia Tri Utami",
        "Della Riski",
        "Hanif Widya Wirawan",
      ],
      color: "from-indigo-500 to-indigo-600",
      icon: "🎉",
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
      color: "from-teal-500 to-teal-600",
      icon: "📦",
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
      color: "from-red-500 to-red-600",
      icon: "📢",
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
      color: "from-yellow-500 to-yellow-600",
      icon: "🎨",
    },
    {
      division: "Sie Keamanan",
      members: ["Abid Galih P. (co)", "Wiwin Annisa", "Abdul Muiz L"],
      color: "from-gray-500 to-gray-600",
      icon: "🛡️",
    },
  ];

  const totalMembers = teamMembers.reduce(
    (acc, team) => acc + team.members.length,
    0
  );
  const countDivisionMembers = teamMembers.length;

  const achievements = [
    { icon: Users, label: `${totalMembers} Mahasiswa`, color: "text-blue-600" },
    {
      icon: Award,
      label: `${countDivisionMembers} Divisi`,
      color: "text-purple-600",
    },
    { icon: Heart, label: "1 Misi Bersama", color: "text-red-600" },
    { icon: Star, label: "Satu Tujuan", color: "text-yellow-600" },
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
        <BackToHome />
      </nav>

      {/* Hero Section with Enhanced Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1400&text=KKN+Team+Collaboration"
            alt="KKN Kelompok 12 Team Photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />

          {/* Floating Elements */}
          <div className="top-20 left-10 absolute bg-primary/20 blur-xl rounded-full w-20 h-20 animate-pulse" />
          <div className="right-10 bottom-20 absolute bg-blue-500/20 blur-xl rounded-full w-32 h-32 animate-pulse delay-1000" />
          <div className="top-1/2 left-1/4 absolute bg-purple-500/20 blur-xl rounded-full w-16 h-16 animate-pulse delay-500" />
        </div>

        {/* Enhanced Content */}
        <div className="relative px-4 container">
          <div className="mx-auto max-w-5xl text-white text-center">
            <div className="animate-fade-in-up">
              <Badge
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm mb-8 px-6 py-2 border-white/20 text-white text-lg"
              >
                <Sparkles className="mr-2 w-4 h-4" />
                Tentang Kami
              </Badge>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h1 className="flex flex-col justify-center items-center gap-8 mb-8 font-bold leading-tight">
                <span className="bg-clip-text bg-gradient-to-r from-white to-gray-300 text-transparent text-4xl md:text-6xl lg:text-7xl">
                  KKN KELOMPOK 12
                </span>
                <div className="relative">
                  <span className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 font-black text-transparent text-6xl md:text-8xl lg:text-9xl">
                    ✕
                  </span>
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                </div>
                <span className="bg-clip-text bg-gradient-to-r from-white to-gray-300 text-transparent text-3xl md:text-5xl lg:text-6xl">
                  DESA KETAPANGTELU
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-400">
              <p className="mx-auto mb-12 max-w-4xl text-white/90 text-xl md:text-2xl lg:text-3xl leading-relaxed">
                Membangun dan memberdayakan UMKM lokal melalui{" "}
                <span className="font-semibold text-primary">
                  inovasi teknologi
                </span>{" "}
                dan{" "}
                <span className="font-semibold text-primary">
                  kolaborasi berkelanjutan
                </span>
              </p>
            </div>

            <div className="animate-fade-in-up delay-600">
              <div className="gap-6 grid grid-cols-2 md:grid-cols-4 mx-auto max-w-3xl">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 border border-white/20 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <achievement.icon
                      className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`}
                    />
                    <span className="block font-medium text-sm md:text-base">
                      {achievement.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="bg-gradient-to-br from-muted/30 to-muted/10 py-20">
        <div className="px-4 container">
          <div className="gap-12 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl">
            <Card className="group bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl p-8 border-none transition-all hover:-translate-y-2 duration-500">
              <CardHeader className="pb-8 text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-6 rounded-2xl w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="bg-clip-text bg-gradient-to-r from-primary to-primary/70 font-bold text-transparent text-3xl">
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Menjadi{" "}
                  <span className="font-semibold text-primary">katalis</span>{" "}
                  dalam pengembangan UMKM Desa Ketapangtelu yang berkelanjutan,
                  inovatif, dan berdaya saing tinggi melalui pemanfaatan
                  teknologi digital dan pemberdayaan masyarakat lokal.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-white to-gray-50 shadow-xl hover:shadow-2xl p-8 border-none transition-all hover:-translate-y-2 duration-500">
              <CardHeader className="pb-8 text-center">
                <div className="flex justify-center items-center bg-gradient-to-br from-red-500/20 to-pink-500/10 mx-auto mb-6 rounded-2xl w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-red-500" />
                </div>
                <CardTitle className="bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 font-bold text-transparent text-3xl">
                  Misi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Mengembangkan platform digital untuk memasarkan produk UMKM lokal",
                    "Memberikan pelatihan dan pendampingan kepada pelaku UMKM",
                    "Membangun jaringan kerjasama yang berkelanjutan",
                    "Meningkatkan kesadaran masyarakat terhadap produk lokal",
                  ].map((mission, index) => (
                    <li
                      key={index}
                      className="group/item flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 bg-gradient-to-r from-primary to-primary/70 mt-2 rounded-full w-3 h-3 group-hover/item:scale-125 transition-transform duration-200" />
                      <span className="group-hover/item:text-foreground text-lg leading-relaxed transition-colors duration-200">
                        {mission}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Team Credits */}
      <section className="py-20">
        <div className="px-4 container">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/20 text-primary"
            >
              Tim Terbaik Kami
            </Badge>
            <h2 className="bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-6 font-bold text-transparent text-4xl md:text-5xl">
              Tim KKN Kelompok 12
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground text-xl leading-relaxed">
              Mahasiswa UNISLA yang berdedikasi untuk memajukan UMKM Desa
              Ketapangtelu dengan semangat kolaborasi dan inovasi
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-8xl">
            {teamMembers.map((team, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-2xl border-none overflow-hidden transition-all hover:-translate-y-3 duration-500"
              >
                <CardHeader className="relative pb-4">
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${team.color}`}
                  />
                  <div className="flex justify-between items-center mb-4">
                    <div
                      className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${team.color} text-white shadow-lg`}
                    >
                      {team.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {team.members.length} anggota
                    </Badge>
                  </div>
                  <CardTitle className="font-bold group-hover:text-primary text-lg text-center leading-tight transition-colors duration-300">
                    {team.division}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {team.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="bg-gradient-to-r from-muted/30 hover:from-primary/10 to-muted/10 hover:to-primary/5 px-4 py-3 border hover:border-primary/20 border-transparent rounded-xl text-sm text-center hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      <span className="font-medium">{member}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="top-10 left-10 absolute bg-primary blur-3xl rounded-full w-32 h-32" />
          <div className="right-10 bottom-10 absolute bg-blue-500 blur-3xl rounded-full w-40 h-40" />
          <div className="top-1/2 left-1/2 absolute bg-purple-500 blur-3xl rounded-full w-60 h-60 -translate-x-1/2 -translate-y-1/2 transform" />
        </div>

        <div className="relative px-4 container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <h2 className="bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-6 font-bold text-transparent text-4xl md:text-5xl">
                Mari Bersama Memajukan UMKM Lokal
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-muted-foreground text-xl leading-relaxed">
                Dukung produk-produk berkualitas dari UMKM Ketapangtelu dan
                jadilah bagian dari gerakan pemberdayaan ekonomi lokal yang
                berkelanjutan.
              </p>
            </div>

            <div className="flex sm:flex-row flex-col justify-center gap-6">
              <Link href="/products">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary hover:from-primary/90 to-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl px-10 py-4 font-semibold text-lg hover:scale-105 transition-all duration-300"
                >
                  Lihat Produk UMKM
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/80 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm px-10 py-4 border-2 border-primary/20 hover:border-primary/40 font-semibold text-lg hover:scale-105 transition-all duration-300"
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
