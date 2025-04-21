import type React from "react"
import { MetaData } from "./metadata"
import { JsonLD } from "./json-ld"
import type { BreadcrumbListItem, ArticleSchemaProps, FAQPageSchemaProps, CourseSchemaProps } from "@/lib/seo-config"

interface SEOProps {
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
  breadcrumb?: BreadcrumbListItem[]
  article?: ArticleSchemaProps
  faq?: FAQPageSchemaProps
  course?: CourseSchemaProps
  showOrganization?: boolean
  children?: React.ReactNode
}

/**
 * Component SEO - Component chính để quản lý tất cả các khía cạnh SEO
 */
export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageAlt,
  twitterCard,
  noIndex = false,
  breadcrumb,
  article,
  faq,
  course,
  showOrganization = true,
  children,
}: SEOProps) {
  return (
    <>
      <MetaData
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        ogType={ogType}
        ogImage={ogImage}
        ogImageWidth={ogImageWidth}
        ogImageHeight={ogImageHeight}
        ogImageAlt={ogImageAlt}
        twitterCard={twitterCard}
        noIndex={noIndex}
      >
        {children}
      </MetaData>

      {/* Organization Schema */}
      {showOrganization && <JsonLD type="Organization" />}

      {/* Breadcrumb Schema */}
      {breadcrumb && breadcrumb.length > 0 && <JsonLD type="BreadcrumbList" data={breadcrumb} />}

      {/* Article Schema */}
      {article && <JsonLD type="Article" data={article} />}

      {/* FAQ Schema */}
      {faq && <JsonLD type="FAQPage" data={faq} />}

      {/* Course Schema */}
      {course && <JsonLD type="Course" data={course} />}
    </>
  )
}
