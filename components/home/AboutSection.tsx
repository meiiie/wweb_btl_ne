import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "5+", label: "Chương trình đào tạo" },
  { value: "50+", label: "Giảng viên có trình độ cao" },
  { value: "1000+", label: "Sinh viên đang theo học" },
  { value: "25+", label: "Năm kinh nghiệm đào tạo" },
]

export default function AboutSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Khoa Công nghệ Thông tin"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-primary">Giới thiệu Khoa Công nghệ Thông tin</h2>
            <p className="text-gray-700 mb-4">
              Khoa Công nghệ Thông tin được thành lập vào năm 1994, là một trong những đơn vị đào tạo lâu đời và uy tín
              trong lĩnh vực CNTT tại miền Bắc Việt Nam.
            </p>
            <p className="text-gray-700 mb-6">
              Với đội ngũ giảng viên có trình độ cao, cơ sở vật chất hiện đại, Khoa CNTT đã và đang đào tạo hàng nghìn
              kỹ sư, cử nhân CNTT chất lượng cao, đáp ứng nhu cầu của thị trường lao động trong nước và quốc tế.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary font-bold text-xl mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="/gioi-thieu">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
