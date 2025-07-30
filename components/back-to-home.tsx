import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LogoUmkmKetapangtelu from "./logo-umkm-ketapangtelu";
import { Button } from "./ui/button";

function BackToHome() {
  return (
    <div className="flex items-center px-4 h-16 container">
      <Link href="/">
        <Button variant="ghost" size="sm" className="mr-4">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Beranda
        </Button>
      </Link>
      <div className="flex items-center space-x-2">
        <LogoUmkmKetapangtelu />
        <span className="flex md:flex-row flex-col gap-0 md:gap-2 font-bold text-primary text-lg md:text-xl">
          <span>
            <span className="text-yellow-500">UM</span>
            <span>KM</span>
          </span>
          <span>KETAPANGTELU</span>
        </span>
      </div>
    </div>
  );
}

export default BackToHome;
