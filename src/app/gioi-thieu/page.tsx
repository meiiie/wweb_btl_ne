import Image from "next/image"
import type { Metadata } from "next"
import { Users, BookOpen, Award, Building } from "lucide-react"
import { PageHero } from "@/components/gioi-thieu/page-hero"
import { ContentCard } from "@/components/gioi-thieu/content-card"
import { Stats } from "@/components/gioi-thieu/stats"

export const metadata: Metadata = {
  title: "Tổng quan | Giới thiệu",
  description:
    "Tổng quan về Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam - lịch sử hình thành, sứ mệnh tầm nhìn và thông tin tổng quát về đội ngũ giảng viên, cơ sở vật chất.",
  alternates: {
    canonical: "/gioi-thieu",
  },
  openGraph: {
    title: "Tổng quan | Giới thiệu | Khoa CNTT - VMU",
    description:
      "Tổng quan về Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam - lịch sử hình thành, sứ mệnh tầm nhìn và thông tin tổng quát về đội ngũ giảng viên, cơ sở vật chất.",
    url: "/gioi-thieu",
    type: "website",
  },
}

const stats = [
  {
    value: "5+",
    label: "Chương trình đào tạo",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    value: "50+",
    label: "Giảng viên có trình độ cao",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    value: "1000+",
    label: "Sinh viên đang theo học",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    value: "25+",
    label: "Năm kinh nghiệm đào tạo",
    icon: <Building className="h-6 w-6 text-primary" />,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero title="Giới thiệu" breadcrumb={[{ title: "Giới thiệu", href: "/gioi-thieu" }]} />

      <ContentCard title="Giới thiệu Khoa Công nghệ Thông tin">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Khoa Công nghệ Thông tin"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mb-4"
          />
        </div>

        <p className="mb-4">
          Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam được thành lập vào năm 1994, là một trong những
          đơn vị đào tạo lâu đời và uy tín trong lĩnh vực CNTT tại miền Bắc Việt Nam.
        </p>

        <p className="mb-4">
          Trải qua gần 30 năm xây dựng và phát triển, Khoa CNTT đã trở thành một trong những đơn vị đào tạo mũi nhọn của
          Trường Đại học Hàng hải Việt Nam, đóng góp quan trọng vào sự nghiệp đào tạo nguồn nhân lực chất lượng cao
          trong lĩnh vực Công nghệ thông tin cho đất nước.
        </p>

        <Stats items={stats} className="my-8" />

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Sứ mệnh</h3>
        <p className="mb-4">
          Khoa Công nghệ Thông tin có sứ mệnh đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực Công nghệ thông tin,
          đáp ứng nhu cầu của xã hội và hội nhập quốc tế; nghiên cứu khoa học và chuyển giao công nghệ, góp phần thúc
          đẩy sự phát triển kinh tế - xã hội của đất nước.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Tầm nhìn</h3>
        <p className="mb-4">
          Đến năm 2030, Khoa Công nghệ Thông tin phấn đấu trở thành đơn vị đào tạo và nghiên cứu có uy tín trong nước và
          khu vực, là địa chỉ tin cậy của người học, nhà tuyển dụng và đối tác hợp tác.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Giá trị cốt lõi</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Chất lượng và Sáng tạo</li>
          <li className="mb-2">Trách nhiệm và Hợp tác</li>
          <li className="mb-2">Đổi mới và Phát triển</li>
          <li className="mb-2">Tôn trọng và Chia sẻ</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Đội ngũ giảng viên</h3>
        <p className="mb-4">
          Khoa Công nghệ Thông tin hiện có hơn 50 giảng viên, trong đó có 5 Phó Giáo sư, 15 Tiến sĩ, 30 Thạc sĩ. Đội ngũ
          giảng viên của Khoa có trình độ chuyên môn cao, nhiệt tình, tâm huyết với nghề và luôn không ngừng học tập,
          nghiên cứu để nâng cao chất lượng giảng dạy.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Cơ sở vật chất</h3>
        <p className="mb-4">
          Khoa Công nghệ Thông tin được trang bị cơ sở vật chất hiện đại, đáp ứng nhu cầu đào tạo và nghiên cứu, bao
          gồm:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">10 phòng thực hành máy tính với hơn 300 máy tính hiện đại</li>
          <li className="mb-2">Phòng Lab nghiên cứu AI, IoT, Big Data</li>
          <li className="mb-2">Thư viện chuyên ngành với hàng nghìn đầu sách và tài liệu điện tử</li>
          <li className="mb-2">Hệ thống mạng không dây phủ sóng toàn bộ khu vực Khoa</li>
        </ul>
      </ContentCard>
    </>
  )
}
