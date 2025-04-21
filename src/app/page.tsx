import type { Metadata } from "next"
import Hero from "@/components/home/Hero"
import NewsSection from "@/components/home/NewsSection"
import AboutSection from "@/components/home/AboutSection"
import ProgramsSection from "@/components/home/ProgramsSection"
import StatsSection from "@/components/home/StatsSection"
import EventsSection from "@/components/home/EventsSection"
import PartnersSection from "@/components/home/PartnersSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import { defaultSEO } from "@/lib/seo-config"
import { WebSiteSchema } from "@/components/seo/website-schema"

// Metadata cho trang chủ - ghi đè metadata mặc định từ layout
export const metadata: Metadata = {
  // Sử dụng tiêu đề mặc định từ config
  title: defaultSEO.title,
  description:
    "Trang chủ chính thức của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam (VMU). Cung cấp thông tin về đào tạo, nghiên cứu, đội ngũ giảng viên và tuyển sinh.",

  // Canonical cho trang chủ
  alternates: {
    canonical: "/",
  },

  // Open Graph cụ thể cho trang chủ
  openGraph: {
    url: "/",
    title: defaultSEO.title,
    description:
      "Trang chủ chính thức của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam (VMU). Đào tạo chất lượng cao trong lĩnh vực Công nghệ thông tin.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Thêm WebSite Schema */}
      <WebSiteSchema
        searchUrl={`${defaultSEO.siteUrl}/tim-kiem`}
        potentialActions={[
          {
            "@type": "SearchAction",
            target: `${defaultSEO.siteUrl}/tim-kiem?q={search_term_string}`,
            "query-input": "required name=search_term_string",
            name: "Tìm kiếm trên Khoa CNTT - VMU",
          },
          {
            "@type": "ReadAction",
            target: `${defaultSEO.siteUrl}/tin-tuc-su-kien`,
            name: "Xem tin tức và sự kiện",
          },
          {
            "@type": "ViewAction",
            target: `${defaultSEO.siteUrl}/dao-tao/chuong-trinh`,
            name: "Xem chương trình đào tạo",
          },
        ]}
      />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <NewsSection />
      <EventsSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  )
}
