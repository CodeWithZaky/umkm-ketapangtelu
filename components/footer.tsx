import Link from "next/link";

const navigationItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Kategori", href: "/categories" },
  { name: "Produk", href: "/products" },
  { name: "Kontak", href: "/contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 flex w-full items-center justify-center border-t bg-muted/50">
      <div className="container px-4 py-8">
        <div className="text-center">
          <h3 className="mb-2 text-lg font-semibold">UMKM KETAPANGTELU</h3>
          <p className="text-muted-foreground">
            Produk berkualitas dari UMKM lokal Ketapangtelu
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-2xl border-t pt-6 text-xs text-muted-foreground">
            <p>© {currentYear} UMKM Ketapangtelu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
