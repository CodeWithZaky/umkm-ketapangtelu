import Link from "next/link";

const navigationItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Kategori", href: "/categories" },
  { name: "Produk", href: "/products" },
  { name: "Kontak", href: "/contact" },
];
function Footer() {
  return (
    <footer className="bg-muted/50 mt-12 border-t">
      <div className="px-4 py-8 container">
        <div className="text-center">
          <h3 className="mb-2 font-semibold text-lg">UMKM KETAPANGTELU</h3>
          <p className="text-muted-foreground">
            Produk berkualitas dari UMKM lokal Ketapangtelu
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-muted-foreground text-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
