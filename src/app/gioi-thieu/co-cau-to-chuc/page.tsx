import type { Metadata } from "next"
import { PageHero } from "@/components/gioi-thieu/page-hero"
import { ContentCard } from "@/components/gioi-thieu/content-card"
import { TeamCard } from "@/components/gioi-thieu/team-card"

export const metadata: Metadata = {
  title: "Cơ cấu tổ chức | Giới thiệu | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Cơ cấu tổ chức của Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu cho ban chủ nhiệm khoa
const leadership = [
  {
    name: "PGS.TS. Nguyễn Văn A",
    position: "Trưởng khoa",
    email: "nguyenvana@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/nguyen-van-a",
  },
  {
    name: "TS. Trần Thị B",
    position: "Phó Trưởng khoa",
    email: "tranthib@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/tran-thi-b",
  },
  {
    name: "TS. Lê Văn C",
    position: "Phó Trưởng khoa",
    email: "levanc@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/le-van-c",
  },
]

// Dữ liệu mẫu cho trưởng bộ môn
const departmentHeads = [
  {
    name: "TS. Phạm Thị D",
    position: "Trưởng Bộ môn",
    department: "Bộ môn Hệ thống thông tin",
    email: "phamthid@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/pham-thi-d",
  },
  {
    name: "TS. Hoàng Văn E",
    position: "Trưởng Bộ môn",
    department: "Bộ môn Kỹ thuật máy tính",
    email: "hoangvane@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/hoang-van-e",
  },
  {
    name: "TS. Vũ Thị F",
    position: "Trưởng Bộ môn",
    department: "Bộ môn Khoa học máy tính",
    email: "vuthif@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/vu-thi-f",
  },
  {
    name: "TS. Đỗ Văn G",
    position: "Trưởng Bộ môn",
    department: "Bộ môn Công nghệ phần mềm",
    email: "dovang@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/do-van-g",
  },
]

export default function OrganizationPage() {
  return (
    <>
      <PageHero
        title="Cơ cấu tổ chức"
        breadcrumb={[
          { title: "Giới thiệu", href: "/gioi-thieu" },
          { title: "Cơ cấu tổ chức", href: "/gioi-thieu/co-cau-to-chuc" },
        ]}
      />

      <ContentCard title="Sơ đồ tổ chức">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-primary text-white p-4 rounded-lg text-center w-64 mb-4">
              <h3 className="font-bold">Ban chủ nhiệm khoa</h3>
            </div>

            <div className="w-0.5 h-8 bg-gray-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Bộ môn Khoa học máy tính</h4>
              </div>
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Bộ môn Hệ thống thông tin</h4>
              </div>
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Bộ môn Kỹ thuật máy tính</h4>
              </div>
              <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Bộ môn Công nghệ phần mềm</h4>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-gray-300 mt-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Văn phòng khoa</h4>
              </div>
              <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Phòng thí nghiệm</h4>
              </div>
              <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center">
                <h4 className="font-medium">Câu lạc bộ sinh viên</h4>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Ban chủ nhiệm khoa">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leadership.map((person, index) => (
            <TeamCard
              key={index}
              name={person.name}
              position={person.position}
              email={person.email}
              phone={person.phone}
              image={person.image}
              link={person.link}
            />
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Trưởng bộ môn">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {departmentHeads.map((person, index) => (
            <TeamCard
              key={index}
              name={person.name}
              position={person.position}
              department={person.department}
              email={person.email}
              phone={person.phone}
              image={person.image}
              link={person.link}
            />
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Chức năng nhiệm vụ">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Ban chủ nhiệm khoa</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">Quản lý, điều hành mọi hoạt động của Khoa theo quy định của Nhà trường</li>
              <li className="mb-2">Xây dựng chiến lược, kế hoạch phát triển Khoa</li>
              <li className="mb-2">Quản lý đội ngũ cán bộ, giảng viên và sinh viên của Khoa</li>
              <li className="mb-2">Quản lý chất lượng đào tạo và nghiên cứu khoa học</li>
              <li className="mb-2">Phát triển quan hệ hợp tác với các đơn vị trong và ngoài trường</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Bộ môn Khoa học máy tính</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">Đào tạo các môn học liên quan đến thuật toán, cấu trúc dữ liệu, lập trình</li>
              <li className="mb-2">Nghiên cứu về trí tuệ nhân tạo, học máy, xử lý ngôn ngữ tự nhiên</li>
              <li className="mb-2">Phát triển các ứng dụng khoa học dữ liệu và tính toán hiệu năng cao</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Bộ môn Hệ thống thông tin</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">Đào tạo các môn học liên quan đến cơ sở dữ liệu, hệ thống thông tin quản lý</li>
              <li className="mb-2">Nghiên cứu về khai phá dữ liệu, dữ liệu lớn, phân tích dữ liệu</li>
              <li className="mb-2">Phát triển các ứng dụng quản lý doanh nghiệp, thương mại điện tử</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Bộ môn Kỹ thuật máy tính</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">Đào tạo các môn học liên quan đến mạng máy tính, hệ điều hành, IoT</li>
              <li className="mb-2">Nghiên cứu về an toàn thông tin, điện toán đám mây, hệ thống nhúng</li>
              <li className="mb-2">Phát triển các ứng dụng IoT, tự động hóa, hệ thống thông minh</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Bộ môn Công nghệ phần mềm</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">Đào tạo các môn học liên quan đến phát triển phần mềm, kiểm thử, bảo trì</li>
              <li className="mb-2">Nghiên cứu về công nghệ phần mềm, quy trình phát triển, đảm bảo chất lượng</li>
              <li className="mb-2">Phát triển các ứng dụng web, di động, phần mềm doanh nghiệp</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Văn phòng khoa</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">Hỗ trợ Ban chủ nhiệm khoa trong công tác quản lý, điều hành</li>
              <li className="mb-2">Quản lý hồ sơ, tài liệu, văn bản của Khoa</li>
              <li className="mb-2">Hỗ trợ sinh viên trong các vấn đề học vụ, đời sống</li>
            </ul>
          </div>
        </div>
      </ContentCard>
    </>
  )
}
