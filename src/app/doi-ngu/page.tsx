import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Users, Award, GraduationCap } from "lucide-react"

export default function DoiNguPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Đội ngũ Khoa Công nghệ Thông tin</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Khoa Công nghệ Thông tin tự hào với đội ngũ giảng viên có trình độ cao, giàu kinh nghiệm và nhiệt huyết trong
          giảng dạy và nghiên cứu khoa học.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <Section className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="mb-4 rounded-full bg-primary/10 p-3">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-xl font-bold">Ban chủ nhiệm khoa</h2>
          <p className="mb-6 text-muted-foreground">
            Ban lãnh đạo Khoa Công nghệ Thông tin với đội ngũ quản lý giàu kinh nghiệm, tâm huyết với sự nghiệp giáo
            dục.
          </p>
          <Link href="/doi-ngu/ban-chu-nhiem" className="mt-auto">
            <Button>Xem chi tiết</Button>
          </Link>
        </Section>

        <Section className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="mb-4 rounded-full bg-primary/10 p-3">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-xl font-bold">Giảng viên</h2>
          <p className="mb-6 text-muted-foreground">
            Đội ngũ giảng viên có trình độ chuyên môn cao, tận tâm với sinh viên và luôn đi đầu trong nghiên cứu khoa
            học.
          </p>
          <Link href="/doi-ngu/giang-vien" className="mt-auto">
            <Button>Xem chi tiết</Button>
          </Link>
        </Section>

        <Section className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="mb-4 rounded-full bg-primary/10 p-3">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-xl font-bold">Cán bộ viên chức</h2>
          <p className="mb-6 text-muted-foreground">
            Đội ngũ cán bộ, viên chức hỗ trợ tận tình, chuyên nghiệp, góp phần vào sự phát triển của Khoa.
          </p>
          <Link href="/doi-ngu/can-bo-vien-chuc" className="mt-auto">
            <Button>Xem chi tiết</Button>
          </Link>
        </Section>
      </div>

      <div className="mt-16">
        <div className="rounded-lg bg-primary/5 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-primary">Thống kê đội ngũ</h2>
            <p className="mt-4 text-muted-foreground">
              Khoa Công nghệ Thông tin hiện có đội ngũ giảng viên và cán bộ viên chức với trình độ chuyên môn cao, trong
              đó có 3 Phó Giáo sư, 15 Tiến sĩ, 25 Thạc sĩ và nhiều giảng viên đang theo học các chương trình sau đại học
              trong và ngoài nước.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-primary">45+</p>
              <p className="text-sm text-muted-foreground">Giảng viên</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-primary">80%</p>
              <p className="text-sm text-muted-foreground">Có trình độ sau đại học</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Công bố khoa học</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Năm kinh nghiệm</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
