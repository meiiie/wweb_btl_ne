import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { SkipToContent } from "@/components/ui/skip-to-content"
import { defaultSEO } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

const inter = Inter({ subsets: ["latin"] })

// Metadata cho App Router
export const metadata: Metadata = {
  metadataBase: new URL(defaultSEO.siteUrl),
  title: {
    default: defaultSEO.title,
    template: defaultSEO.titleTemplate,
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,

  // Canonical
  alternates: {
    canonical: "/",
    languages: {
      vi: "/",
      en: "/en",
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    siteName: defaultSEO.openGraph.siteName,
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: defaultSEO.openGraph.images,
    url: defaultSEO.siteUrl,
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    creator: defaultSEO.twitter.handle,
    site: defaultSEO.twitter.site,
    images: defaultSEO.openGraph.images?.[0]?.url,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Verification
  verification: {
    google: "verification_code", // Thay verification_code bằng mã xác minh của bạn
  },

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico", // Đường dẫn favicon
    shortcut: "/favicon.ico", // Shortcut icon
    apple: "/apple-touch-icon.png", // Icon cho thiết bị Apple
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0056a6", // Màu sắc cho Safari pinned tab
      },
    ],
  },

  // Theme
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0056a6" },
    { media: "(prefers-color-scheme: dark)", color: "#004080" },
  ],

  // Manifest
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {/* Thêm BreadcrumbSchema vào layout chính */}
        <BreadcrumbSchema />
        <SkipToContent />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
