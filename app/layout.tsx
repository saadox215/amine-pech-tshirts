import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amine Pech - Premium T-Shirts | Express Your Style",
  description:
    "Discover unique, high-quality t-shirts from Amine Pech. Premium designs for streetwear, casual, artistic, and vintage styles. Order via WhatsApp for fast delivery across Morocco.",
  keywords: "t-shirts, Morocco, premium clothing, streetwear, artistic designs, Amine Pech, fashion, WhatsApp ordering",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
