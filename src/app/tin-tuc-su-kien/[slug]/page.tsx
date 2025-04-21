import type { Metadata } from "next"
import { defaultSEO } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

// Định nghĩa tham số cho trang chi tiết tin tức
type Props = {
  params: { slug: string }
}

// Tạo metadata động dựa trên slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Trong thực tế, bạn sẽ fetch dữ liệu từ API hoặc database
  // Ở đây tôi giả định dữ liệu tin tức từ params.slug

  // Giả lập dữ liệu tin tức
  const newsData = {
    title: `${params.slug.split("-").join(" ")}`,
    description: `Chi tiết tin tức về ${params.slug.split("-").join(" ")} của Khoa Công nghệ Thông tin VMU`,
    date: "2023-09-15",
    author: "Ban Truyền thông Khoa CNTT",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tin tức",
  }

  return {
    title: newsData.title,
    description: newsData.description,
    openGraph: {
      title: newsData.title,
      description: newsData.description,
      type: "article",
      publishedTime: newsData.date,
      authors: [newsData.author],
      images: [
        {
          url: newsData.image.startsWith("http") ? newsData.image : `${defaultSEO.siteUrl}${newsData.image}`,
          width: 600,
          height: 400,
          alt: newsData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: newsData.title,
      description: newsData.description,
      images: [newsData.image],
    },
    alternates: {
      canonical: `/tin-tuc-su-kien/${params.slug}`,
    },
  }
}

export default function NewsDetailPage({ params }: Props) {
  // Giả lập dữ liệu tin tức
  const newsData = {
    title: `${params.slug.split("-").join(" ")}`,
    category: "Tin tức",
    // Các thông tin khác
  }

  // Tạo breadcrumb items tùy chỉnh cho trang này
  const breadcrumbItems = [
    { name: "Trang chủ", url: "/" },
    { name: "Tin tức & Sự kiện", url: "/tin-tuc-su-kien" },
    {
      name: newsData.category,
      url: `/tin-tuc-su-kien/danh-muc/${newsData.category.toLowerCase().replace(/\s+/g, "-")}`,
    },
    { name: newsData.title, url: `/tin-tuc-su-kien/${params.slug}` },
  ]

  return (
    <>
      {/* Thêm BreadcrumbSchema tùy chỉnh */}
      <BreadcrumbSchema items={breadcrumbItems} overrideItems={true} />

      {/* Nội dung trang chi tiết tin tức */}
      <div>{/* Nội dung trang */}</div>
    </>
  )
}
