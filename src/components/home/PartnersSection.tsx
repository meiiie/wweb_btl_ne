import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { PartnerLogo } from "./partner-logo"
import { PARTNER_LOGOS } from "@/lib/image-paths"

const partners = [
  {
    id: 1,
    name: "FPT Software",
    logoSrc: PARTNER_LOGOS.FPT,
    url: "https://fptsoftware.com",
  },
  {
    id: 2,
    name: "Viettel",
    logoSrc: PARTNER_LOGOS.VIETTEL,
    url: "https://viettel.com.vn",
  },
  {
    id: 3,
    name: "VNPT",
    logoSrc: PARTNER_LOGOS.VNPT,
    url: "https://vnpt.com.vn",
  },
  {
    id: 4,
    name: "CMC Corporation",
    logoSrc: PARTNER_LOGOS.CMC,
    url: "https://cmc.com.vn",
  },
  {
    id: 5,
    name: "IBM",
    logoSrc: PARTNER_LOGOS.IBM,
    url: "https://ibm.com",
  },
  {
    id: 6,
    name: "Microsoft",
    logoSrc: PARTNER_LOGOS.MICROSOFT,
    url: "https://microsoft.com",
  },
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
            <PartnerLogo key={partner.id} name={partner.name} logoSrc={partner.logoSrc} url={partner.url} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
