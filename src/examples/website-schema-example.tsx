import { WebSiteSchema } from "@/components/seo/website-schema"
import { generateWebSiteSchema } from "@/components/seo/schema-generators"
import { defaultSEO } from "@/lib/seo-config"

/**
 * Ví dụ sử dụng WebSiteSchema component
 */
export function WebSiteSchemaComponentExample() {
  return (
    <WebSiteSchema
      name="Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam"
      alternateName="Khoa CNTT - VMU"
      url="https://fit.vimaru.edu.vn"
      description="Website chính thức của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam"
      searchUrl="https://fit.vimaru.edu.vn/tim-kiem"
      potentialActions={[
        {
          "@type": "SearchAction",
          target: "https://fit.vimaru.edu.vn/tim-kiem?q={search_term_string}",
          "query-input": "required name=search_term_string",
          name: "Tìm kiếm trên Khoa CNTT - VMU",
        },
      ]}
    />
  )
}

/**
 * Ví dụ sử dụng generateWebSiteSchema function
 */
export function WebSiteSchemaFunctionExample() {
  const websiteSchema = generateWebSiteSchema({
    name: defaultSEO.title,
    alternateName: "Khoa CNTT - VMU",
    url: defaultSEO.siteUrl,
    description: defaultSEO.description,
    searchUrl: `${defaultSEO.siteUrl}/tim-kiem`,
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
}
