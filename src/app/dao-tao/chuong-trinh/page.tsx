import type { Metadata } from "next"
import { PageHeader } from "@/components/dao-tao/page-header"
import { ProgramCard } from "@/components/dao-tao/program-card"
import { EDUCATION_PROGRAMS } from "@/lib/constants/education"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Chương trình đào tạo | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin chi tiết về các chương trình đào tạo của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam, bao gồm Công nghệ thông tin, Công nghệ phần mềm, Hệ thống thông tin và Kỹ thuật máy tính.",
  keywords: [
    "chương trình đào tạo",
    "công nghệ thông tin",
    "công nghệ phần mềm",
    "hệ thống thông tin",
    "kỹ thuật máy tính",
    "khoa CNTT",
    "đại học hàng hải",
  ],
  openGraph: {
    title: "Chương trình đào tạo | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    description:
      "Thông tin chi tiết về các chương trình đào tạo của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    url: "https://fit.vimaru.edu.vn/dao-tao/chuong-trinh",
    siteName: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://fit.vimaru.edu.vn/images/og-chuong-trinh-dao-tao.jpg",
        width: 1200,
        height: 630,
        alt: "Chương trình đào tạo tại Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      },
    ],
  },
  alternates: {
    canonical: "https://fit.vimaru.edu.vn/dao-tao/chuong-trinh",
  },
}

export default function ProgramsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: EDUCATION_PROGRAMS.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: program.title,
        description: program.description,
        provider: {
          "@type": "Organization",
          name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
          sameAs: "https://fit.vimaru.edu.vn",
        },
        url: `https://fit.vimaru.edu.vn/dao-tao/chuong-trinh/${program.slug}`,
      },
    })),
  }

  return (
    <div>
      <JsonLd data={schemaData} />

      <PageHeader
        title="Chương trình đào tạo"
        description="Thông tin chi tiết về các chương trình đào tạo tại Khoa CNTT"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
        ]}
      />

      {/* Giới thiệu */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Giới thiệu chương trình đào tạo</h2>
        <div className="prose max-w-none">
          <p>
            Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam cung cấp các chương trình đào tạo đa dạng, được
            thiết kế dựa trên nhu cầu thực tế của thị trường lao động và xu hướng phát triển của ngành công nghệ thông
            tin.
          </p>
          <p>
            Các chương trình đào tạo của Khoa được xây dựng theo hướng cân bằng giữa lý thuyết và thực hành, giúp sinh
            viên không chỉ nắm vững kiến thức chuyên môn mà còn có kỹ năng thực tế để sẵn sàng làm việc ngay sau khi tốt
            nghiệp.
          </p>
        </div>
      </section>

      {/* Danh sách chương trình đào tạo */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Danh sách chương trình đào tạo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_PROGRAMS.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              slug={program.slug}
              level={program.level}
              duration={program.duration}
              credits={program.credits}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
