import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ProgramCard } from "./program-card"
import { EDUCATION_PROGRAMS } from "@/lib/constants"

export default function ProgramsSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Chương trình đào tạo</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Khoa Công nghệ Thông tin cung cấp nhiều chương trình đào tạo chất lượng cao, đáp ứng nhu cầu đa dạng của
            người học và thị trường lao động.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION_PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/dao-tao/chuong-trinh">Xem tất cả chương trình</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
