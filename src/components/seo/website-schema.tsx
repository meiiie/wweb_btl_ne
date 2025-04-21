"use client"

import Script from "next/script"
import { defaultSEO } from "@/lib/seo-config"

interface WebSiteSchemaProps {
  name?: string
  alternateName?: string
  url?: string
  description?: string
  searchUrl?: string
  potentialActions?: Array<{
    type: string
    target: string
    "query-input"?: string
    name?: string
  }>
}

/**
 * Component WebSiteSchema - Thêm schema WebSite cho trang chủ
 * @see https://schema.org/WebSite
 */
export function WebSiteSchema({
  name = defaultSEO.title,
  alternateName = "Khoa CNTT - VMU",
  url = defaultSEO.siteUrl,
  description = defaultSEO.description,
  searchUrl,
  potentialActions = [],
}: WebSiteSchemaProps) {
  // Tạo schema cơ bản
  const websiteSchema: any = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name,
    alternateName,
    url,
    description,
    inLanguage: "vi-VN",
  }

  // Thêm SearchAction nếu có searchUrl
  if (searchUrl) {
    websiteSchema.potentialAction = [
      {
        "@type": "SearchAction",
        target: `${searchUrl}?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      ...potentialActions,
    ]
  } else if (potentialActions.length > 0) {
    websiteSchema.potentialAction = potentialActions
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}
