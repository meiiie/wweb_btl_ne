import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"
import { EducationSidebar } from "@/components/dao-tao/education-sidebar"

export const metadata: Metadata = {
  title: "Đào tạo | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin về chương trình đào tạo, hệ đào tạo, môn học và tài liệu học tập của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
}

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <EducationSidebar />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
