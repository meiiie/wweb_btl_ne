import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CheckCircle, Download, Clock, Award, Users, BookOpen, FileText, BarChart, Database, Globe } from "lucide-react"

export default function InformationSystemsProgram() {
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
        { code: "IS2010", name: "Nhập môn Hệ thống thông tin", credits: 3 },
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
        { code: "IS2020", name: "Phân tích và thiết kế hệ thống thông tin", credits: 4 },
        { code: "IT2050", name: "Cơ sở dữ liệu", credits: 4 },
        { code: "IT2060", name: "Lập trình hướng đối tượng", credits: 3 },
        { code: "IS2030", name: "Hệ thống thông tin doanh nghiệp", credits: 3 },
        { code: "ML1030", name: "Chủ nghĩa xã hội khoa học", credits: 2 },
      ],
    },
  ]

  // Cơ hội nghề nghiệp
  const careerOpportunities = [
    {
      title: "Chuyên viên phân tích hệ thống",
      description: "Phân tích, thiết kế và tối ưu hóa các hệ thống thông tin trong tổ chức.",
    },
    {
      title: "Chuyên viên quản trị cơ sở dữ liệu",
      description: "Quản lý, bảo trì và tối ưu hóa cơ sở dữ liệu của tổ chức.",
    },
    {
      title: "Chuyên viên phân tích dữ liệu",
      description: "Phân tích dữ liệu lớn để hỗ trợ ra quyết định kinh doanh.",
    },
    {
      title: "Chuyên viên tư vấn ERP",
      description: "Tư vấn và triển khai các hệ thống hoạch định nguồn lực doanh nghiệp.",
    },
    {
      title: "Quản lý dự án CNTT",
      description: "Lập kế hoạch, quản lý và điều phối các dự án công nghệ thông tin.",
    },
    {
      title: "Chuyên viên an ninh thông tin",
      description: "Bảo vệ hệ thống thông tin và dữ liệu khỏi các mối đe dọa an ninh mạng.",
    },
  ]

  // Điểm mạnh của chương trình
  const programStrengths = [
    {
      icon: Database,
      title: "Quản trị dữ liệu hiệu quả",
      description: "Sinh viên được đào tạo chuyên sâu về quản lý và khai thác dữ liệu trong tổ chức.",
    },
    {
      icon: BarChart,
      title: "Phân tích kinh doanh",
      description: "Kết hợp kiến thức CNTT với kinh doanh để tối ưu hóa quy trình và ra quyết định.",
    },
    {
      icon: Globe,
      title: "Tầm nhìn tổng thể",
      description: "Hiểu biết toàn diện về hệ thống thông tin và vai trò của nó trong tổ chức.",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Hệ thống thông tin"
        description="Chương trình đào tạo ngành Hệ thống thông tin"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
          { name: "Hệ thống thông tin", href: "/dao-tao/chuong-trinh/he-thong-thong-tin" },
        ]}
      />

      {/* Thông tin chung */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <Image src="/placeholder.svg?height=400&width=600" alt="Hệ thống thông tin" fill className="object-cover" />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Thông tin chương trình</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Mã ngành</span>
                  <p className="font-medium">7480104</p>
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
                href="/dao-tao/tai-lieu/chuong-trinh-khung-httt.pdf"
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Chương trình khung
              </a>
              <Link
                href="/dao-tao/mon-hoc?program=he-thong-thong-tin"
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
            Chương trình đào tạo ngành Hệ thống thông tin cung cấp cho sinh viên kiến thức và kỹ năng về phân tích,
            thiết kế, xây dựng và quản lý các hệ thống thông tin trong tổ chức. Sinh viên sẽ được học cách kết hợp kiến
            thức công nghệ thông tin với kiến thức quản lý và kinh doanh để tối ưu hóa quy trình và hỗ trợ ra quyết
            định.
          </p>
          <p>
            Chương trình đào tạo chú trọng vào việc phát triển khả năng phân tích dữ liệu, quản trị cơ sở dữ liệu, và
            hiểu biết về các hệ thống thông tin doanh nghiệp như ERP, CRM, SCM. Sinh viên cũng được trang bị kiến thức
            về an ninh thông tin và quản lý dự án CNTT.
          </p>
          <p>
            Đặc biệt, chương trình đào tạo được thiết kế với sự tham vấn từ các doanh nghiệp và tổ chức, đảm bảo nội
            dung đào tạo đáp ứng nhu cầu thực tế của thị trường lao động. Sinh viên sẽ có cơ hội thực tập và làm việc
            trên các dự án thực tế, giúp tích lũy kinh nghiệm và sẵn sàng cho công việc ngay sau khi tốt nghiệp.
          </p>
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
