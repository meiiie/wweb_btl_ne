import type { Metadata } from "next"
import { PageHeader } from "@/components/tuyen-sinh/page-header"
import { DiemChuanTable } from "@/components/tuyen-sinh/diem-chuan-table"
import { DiemChuanChart } from "@/components/tuyen-sinh/diem-chuan-chart"
import { DiemChuanFilter } from "@/components/tuyen-sinh/diem-chuan-filter"
import { DiemChuanComparison } from "@/components/tuyen-sinh/diem-chuan-comparison"

export const metadata: Metadata = {
  title: "Điểm chuẩn | Khoa CNTT - ĐH Hàng hải Việt Nam",
  description: "Điểm chuẩn các năm của Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam",
}

export default function DiemChuanPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Điểm chuẩn các năm"
        description="Thông tin điểm chuẩn trúng tuyển các ngành của Khoa Công nghệ thông tin qua các năm"
        imageSrc="/images/students/students-lab.jpg"
      />

      <DiemChuanFilter />

      <DiemChuanTable />

      <DiemChuanChart />

      <DiemChuanComparison />
    </div>
  )
}
