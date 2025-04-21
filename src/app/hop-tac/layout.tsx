import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"
import { CooperationSidebar } from "@/components/hop-tac/cooperation-sidebar"
import { PageHeader } from "@/components/hop-tac/page-header"

export const metadata: Metadata = {
  title: "Hợp tác - Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin về các hoạt động hợp tác trong nước và quốc tế của Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam",
}

export default function CooperationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <PageHeader
        title="Hợp tác"
        description="Thông tin về các hoạt động hợp tác trong nước và quốc tế của Khoa Công nghệ thông tin"
        backgroundImage="/images/cooperation/cooperation-banner.jpg"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <CooperationSidebar />
          </aside>
          <main className="w-full md:w-3/4 lg:w-4/5 min-h-[600px]">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </div>
      </div>
    </div>
  )
}
