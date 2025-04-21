import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { SkipToContent } from "@/components/ui/skip-to-content"
import { TuyenSinhSidebar } from "@/components/tuyen-sinh/tuyen-sinh-sidebar"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "Tuyển sinh | Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam",
  description: "Thông tin tuyển sinh Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam",
}

export default function TuyenSinhLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SkipToContent />
      <div className="container px-4 py-8 mx-auto md:py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3 lg:col-span-3">
            <TuyenSinhSidebar />
          </div>
          <div className="md:col-span-9 lg:col-span-9">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
