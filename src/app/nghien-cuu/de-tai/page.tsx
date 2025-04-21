import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

// Thêm metadata cho trang đề tài nghiên cứu
export const metadata: Metadata = {
  title: "Đề tài nghiên cứu | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Danh sách các đề tài nghiên cứu khoa học của giảng viên và sinh viên tại Khoa Công nghệ Thông tin, Đại học Hàng hải Việt Nam",
  keywords:
    "đề tài nghiên cứu, nghiên cứu khoa học, trí tuệ nhân tạo, IoT, big data, blockchain, Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu cho các đề tài nghiên cứu
const researchProjects = [
  {
    id: 1,
    title: "Xây dựng hệ thống giám sát và điều khiển giao thông thông minh ứng dụng AI và IoT",
    type: "Đề tài cấp Bộ",
    period: "2022-2024",
    leader: "PGS.TS. Nguyễn Văn A",
    members: ["TS. Trần Thị B", "ThS. Lê Văn C", "ThS. Phạm Thị D"],
    status: "Đang thực hiện",
    description:
      "Đề tài nghiên cứu và phát triển hệ thống giám sát và điều khiển giao thông thông minh dựa trên công nghệ AI và IoT, nhằm giảm thiểu tình trạng ùn tắc giao thông và tai nạn giao thông tại các nút giao thông phức tạp.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "giao-thong-thong-minh",
  },
  {
    id: 2,
    title: "Nghiên cứu và phát triển hệ thống hỗ trợ chẩn đoán bệnh dựa trên học sâu",
    type: "Đề tài cấp Trường",
    period: "2021-2023",
    leader: "TS. Trần Thị B",
    members: ["ThS. Hoàng Văn E", "ThS. Lý Thị H"],
    status: "Đã hoàn thành",
    description:
      "Đề tài nghiên cứu và phát triển hệ thống hỗ trợ chẩn đoán bệnh dựa trên các mô hình học sâu, nhằm nâng cao độ chính xác trong chẩn đoán và giảm thiểu sai sót trong quá trình chẩn đoán bệnh.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "chan-doan-benh",
  },
  {
    id: 3,
    title: "Phát triển nền tảng quản lý chuỗi cung ứng thông minh dựa trên blockchain",
    type: "Dự án hợp tác doanh nghiệp",
    period: "2023-2025",
    leader: "TS. Lê Văn C",
    members: ["PGS.TS. Nguyễn Văn A", "ThS. Đỗ Văn G", "ThS. Vũ Thị F"],
    status: "Đang thực hiện",
    description:
      "Dự án nghiên cứu và phát triển nền tảng quản lý chuỗi cung ứng thông minh dựa trên công nghệ blockchain, nhằm nâng cao tính minh bạch, bảo mật và hiệu quả trong quản lý chuỗi cung ứng, đặc biệt trong lĩnh vực hàng hải và logistics.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "chuoi-cung-ung-blockchain",
  },
  {
    id: 4,
    title: "Nghiên cứu và phát triển hệ thống dự báo thời tiết biển dựa trên học máy",
    type: "Đề tài cấp Bộ",
    period: "2022-2024",
    leader: "PGS.TS. Hoàng Văn E",
    members: ["TS. Lê Văn C", "ThS. Phạm Thị D", "ThS. Lý Thị H"],
    status: "Đang thực hiện",
    description:
      "Đề tài nghiên cứu và phát triển hệ thống dự báo thời tiết biển dựa trên các mô hình học máy, nhằm nâng cao độ chính xác trong dự báo thời tiết biển, hỗ trợ hoạt động hàng hải và đánh bắt thủy sản.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "du-bao-thoi-tiet-bien",
  },
  {
    id: 5,
    title: "Xây dựng hệ thống nhận dạng tàu thuyền tự động dựa trên thị giác máy tính",
    type: "Đề tài cấp Trường",
    period: "2023-2024",
    leader: "TS. Trần Thị B",
    members: ["ThS. Vũ Thị F", "ThS. Đỗ Văn G"],
    status: "Đang thực hiện",
    description:
      "Đề tài nghiên cứu và phát triển hệ thống nhận dạng tàu thuyền tự động dựa trên công nghệ thị giác máy tính, nhằm hỗ trợ công tác quản lý, giám sát và đảm bảo an toàn hàng hải.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "nhan-dang-tau-thuyen",
  },
  {
    id: 6,
    title: "Nghiên cứu và ứng dụng công nghệ thực tế ảo trong đào tạo hàng hải",
    type: "Đề tài cấp Trường",
    period: "2022-2023",
    leader: "ThS. Lý Thị H",
    members: ["TS. Lê Văn C", "ThS. Hoàng Văn E"],
    status: "Đã hoàn thành",
    description:
      "Đề tài nghiên cứu và ứng dụng công nghệ thực tế ảo trong đào tạo hàng hải, nhằm nâng cao chất lượng đào tạo và giảm thiểu chi phí đào tạo thực hành cho sinh viên ngành hàng hải.",
    image: "/placeholder.svg?height=300&width=500",
    slug: "thuc-te-ao-hang-hai",
  },
]

export default function ResearchProjectsPage() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Đề tài nghiên cứu" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Đề tài nghiên cứu</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <span>Đề tài nghiên cứu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Loại đề tài
                </label>
                <select
                  id="type"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="all">Tất cả</option>
                  <option value="cap-bo">Cấp Bộ</option>
                  <option value="cap-truong">Cấp Trường</option>
                  <option value="hop-tac">Hợp tác doanh nghiệp</option>
                </select>
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Trạng thái
                </label>
                <select
                  id="status"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="all">Tất cả</option>
                  <option value="dang-thuc-hien">Đang thực hiện</option>
                  <option value="da-hoan-thanh">Đã hoàn thành</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Năm
                </label>
                <select
                  id="year"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="all">Tất cả</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm đề tài..."
                className="border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects list */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Danh sách đề tài nghiên cứu</h2>

          <div className="space-y-8">
            {researchProjects.map((project) => (
              <div key={project.id} className="border-b pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-60 md:h-48 rounded-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                        {project.type}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                      <Link href={`/nghien-cuu/de-tai/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-3 text-sm">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Chủ nhiệm:</span>
                        <span>{project.leader}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Thời gian:</span>
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Trạng thái:</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            project.status === "Đang thực hiện"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <Link
                      href={`/nghien-cuu/de-tai/${project.slug}`}
                      className="inline-block bg-primary hover:bg-primary-light text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-1">
              <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
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
              <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
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
    </>
  )
}
