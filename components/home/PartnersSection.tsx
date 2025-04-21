import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { PartnerLogo } from "./partner-logo"

// Dữ liệu mẫu cho đối tác
const partners = [
  { id: 1, name: "FPT Software", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Viettel", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "VNPT", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "CMC Corporation", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "IBM Vietnam", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "Microsoft Vietnam", logo: "/placeholder.svg?height=100&width=200" },
]

export default function PartnersSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Đối tác của chúng tôi</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Khoa Công nghệ Thông tin tự hào hợp tác với nhiều doanh nghiệp hàng đầu trong lĩnh vực CNTT để mang đến cơ
            hội thực tập, việc làm và nghiên cứu cho sinh viên.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <PartnerLogo key={partner.id} partner={partner} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
