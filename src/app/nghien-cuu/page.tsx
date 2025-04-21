import type { Metadata } from "next"
import ResearchPageClient from "./ResearchPageClient"

// Metadata được xử lý ở file khác để tương thích với Client Component
export const metadata: Metadata = {
  title: "Tổng quan nghiên cứu khoa học | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Tổng quan về hoạt động nghiên cứu khoa học, các hướng nghiên cứu, đề tài và công bố khoa học tại Khoa Công nghệ Thông tin, Đại học Hàng hải Việt Nam",
  keywords:
    "nghiên cứu khoa học, hướng nghiên cứu, đề tài nghiên cứu, công bố khoa học, trí tuệ nhân tạo, IoT, big data, Đại học Hàng hải Việt Nam",
}

export default function ResearchPage() {
  return <ResearchPageClient />
}
