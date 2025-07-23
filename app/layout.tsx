import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMKM KETAPANGTELU - Produk Lokal Berkualitas",
  description:
    "Website resmi UMKM Ketapangtelu menyediakan ikan asap, kerupuk ikan, dan terasi berkualitas tinggi dari produksi lokal.",
  keywords: "UMKM, Ketapangtelu, ikan asap, kerupuk ikan, terasi, produk lokal",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <main className="flex justify-center items-center">{children}</main>
      </body>
    </html>
  );
}
