import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

const stats = [
  { value: "25+", label: "Năm thành lập" },
  { value: "5000+", label: "Cựu sinh viên" },
  { value: "50+", label: "Giảng viên" },
  { value: "100+", label: "Đối tác doanh nghiệp" },
]

export default function StatsSection() {
  return (
    <Section variant="primary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Khoa CNTT trong con số</h2>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Những con số ấn tượng phản ánh sự phát triển và thành tựu của Khoa Công nghệ Thông tin qua các năm.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
