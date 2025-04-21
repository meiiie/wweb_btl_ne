"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

const sidebarItems = [
  {
    title: "Tổng quan tuyển sinh",
    href: "/tuyen-sinh",
    exact: true,
  },
  {
    title: "Thông tin tuyển sinh",
    href: "/tuyen-sinh/thong-tin",
  },
  {
    title: "Điểm chuẩn các năm",
    href: "/tuyen-sinh/diem-chuan",
  },
  {
    title: "Câu hỏi thường gặp",
    href: "/tuyen-sinh/faq",
  },
]

export function TuyenSinhSidebar() {
  const pathname = usePathname()

  return (
    <div className="sticky top-24">
      <div className="p-4 bg-white border rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-blue-800 border-b pb-2 mb-4">Tuyển sinh</h2>
        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {isActive && <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />}
                <span className={isActive ? "font-medium" : ""}>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 mt-6 bg-blue-50 border border-blue-100 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2">Cần hỗ trợ?</h3>
        <p className="text-sm text-gray-600 mb-3">Liên hệ với chúng tôi để được tư vấn về tuyển sinh</p>
        <div className="space-y-2 text-sm">
          <p className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Hotline:</span> 0225.3829.109
          </p>
          <p className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Email:</span> tuyensinh@vimaru.edu.vn
          </p>
        </div>
      </div>
    </div>
  )
}
