import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CheckCircle, Download, Clock, Award, Users, BookOpen, FileText, Cpu, Layers, Wifi } from "lucide-react"

export default function ComputerEngineeringProgram() {
  // Danh sách môn học theo học kỳ
  const semesters = [
    {
      id: 1,
      name: "Học kỳ 1",
      courses: [
        { code: "IT1010", name: "Nhập môn Công nghệ thông tin", credits: 3 },
        { code: "MA1010", name: "Toán cao cấp 1", credits: 3 },
        { code: "PH1010", name: "Vật lý đại cương", credits: 3 },
        { code: "EN1010", name: "Tiếng Anh 1", credits: 3 },
        { code: "PE1010", name: "Giáo dục thể chất 1", credits: 1 },
        { code: "PL1010", name: "Pháp luật đại cương", credits: 2 },
      ],
    },
    {
      id: 2,
      name: "Học kỳ 2",
      courses: [
        { code: "IT1020", name: "Nhập môn lập trình", credits: 3 },
        { code: "MA1020", name: "Toán cao cấp 2", credits: 3 },
        { code: "MA1030", name: "Toán rời rạc", credits: 3 },
        { code: "EN1020", name: "Tiếng Anh 2", credits: 3 },
        { code: "PE1020", name: "Giáo dục thể chất 2", credits: 1 },
        { code: "ML1010", name: "Triết học Mác-Lênin", credits: 3 },
      ],
    },
    {
      id: 3,
      name: "Học kỳ 3",
      courses: [
        { code: "CE2010", name: "Kiến trúc máy tính", credits: 4 },
        { code: "IT2020", name: "Cấu trúc dữ liệu và giải thuật", credits: 4 },
        { code: "IT2030", name: "Hệ điều hành", credits: 3 },
        { code: "EN2010", name: "Tiếng Anh chuyên ngành CNTT", credits: 3 },
        { code: "ML1020", name: "Kinh tế chính trị Mác-Lênin", credits: 2 },
      ],
    },
    {
      id: 4,
      name: "Học kỳ 4",
      courses: [
        { code: "CE2020", name: "Thiết kế mạch số", credits: 4 },
        { code: "IT2040", name: "Mạng máy tính", credits: 3 },
        { code: "CE2030", name: "Hệ thống nhúng", credits: 3 },
        { code: "IT2060", name: "Lập trình hướng đối tượng", credits: 3 },
        { code: "ML1030", name: "Chủ nghĩa xã hội khoa học", credits: 2 },
      ],
    },
  ]

  // Cơ hội nghề nghiệp
  const careerOpportunities = [
    {
      title: "Kỹ sư thiết kế phần cứng",
      description: "Thiết kế và phát triển các hệ thống phần cứng máy tính và thiết bị điện tử.",
    },
    {
      title: "Kỹ sư hệ thống nhúng",
      description: "Phát triển các hệ thống nhúng và IoT cho các ứng dụng thực tế.",
    },
    {
      title: "Kỹ sư mạng và hạ tầng",
      description: "Thiết kế, triển khai và quản lý hệ thống mạng và hạ tầng CNTT.",
    },
    {
      title: "Kỹ sư tích hợp hệ thống",
      description: "Tích hợp các hệ thống phần cứng và phần mềm để tạo ra giải pháp hoàn chỉnh.",
    },
    {
      title: "Kỹ sư R&D",
      description: "Nghiên cứu và phát triển các công nghệ mới trong lĩnh vực kỹ thuật máy tính.",
    },
    {
      title: "Kỹ sư IoT",
      description: "Phát triển các ứng dụng và hệ thống Internet of Things.",
    },
  ]

  // Điểm mạnh của chương trình
  const programStrengths = [
    {
      icon: Cpu,
      title: "Kiến thức phần cứng chuyên sâu",
      description: "Sinh viên được đào tạo chuyên sâu về kiến trúc máy tính, thiết kế mạch số và hệ thống nhúng.",
    },
    {
      icon: Layers,
      title: "Kết hợp phần cứng và phần mềm",
      description: "Hiểu biết toàn diện về sự tương tác giữa phần cứng và phần mềm trong hệ thống máy tính.",
    },
    {
      icon: Wifi,
      title: "Công nghệ IoT và mạng",
      description: "Kiến thức và kỹ năng về Internet of Things, mạng máy tính và truyền thông.",
    },
  ]

  // Phòng thí nghiệm và trang thiết bị
  const laboratories = [
    {
      name: "Phòng thí nghiệm Kiến trúc máy tính",
      equipment: "Bộ thực hành vi xử lý, bộ kit FPGA, máy tính chuyên dụng",
      description: "Phục vụ thực hành về kiến trúc máy tính, thiết kế CPU và tối ưu hóa hiệu năng.",
    },
    {
      name: "Phòng thí nghiệm Hệ thống nhúng",
      equipment: "Kit Arduino, Raspberry Pi, các cảm biến và thiết bị IoT",
      description: "Phục vụ thực hành về lập trình nhúng, IoT và phát triển ứng dụng thực tế.",
    },
    {
      name: "Phòng thí nghiệm Mạng máy tính",
      equipment: "Thiết bị mạng Cisco, hệ thống máy chủ, thiết bị bảo mật",
      description: "Phục vụ thực hành về thiết kế, cấu hình và quản trị mạng máy tính.",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Kỹ thuật máy tính"
        description="Chương trình đào tạo ngành Kỹ thuật máy tính"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
          { name: "Kỹ thuật máy tính", href: "/dao-tao/chuong-trinh/ky-thuat-may-tinh" },
        ]}
      />

      {/* Thông tin chung */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <Image src="/placeholder.svg?height=400&width=600" alt="Kỹ thuật máy tính" fill className="object-cover" />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Thông tin chương trình</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Mã ngành</span>
                  <p className="font-medium">7480106</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Bậc đào tạo</span>
                  <p className="font-medium">Đại học</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Thời gian đào tạo</span>
                  <p className="font-medium">4 năm (8 học kỳ)</p>
                </div>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Tổng số tín chỉ</span>
                  <p className="font-medium">145 tín chỉ</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/dao-tao/tai-lieu/chuong-trinh-khung-ktmt.pdf"
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Chương trình khung
              </a>
              <Link
                href="/dao-tao/mon-hoc?program=ky-thuat-may-tinh"
                className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <FileText className="mr-2 h-4 w-4" />
                Danh sách môn học
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Điểm mạnh của chương trình */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Điểm mạnh của chương trình</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programStrengths.map((strength, index) => (
            <div key={index} className="p-5 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                  <strength.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{strength.title}</h3>
              </div>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mô tả chương trình */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Mô tả chương trình</h2>
        <div className="prose max-w-none">
          <p>
            Chương trình đào tạo ngành Kỹ thuật máy tính tập trung vào việc cung cấp cho sinh viên kiến thức và kỹ năng
            về thiết kế, phát triển và tích hợp các hệ thống phần cứng máy tính, hệ thống nhúng, IoT và mạng máy tính.
          </p>
          <p>
            Sinh viên sẽ được học các môn học về kiến trúc máy tính, thiết kế mạch số, vi xử lý, hệ thống nhúng, mạng
            máy tính và lập trình hệ thống. Chương trình cũng cung cấp kiến thức về phần mềm để sinh viên có thể hiểu và
            làm việc hiệu quả ở giao diện giữa phần cứng và phần mềm.
          </p>
          <p>
            Đặc biệt, chương trình đào tạo chú trọng vào thực hành, với nhiều giờ thí nghiệm và thực hành trong các
            phòng lab hiện đại. Sinh viên sẽ có cơ hội làm việc trên các dự án thực tế, từ thiết kế mạch điện tử đến
            phát triển các ứng dụng IoT và hệ thống nhúng.
          </p>
        </div>
      </section>

      {/* Phòng thí nghiệm và trang thiết bị */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Phòng thí nghiệm và trang thiết bị</h2>
        <div className="space-y-4">
          {laboratories.map((lab, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">{lab.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Trang thiết bị</p>
                  <p className="text-gray-700">{lab.equipment}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Mô tả</p>
                  <p className="text-gray-700">{lab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cấu trúc chương trình */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Cấu trúc chương trình</h2>
        <div className="space-y-6">
          {semesters.map((semester) => (
            <div key={semester.id} className="border rounded-lg overflow-hidden">
              <div className="bg-primary text-white p-3 font-semibold">{semester.name}</div>
              <div className="p-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mã môn
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tên môn học
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số tín chỉ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {semester.courses.map((course) => (
                      <tr key={course.code} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{course.code}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.name}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cơ hội nghề nghiệp */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Cơ hội nghề nghiệp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {careerOpportunities.map((career, index) => (
            <div key={index} className="flex items-start p-4 border rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">{career.title}</h3>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
