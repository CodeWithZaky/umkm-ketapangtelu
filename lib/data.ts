export const umkmData = {
  ikanasap: [
    {
      id: "ikan-asap-lele-1",
      title: "Ikan Asap Lele Premium",
      price: "Rp 15.000",
      description:
        "Ikan asap lele khas Ketapangtelu, diproses dengan bumbu tradisional. Gurih, tahan lama, dan kaya protein. Cocok untuk lauk sehari-hari atau oleh-oleh.",
      images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/ikanasap_lele"],
      category: "Ikan Asap",
    },
    {
      id: "ikan-asap-bandeng-1",
      title: "Ikan Asap Bandeng",
      price: "Rp 25.000",
      description:
        "Ikan bandeng asap dengan cita rasa autentik. Diolah dengan teknik pengasapan tradisional yang menghasilkan aroma dan rasa yang khas.",
      images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/ikanasap_bandeng"],
      category: "Ikan Asap",
    },
    {
      id: "ikan-asap-tongkol-1",
      title: "Ikan Asap Tongkol",
      price: "Rp 20.000",
      description:
        "Ikan tongkol asap dengan tekstur yang lembut dan rasa yang gurih. Diproses higienis dan berkualitas tinggi.",
      images: ["/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/ikanasap_tongkol"],
      category: "Ikan Asap",
    },
  ],
  krupukikan: [
    {
      id: "kerupuk-ikan-tenggiri-1",
      title: "Kerupuk Ikan Tenggiri",
      price: "Rp 10.000",
      description:
        "Kerupuk ikan tenggiri dengan rasa gurih dan tekstur renyah. Dibuat dari ikan tenggiri segar pilihan, cocok untuk camilan atau pelengkap makan.",
      images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/krupuk_tenggiri"],
      category: "Kerupuk Ikan",
    },
    {
      id: "kerupuk-ikan-gabus-1",
      title: "Kerupuk Ikan Gabus",
      price: "Rp 12.000",
      description:
        "Kerupuk ikan gabus khas daerah dengan kandungan protein tinggi. Renyah dan gurih, cocok untuk segala usia.",
      images: ["/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/krupuk_gabus"],
      category: "Kerupuk Ikan",
    },
    {
      id: "kerupuk-ikan-mix-1",
      title: "Kerupuk Ikan Campur",
      price: "Rp 8.000",
      description:
        "Campuran berbagai jenis kerupuk ikan dalam satu kemasan. Variasi rasa yang menarik untuk dinikmati bersama keluarga.",
      images: ["/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/krupuk_mix"],
      category: "Kerupuk Ikan",
    },
  ],
  terasi: [
    {
      id: "terasi-udang-1",
      title: "Terasi Udang Premium",
      price: "Rp 8.000",
      description:
        "Terasi udang asli buatan warga Ketapangtelu. Aroma kuat dan sedap, dibuat dari udang segar pilihan dengan proses fermentasi tradisional.",
      images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/terasi_udang"],
      category: "Terasi",
    },
    {
      id: "terasi-ikan-1",
      title: "Terasi Ikan",
      price: "Rp 6.000",
      description:
        "Terasi ikan dengan cita rasa khas yang cocok untuk berbagai masakan tradisional. Dibuat dengan resep turun temurun.",
      images: ["/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/terasi_ikan"],
      category: "Terasi",
    },
    {
      id: "terasi-rebon-1",
      title: "Terasi Rebon",
      price: "Rp 7.000",
      description:
        "Terasi rebon dengan aroma yang harum dan rasa yang autentik. Cocok untuk sambal dan berbagai masakan nusantara.",
      images: ["/placeholder.svg?height=400&width=400"],
      link: ["https://instagram.com/terasi_rebon"],
      category: "Terasi",
    },
  ],
}

export function getAllProducts() {
  const allProducts = []

  Object.entries(umkmData).forEach(([category, products]) => {
    products.forEach((product) => {
      allProducts.push({
        ...product,
        category: product.category,
      })
    })
  })

  return allProducts
}

export function getProductById(id: string) {
  const allProducts = getAllProducts()
  return allProducts.find((product) => product.id === id)
}

export function getProductsByCategory(category: string) {
  return umkmData[category as keyof typeof umkmData] || []
}
