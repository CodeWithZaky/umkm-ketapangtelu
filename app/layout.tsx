import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SearchProvider } from "@/context/search-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMKM KETAPANGTELU - Produk Lokal Berkualitas",
  description:
    "Website resmi UMKM Ketapangtelu menyediakan ikan asap, kerupuk ikan, dan terasi berkualitas tinggi dari produksi lokal.",
  keywords: "UMKM, Ketapangtelu, ikan asap, kerupuk ikan, terasi, produk lokal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <SearchProvider>
          <Navbar />
          <main className="w-full min-w-0 flex-1">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
