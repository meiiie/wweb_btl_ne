import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CooperationDetail } from "@/components/hop-tac/cooperation-detail"

interface InternationalCooperationDetailPageProps {
  params: {
    slug: string
  }
}

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API hoặc CMS
const internationalPartnersData = {
  "kyungpook-national-university": {
    name: "Đại học Quốc gia Kyungpook",
    logo: "/images/partners/kyungpook.png",
    description:
      "Đại học Quốc gia Kyungpook (KNU) là một trong những trường đại học hàng đầu của Hàn Quốc, được thành lập vào năm 1946. KNU có hơn 30.000 sinh viên và 12 trường đại học thành viên, trong đó có Trường Kỹ thuật và Khoa học Máy tính.\n\nKhoa Công nghệ thông tin, Đại học Hàng hải Việt Nam đã thiết lập quan hệ hợp tác với KNU từ năm 2018. Thông qua hợp tác này, sinh viên và giảng viên của Khoa có cơ hội tham gia các chương trình trao đổi, nghiên cứu khoa học chung và phát triển chương trình đào tạo.",
    website: "https://en.knu.ac.kr",
    location: "Daegu, Hàn Quốc",
    startYear: 2018,
    focusAreas: ["Trí tuệ nhân tạo", "Khoa học dữ liệu", "Internet vạn vật (IoT)", "An ninh mạng", "Điện toán đám mây"],
    activities: [
      {
        title: "Chương trình trao đổi sinh viên",
        date: "Hàng năm",
        description:
          "Sinh viên Khoa CNTT có cơ hội tham gia chương trình trao đổi ngắn hạn (1 học kỳ) hoặc dài hạn (1 năm) tại KNU, mở rộng kiến thức và trải nghiệm môi trường học tập quốc tế.",
        image: "/images/cooperation/knu-exchange.jpg",
      },
      {
        title: "Hội thảo khoa học quốc tế",
        date: "Tháng 10/2022",
        description:
          "Khoa CNTT và KNU phối hợp tổ chức hội thảo khoa học quốc tế về Trí tuệ nhân tạo và Khoa học dữ liệu, với sự tham gia của các nhà khoa học từ nhiều quốc gia.",
        image: "/images/cooperation/knu-conference.jpg",
      },
      {
        title: "Dự án nghiên cứu chung",
        date: "2020 - 2022",
        description:
          "Giảng viên Khoa CNTT và KNU hợp tác trong dự án nghiên cứu về ứng dụng trí tuệ nhân tạo trong lĩnh vực hàng hải, được tài trợ bởi Quỹ Khoa học và Công nghệ Quốc gia Hàn Quốc.",
      },
      {
        title: "Chương trình học bổng",
        date: "Hàng năm",
        description:
          "KNU cung cấp học bổng cho sinh viên Khoa CNTT tham gia chương trình trao đổi và chương trình sau đại học tại KNU.",
      },
      {
        title: "Trao đổi giảng viên",
        date: "2019 - Hiện tại",
        description:
          "Giảng viên Khoa CNTT và KNU tham gia giảng dạy, nghiên cứu và trao đổi học thuật tại trường đối tác, nâng cao trình độ chuyên môn và mở rộng mạng lưới hợp tác quốc tế.",
        image: "/images/cooperation/knu-faculty.jpg",
      },
    ],
    documents: [
      {
        title: "Biên bản ghi nhớ hợp tác (MOU) giữa Khoa CNTT và KNU",
        url: "#",
      },
      {
        title: "Thông tin chương trình trao đổi sinh viên KNU 2023",
        url: "#",
      },
      {
        title: "Thông tin học bổng KNU 2023",
        url: "#",
      },
    ],
  },
  // Thêm dữ liệu cho các đối tác khác
}

export async function generateMetadata({ params }: InternationalCooperationDetailPageProps): Promise<Metadata> {
  const partner = internationalPartnersData[params.slug]

  if (!partner) {
    return {
      title: "Không tìm thấy thông tin - Khoa CNTT - Đại học Hàng hải Việt Nam",
    }
  }

  return {
    title: `${partner.name} - Hợp tác quốc tế - Khoa CNTT - Đại học Hàng hải Việt Nam`,
    description: `Thông tin chi tiết về hợp tác giữa Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam và ${partner.name}`,
  }
}

export default function InternationalCooperationDetailPage({ params }: InternationalCooperationDetailPageProps) {
  const partner = internationalPartnersData[params.slug]

  if (!partner) {
    notFound()
  }

  return (
    <div>
      <CooperationDetail {...partner} />
    </div>
  )
}
