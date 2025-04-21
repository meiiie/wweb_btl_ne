import type React from "react"
import type { Metadata } from "next"
import { SidebarNav } from "@/components/gioi-thieu/sidebar-nav"

export const metadata: Metadata = {
  title: "Bộ môn | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Thông tin về các bộ môn thuộc Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
}

const sidebarNavItems = [
  {
    title: "Khoa học máy tính",
    href: "/bo-mon/khoa-hoc-may-tinh",
  },
  {
    title: "Hệ thống thông tin",
    href: "/bo-mon/he-thong-thong-tin",
  },
  {
    title: "Kỹ thuật máy tính",
    href: "/bo-mon/ky-thuat-may-tinh",
  },
  {
    title: "Công nghệ phần mềm",
    href: "/bo-mon/cong-nghe-phan-mem",
  },
  {
    title: "Phòng thí nghiệm",
    href: "/bo-mon/phong-thi-nghiem",
  },
]

export default function DepartmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <main className="md:col-span-3">{children}</main>
      </div>
    </div>
  )
}
