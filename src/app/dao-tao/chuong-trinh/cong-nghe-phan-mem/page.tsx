import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CheckCircle, Download, Clock, Award, Users, BookOpen, FileText, Code, GitBranch, Database } from "lucide-react"

export default function SoftwareEngineeringProgram() {
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
        { code: "SE2010", name: "Nhập môn Công nghệ phần mềm", credits: 3 },
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
        { code: "SE2020", name: "Phân tích và thiết kế phần mềm", credits: 4 },
        { code: "IT2050", name: "Cơ sở dữ liệu", credits: 4 },
        { code: "IT2060", name: "Lập trình hướng đối tượng", credits: 3 },
        { code: "SE2030", name: "Kiểm thử phần mềm", credits: 3 },
        { code: "ML1030", name: "Chủ nghĩa xã hội khoa học", credits: 2 },
      ],
    },
  ]

  // Cơ hội nghề nghiệp
  const careerOpportunities = [
    {
      title: "Kỹ sư phần mềm",
      description: "Thiết kế, phát triển và bảo trì các hệ thống phần mềm phức tạp.",
    },
    {
      title: "Chuyên viên kiểm thử phần mềm",
      description: "Kiểm tra, đánh giá chất lượng và đảm bảo phần mềm hoạt động đúng yêu cầu.",
    },
    {
      title: "Chuyên viên phân tích yêu cầu",
      description: "Phân tích nhu cầu của người dùng và chuyển thành yêu cầu kỹ thuật.",
    },
    {
      title: "Quản lý dự án phần mềm",
      description: "Lập kế hoạch, quản lý và điều phối các dự án phát triển phần mềm.",
    },
    {
      title: "DevOps Engineer",
      description: "Kết hợp phát triển và vận hành để tự động hóa quy trình phát triển phần mềm.",
    },
    {
      title: "Kiến trúc sư phần mềm",
      description: "Thiết kế kiến trúc tổng thể của hệ thống phần mềm phức tạp.",
    },
  ]

  // Điểm mạnh của chương trình
  const programStrengths = [
    {
      icon: Code,
      title: "Kỹ năng lập trình nâng cao",
      description: "Sinh viên được đào tạo chuyên sâu về các ngôn ngữ lập trình hiện đại và framework phổ biến.",
    },
    {
      icon: GitBranch,
      title: "Quy trình phát triển chuyên nghiệp",
      description: "Áp dụng các quy trình phát triển phần mềm tiên tiến như Agile, Scrum, DevOps.",
    },
    {
      icon: Database,
      title: "Kiến thức toàn diện",
      description: "Từ phân tích yêu cầu, thiết kế, phát triển đến kiểm thử và triển khai phần mềm.",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Công nghệ phần mềm"
        description="Chương trình đào tạo ngành Công nghệ phần mềm"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
          { name: "Công nghệ phần mềm", href: "/dao-tao/chuong-trinh/cong-nghe-phan-mem" },
        ]}
      />

      {/* Thông tin chung */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <Image src="/placeholder.svg?height=400&width=600" alt="Công nghệ phần mềm" fill className="object-cover" />
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Thông tin chương trình</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Mã ngành</span>
                  <p className="font-medium">7480103</p>
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
                href="/dao-tao/tai-lieu/chuong-trinh-khung-cnpm.pdf"
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Chương trình khung
              </a>
              <Link
                href="/dao-tao/mon-hoc?program=cong-nghe-phan-mem"
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
            Chương trình đào tạo ngành Công nghệ phần mềm tập trung vào việc cung cấp cho sinh viên kiến thức và kỹ năng
            toàn diện về quy trình phát triển phần mềm, từ phân tích yêu cầu, thiết kế, lập trình, kiểm thử đến triển
            khai và bảo trì.
          </p>
          <p>
            Sinh viên sẽ được học các phương pháp, công cụ và kỹ thuật hiện đại trong phát triển phần mềm, cùng với các
            nguyên tắc đảm bảo chất lượng phần mềm. Chương trình cũng chú trọng đến các kỹ năng quản lý dự án, làm việc
            nhóm và giao tiếp hiệu quả.
          </p>
          <p>
            Đặc biệt, chương trình đào tạo được thiết kế để đáp ứng nhu cầu thực tế của ngành công nghiệp phần mềm, với
            sự tham gia giảng dạy và hướng dẫn của các chuyên gia từ các công ty phần mềm hàng đầu. Sinh viên sẽ có cơ
            hội thực tập và làm việc trên các dự án thực tế, giúp tích lũy kinh nghiệm và sẵn sàng cho công việc ngay
            sau khi tốt nghiệp.
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
