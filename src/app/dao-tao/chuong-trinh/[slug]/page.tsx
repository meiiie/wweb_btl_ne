import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CheckCircle, Download, Clock, Award, Users, BookOpen, FileText } from "lucide-react"
import { PROGRAMS, COURSES } from "@/lib/constants/education"
import { JsonLd } from "@/components/seo/json-ld"

interface ProgramPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = PROGRAMS.find((p) => p.slug === params.slug)

  if (!program) {
    return {
      title: "Không tìm thấy chương trình | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      description: "Chương trình đào tạo không tồn tại hoặc đã bị xóa.",
    }
  }

  return {
    title: `${program.title} | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam`,
    description: `Thông tin chi tiết về chương trình đào tạo ${program.title} tại Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam. ${program.description.substring(0, 150)}...`,
    keywords: [program.title, "chương trình đào tạo", "đại học", "khoa CNTT", "đại học hàng hải"],
    openGraph: {
      title: `${program.title} | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam`,
      description: program.description,
      url: `https://fit.vimaru.edu.vn/dao-tao/chuong-trinh/${params.slug}`,
      siteName: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: program.image || "https://fit.vimaru.edu.vn/images/og-chuong-trinh-dao-tao.jpg",
          width: 1200,
          height: 630,
          alt: `Chương trình đào tạo ${program.title} - Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam`,
        },
      ],
    },
    alternates: {
      canonical: `https://fit.vimaru.edu.vn/dao-tao/chuong-trinh/${params.slug}`,
    },
  }
}

export default function ProgramDetailPage({ params }: ProgramPageProps) {
  const program = PROGRAMS.find((p) => p.slug === params.slug)

  if (!program) {
    notFound()
  }

  // Lấy danh sách môn học thuộc chương trình này
  const programCourses = COURSES.filter((course) => course.program === params.slug)

  // Nhóm môn học theo học kỳ
  const coursesBySemester = programCourses.reduce(
    (acc, course) => {
      const semester = course.semester || 1
      if (!acc[semester]) {
        acc[semester] = []
      }
      acc[semester].push(course)
      return acc
    },
    {} as Record<number, typeof COURSES>,
  )

  // Sắp xếp các học kỳ
  const semesters = Object.keys(coursesBySemester)
    .map(Number)
    .sort((a, b) => a - b)
    .map((semester) => ({
      id: semester,
      name: `Học kỳ ${semester}`,
      courses: coursesBySemester[semester],
    }))

  // Cơ hội nghề nghiệp
  const careerOpportunities = program.careerOpportunities || [
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

  // Schema.org data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.description,
    provider: {
      "@type": "Organization",
      name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      sameAs: "https://fit.vimaru.edu.vn",
    },
    educationalCredentialAwarded: "Bằng Kỹ sư Công nghệ thông tin",
    timeRequired: `${program.duration} năm`,
    educationalLevel: program.level,
    numberOfCredits: program.credits,
    occupationalCategory: careerOpportunities.map((career) => career.title).join(", "),
    hasCourse: programCourses.map((course) => ({
      "@type": "Course",
      name: course.title,
      courseCode: course.code,
      description: course.description,
    })),
  }

  return (
    <div>
      <JsonLd data={schemaData} />

      <PageHeader
        title={program.title}
        description={`Chương trình đào tạo ngành ${program.title}`}
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
          { name: program.title, href: `/dao-tao/chuong-trinh/${params.slug}` },
        ]}
      />

      {/* Thông tin chung */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <Image
              src={program.image || "/placeholder.svg?height=400&width=600"}
              alt={program.title}
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
                  <p className="font-medium">{program.code || "7480201"}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Bậc đào tạo</span>
                  <p className="font-medium">{program.level || "Đại học"}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Thời gian đào tạo</span>
                  <p className="font-medium">{program.duration || "4 năm (8 học kỳ)"}</p>
                </div>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-primary mr-2" />
                <div>
                  <span className="text-sm text-gray-500">Tổng số tín chỉ</span>
                  <p className="font-medium">{program.credits || "145"} tín chỉ</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`/dao-tao/tai-lieu/chuong-trinh-khung-${params.slug}.pdf`}
                className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Chương trình khung
              </a>
              <Link
                href={`/dao-tao/mon-hoc?program=${params.slug}`}
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
          <p>{program.description}</p>
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
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.title}</td>
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
