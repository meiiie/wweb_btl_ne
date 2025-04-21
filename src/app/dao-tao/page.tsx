import type { Metadata } from "next"
import { PageHeader } from "@/components/dao-tao/page-header"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, School, FileText } from "lucide-react"
import { EDUCATION_PROGRAMS } from "@/lib/constants/education"
import { ProgramCard } from "@/components/dao-tao/program-card"

export const metadata: Metadata = {
  title: "Đào tạo | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin về chương trình đào tạo, hệ đào tạo, môn học và tài liệu học tập của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  keywords: [
    "đào tạo",
    "chương trình đào tạo",
    "hệ đào tạo",
    "môn học",
    "tài liệu học tập",
    "khoa CNTT",
    "đại học hàng hải",
  ],
  openGraph: {
    title: "Đào tạo | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    description:
      "Thông tin về chương trình đào tạo, hệ đào tạo, môn học và tài liệu học tập của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    url: "https://fit.vimaru.edu.vn/dao-tao",
    siteName: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://fit.vimaru.edu.vn/images/og-dao-tao.jpg",
        width: 1200,
        height: 630,
        alt: "Đào tạo tại Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      },
    ],
  },
  alternates: {
    canonical: "https://fit.vimaru.edu.vn/dao-tao",
  },
}

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Đào tạo"
        description="Thông tin về chương trình đào tạo, hệ đào tạo, môn học và tài liệu học tập của Khoa Công nghệ Thông tin"
        breadcrumbs={[{ name: "Đào tạo", href: "/dao-tao" }]}
      />

      {/* Giới thiệu chung */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Giới thiệu chung</h2>
        <div className="prose max-w-none">
          <p>
            Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam cung cấp các chương trình đào tạo chất lượng cao
            ở các bậc đại học và sau đại học, đáp ứng nhu cầu nhân lực trong lĩnh vực công nghệ thông tin của xã hội.
          </p>
          <p>
            Với đội ngũ giảng viên có trình độ cao và cơ sở vật chất hiện đại, Khoa cam kết đào tạo sinh viên có kiến
            thức chuyên môn vững vàng, kỹ năng thực hành tốt và khả năng thích ứng cao với môi trường làm việc năng động
            của ngành công nghệ thông tin.
          </p>
        </div>
      </section>

      {/* Các mục đào tạo */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <School className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Hệ đào tạo</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Khoa CNTT đào tạo ở nhiều hệ khác nhau, bao gồm đại học chính quy, liên thông, thạc sĩ và tiến sĩ, đáp ứng
            nhu cầu học tập đa dạng của người học.
          </p>
          <Link
            href="/dao-tao/he-dao-tao"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Xem chi tiết
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Chương trình đào tạo</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Khoa cung cấp nhiều chương trình đào tạo hiện đại như Công nghệ thông tin, Công nghệ phần mềm, Hệ thống
            thông tin và Kỹ thuật máy tính.
          </p>
          <Link
            href="/dao-tao/chuong-trinh"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Xem chi tiết
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Môn học</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Danh sách các môn học trong chương trình đào tạo với đề cương chi tiết, giúp sinh viên có cái nhìn tổng quan
            về nội dung học tập.
          </p>
          <Link href="/dao-tao/mon-hoc" className="inline-flex items-center text-primary font-medium hover:underline">
            Xem chi tiết
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
          <div className="flex items-center mb-4">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Tài liệu học tập</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Tài liệu học tập, biểu mẫu, quy chế đào tạo và các tài nguyên hỗ trợ khác dành cho sinh viên và giảng viên
            của Khoa.
          </p>
          <Link href="/dao-tao/tai-lieu" className="inline-flex items-center text-primary font-medium hover:underline">
            Xem chi tiết
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Chương trình đào tạo nổi bật */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Chương trình đào tạo nổi bật</h2>
          <Link href="/dao-tao/chuong-trinh" className="text-primary font-medium hover:underline flex items-center">
            Xem tất cả
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {EDUCATION_PROGRAMS.slice(0, 4).map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              code={program.code}
              level={program.level}
              duration={program.duration}
              description={program.description}
              image={program.image}
              slug={program.slug}
            />
          ))}
        </div>
      </section>

      {/* Chuẩn đầu ra */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Chuẩn đầu ra</h2>
        <div className="prose max-w-none">
          <p className="mb-4">Sinh viên tốt nghiệp từ Khoa Công nghệ Thông tin sẽ đạt được các chuẩn đầu ra sau:</p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Kiến thức</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Có kiến thức cơ bản về khoa học tự nhiên, khoa học xã hội và nhân văn.</li>
            <li className="mb-2">Có kiến thức nền tảng và chuyên sâu về công nghệ thông tin.</li>
            <li className="mb-2">Có kiến thức về quy trình, phương pháp phát triển phần mềm.</li>
            <li className="mb-2">Có kiến thức về thiết kế, xây dựng và quản lý hệ thống thông tin.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Kỹ năng</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Có kỹ năng lập trình thành thạo với các ngôn ngữ lập trình phổ biến.</li>
            <li className="mb-2">Có kỹ năng phân tích, thiết kế và phát triển phần mềm.</li>
            <li className="mb-2">Có kỹ năng quản lý dự án công nghệ thông tin.</li>
            <li className="mb-2">Có kỹ năng làm việc nhóm và giao tiếp hiệu quả.</li>
            <li className="mb-2">Có kỹ năng ngoại ngữ đáp ứng yêu cầu công việc.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Thái độ</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Có đạo đức nghề nghiệp, ý thức trách nhiệm và tôn trọng pháp luật.</li>
            <li className="mb-2">Có tinh thần học tập suốt đời, không ngừng cập nhật kiến thức và kỹ năng.</li>
            <li className="mb-2">Có ý thức cộng đồng và trách nhiệm xã hội.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

// Thêm Schema.org JSON-LD
export function generateSchemaOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    url: "https://fit.vimaru.edu.vn",
    logo: "https://fit.vimaru.edu.vn/images/logo.png",
    sameAs: ["https://www.facebook.com/fit.vimaru", "https://www.youtube.com/channel/UCxxx"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "484 Lạch Tray",
      addressLocality: "Hải Phòng",
      addressRegion: "Hải Phòng",
      postalCode: "180000",
      addressCountry: "VN",
    },
    telephone: "+84-225-3735931",
    email: "fit@vimaru.edu.vn",
    department: {
      "@type": "EducationalOrganization",
      name: "Khoa Công nghệ Thông tin",
      description:
        "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam cung cấp các chương trình đào tạo chất lượng cao ở các bậc đại học và sau đại học.",
      url: "https://fit.vimaru.edu.vn/dao-tao",
    },
    offers: {
      "@type": "Offer",
      category: "Đào tạo",
      description: "Các chương trình đào tạo của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    },
  }
}
