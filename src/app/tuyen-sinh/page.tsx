import type { Metadata } from "next"
import { PageHeader } from "@/components/tuyen-sinh/page-header"
import { TuyenSinhOverview } from "@/components/tuyen-sinh/tuyen-sinh-overview"
import { TuyenSinhStats } from "@/components/tuyen-sinh/tuyen-sinh-stats"
import { TuyenSinhTimeline } from "@/components/tuyen-sinh/tuyen-sinh-timeline"
import { TuyenSinhCTA } from "@/components/tuyen-sinh/tuyen-sinh-cta"

export const metadata: Metadata = {
  title: "Tổng quan tuyển sinh | Khoa CNTT - ĐH Hàng hải Việt Nam",
  description: "Thông tin tổng quan về tuyển sinh Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam",
}

export default function TuyenSinhPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Tuyển sinh Khoa Công nghệ thông tin"
        description="Thông tin tuyển sinh và hướng dẫn xét tuyển vào Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam"
        imageSrc="/images/students/students-uniform.jpg"
      />

      <TuyenSinhOverview />

      <TuyenSinhStats />

      <TuyenSinhTimeline />

      <TuyenSinhCTA />
    </div>
  )
}
