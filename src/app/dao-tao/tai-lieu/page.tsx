import type { Metadata } from "next"
import { PageHeader } from "@/components/dao-tao/page-header"
import { DocumentCard } from "@/components/dao-tao/document-card"
import { DOCUMENTS } from "@/lib/constants/education"
import { Search } from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Tài liệu học tập | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  description:
    "Tài liệu học tập, biểu mẫu, quy chế đào tạo và các tài nguyên hỗ trợ khác dành cho sinh viên và giảng viên của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  keywords: [
    "tài liệu học tập",
    "giáo trình",
    "bài giảng",
    "đề cương",
    "biểu mẫu",
    "quy chế đào tạo",
    "khoa CNTT",
    "đại học hàng hải",
  ],
  openGraph: {
    title: "Tài liệu học tập | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    description:
      "Tài liệu học tập, biểu mẫu, quy chế đào tạo và các tài nguyên hỗ trợ khác dành cho sinh viên và giảng viên của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    url: "https://fit.vimaru.edu.vn/dao-tao/tai-lieu",
    siteName: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://fit.vimaru.edu.vn/dao-tao/tai-lieu",
  },
}

export const viewport = { width: 1024, initialScale: 1 }

export default function TaiLieuPage({ params, searchParams = {} }: { params: any; searchParams?: any }) {
  const { auth } = searchParams || {}

  // Schema.org data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tài liệu học tập - Khoa Công nghệ Thông tin",
    description:
      "Tài liệu học tập, biểu mẫu, quy chế đào tạo và các tài nguyên hỗ trợ khác dành cho sinh viên và giảng viên của Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    provider: {
      "@type": "Organization",
      name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      sameAs: "https://fit.vimaru.edu.vn",
    },
    hasPart: DOCUMENTS.map((doc) => ({
      "@type": "DigitalDocument",
      name: doc.title,
      description: doc.description,
      encodingFormat: doc.fileType,
      contentUrl: doc.url,
      datePublished: doc.date,
    })),
  }

  return (
    <div>
      <JsonLd data={schemaData} />

      <PageHeader
        title="Tài liệu học tập"
        description="Tài liệu học tập và tham khảo cho sinh viên Khoa CNTT"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Tài liệu học tập", href: "/dao-tao/tai-lieu" },
        ]}
      />

      {/* Bộ lọc và tìm kiếm */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Tìm kiếm tài liệu..."
                aria-label="Tìm kiếm tài liệu"
              />
            </div>
          </div>

          <div className="w-full md:w-48">
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              aria-label="Lọc theo loại tài liệu"
            >
              <option value="">Tất cả loại tài liệu</option>
              <option value="pdf">PDF</option>
              <option value="doc">Word</option>
              <option value="xls">Excel</option>
              <option value="ppt">PowerPoint</option>
            </select>
          </div>
        </div>
      </section>

      {/* Danh mục tài liệu */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Quy chế và quy định</h2>
        <div className="space-y-4">
          {DOCUMENTS.slice(0, 2).map((document) => (
            <DocumentCard
              key={document.id}
              title={document.title}
              description={document.description}
              fileUrl={document.url}
              fileType={document.fileType}
              fileSize={document.fileSize}
              uploadDate={document.date}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Chương trình đào tạo</h2>
        <div className="space-y-4">
          {DOCUMENTS.slice(2, 4).map((document) => (
            <DocumentCard
              key={document.id}
              title={document.title}
              description={document.description}
              fileUrl={document.url}
              fileType={document.fileType}
              fileSize={document.fileSize}
              uploadDate={document.date}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Tài liệu khác</h2>
        <div className="space-y-4">
          {DOCUMENTS.slice(4).map((document) => (
            <DocumentCard
              key={document.id}
              title={document.title}
              description={document.description}
              fileUrl={document.url}
              fileType={document.fileType}
              fileSize={document.fileSize}
              uploadDate={document.date}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
