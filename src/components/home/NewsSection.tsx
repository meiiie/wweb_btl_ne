import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { NewsCard } from "./news-card"

// Dữ liệu mẫu cho tin tức
const news = [
  {
    id: 1,
    title: "Lễ khai giảng năm học 2023-2024 của Khoa Công nghệ Thông tin",
    excerpt: "Khoa CNTT đã tổ chức thành công lễ khai giảng năm học mới với sự tham gia của hơn 300 tân sinh viên...",
    date: "15/09/2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Sự kiện",
    link: "/tin-tuc-su-kien/khai-giang-2023-2024",
  },
  {
    id: 2,
    title: "Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải",
    excerpt: "Khoa CNTT phối hợp với các đối tác tổ chức hội thảo chuyên đề về AI và ứng dụng trong ngành hàng hải...",
    date: "20/08/2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Hội thảo",
    link: "/tin-tuc-su-kien/hoi-thao-ai-hang-hai",
  },
  {
    id: 3,
    title: "Sinh viên Khoa CNTT đạt giải Nhất cuộc thi Sáng tạo Khoa học Kỹ thuật toàn quốc",
    excerpt:
      "Nhóm sinh viên của Khoa đã xuất sắc đạt giải Nhất với đề tài nghiên cứu về ứng dụng IoT trong giao thông thông minh...",
    date: "05/07/2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Thành tích",
    link: "/tin-tuc-su-kien/giai-nhat-sang-tao-khkt",
  },
]

export default function NewsSection() {
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Tin tức & Sự kiện</h2>
          <Link href="/tin-tuc-su-kien" className="text-primary hover:text-primary-light font-medium flex items-center">
            Xem tất cả
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
