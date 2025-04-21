import type React from "react"
import type { Metadata } from "next"
import { SEO } from "@/components/seo/seo"
import { PageHero } from "@/components/gioi-thieu/page-hero"

export const metadata: Metadata = {
  title: "Đội ngũ - Khoa Công nghệ Thông tin",
  description:
    "Đội ngũ giảng viên, cán bộ và nhân viên của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
}

export default function DoiNguLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Đội ngũ - Khoa Công nghệ Thông tin"
        description="Đội ngũ giảng viên, cán bộ và nhân viên của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam"
        openGraph={{
          title: "Đội ngũ - Khoa Công nghệ Thông tin",
          description:
            "Đội ngũ giảng viên, cán bộ và nhân viên của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
          url: "https://fit.vimaru.edu.vn/doi-ngu",
          type: "website",
        }}
      />
      <PageHero
        title="Đội ngũ"
        description="Đội ngũ giảng viên, cán bộ và nhân viên của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam"
        breadcrumbs={[
          { title: "Trang chủ", href: "/" },
          { title: "Đội ngũ", href: "/doi-ngu" },
        ]}
      />
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  )
}
