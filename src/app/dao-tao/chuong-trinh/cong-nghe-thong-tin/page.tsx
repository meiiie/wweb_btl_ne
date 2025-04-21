import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CheckCircle, Download, Clock, Award, Users, BookOpen, FileText } from "lucide-react"
import { PROGRAMS } from "@/lib/constants/education"

export default function ITProgram() {
  // Tìm chương trình CNTT từ danh sách chương trình
  const program = PROGRAMS.find((p) => p.slug === "cong-nghe-thong-tin")

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
        { code: "IT2010", name: "Kiến trúc máy tính", credits: 3 },
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
        { code: "IT2040", name: "Mạng máy tính", credits: 3 },
        { code: "IT2050", name: "Cơ sở dữ liệu", credits: 4 },
        { code: "IT2060", name: "Lập trình hướng đối tượng", credits: 3 },
        { code: "IT2070", name: "Phân tích và thiết kế hệ thống", credits: 3 },
        { code: "ML1030", name: "Chủ nghĩa xã hội khoa học", credits: 2 },
      ],
    },
  ]

  // Cơ hội nghề nghiệp
  const careerOpportunities = [
    {
      title: "Lập trình viên",
      description: "Phát triển ứng dụng web, mobile, desktop và các hệ thống phần mềm khác.",
    },
    {
      title: "Kỹ sư phần mềm",
      description: "Thiết kế, phát triển và bảo trì các hệ thống phần mềm phức tạp.",
    },
    {
      title: "Chuyên viên quản trị hệ thống",
      description: "Quản lý và bảo trì hệ thống CNTT, mạng máy tính và cơ sở dữ liệu.",
    },
    {
      title: "Chuyên viên phân tích dữ liệu",
      description: "Phân tích và xử lý dữ liệu lớn, hỗ trợ ra quyết định.",
    },
    {
      title: "Chuyên viên an ninh mạng",
      description: "Bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa an ninh mạng.",
    },
    {
      title: "Quản lý dự án CNTT",
      description: "Lập kế hoạch, quản lý và điều phối các dự án công nghệ thông tin.",
    },
  ]

  return (
    <div>
      <PageHeader
        title={program?.title || "Công nghệ thông tin"}
        description="Chương trình đào tạo ngành Công nghệ thông tin"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
          { name: "Công nghệ thông tin", href: "/dao-tao/chuong-trinh/cong-nghe-thong-tin" },
        ]}
      />

      {/* Nội dung chi tiết về chương trình CNTT */}
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800">Giới thiệu chương trình</h2>
          <p className="mt-4 text-gray-600">
            {program?.description ||
              "Chương trình đào tạo ngành Công nghệ thông tin cung cấp kiến thức và kỹ năng cần thiết để phát triển, triển khai và quản lý các hệ thống công nghệ thông tin. Sinh viên sẽ được học về lập trình, cơ sở dữ liệu, mạng máy tính, an toàn thông tin, trí tuệ nhân tạo và nhiều lĩnh vực khác."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800">Mục tiêu đào tạo</h2>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
            <li>Đào tạo kỹ sư có kiến thức chuyên môn vững vàng về công nghệ thông tin</li>
            <li>Phát triển kỹ năng thực hành và giải quyết vấn đề trong lĩnh vực CNTT</li>
            <li>Rèn luyện khả năng làm việc nhóm và giao tiếp hiệu quả</li>
            <li>Phát triển tư duy sáng tạo và khả năng học tập suốt đời</li>
            <li>Đào tạo nguồn nhân lực chất lượng cao đáp ứng nhu cầu của xã hội</li>
          </ul>
        </section>

        {/* Thông tin chung */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Công nghệ thông tin"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Thông tin chương trình</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <span className="text-sm text-gray-500">Mã ngành</span>
                    <p className="font-medium">7480201</p>
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
                  href="/dao-tao/tai-lieu/chuong-trinh-khung-cntt.pdf"
                  className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Chương trình khung
                </a>
                <Link
                  href="/dao-tao/mon-hoc?program=cong-nghe-thong-tin"
                  className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Danh sách môn học
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mô tả chương trình */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Mô tả chương trình</h2>
          <div className="prose max-w-none">
            <p>
              Chương trình đào tạo ngành Công nghệ thông tin cung cấp cho sinh viên kiến thức nền tảng và chuyên sâu về
              khoa học máy tính, phát triển phần mềm, mạng máy tính, cơ sở dữ liệu, trí tuệ nhân tạo và các công nghệ
              hiện đại khác.
            </p>
            <p>
              Sinh viên sẽ được trang bị các kỹ năng thực hành thông qua các bài tập, đồ án và thực tập tại doanh
              nghiệp. Chương trình đào tạo cũng chú trọng phát triển các kỹ năng mềm như làm việc nhóm, giao tiếp, giải
              quyết vấn đề và tư duy sáng tạo.
            </p>
            <p>
              Sau khi tốt nghiệp, sinh viên có thể làm việc trong nhiều lĩnh vực khác nhau của ngành công nghệ thông tin
              như phát triển phần mềm, quản trị hệ thống, phân tích dữ liệu, an ninh mạng và quản lý dự án CNTT.
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
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {course.code}
                          </td>
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
    </div>
  )
}
