import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tin tức & Sự kiện - Khoa CNTT - Trường Đại học Hàng hải Việt Nam",
  description: "Cập nhật tin tức, sự kiện mới nhất từ Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#f5f7fa]">{children}</div>
}
