import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UMKM KETAPANGTELU - Produk Lokal Berkualitas",
  description:
    "Website resmi UMKM Ketapangtelu menyediakan ikan asap, kerupuk ikan, dan terasi berkualitas tinggi dari produksi lokal.",
  keywords: "UMKM, Ketapangtelu, ikan asap, kerupuk ikan, terasi, produk lokal",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
