import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Thêm metadata cho trang dự án sinh viên
export const metadata: Metadata = {
  title: "Dự án nghiên cứu sinh viên | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Các dự án nghiên cứu khoa học của sinh viên Khoa Công nghệ Thông tin, Đại học Hàng hải Việt Nam trong các lĩnh vực trí tuệ nhân tạo, IoT, phát triển ứng dụng và blockchain",
  keywords:
    "dự án sinh viên, nghiên cứu khoa học sinh viên, đồ án, trí tuệ nhân tạo, IoT, blockchain, phát triển ứng dụng, Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu cho các dự án nghiên cứu của sinh viên
const studentProjects = [
  {
    id: 1,
    title: "Hệ thống nhận diện khuôn mặt ứng dụng trong điểm danh sinh viên",
    students: ["Nguyễn Văn X", "Trần Thị Y"],
    supervisor: "TS. Lê Văn C",
    year: 2023,
    field: "Trí tuệ nhân tạo",
    description:
      "Dự án nghiên cứu và phát triển hệ thống nhận diện khuôn mặt sử dụng deep learning để tự động điểm danh sinh viên trong lớp học. Hệ thống có khả năng nhận diện khuôn mặt với độ chính xác cao, ngay cả trong điều kiện ánh sáng khác nhau và góc nhìn khác nhau.",
    image: "/placeholder.svg?height=300&width=500",
    awards: ["Giải Nhất cuộc thi NCKH sinh viên cấp Trường năm 2023"],
    slug: "nhan-dien-khuon-mat-diem-danh",
  },
  {
    id: 2,
    title: "Ứng dụng di động hỗ trợ học tập cho sinh viên Đại học Hàng hải",
    students: ["Lê Quang Z", "Phạm Thị W"],
    supervisor: "ThS. Vũ Thị F",
    year: 2023,
    field: "Phát triển ứng dụng di động",
    description:
      "Dự án phát triển ứng dụng di động đa nền tảng (iOS và Android) giúp sinh viên Đại học Hàng hải dễ dàng truy cập thông tin học tập, lịch học, lịch thi, kết quả học tập, và nhận thông báo quan trọng từ nhà trường và khoa.",
    image: "/placeholder.svg?height=300&width=500",
    awards: ["Giải Nhì cuộc thi NCKH sinh viên cấp Trường năm 2023"],
    slug: "ung-dung-di-dong-ho-tro-hoc-tap",
  },
  {
    id: 3,
    title: "Hệ thống IoT giám sát và cảnh báo chất lượng không khí trong phòng học",
    students: ["Hoàng Văn M", "Ngô Thị N"],
    supervisor: "TS. Phạm Thị D",
    year: 2022,
    field: "Internet vạn vật (IoT)",
    description:
      "Dự án thiết kế và triển khai hệ thống IoT để giám sát và cảnh báo chất lượng không khí trong phòng học, bao gồm các thông số như nhiệt độ, độ ẩm, nồng độ CO2, và các hạt bụi. Hệ thống gửi cảnh báo khi các thông số vượt ngưỡng an toàn.",
    image: "/placeholder.svg?height=300&width=500",
    awards: ["Giải Ba cuộc thi NCKH sinh viên cấp Trường năm 2022"],
    slug: "iot-giam-sat-chat-luong-khong-khi",
  },
  {
    id: 4,
    title: "Phát triển website thương mại điện tử cho doanh nghiệp vừa và nhỏ",
    students: ["Đỗ Văn P", "Lý Thị Q"],
    supervisor: "ThS. Đỗ Văn G",
    year: 2022,
    field: "Phát triển web",
    description:
      "Dự án nghiên cứu và phát triển nền tảng website thương mại điện tử dành cho các doanh nghiệp vừa và nhỏ, với các tính năng như quản lý sản phẩm, giỏ hàng, thanh toán trực tuyến, quản lý đơn hàng, và báo cáo thống kê.",
    image: "/placeholder.svg?height=300&width=500",
    awards: [],
    slug: "website-thuong-mai-dien-tu",
  },
  {
    id: 5,
    title: "Ứng dụng blockchain trong quản lý chuỗi cung ứng hàng hải",
    students: ["Trần Văn R", "Nguyễn Thị S"],
    supervisor: "TS. Lê Văn C",
    year: 2023,
    field: "Blockchain",
    description:
      "Dự án nghiên cứu và phát triển ứng dụng blockchain để quản lý chuỗi cung ứng trong lĩnh vực hàng hải, giúp tăng tính minh bạch, bảo mật và hiệu quả trong quản lý vận chuyển hàng hóa đường biển.",
    image: "/placeholder.svg?height=300&width=500",
    awards: ["Giải Khuyến khích cuộc thi NCKH sinh viên cấp Trường năm 2023"],
    slug: "blockchain-chuoi-cung-ung-hang-hai",
  },
  {
    id: 6,
    title: "Hệ thống hỗ trợ dự đoán kết quả học tập của sinh viên dựa trên học máy",
    students: ["Lê Thị T", "Phạm Văn U"],
    supervisor: "TS. Trần Thị B",
    year: 2022,
    field: "Học máy",
    description:
      "Dự án nghiên cứu và phát triển hệ thống sử dụng các thuật toán học máy để dự đoán kết quả học tập của sinh viên dựa trên dữ liệu lịch sử học tập, giúp phát hiện sớm các sinh viên có nguy cơ kết quả học tập kém để có biện pháp hỗ trợ kịp thời.",
    image: "/placeholder.svg?height=300&width=500",
    awards: ["Giải Nhì cuộc thi NCKH sinh viên cấp Trường năm 2022"],
    slug: "du-doan-ket-qua-hoc-tap",
  },
]

// Danh sách các lĩnh vực nghiên cứu
const researchFields = [
  { id: 1, name: "Tất cả", count: studentProjects.length },
  { id: 2, name: "Trí tuệ nhân tạo", count: 1 },
  { id: 3, name: "Phát triển ứng dụng di động", count: 1 },
  { id: 4, name: "Internet vạn vật (IoT)", count: 1 },
  { id: 5, name: "Phát triển web", count: 1 },
  { id: 6, name: "Blockchain", count: 1 },
  { id: 7, name: "Học máy", count: 1 },
]

// Danh sách các năm
const years = [
  { id: 1, name: "Tất cả", count: studentProjects.length },
  { id: 2, name: "2023", count: 3 },
  { id: 3, name: "2022", count: 3 },
  { id: 4, name: "2021", count: 0 },
]

// Danh sách giảng viên hướng dẫn
const supervisors = [
  { id: 1, name: "Tất cả", count: studentProjects.length },
  { id: 2, name: "TS. Lê Văn C", count: 2 },
  { id: 3, name: "ThS. Vũ Thị F", count: 1 },
  { id: 4, name: "TS. Phạm Thị D", count: 1 },
  { id: 5, name: "ThS. Đỗ Văn G", count: 1 },
  { id: 6, name: "TS. Trần Thị B", count: 1 },
]

export default function StudentProjectsPage() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Dự án nghiên cứu sinh viên"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dự án nghiên cứu sinh viên</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <span>Dự án sinh viên</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giới thiệu */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Giới thiệu về hoạt động nghiên cứu khoa học sinh viên
          </h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Nghiên cứu khoa học sinh viên là một trong những hoạt động quan trọng tại Khoa Công nghệ Thông tin -
              Trường Đại học Hàng hải Việt Nam. Hoạt động này không chỉ giúp sinh viên áp dụng kiến thức đã học vào thực
              tiễn mà còn phát triển kỹ năng nghiên cứu, tư duy phản biện và khả năng làm việc nhóm.
            </p>

            <p className="mb-4">
              Hàng năm, Khoa tổ chức nhiều hoạt động để thúc đẩy nghiên cứu khoa học sinh viên như cuộc thi Nghiên cứu
              khoa học sinh viên cấp Khoa và cấp Trường, các seminar khoa học, và các workshop về phương pháp nghiên
              cứu. Sinh viên được khuyến khích tham gia các nhóm nghiên cứu dưới sự hướng dẫn của giảng viên và có cơ
              hội công bố kết quả nghiên cứu tại các hội nghị khoa học trong nước và quốc tế.
            </p>

            <p className="mb-4">
              Các dự án nghiên cứu của sinh viên tập trung vào nhiều lĩnh vực đa dạng như Trí tuệ nhân tạo, Internet vạn
              vật (IoT), Phát triển ứng dụng di động và web, Blockchain, An toàn thông tin, và Dữ liệu lớn. Nhiều dự án
              đã đạt được các giải thưởng cao trong các cuộc thi cấp Trường, cấp Thành phố và cấp Quốc gia.
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
                <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-1">
                  Lĩnh vực nghiên cứu
                </label>
                <select
                  id="field"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  {researchFields.map((field) => (
                    <option key={field.id} value={field.name}>
                      {field.name} ({field.count})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Năm thực hiện
                </label>
                <select
                  id="year"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.name}>
                      {year.name} ({year.count})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="supervisor" className="block text-sm font-medium text-gray-700 mb-1">
                  Giảng viên hướng dẫn
                </label>
                <select
                  id="supervisor"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  {supervisors.map((supervisor) => (
                    <option key={supervisor.id} value={supervisor.name}>
                      {supervisor.name} ({supervisor.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm dự án..."
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
          <h2 className="text-2xl font-bold mb-6 text-primary">Danh sách dự án nghiên cứu sinh viên</h2>

          <div className="space-y-8">
            {studentProjects.map((project) => (
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
                        {project.field}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                      <Link href={`/nghien-cuu/du-an-sinh-vien/${project.slug}`}>{project.title}</Link>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-3 text-sm">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Sinh viên thực hiện:</span>
                        <span>{project.students.join(", ")}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Giảng viên hướng dẫn:</span>
                        <span>{project.supervisor}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Năm thực hiện:</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Lĩnh vực:</span>
                        <span>{project.field}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    {project.awards.length > 0 && (
                      <div className="mb-4">
                        <span className="font-medium text-gray-700">Giải thưởng:</span>
                        <ul className="list-disc pl-5 mt-1">
                          {project.awards.map((award, index) => (
                            <li key={index} className="text-gray-600">
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button asChild>
                      <Link href={`/nghien-cuu/du-an-sinh-vien/${project.slug}`}>Xem chi tiết</Link>
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
