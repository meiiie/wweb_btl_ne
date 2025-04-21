import type { Metadata } from "next"
import { PageHero } from "@/components/gioi-thieu/page-hero"
import { ContentCard } from "@/components/gioi-thieu/content-card"
import { FacilityCard } from "@/components/gioi-thieu/facility-card"

export const metadata: Metadata = {
  title: "Cơ sở vật chất | Giới thiệu | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin về cơ sở vật chất, trang thiết bị của Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu cho cơ sở vật chất
const facilities = [
  {
    title: "Phòng máy tính",
    description:
      "10 phòng thực hành máy tính với hơn 300 máy tính cấu hình cao, được cài đặt đầy đủ phần mềm phục vụ học tập và nghiên cứu.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Phòng Lab AI & IoT",
    description:
      "Phòng thí nghiệm chuyên sâu về Trí tuệ nhân tạo và Internet vạn vật, trang bị các thiết bị hiện đại như robot, cảm biến, máy tính hiệu năng cao.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Phòng Lab Big Data",
    description:
      "Phòng thí nghiệm về Dữ liệu lớn và Phân tích dữ liệu, được trang bị hệ thống máy chủ mạnh và các công cụ phân tích dữ liệu hiện đại.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Phòng Lab Mạng & An ninh",
    description:
      "Phòng thí nghiệm về Mạng máy tính và An toàn thông tin, trang bị các thiết bị mạng, tường lửa, và công cụ kiểm thử bảo mật.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Thư viện chuyên ngành",
    description:
      "Thư viện với hàng nghìn đầu sách, tạp chí chuyên ngành CNTT, cùng hệ thống truy cập cơ sở dữ liệu học thuật quốc tế.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Phòng học thông minh",
    description:
      "Các phòng học được trang bị hệ thống âm thanh, máy chiếu, bảng tương tác và kết nối internet tốc độ cao.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Cơ sở vật chất"
        breadcrumb={[
          { title: "Giới thiệu", href: "/gioi-thieu" },
          { title: "Cơ sở vật chất", href: "/gioi-thieu/co-so-vat-chat" },
        ]}
      />

      <ContentCard title="Cơ sở vật chất và trang thiết bị">
        <p className="mb-6">
          Khoa Công nghệ Thông tin được trang bị cơ sở vật chất hiện đại, đáp ứng nhu cầu đào tạo và nghiên cứu của
          giảng viên và sinh viên. Với hệ thống phòng học, phòng thí nghiệm, thư viện và các trang thiết bị tiên tiến,
          Khoa tạo môi trường học tập và nghiên cứu tốt nhất cho sinh viên và giảng viên.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              title={facility.title}
              description={facility.description}
              image={facility.image}
            />
          ))}
        </div>

        <h3 className="text-xl font-bold mt-8 mb-3 text-primary">Hệ thống mạng và Internet</h3>
        <p className="mb-4 text-gray-600">
          Khoa Công nghệ Thông tin được trang bị hệ thống mạng hiện đại với đường truyền Internet tốc độ cao, hệ thống
          WiFi phủ sóng toàn bộ khu vực Khoa, đảm bảo việc truy cập Internet thuận tiện cho giảng viên và sinh viên.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Phần mềm và công cụ</h3>
        <p className="mb-4 text-gray-600">
          Khoa đã đầu tư mua bản quyền nhiều phần mềm và công cụ phục vụ đào tạo và nghiên cứu như:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          <li className="mb-2">Hệ điều hành: Windows, Linux</li>
          <li className="mb-2">Phần mềm văn phòng: Microsoft Office</li>
          <li className="mb-2">Môi trường phát triển: Visual Studio, IntelliJ IDEA, Eclipse</li>
          <li className="mb-2">Công cụ thiết kế: Adobe Creative Cloud</li>
          <li className="mb-2">Phần mềm mô phỏng mạng: Cisco Packet Tracer, GNS3</li>
          <li className="mb-2">Công cụ phân tích dữ liệu: MATLAB, R, Python</li>
          <li className="mb-2">Nền tảng học máy: TensorFlow, PyTorch</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-3 text-primary">Kế hoạch phát triển</h3>
          <p className="mb-4 text-gray-600">
            Trong những năm tới, Khoa Công nghệ Thông tin sẽ tiếp tục đầu tư nâng cấp cơ sở vật chất, trang thiết bị
            theo hướng:
          </p>
          <ul className="list-disc pl-6 mb-0 text-gray-600">
            <li className="mb-2">Xây dựng thêm các phòng thí nghiệm chuyên sâu về AI, IoT, Big Data</li>
            <li className="mb-2">Nâng cấp hệ thống máy chủ và thiết bị mạng</li>
            <li className="mb-2">Mở rộng không gian học tập và nghiên cứu cho sinh viên</li>
            <li className="mb-2">Đầu tư các thiết bị hiện đại phục vụ nghiên cứu và giảng dạy</li>
          </ul>
        </div>
      </ContentCard>
    </>
  )
}
