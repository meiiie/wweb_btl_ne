import type { Metadata } from "next"
import { PageHero } from "@/components/gioi-thieu/page-hero"
import { ContentCard } from "@/components/gioi-thieu/content-card"
import { Timeline } from "@/components/gioi-thieu/timeline"

export const metadata: Metadata = {
  title: "Lịch sử phát triển | Giới thiệu | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Lịch sử hình thành và phát triển của Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
}

const historyTimeline = [
  {
    year: "1994",
    title: "Thành lập Khoa Công nghệ Thông tin",
    description:
      "Khoa Công nghệ Thông tin được thành lập với tiền thân là Bộ môn Tin học thuộc Khoa Cơ bản, với nhiệm vụ đào tạo cử nhân ngành Tin học.",
  },
  {
    year: "1998",
    title: "Mở rộng quy mô đào tạo",
    description: "Khoa bắt đầu đào tạo kỹ sư Công nghệ thông tin, tăng cường đội ngũ giảng viên và cơ sở vật chất.",
  },
  {
    year: "2005",
    title: "Thành lập các Bộ môn chuyên ngành",
    description:
      "Khoa thành lập các Bộ môn: Khoa học máy tính, Hệ thống thông tin, Kỹ thuật máy tính để đáp ứng nhu cầu đào tạo chuyên sâu.",
  },
  {
    year: "2010",
    title: "Mở rộng hợp tác quốc tế",
    description:
      "Khoa bắt đầu mở rộng hợp tác với các trường đại học và tổ chức quốc tế, tạo cơ hội cho sinh viên và giảng viên tham gia các chương trình trao đổi.",
  },
  {
    year: "2015",
    title: "Đổi mới chương trình đào tạo",
    description:
      "Khoa tiến hành đổi mới toàn diện chương trình đào tạo theo hướng tiếp cận CDIO, đáp ứng nhu cầu của thị trường lao động và xu hướng phát triển công nghệ.",
  },
  {
    year: "2020",
    title: "Mở ngành đào tạo mới",
    description:
      "Khoa mở thêm các ngành đào tạo mới như Kỹ thuật phần mềm, Trí tuệ nhân tạo để đáp ứng nhu cầu nhân lực trong lĩnh vực công nghệ mới.",
  },
  {
    year: "2023",
    title: "Phát triển mạnh mẽ",
    description:
      "Khoa tiếp tục phát triển với đội ngũ giảng viên trình độ cao, cơ sở vật chất hiện đại và nhiều chương trình hợp tác với doanh nghiệp trong và ngoài nước.",
  },
]

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="Lịch sử phát triển"
        breadcrumb={[
          { title: "Giới thiệu", href: "/gioi-thieu" },
          { title: "Lịch sử phát triển", href: "/gioi-thieu/lich-su" },
        ]}
      />

      <ContentCard title="Lịch sử hình thành và phát triển">
        <p className="mb-6">
          Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam có lịch sử hình thành và phát triển gắn liền với
          sự phát triển của ngành Công nghệ thông tin tại Việt Nam. Trải qua gần 30 năm xây dựng và phát triển, Khoa đã
          trở thành một trong những đơn vị đào tạo uy tín trong lĩnh vực CNTT tại miền Bắc Việt Nam.
        </p>

        <Timeline items={historyTimeline} />

        <h3 className="text-xl font-bold mt-8 mb-3 text-primary">Thành tựu nổi bật</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Đào tạo hơn 5000 kỹ sư, cử nhân CNTT chất lượng cao</li>
          <li className="mb-2">Thực hiện nhiều đề tài nghiên cứu khoa học các cấp</li>
          <li className="mb-2">Hợp tác với nhiều doanh nghiệp lớn trong lĩnh vực CNTT</li>
          <li className="mb-2">Sinh viên đạt nhiều giải thưởng trong các cuộc thi học thuật</li>
          <li className="mb-2">Được công nhận đạt chuẩn kiểm định chất lượng giáo dục</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Định hướng phát triển</h3>
        <p className="mb-4">Trong những năm tới, Khoa Công nghệ Thông tin tiếp tục phát triển theo hướng:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Nâng cao chất lượng đào tạo, đáp ứng nhu cầu xã hội và hội nhập quốc tế</li>
          <li className="mb-2">Đẩy mạnh nghiên cứu khoa học và chuyển giao công nghệ</li>
          <li className="mb-2">Mở rộng hợp tác quốc tế và liên kết đào tạo</li>
          <li className="mb-2">Phát triển đội ngũ giảng viên có trình độ cao</li>
          <li className="mb-2">Hiện đại hóa cơ sở vật chất, trang thiết bị phục vụ đào tạo và nghiên cứu</li>
        </ul>
      </ContentCard>
    </>
  )
}
