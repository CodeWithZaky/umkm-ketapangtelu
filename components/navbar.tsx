import LogoUMKMKetapangelu from "@/public/logo_umkm_ketapangtelu.png";
import { Search } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";

const Navbar = ({ searchQuery, setSearchQuery }: any) => {
  return (
    <nav className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b w-full">
      <div className="flex justify-between items-center px-4 h-16 container">
        <div className="flex items-center space-x-2">
          <Image
            src={LogoUMKMKetapangelu}
            alt="UMKM Ketapangtelu Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-primary text-xl">UMKM</span>
            <span className="font-bold text-md text-primary">KETAPANGTELU</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="top-1/2 left-3 absolute w-4 h-4 text-muted-foreground -translate-y-1/2" />
          <Input
            placeholder="Cari produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
