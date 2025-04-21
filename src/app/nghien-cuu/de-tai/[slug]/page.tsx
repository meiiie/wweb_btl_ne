import type { Metadata } from "next"
import { defaultSEO } from "@/lib/seo-config"
import { generateResearchProjectSchema } from "@/components/seo/schema-generators"

// Định nghĩa tham số cho trang chi tiết đề tài nghiên cứu
type Props = {
  params: { slug: string }
}

// Dữ liệu mẫu cho đề tài nghiên cứu - trong thực tế sẽ được lấy từ API hoặc database
const getResearchProjectData = (slug: string) => {
  // Đây là dữ liệu mẫu, trong thực tế bạn sẽ fetch từ API hoặc database
  return {
    title: "Xây dựng hệ thống giám sát và điều khiển giao thông thông minh ứng dụng AI và IoT",
    description:
      "Đề tài nghiên cứu và phát triển hệ thống giám sát và điều khiển giao thông thông minh dựa trên công nghệ AI và IoT, nhằm giảm thiểu tình trạng ùn tắc giao thông và tai nạn giao thông tại các nút giao thông phức tạp.",
    url: `/nghien-cuu/de-tai/${slug}`,
    leader: {
      name: "PGS.TS. Nguyễn Văn A",
      url: "/giang-vien/nguyen-van-a",
    },
    members: ["TS. Trần Thị B", "ThS. Lê Văn C", "ThS. Phạm Thị D"],
    startDate: "2022-01-01",
    endDate: "2024-12-31",
    status: "Đang thực hiện",
    keywords: ["Trí tuệ nhân tạo", "Internet vạn vật", "Giao thông thông minh", "Xử lý ảnh", "Học sâu"],
    publications: [
      {
        title: "A Novel Approach for Traffic Congestion Detection Using Deep Learning and IoT Sensors",
        url: "/nghien-cuu/cong-bo-khoa-hoc/traffic-congestion-detection",
      },
      {
        title: "Real-time Vehicle Detection and Classification for Smart Traffic Management",
        url: "/nghien-cuu/cong-bo-khoa-hoc/vehicle-detection-classification",
      },
    ],
    image: "/placeholder.svg?height=400&width=600",
    objectives: [
      "Nghiên cứu các giải pháp giám sát và điều khiển giao thông thông minh hiện có",
      "Đề xuất mô hình hệ thống giám sát và điều khiển giao thông thông minh dựa trên AI và IoT",
      "Phát triển các thuật toán nhận dạng phương tiện, phát hiện ùn tắc và tối ưu hóa điều khiển đèn tín hiệu",
      "Xây dựng hệ thống thử nghiệm và đánh giá hiệu quả của giải pháp đề xuất",
    ],
  }
}

// Tạo metadata động dựa trên slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Lấy dữ liệu đề tài nghiên cứu
  const project = getResearchProjectData(params.slug)

  return {
    title: `${project.title} | Đề tài nghiên cứu | Khoa CNTT`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Đề tài nghiên cứu | Khoa CNTT - VMU`,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.image.startsWith("http") ? project.image : `${defaultSEO.siteUrl}${project.image}`,
          width: 600,
          height: 400,
          alt: project.title,
        },
      ],
    },
    alternates: {
      canonical: `/nghien-cuu/de-tai/${params.slug}`,
    },
  }
}

export default function ResearchProjectDetailPage({ params }: Props) {
  // Lấy dữ liệu đề tài nghiên cứu
  const project = getResearchProjectData(params.slug)

  // Tạo schema JSON-LD cho đề tài nghiên cứu
  const researchProjectSchema = generateResearchProjectSchema(project)

  return (
    <>
      {/* Thêm JSON-LD schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(researchProjectSchema) }} />

      {/* Nội dung trang chi tiết đề tài nghiên cứu */}
      <div>{/* Nội dung trang */}</div>
    </>
  )
}
