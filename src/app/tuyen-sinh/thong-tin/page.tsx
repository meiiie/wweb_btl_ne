import type { Metadata } from "next"
import { PageHeader } from "@/components/tuyen-sinh/page-header"
import { ThongTinTuyenSinh } from "@/components/tuyen-sinh/thong-tin-tuyen-sinh"
import { NganhDaoTaoList } from "@/components/tuyen-sinh/nganh-dao-tao-list"
import { PhuongThucXetTuyen } from "@/components/tuyen-sinh/phuong-thuc-xet-tuyen"
import { HoSoXetTuyen } from "@/components/tuyen-sinh/ho-so-xet-tuyen"
import { LienHeSection } from "@/components/tuyen-sinh/lien-he-section"

export const metadata: Metadata = {
  title: "Thông tin tuyển sinh | Khoa CNTT - ĐH Hàng hải Việt Nam",
  description: "Thông tin chi tiết về tuyển sinh Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam",
}

export default function ThongTinTuyenSinhPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Thông tin tuyển sinh"
        description="Thông tin chi tiết về tuyển sinh Khoa Công nghệ thông tin năm học 2023-2024"
        imageSrc="/images/students/students-studying.jpg"
      />

      <ThongTinTuyenSinh />

      <NganhDaoTaoList />

      <PhuongThucXetTuyen />

      <HoSoXetTuyen />

      <LienHeSection />
    </div>
  )
}
