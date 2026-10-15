import BackToHome from "@/components/back-to-home";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Fotbar from "@/public/fotbar.jpeg";
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
      members: ["M. Falas Jati I. R."],
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
        "Ilman Dana",
        "Serly Alkhila",
        "Deswita A. M.",
        "Alfina M.",
        "Sania Sallamah",
        "M. Dimas Taufiqurrohman",
      ],
      color: "from-teal-500 to-teal-600",
      icon: "📦",
    },
    {
      division: "Sie Konsumsi",
      members: [
        "Dewa Alexxx (co)",
        "Ainul Khofifa",
        "Amilatun",
        "Frinas Sania",
        "Saadatul Laili",
      ],
      color: "from-pink-500 to-pink-600",
      icon: "🍽️",
    },
    {
      division: "Sie Humas",
      members: [
        "Eka Putri R. J. (co)",
        "A. Fauzil Adhim F.",
        "Sayid Ubaidillah I.",
        "Kharomah Siska L.",
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
        "Fatma Putri F.",
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
    0,
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
    <div className="min-h-screen bg-background">
      {/* Hero Section with Enhanced Background */}
      <section className="relative overflow-hidden py-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image
            src={Fotbar}
            alt="KKN Kelompok 12 Team Photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />

          {/* Floating Elements */}
          <div className="absolute left-10 top-20 h-20 w-20 animate-pulse rounded-full bg-primary/20 blur-xl" />
          <div className="absolute bottom-20 right-10 h-32 w-32 animate-pulse rounded-full bg-blue-500/20 blur-xl delay-1000" />
          <div className="absolute left-1/4 top-1/2 h-16 w-16 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-500" />
        </div>

        {/* Enhanced Content */}
        <div className="container relative px-4">
          <div className="mx-auto max-w-5xl text-center text-white">
            <div className="animate-fade-in-up">
              <Badge
                variant="secondary"
                className="mb-8 border-white/20 bg-white/10 px-6 py-2 text-lg text-white backdrop-blur-sm"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Tentang Kami
              </Badge>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h1 className="mb-8 flex flex-col items-center justify-center gap-8 font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl text-transparent md:text-6xl lg:text-7xl">
                  KKN KELOMPOK 12
                </span>
                <div className="relative">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-6xl font-black text-transparent md:text-8xl lg:text-9xl">
                    ✕
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                </div>
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl text-transparent md:text-5xl lg:text-6xl">
                  DESA KETAPANGTELU
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-400">
              <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
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
              <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <achievement.icon
                      className={`mx-auto mb-3 h-8 w-8 ${achievement.color}`}
                    />
                    <span className="block text-sm font-medium md:text-base">
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
        <div className="container px-4">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
            <Card className="group border-none bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="pb-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Visi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Menjadi{" "}
                  <span className="font-semibold text-primary">katalis</span>{" "}
                  dalam pengembangan UMKM Desa Ketapangtelu yang berkelanjutan,
                  inovatif, dan berdaya saing tinggi melalui pemanfaatan
                  teknologi digital dan pemberdayaan masyarakat lokal.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-none bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="pb-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/10 transition-transform duration-300 group-hover:scale-110">
                  <Heart className="h-10 w-10 text-red-500" />
                </div>
                <CardTitle className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
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
                      <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-primary/70 transition-transform duration-200 group-hover/item:scale-125" />
                      <span className="text-lg leading-relaxed transition-colors duration-200 group-hover/item:text-foreground">
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
        <div className="container px-4">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/20 text-primary"
            >
              Tim Terbaik Kami
            </Badge>
            <h2 className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Tim KKN Kelompok 12
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Mahasiswa UNISLA yang berdedikasi untuk memajukan UMKM Desa
              Ketapangtelu dengan semangat kolaborasi dan inovasi
            </p>
          </div>

          <div className="max-w-8xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((team, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none bg-gradient-to-br from-white to-gray-50/50 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <CardHeader className="relative pb-4">
                  <div
                    className={`absolute left-0 right-0 top-0 h-2 bg-gradient-to-r ${team.color}`}
                  />
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`rounded-xl bg-gradient-to-r p-3 text-3xl ${team.color} text-white shadow-lg`}
                    >
                      {team.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {team.members.length} anggota
                    </Badge>
                  </div>
                  <CardTitle className="text-center text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
                    {team.division}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {team.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="cursor-default rounded-xl border border-transparent bg-gradient-to-r from-muted/30 to-muted/10 px-4 py-3 text-center text-sm transition-all duration-300 hover:scale-105 hover:border-primary/20 hover:from-primary/10 hover:to-primary/5"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-500 blur-3xl" />
        </div>

        <div className="container relative px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <h2 className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Mari Bersama Memajukan UMKM Lokal
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                Dukung produk-produk berkualitas dari UMKM Ketapangtelu dan
                jadilah bagian dari gerakan pemberdayaan ekonomi lokal yang
                berkelanjutan.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link href="/products">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-primary/80 px-10 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary/90 hover:to-primary/70 hover:shadow-xl"
                >
                  Lihat Produk UMKM
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/20 bg-white/80 px-10 py-4 text-lg font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-white hover:shadow-xl"
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
