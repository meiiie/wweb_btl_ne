import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { getDepartmentBySlug } from "@/services/department-service"
import { StaffCard } from "@/components/bo-mon/staff-card"
import { CourseItem } from "@/components/bo-mon/course-item"
import { LabCard } from "@/components/bo-mon/lab-card"
import { AchievementCard } from "@/components/bo-mon/achievement-card"
import { ContactInfo } from "@/components/bo-mon/contact-info"
import { ChevronRight, Award, BookOpen, Users, Microscope } from "lucide-react"

interface DepartmentPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const department = getDepartmentBySlug(params.slug)

  if (!department) {
    return {
      title: "Không tìm thấy bộ môn | Khoa CNTT - Đại học Hàng hải Việt Nam",
    }
  }

  return {
    title: `${department.name} | Khoa CNTT - Đại học Hàng hải Việt Nam`,
    description: department.shortDescription,
  }
}

export default function DepartmentPage({ params }: DepartmentPageProps) {
  const department = getDepartmentBySlug(params.slug)

  if (!department) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="primary" className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{department.name}</h1>
            <p className="text-lg text-white/80 md:text-xl">{department.shortDescription}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {/* Giới thiệu bộ môn */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-primary">Giới thiệu</h2>
                <div className="prose max-w-none">
                  {department.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Thống kê */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center rounded-lg bg-blue-50 p-4 text-center">
                  <Users className="mb-2 h-8 w-8 text-blue-600" />
                  <span className="text-2xl font-bold">{department.staff.length}</span>
                  <span className="text-sm text-muted-foreground">Giảng viên</span>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-green-50 p-4 text-center">
                  <BookOpen className="mb-2 h-8 w-8 text-green-600" />
                  <span className="text-2xl font-bold">{department.courses.length}</span>
                  <span className="text-sm text-muted-foreground">Môn học</span>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-purple-50 p-4 text-center">
                  <Microscope className="mb-2 h-8 w-8 text-purple-600" />
                  <span className="text-2xl font-bold">{department.labs.length}</span>
                  <span className="text-sm text-muted-foreground">Phòng lab</span>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-amber-50 p-4 text-center">
                  <Award className="mb-2 h-8 w-8 text-amber-600" />
                  <span className="text-2xl font-bold">{department.researchAreas.length}</span>
                  <span className="text-sm text-muted-foreground">Hướng nghiên cứu</span>
                </div>
              </div>

              {/* Hướng nghiên cứu */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-primary">Hướng nghiên cứu</h2>
                <ul className="grid gap-3 md:grid-cols-2">
                  {department.researchAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thành tựu */}
              {department.achievements.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-primary">Thành tựu nổi bật</h2>
                  <div className="space-y-4">
                    {department.achievements.map((achievement) => (
                      <AchievementCard
                        key={achievement.id}
                        title={achievement.title}
                        description={achievement.description}
                        year={achievement.year}
                        type={achievement.type}
                        participants={achievement.participants}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {/* Thông tin liên hệ */}
              <ContactInfo
                email={department.contactInfo.email}
                phone={department.contactInfo.phone}
                address={department.contactInfo.address}
                workingHours={department.contactInfo.workingHours}
              />

              {/* Hình ảnh bộ môn */}
              <div className="mt-6 overflow-hidden rounded-lg">
                <Image
                  src={department.image || "/placeholder.svg?height=400&width=600"}
                  alt={department.name}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Đội ngũ giảng viên */}
      <Section variant="muted" className="py-12 md:py-16">
        <Container>
          <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">Đội ngũ giảng viên</h2>
          <div className="space-y-6">
            {department.staff.map((staff) => (
              <StaffCard
                key={staff.id}
                name={staff.name}
                position={staff.position}
                degree={staff.degree}
                email={staff.email}
                phone={staff.phone}
                image={staff.image}
                link={`/giang-vien/${staff.slug}`}
                researchAreas={staff.researchAreas}
                courses={staff.courses}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Môn học */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Môn học</h2>
            <Link
              href="/dao-tao/mon-hoc"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Xem tất cả môn học
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {department.courses.map((course) => (
              <CourseItem
                key={course.id}
                code={course.code}
                name={course.name}
                credits={course.credits}
                semester={course.semester}
                description={course.description}
                link={course.link}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Phòng thí nghiệm */}
      {department.labs.length > 0 && (
        <Section variant="muted" className="py-12 md:py-16">
          <Container>
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">Phòng thí nghiệm</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {department.labs.map((lab) => (
                <LabCard
                  key={lab.id}
                  name={lab.name}
                  description={lab.description}
                  image={lab.image}
                  location={lab.location}
                  manager={lab.manager}
                  link={lab.link}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section variant="primary" className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Quan tâm đến ngành học của chúng tôi?</h2>
            <p className="mb-6 text-white/80">
              Tìm hiểu thêm về chương trình đào tạo, cơ hội nghiên cứu và học tập tại Khoa Công nghệ Thông tin
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/dao-tao/chuong-trinh"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm transition-colors hover:bg-gray-100"
              >
                Chương trình đào tạo
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center rounded-md border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
