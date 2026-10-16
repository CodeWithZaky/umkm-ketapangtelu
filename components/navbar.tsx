"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";

import LogoUMKMKetapangelu from "@/public/logo_umkm_ketapangtelu.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const navigationItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Kategori", href: "/categories" },
  { name: "Produk", href: "/products" },
  { name: "Kontak", href: "/contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/products?q=${encodeURIComponent(trimmed)}`);
    setIsSearchExpanded(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  const closeSearch = () => {
    setIsSearchExpanded(false);
    setQuery("");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between gap-3 px-4 lg:gap-6">
        {/* Pencarian mobile: mengambil seluruh baris */}
        {isSearchExpanded && (
          <form
            onSubmit={submit}
            role="search"
            className="flex min-w-0 flex-1 items-center gap-2 duration-150 animate-in fade-in lg:hidden"
          >
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                aria-label="Cari produk"
                placeholder="Cari produk..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                inputMode="search"
                enterKeyHint="search"
                autoFocus
                className="h-11 pl-10 text-base"
              />
            </div>
            <Button type="submit" className="h-11 shrink-0 px-4">
              Cari
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-11 w-11 shrink-0"
              onClick={closeSearch}
              aria-label="Tutup pencarian"
            >
              <X className="h-5 w-5" />
            </Button>
          </form>
        )}

        {/* `contents` supaya anak-anaknya tetap ikut flex induk */}
        <div className={isSearchExpanded ? "hidden lg:contents" : "contents"}>
          {/* Menu mobile */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11"
                  aria-label="Buka menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] max-w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigasi utama situs
                  </SheetDescription>
                </SheetHeader>
                <nav aria-label="Navigasi utama" className="mt-6">
                  <ul className="flex flex-col gap-1">
                    {navigationItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setIsSheetOpen(false)}
                            className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${focusRing} ${
                              active
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-muted"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className={`flex shrink-0 items-center gap-2 rounded-md ${focusRing}`}
          >
            <Image
              src={LogoUMKMKetapangelu}
              alt="Logo UMKM Ketapangtelu"
              width={40}
              height={40}
              priority
              className="h-9 w-9 shrink-0 rounded-full sm:h-10 sm:w-10"
            />
            <span className="whitespace-nowrap text-lg font-bold text-primary sm:text-xl">
              <span className="text-yellow-500">UM</span>
              <span>KM</span>
              <span className="hidden sm:inline"> KETAPANGTELU</span>
            </span>
          </Link>

          {/* Menu desktop */}
          <nav
            aria-label="Navigasi utama"
            className="hidden lg:flex lg:flex-1 lg:justify-center"
          >
            <ul className="flex items-center gap-6">
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded text-sm font-medium transition-colors hover:text-primary ${focusRing} ${
                        active
                          ? "text-primary underline decoration-2 underline-offset-8"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Pencarian */}
          <div className="flex shrink-0 items-center">
            <form
              onSubmit={submit}
              role="search"
              className="hidden items-center gap-2 lg:flex"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  aria-label="Cari produk"
                  placeholder="Cari produk..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-52 pl-10 pr-9 xl:w-72"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:text-foreground ${focusRing}`}
                    aria-label="Hapus teks pencarian"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button type="submit" size="sm" className="shrink-0">
                Cari
              </Button>
            </form>

            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 lg:hidden"
              onClick={() => setIsSearchExpanded(true)}
              aria-label="Buka pencarian"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
