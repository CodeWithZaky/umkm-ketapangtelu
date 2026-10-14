"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";

import LogoUMKMKetapangelu from "@/public/logo_umkm_ketapangtelu.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
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

const Navbar = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/products?q=${encodeURIComponent(trimmed)}`);
    setIsSearchExpanded(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleClear = () => setQuery("");

  return (
    <nav className="container sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Buka menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        {!isSearchExpanded && (
          <Link href="/" className="flex shrink-0 items-center space-x-2">
            <Image
              src={LogoUMKMKetapangelu}
              alt="UMKM Ketapangtelu Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="flex flex-col gap-0 text-xl font-bold text-primary md:flex-row md:gap-2">
              <span>
                <span className="text-yellow-500">UM</span>
                <span>KM</span>
              </span>
              <span className="hidden sm:inline">KETAPANGTELU</span>
            </span>
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center">
          {/* Desktop Search */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="relative hidden w-full max-w-sm md:flex md:items-center md:gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari produk..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Hapus pencarian"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button type="submit" size="sm" className="shrink-0">
              Cari
            </Button>
          </form>

          {/* Mobile Search */}
          <div className="flex items-center md:hidden">
            {!isSearchExpanded ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchExpanded(true)}
                aria-label="Buka pencarian"
              >
                <Search className="h-5 w-5" />
              </Button>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="flex items-center gap-2 duration-200 animate-in slide-in-from-right-2"
              >
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Cari produk..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 text-sm"
                    autoFocus
                  />
                </div>
                <Button type="submit" size="sm" className="shrink-0">
                  Cari
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsSearchExpanded(false);
                    handleClear();
                  }}
                  aria-label="Tutup pencarian"
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
