import LogoUmkm from "@/public/logo_umkm_ketapangtelu.png";
import Image from "next/image";

function LogoUmkmKetapangtelu() {
  return (
    <Image
      src={LogoUmkm}
      alt="UMKM Ketapangtelu Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}

export default LogoUmkmKetapangtelu;
