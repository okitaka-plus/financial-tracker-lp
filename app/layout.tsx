import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Financial Tracker - 小規模事業者向け財務管理アプリ",
  description:
    "キャッシュフローを見える化し、経営をシンプルに。小規模事業者向けの財務管理アプリ「Financial Tracker」で、ビジネスの成長をサポートします。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'