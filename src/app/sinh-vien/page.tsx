import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StudentInfoCard } from "@/components/student/student-info-card"
import { AnnouncementCard } from "@/components/student/announcement-card"

// Dữ liệu mẫu cho các thông tin sinh viên
const studentInfoCategories = [
  {
    id: 1,
    title: "Thông báo",
    description: "Các thông báo quan trọng dành cho sinh viên Khoa CNTT",
    icon: "bell",
    link: "/sinh-vien/thong-bao",
  },
  {
    id: 2,
    title: "Lịch học - Lịch thi",
    description: "Thông tin về lịch học, lịch thi và thời khóa biểu",
    icon: "calendar",
    link: "/sinh-vien/lich-hoc-thi",
  },
  {
    id: 3,
    title: "Biểu mẫu & Quy định",
    description: "Các biểu mẫu, quy định và hướng dẫn dành cho sinh viên",
    icon: "file-text",
    link: "/sinh-vien/bieu-mau-quy-dinh",
  },
  {
    id: 4,
    title: "Học bổng",
    description: "Thông tin về học bổng và hỗ trợ tài chính cho sinh viên",
    icon: "award",
    link: "/sinh-vien/hoc-bong",
  },
  {
    id: 5,
    title: "Hoạt động ngoại khóa",
    description: "Các hoạt động ngoại khóa, sự kiện và câu lạc bộ sinh viên",
    icon: "users",
    link: "/sinh-vien/hoat-dong-ngoai-khoa",
  },
  {
    id: 6,
    title: "Cơ hội việc làm",
    description: "Thông tin tuyển dụng, thực tập và cơ hội việc làm",
    icon: "briefcase",
    link: "/sinh-vien/co-hoi-viec-lam",
  },
]

// Dữ liệu mẫu cho các thông báo
const announcements = [
  {
    id: 1,
    title: "Thông báo về việc đăng ký học phần học kỳ 2 năm học 2023-2024",
    date: "15/12/2023",
    excerpt: "Phòng Đào tạo thông báo kế hoạch đăng ký học phần học kỳ 2 năm học 2023-2024 cho sinh viên các khóa...",
    category: "Đào tạo",
    link: "/sinh-vien/thong-bao/dang-ky-hoc-phan-hk2-2023-2024",
  },
  {
    id: 2,
    title: "Thông báo lịch thi kết thúc học phần học kỳ 1 năm học 2023-2024",
    date: "10/12/2023",
    excerpt: "Phòng Khảo thí và Đảm bảo chất lượng thông báo lịch thi kết thúc học phần học kỳ 1 năm học 2023-2024...",
    category: "Khảo thí",
    link: "/sinh-vien/thong-bao/lich-thi-hk1-2023-2024",
  },
  {
    id: 3,
    title: "Thông báo về học bổng khuyến khích học tập học kỳ 1 năm học 2023-2024",
    date: "05/12/2023",
    excerpt:
      "Phòng Công tác sinh viên thông báo về việc xét cấp học bổng khuyến khích học tập học kỳ 1 năm học 2023-2024...",
    category: "Học bổng",
    link: "/sinh-vien/thong-bao/hoc-bong-khuyen-khich-hk1-2023-2024",
  },
]

export default function StudentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Thông tin sinh viên" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thông tin sinh viên</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <span>Sinh viên</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Liên kết nhanh</h3>
                  <ul className="space-y-2">
                    {studentInfoCategories.map((category) => (
                      <li key={category.id}>
                        <Link href={category.link} className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
                          <span className="text-gray-700 hover:text-primary">{category.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Tài liệu hữu ích</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/sinh-vien/tai-lieu/so-tay-sinh-vien.pdf"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        Sổ tay sinh viên
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sinh-vien/tai-lieu/quy-che-dao-tao.pdf"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        Quy chế đào tạo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sinh-vien/tai-lieu/huong-dan-dang-ky-hoc-phan.pdf"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        Hướng dẫn đăng ký học phần
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sinh-vien/tai-lieu/mau-don-xin-phep.docx"
                        className="flex items-center text-gray-700 hover:text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        Mẫu đơn xin phép
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="md:col-span-2">
              {/* Thông tin sinh viên */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Thông tin dành cho sinh viên</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {studentInfoCategories.map((category) => (
                    <StudentInfoCard key={category.id} category={category} />
                  ))}
                </div>
              </div>

              {/* Thông báo mới nhất */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary">Thông báo mới nhất</h2>
                  <Link
                    href="/sinh-vien/thong-bao"
                    className="text-primary hover:text-primary-light font-medium flex items-center"
                  >
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

                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} />
                  ))}
                </div>
              </div>

              {/* Lịch sự kiện */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Sự kiện sắp diễn ra</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="relative h-[300px] bg-gray-100 rounded-lg mb-4">
                      {/* Placeholder for calendar */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <p>Lịch sự kiện sẽ được hiển thị ở đây</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Button asChild>
                        <Link href="/sinh-vien/su-kien">Xem tất cả sự kiện</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
