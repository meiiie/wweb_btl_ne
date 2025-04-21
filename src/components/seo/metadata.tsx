"use client"

import type React from "react"

import Head from "next/head"
import { useRouter } from "next/router"
import { defaultSEO } from "@/lib/seo-config"

interface MetaDataProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogType?: "website" | "article" | "profile" | "book"
  ogImage?: string
  ogImageWidth?: number
  ogImageHeight?: number
  ogImageAlt?: string
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  noIndex?: boolean
  children?: React.ReactNode
}

/**
 * Component MetaData - Thêm các thẻ meta cần thiết cho SEO
 */
export function MetaData({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogImageAlt,
  twitterCard = "summary_large_image",
  noIndex = false,
  children,
}: MetaDataProps) {
  const router = useRouter()

  // Kết hợp với cấu hình mặc định
  const metaTitle = title
    ? title.includes(defaultSEO.title)
      ? title
      : defaultSEO.titleTemplate.replace("%s", title)
    : defaultSEO.title

  const metaDescription = description || defaultSEO.description
  const metaKeywords = [...(keywords || []), ...defaultSEO.keywords].join(", ")

  // URL canonical
  const currentPath = router.asPath
  const metaCanonical = canonical || `${defaultSEO.siteUrl}${currentPath}`

  // Open Graph
  const metaOgImage =
    ogImage ||
    (defaultSEO.openGraph.images?.[0]?.url ? `${defaultSEO.siteUrl}${defaultSEO.openGraph.images[0].url}` : undefined)
  const metaOgImageAlt = ogImageAlt || defaultSEO.openGraph.images?.[0]?.alt || metaTitle

  // Twitter Card
  const metaTwitterCard = twitterCard || defaultSEO.twitter.cardType

  return (
    <Head>
      {/* Thẻ title */}
      <title>{metaTitle}</title>

      {/* Meta tags cơ bản */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="viewport" content={defaultSEO.viewport} />

      {/* Canonical URL */}
      <link rel="canonical" href={metaCanonical} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content={defaultSEO.robots} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={metaCanonical} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={defaultSEO.openGraph.siteName} />
      <meta property="og:locale" content={defaultSEO.openGraph.locale} />

      {metaOgImage && (
        <>
          <meta property="og:image" content={metaOgImage} />
          <meta property="og:image:alt" content={metaOgImageAlt} />
          <meta property="og:image:width" content={String(ogImageWidth)} />
          <meta property="og:image:height" content={String(ogImageHeight)} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={metaTwitterCard} />
      <meta name="twitter:site" content={defaultSEO.twitter.site} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {metaOgImage && (
        <>
          <meta name="twitter:image" content={metaOgImage} />
          <meta name="twitter:image:alt" content={metaOgImageAlt} />
        </>
      )}

      {/* Ngôn ngữ thay thế */}
      {defaultSEO.languageAlternates.map((lang) => (
        <link key={lang.hrefLang} rel="alternate" hrefLang={lang.hrefLang} href={lang.href} />
      ))}

      {/* Cho phép thêm thẻ meta tùy chỉnh */}
      {children}
    </Head>
  )
}
