import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { AnnouncementCard } from "@/components/student/announcement-card"

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
  {
    id: 4,
    title: "Thông báo về việc nộp học phí học kỳ 2 năm học 2023-2024",
    date: "01/12/2023",
    excerpt:
      "Phòng Kế hoạch - Tài chính thông báo về việc nộp học phí học kỳ 2 năm học 2023-2024 cho sinh viên các khóa...",
    category: "Tài chính",
    link: "/sinh-vien/thong-bao/nop-hoc-phi-hk2-2023-2024",
  },
  {
    id: 5,
    title: "Thông báo về việc đăng ký xét tốt nghiệp đợt tháng 2/2024",
    date: "25/11/2023",
    excerpt:
      "Phòng Đào tạo thông báo về việc đăng ký xét tốt nghiệp đợt tháng 2/2024 cho sinh viên đủ điều kiện tốt nghiệp...",
    category: "Đào tạo",
    link: "/sinh-vien/thong-bao/dang-ky-xet-tot-nghiep-02-2024",
  },
  {
    id: 6,
    title: "Thông báo về việc tổ chức Ngày hội việc làm năm 2023",
    date: "20/11/2023",
    excerpt:
      "Trung tâm Hợp tác doanh nghiệp thông báo về việc tổ chức Ngày hội việc làm năm 2023 dành cho sinh viên...",
    category: "Việc làm",
    link: "/sinh-vien/thong-bao/ngay-hoi-viec-lam-2023",
  },
  {
    id: 7,
    title: "Thông báo về việc tổ chức cuộc thi Sinh viên nghiên cứu khoa học năm 2023",
    date: "15/11/2023",
    excerpt: "Phòng Khoa học Công nghệ thông báo về việc tổ chức cuộc thi Sinh viên nghiên cứu khoa học năm 2023...",
    category: "Nghiên cứu",
    link: "/sinh-vien/thong-bao/cuoc-thi-nckh-2023",
  },
  {
    id: 8,
    title: "Thông báo về việc tổ chức khóa học kỹ năng mềm cho sinh viên",
    date: "10/11/2023",
    excerpt: "Trung tâm Hỗ trợ sinh viên thông báo về việc tổ chức khóa học kỹ năng mềm cho sinh viên các khóa...",
    category: "Đào tạo",
    link: "/sinh-vien/thong-bao/khoa-hoc-ky-nang-mem",
  },
]

// Dữ liệu mẫu cho các danh mục thông báo
const categories = [
  { id: 1, name: "Tất cả", count: 24 },
  { id: 2, name: "Đào tạo", count: 10 },
  { id: 3, name: "Khảo thí", count: 5 },
  { id: 4, name: "Học bổng", count: 4 },
  { id: 5, name: "Tài chính", count: 3 },
  { id: 6, name: "Việc làm", count: 2 },
  { id: 7, name: "Nghiên cứu", count: 2 },
]

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Thông báo sinh viên" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thông báo sinh viên</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/sinh-vien" className="hover:underline">
                Sinh viên
              </Link>
              <span className="mx-2">/</span>
              <span>Thông báo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Search */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Tìm kiếm</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm thông báo..."
                      className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Danh mục</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/sinh-vien/thong-bao/danh-muc/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100"
                        >
                          <span className="text-gray-700 hover:text-primary">{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recent announcements */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Thông báo gần đây</h3>
                  <div className="space-y-4">
                    {announcements.slice(0, 3).map((announcement) => (
                      <div key={announcement.id} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex-shrink-0 bg-primary text-white rounded-lg p-2 text-center w-12 h-12 flex flex-col justify-center">
                            <div className="text-sm font-bold">{announcement.date.split("/")[0]}</div>
                            <div className="text-xs">{`/${announcement.date.split("/")[1]}`}</div>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-medium hover:text-primary line-clamp-2">
                            <Link href={announcement.link}>{announcement.title}</Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{announcement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Thẻ</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/sinh-vien/thong-bao/tag/hoc-phi"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      Học phí
                    </Link>
                    <Link
                      href="/sinh-vien/thong-bao/tag/hoc-bong"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      Học bổng
                    </Link>
                    <Link
                      href="/sinh-vien/thong-bao/tag/lich-thi"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      Lịch thi
                    </Link>
                    <Link
                      href="/sinh-vien/thong-bao/tag/tot-nghiep"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      Tốt nghiệp
                    </Link>
                    <Link
                      href="/sinh-vien/thong-bao/tag/dang-ky-hoc-phan"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      Đăng ký học phần
                    </Link>
                    <Link
                      href="/sinh-vien/thong-bao/tag/viec-lam"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      Việc làm
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Announcements list */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">Thông báo sinh viên</h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Sắp xếp theo:</span>
                      <select className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                        <option>A-Z</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <AnnouncementCard key={announcement.id} announcement={announcement} />
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-1">
                      <a
                        href="#"
                        className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </a>
                      <a href="#" className="px-4 py-2 rounded-md bg-primary text-white font-medium">
                        1
                      </a>
                      <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                        2
                      </a>
                      <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                        3
                      </a>
                      <span className="px-4 py-2 text-gray-500">...</span>
                      <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                        8
                      </a>
                      <a
                        href="#"
                        className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
