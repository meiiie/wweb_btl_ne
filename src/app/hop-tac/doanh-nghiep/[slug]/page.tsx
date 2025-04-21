import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CooperationDetail } from "@/components/hop-tac/cooperation-detail"

interface BusinessCooperationDetailPageProps {
  params: {
    slug: string
  }
}

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API hoặc CMS
const businessPartnersData = {
  "fpt-software": {
    name: "FPT Software",
    logo: "/images/partners/fpt-software.png",
    description:
      "FPT Software là công ty thành viên của Tập đoàn FPT, chuyên cung cấp các dịch vụ và giải pháp phần mềm cho khách hàng toàn cầu. Được thành lập vào năm 1999, FPT Software đã phát triển thành một trong những công ty phần mềm lớn nhất Việt Nam với hơn 20.000 nhân viên và văn phòng tại nhiều quốc gia trên thế giới.\n\nKhoa Công nghệ thông tin, Đại học Hàng hải Việt Nam đã thiết lập quan hệ hợp tác với FPT Software từ năm 2015. Thông qua hợp tác này, sinh viên của Khoa có cơ hội được tiếp cận với môi trường làm việc chuyên nghiệp, các công nghệ mới và nhu cầu thực tế của doanh nghiệp.",
    website: "https://www.fpt-software.com",
    location: "Hà Nội, Việt Nam",
    startYear: 2015,
    focusAreas: [
      "Phát triển phần mềm",
      "Trí tuệ nhân tạo",
      "Điện toán đám mây",
      "Internet vạn vật (IoT)",
      "Phân tích dữ liệu",
    ],
    activities: [
      {
        title: "Chương trình thực tập sinh",
        date: "Hàng năm",
        description:
          "FPT Software tiếp nhận sinh viên năm cuối của Khoa CNTT tham gia chương trình thực tập sinh, tạo cơ hội cho sinh viên được trải nghiệm môi trường làm việc thực tế và nâng cao kỹ năng chuyên môn.",
        image: "/images/cooperation/fpt-internship.jpg",
      },
      {
        title: "Hội thảo công nghệ",
        date: "Tháng 5/2023",
        description:
          "FPT Software phối hợp với Khoa CNTT tổ chức hội thảo về các công nghệ mới trong lĩnh vực phát triển phần mềm, trí tuệ nhân tạo và điện toán đám mây.",
        image: "/images/cooperation/fpt-workshop.jpg",
      },
      {
        title: "Tài trợ học bổng",
        date: "Hàng năm",
        description:
          "FPT Software tài trợ học bổng cho sinh viên xuất sắc của Khoa CNTT, khuyến khích sinh viên nỗ lực học tập và nghiên cứu.",
      },
      {
        title: "Phát triển chương trình đào tạo",
        date: "2020 - 2022",
        description:
          "FPT Software phối hợp với Khoa CNTT trong việc phát triển và cập nhật chương trình đào tạo, đảm bảo chương trình đáp ứng nhu cầu thực tế của doanh nghiệp.",
      },
      {
        title: "Ngày hội việc làm",
        date: "Tháng 6/2023",
        description:
          "FPT Software tham gia Ngày hội việc làm do Khoa CNTT tổ chức, giới thiệu cơ hội việc làm và tuyển dụng sinh viên tốt nghiệp.",
        image: "/images/cooperation/fpt-job-fair.jpg",
      },
    ],
    documents: [
      {
        title: "Biên bản ghi nhớ hợp tác (MOU) giữa Khoa CNTT và FPT Software",
        url: "#",
      },
      {
        title: "Thông tin chương trình thực tập sinh FPT Software 2023",
        url: "#",
      },
      {
        title: "Thông tin học bổng FPT Software 2023",
        url: "#",
      },
    ],
  },
  // Thêm dữ liệu cho các đối tác khác
}

export async function generateMetadata({ params }: BusinessCooperationDetailPageProps): Promise<Metadata> {
  const partner = businessPartnersData[params.slug]

  if (!partner) {
    return {
      title: "Không tìm thấy thông tin - Khoa CNTT - Đại học Hàng hải Việt Nam",
    }
  }

  return {
    title: `${partner.name} - Hợp tác doanh nghiệp - Khoa CNTT - Đại học Hàng hải Việt Nam`,
    description: `Thông tin chi tiết về hợp tác giữa Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam và ${partner.name}`,
  }
}

export default function BusinessCooperationDetailPage({ params }: BusinessCooperationDetailPageProps) {
  const partner = businessPartnersData[params.slug]

  if (!partner) {
    notFound()
  }

  return (
    <div>
      <CooperationDetail {...partner} />
    </div>
  )
}
