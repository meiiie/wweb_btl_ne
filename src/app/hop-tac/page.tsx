import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CooperationStats } from "@/components/hop-tac/cooperation-stats"

export const metadata: Metadata = {
  title: "Tổng quan hợp tác - Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin tổng quan về các hoạt động hợp tác trong nước và quốc tế của Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam",
}

export default function CooperationOverviewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Tổng quan hợp tác</h1>

      <CooperationStats
        domesticPartners={25}
        internationalPartners={15}
        countries={8}
        projects={12}
        students={120}
        scholarships={45}
      />

      <div className="prose max-w-none mb-8">
        <p>
          Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam luôn chú trọng phát triển mối quan hệ hợp tác với các đối
          tác trong nước và quốc tế nhằm nâng cao chất lượng đào tạo, nghiên cứu khoa học và tạo cơ hội việc làm cho
          sinh viên.
        </p>
        <p>
          Thông qua các hoạt động hợp tác, Khoa đã xây dựng được mạng lưới đối tác rộng lớn bao gồm các doanh nghiệp
          công nghệ hàng đầu trong nước và các trường đại học, viện nghiên cứu uy tín trên thế giới.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src="/images/cooperation/business-cooperation.jpg"
              alt="Hợp tác doanh nghiệp"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Hợp tác doanh nghiệp</h2>
            <p className="text-gray-700 mb-4">
              Khoa CNTT đã thiết lập quan hệ hợp tác với nhiều doanh nghiệp công nghệ hàng đầu trong nước như FPT,
              Viettel, VNPT, CMC, và các công ty phần mềm khác. Các hoạt động hợp tác bao gồm tham quan doanh nghiệp,
              thực tập sinh viên, tuyển dụng, tài trợ học bổng và phát triển chương trình đào tạo.
            </p>
            <Link
              href="/hop-tac/doanh-nghiep"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Xem chi tiết
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src="/images/cooperation/international-cooperation.jpg"
              alt="Hợp tác quốc tế"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Hợp tác quốc tế</h2>
            <p className="text-gray-700 mb-4">
              Khoa CNTT đã thiết lập quan hệ hợp tác với nhiều trường đại học và viện nghiên cứu uy tín trên thế giới.
              Các hoạt động hợp tác bao gồm trao đổi sinh viên, trao đổi giảng viên, nghiên cứu khoa học chung, tổ chức
              hội thảo quốc tế và phát triển chương trình đào tạo.
            </p>
            <Link
              href="/hop-tac/quoc-te"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Xem chi tiết
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Mục tiêu hợp tác</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">
              1
            </span>
            <span>Nâng cao chất lượng đào tạo và nghiên cứu khoa học</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">
              2
            </span>
            <span>Tạo cơ hội việc làm và thực tập cho sinh viên</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">
              3
            </span>
            <span>Phát triển chương trình đào tạo đáp ứng nhu cầu thực tế của doanh nghiệp</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">
              4
            </span>
            <span>Tăng cường hội nhập quốc tế và nâng cao vị thế của Khoa</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">
              5
            </span>
            <span>Tạo môi trường học tập và nghiên cứu quốc tế cho sinh viên và giảng viên</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-blue-800 mb-4">Liên hệ hợp tác</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-700 mb-4">
            Nếu quý đối tác có nhu cầu hợp tác với Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam, vui lòng liên
            hệ:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Phòng Hợp tác và Quan hệ đối ngoại</strong>
            </p>
            <p>Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam</p>
            <p>Địa chỉ: 484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng</p>
            <p>Email: cooperation@vimaru.edu.vn</p>
            <p>Điện thoại: (0225) 3829 109</p>
          </div>
        </div>
      </div>
    </div>
  )
}
