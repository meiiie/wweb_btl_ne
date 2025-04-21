import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Thêm metadata cho trang ứng dụng CNTT trong hàng hải
export const metadata: Metadata = {
  title: "Ứng dụng CNTT trong hàng hải | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Các ứng dụng công nghệ thông tin trong lĩnh vực hàng hải, quản lý cảng, giám sát tàu biển, dự báo thời tiết biển và logistics hàng hải",
  keywords:
    "ứng dụng CNTT, hàng hải, quản lý cảng thông minh, giám sát tàu biển, dự báo thời tiết biển, logistics hàng hải, Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu cho các ứng dụng CNTT trong hàng hải
const maritimeApplications = [
  {
    id: 1,
    title: "Hệ thống quản lý cảng thông minh (Smart Port Management System)",
    category: "Quản lý cảng",
    description:
      "Hệ thống quản lý cảng thông minh tích hợp các công nghệ IoT, AI và Big Data để tối ưu hóa hoạt động cảng, giám sát thời gian thực, quản lý container và điều phối phương tiện vận tải.",
    features: [
      "Giám sát thời gian thực các hoạt động cảng",
      "Quản lý container thông minh",
      "Tối ưu hóa lịch trình tàu và phân bổ cầu cảng",
      "Phân tích dữ liệu lớn để dự báo lưu lượng và nhu cầu",
    ],
    benefits: [
      "Giảm thời gian chờ đợi của tàu",
      "Tăng hiệu quả sử dụng cơ sở hạ tầng cảng",
      "Giảm chi phí vận hành",
      "Nâng cao an toàn và bảo mật",
    ],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["IoT", "AI", "Big Data", "Cloud Computing"],
    partners: ["Cảng Hải Phòng", "Tổng công ty Hàng hải Việt Nam"],
    slug: "he-thong-quan-ly-cang-thong-minh",
  },
  {
    id: 2,
    title: "Hệ thống giám sát tàu biển (Vessel Monitoring System)",
    category: "Giám sát tàu biển",
    description:
      "Hệ thống giám sát tàu biển sử dụng công nghệ GPS, AIS và vệ tinh để theo dõi vị trí, tốc độ và hướng di chuyển của tàu biển, hỗ trợ quản lý đội tàu và đảm bảo an toàn hàng hải.",
    features: [
      "Theo dõi vị trí tàu thời gian thực",
      "Cảnh báo khi tàu đi vào vùng cấm hoặc nguy hiểm",
      "Phân tích hành vi tàu để phát hiện hoạt động bất thường",
      "Báo cáo tự động về hành trình và tiêu thụ nhiên liệu",
    ],
    benefits: [
      "Nâng cao an toàn hàng hải",
      "Tối ưu hóa lộ trình và tiết kiệm nhiên liệu",
      "Hỗ trợ tuân thủ quy định quốc tế",
      "Cải thiện quản lý đội tàu",
    ],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["GPS", "AIS", "Satellite Communication", "GIS"],
    partners: ["Cục Hàng hải Việt Nam", "Tổng công ty Bảo đảm an toàn hàng hải miền Bắc"],
    slug: "he-thong-giam-sat-tau-bien",
  },
  {
    id: 3,
    title: "Ứng dụng dự báo thời tiết biển (Maritime Weather Forecasting)",
    category: "Dự báo thời tiết",
    description:
      "Ứng dụng dự báo thời tiết biển kết hợp dữ liệu từ nhiều nguồn và mô hình dự báo tiên tiến để cung cấp thông tin chính xác về điều kiện thời tiết biển, hỗ trợ lập kế hoạch hành trình và đảm bảo an toàn cho tàu thuyền.",
    features: [
      "Dự báo thời tiết biển chi tiết theo khu vực",
      "Cảnh báo sớm về bão, áp thấp nhiệt đới và sóng lớn",
      "Dự báo dòng chảy, thủy triều và độ cao sóng",
      "Tích hợp với hệ thống định tuyến tàu biển",
    ],
    benefits: [
      "Nâng cao an toàn cho tàu thuyền",
      "Tối ưu hóa lộ trình để tiết kiệm nhiên liệu",
      "Giảm thiểu rủi ro do thời tiết xấu",
      "Hỗ trợ quyết định cho thuyền trưởng và hoa tiêu",
    ],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Machine Learning", "Numerical Weather Prediction", "Remote Sensing", "Data Fusion"],
    partners: ["Trung tâm Khí tượng Thủy văn Quốc gia", "Viện Khoa học Khí tượng Thủy văn và Biến đổi khí hậu"],
    slug: "ung-dung-du-bao-thoi-tiet-bien",
  },
  {
    id: 4,
    title: "Hệ thống hỗ trợ điều hướng tàu (Vessel Navigation Support System)",
    category: "Điều hướng tàu",
    description:
      "Hệ thống hỗ trợ điều hướng tàu tích hợp các công nghệ định vị, bản đồ điện tử và cảm biến để cung cấp thông tin chính xác về vị trí, hướng đi và các chướng ngại vật, hỗ trợ thuyền trưởng và hoa tiêu trong việc điều khiển tàu an toàn.",
    features: [
      "Hiển thị bản đồ hàng hải điện tử (ECDIS)",
      "Cảnh báo va chạm và chướng ngại vật",
      "Tính toán và đề xuất lộ trình tối ưu",
      "Tích hợp dữ liệu AIS, radar và cảm biến khác",
    ],
    benefits: [
      "Nâng cao an toàn hàng hải",
      "Giảm thiểu rủi ro va chạm",
      "Tối ưu hóa lộ trình và tiết kiệm nhiên liệu",
      "Hỗ trợ quyết định cho thuyền trưởng",
    ],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["ECDIS", "Radar", "AIS", "GPS/GNSS", "Computer Vision"],
    partners: ["Cục Hàng hải Việt Nam", "Tổng công ty Bảo đảm an toàn hàng hải miền Bắc"],
    slug: "he-thong-ho-tro-dieu-huong-tau",
  },
  {
    id: 5,
    title: "Ứng dụng quản lý logistics hàng hải (Maritime Logistics Management)",
    category: "Logistics",
    description:
      "Ứng dụng quản lý logistics hàng hải giúp tối ưu hóa chuỗi cung ứng vận tải biển, quản lý container, theo dõi hàng hóa và điều phối các hoạt động logistics tại cảng và trên tàu.",
    features: [
      "Theo dõi container và hàng hóa thời gian thực",
      "Quản lý đặt chỗ và lịch trình vận chuyển",
      "Tối ưu hóa việc xếp dỡ container",
      "Tích hợp với hệ thống hải quan và thanh toán",
    ],
    benefits: [
      "Giảm thời gian xử lý hàng hóa",
      "Tăng hiệu quả sử dụng container",
      "Cải thiện khả năng theo dõi và truy xuất hàng hóa",
      "Giảm chi phí vận chuyển và lưu kho",
    ],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Blockchain", "IoT", "Cloud Computing", "Mobile Apps"],
    partners: ["Tổng công ty Hàng hải Việt Nam", "Hiệp hội Logistics Việt Nam"],
    slug: "ung-dung-quan-ly-logistics-hang-hai",
  },
  {
    id: 6,
    title: "Hệ thống an ninh cảng biển (Port Security System)",
    category: "An ninh cảng biển",
    description:
      "Hệ thống an ninh cảng biển sử dụng camera giám sát, cảm biến và phân tích hành vi để đảm bảo an ninh cho cảng biển, phát hiện xâm nhập trái phép, giám sát hàng hóa và bảo vệ cơ sở hạ tầng quan trọng.",
    features: [
      "Giám sát video thông minh với phân tích hành vi",
      "Kiểm soát ra vào bằng sinh trắc học",
      "Phát hiện xâm nhập và cảnh báo tự động",
      "Giám sát container và hàng hóa nguy hiểm",
    ],
    benefits: [
      "Nâng cao an ninh cảng biển",
      "Giảm thiểu rủi ro buôn lậu và trộm cắp",
      "Bảo vệ cơ sở hạ tầng quan trọng",
      "Tuân thủ các tiêu chuẩn an ninh quốc tế",
    ],
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Video Analytics", "AI", "IoT", "Biometrics"],
    partners: ["Cục Hàng hải Việt Nam", "Cảng Hải Phòng", "Cảng Sài Gòn"],
    slug: "he-thong-an-ninh-cang-bien",
  },
]

// Danh sách các danh mục ứng dụng
const categories = [
  { id: 1, name: "Tất cả", count: maritimeApplications.length },
  { id: 2, name: "Quản lý cảng", count: 1 },
  { id: 3, name: "Giám sát tàu biển", count: 1 },
  { id: 4, name: "Dự báo thời tiết", count: 1 },
  { id: 5, name: "Điều hướng tàu", count: 1 },
  { id: 6, name: "Logistics", count: 1 },
  { id: 7, name: "An ninh cảng biển", count: 1 },
]

// Danh sách các công nghệ
const technologies = [
  { id: 1, name: "AI", count: 3 },
  { id: 2, name: "IoT", count: 3 },
  { id: 3, name: "Big Data", count: 2 },
  { id: 4, name: "Cloud Computing", count: 2 },
  { id: 5, name: "Blockchain", count: 1 },
  { id: 6, name: "Machine Learning", count: 2 },
  { id: 7, name: "GPS/GNSS", count: 2 },
]

export default function MaritimeApplicationsPage() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Ứng dụng CNTT trong hàng hải"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ứng dụng CNTT trong hàng hải</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <span>Ứng dụng CNTT trong hàng hải</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giới thiệu */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Giới thiệu về ứng dụng CNTT trong hàng hải</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Công nghệ thông tin đang đóng vai trò ngày càng quan trọng trong việc hiện đại hóa ngành hàng hải, giúp
              nâng cao hiệu quả, an toàn và bền vững trong hoạt động vận tải biển và quản lý cảng. Khoa Công nghệ Thông
              tin - Trường Đại học Hàng hải Việt Nam đã và đang nghiên cứu, phát triển nhiều ứng dụng CNTT tiên tiến
              trong lĩnh vực hàng hải.
            </p>

            <p className="mb-4">
              Các ứng dụng CNTT trong hàng hải bao gồm nhiều lĩnh vực đa dạng như hệ thống quản lý cảng thông minh, hệ
              thống giám sát tàu biển, ứng dụng dự báo thời tiết biển, hệ thống hỗ trợ điều hướng tàu, ứng dụng quản lý
              logistics hàng hải và hệ thống an ninh cảng biển. Những ứng dụng này kết hợp các công nghệ hiện đại như
              Trí tuệ nhân tạo (AI), Internet vạn vật (IoT), Dữ liệu lớn (Big Data), Điện toán đám mây (Cloud Computing)
              và Blockchain để tạo ra các giải pháp toàn diện cho ngành hàng hải.
            </p>

            <p className="mb-4">
              Việc ứng dụng CNTT trong hàng hải không chỉ giúp tối ưu hóa hoạt động, giảm chi phí và nâng cao hiệu quả
              mà còn góp phần quan trọng trong việc đảm bảo an toàn hàng hải, bảo vệ môi trường biển và phát triển bền
              vững ngành vận tải biển Việt Nam.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Filter section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Danh mục
                </label>
                <select
                  id="category"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="technology" className="block text-sm font-medium text-gray-700 mb-1">
                  Công nghệ
                </label>
                <select
                  id="technology"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="">Tất cả công nghệ</option>
                  {technologies.map((tech) => (
                    <option key={tech.id} value={tech.name}>
                      {tech.name} ({tech.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm ứng dụng..."
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

      {/* Applications list */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Danh sách ứng dụng CNTT trong hàng hải</h2>

          <div className="space-y-8">
            {maritimeApplications.map((app) => (
              <div key={app.id} className="border-b pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-60 md:h-48 rounded-lg overflow-hidden">
                      <Image src={app.image || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
                      <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                        {app.category}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                      <Link href={`/nghien-cuu/ung-dung-hang-hai/${app.slug}`}>{app.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={`/nghien-cuu/ung-dung-hang-hai/${app.slug}`}>Xem chi tiết</Link>
                    </Button>
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
