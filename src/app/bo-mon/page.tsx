import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { getAllDepartments } from "@/services/department-service"
import { Users, BookOpen, Microscope, Award, ChevronRight, MapPin, User } from "lucide-react"
import { DepartmentOverview } from "@/components/bo-mon/department-overview"

export const metadata: Metadata = {
  title: "Bộ môn | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Danh sách các bộ môn thuộc Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
}

export default function DepartmentsPage() {
  const departments = getAllDepartments()

  // Tính tổng số giảng viên, môn học, phòng lab và hướng nghiên cứu
  const totalStats = departments.reduce(
    (acc, dept) => {
      return {
        staffCount: acc.staffCount + dept.staff.length,
        courseCount: acc.courseCount + dept.courses.length,
        labCount: acc.labCount + dept.labs.length,
        researchCount: acc.researchCount + dept.researchAreas.length,
      }
    },
    { staffCount: 0, courseCount: 0, labCount: 0, researchCount: 0 },
  )

  return (
    <>
      {/* Hero Section */}
      <Section variant="primary" className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Bộ môn</h1>
            <p className="text-lg text-white/80 md:text-xl">
              Khoa Công nghệ Thông tin hiện có các bộ môn chuyên môn đảm nhận nhiệm vụ đào tạo và nghiên cứu khoa học
              trong các lĩnh vực khác nhau của ngành Công nghệ thông tin.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="muted" className="py-8 md:py-12">
        <Container>
          {/* Thống kê tổng quan */}
          <DepartmentOverview
            staffCount={totalStats.staffCount}
            courseCount={totalStats.courseCount}
            labCount={totalStats.labCount}
            researchCount={totalStats.researchCount}
          />
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          {/* Giới thiệu về các bộ môn */}
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">Các bộ môn chuyên môn</h2>
            <p className="text-muted-foreground">
              Khoa Công nghệ Thông tin có 4 bộ môn chuyên môn, mỗi bộ môn đảm nhận giảng dạy và nghiên cứu trong một
              lĩnh vực cụ thể của ngành CNTT, đồng thời quản lý các phòng thí nghiệm chuyên sâu.
            </p>
          </div>

          {/* Danh sách bộ môn */}
          <div className="grid gap-8 md:grid-cols-2">
            {departments.map((department) => (
              <Card key={department.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-56 w-full">
                  <Image
                    src={department.image || "/placeholder.svg?height=400&width=600"}
                    alt={department.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-2xl font-bold">{department.name}</h2>
                    <p className="mt-1 text-white/80">Trưởng bộ môn: {department.head}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="mb-4 text-muted-foreground line-clamp-3">{department.shortDescription}</p>

                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">{department.staff.length} giảng viên</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">{department.courses.length} môn học</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Microscope className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">{department.labs.length} phòng lab</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">{department.researchAreas.length} hướng nghiên cứu</span>
                    </div>
                  </div>

                  <Link
                    href={`/bo-mon/${department.slug}`}
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                  >
                    Xem chi tiết
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Phòng thí nghiệm */}
      <Section variant="muted" className="py-12 md:py-16">
        <Container>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">Phòng thí nghiệm</h2>
              <p className="mt-2 text-muted-foreground">
                Khoa CNTT có các phòng thí nghiệm hiện đại phục vụ đào tạo và nghiên cứu
              </p>
            </div>
            <Link
              href="/bo-mon/phong-thi-nghiem"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Xem tất cả phòng thí nghiệm
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {departments
              .flatMap((department) => department.labs)
              .slice(0, 3)
              .map((lab) => (
                <Card key={lab.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 w-full">
                    <Image
                      src={lab.image || "/placeholder.svg?height=300&width=500"}
                      alt={lab.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{lab.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{lab.location}</span>
                      </div>
                      {lab.manager && (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          <span className="text-sm">Quản lý: {lab.manager}</span>
                        </div>
                      )}
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{lab.description}</p>
                    <Link
                      href={lab.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Xem chi tiết
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </Container>
      </Section>

      {/* Giảng viên tiêu biểu */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">Giảng viên tiêu biểu</h2>
              <p className="mt-2 text-muted-foreground">
                Đội ngũ giảng viên có trình độ cao, nhiều kinh nghiệm trong giảng dạy và nghiên cứu
              </p>
            </div>
            <Link
              href="/giang-vien"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Xem tất cả giảng viên
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments
              .flatMap((department) =>
                department.staff
                  .filter((staff) => staff.featured)
                  .map((staff) => ({
                    ...staff,
                    departmentName: department.name,
                  })),
              )
              .slice(0, 3)
              .map((staff) => (
                <Card key={staff.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:h-auto md:w-1/3">
                      <Image
                        src={staff.image || "/placeholder.svg?height=300&width=200"}
                        alt={staff.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <Link href={`/giang-vien/${staff.slug}`} className="group">
                        <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">
                          {staff.name}
                          {staff.degree && (
                            <span className="ml-2 text-base font-normal text-muted-foreground">({staff.degree})</span>
                          )}
                        </h3>
                      </Link>
                      <p className="mb-2 text-muted-foreground">{staff.position}</p>
                      <p className="mb-2 text-sm">Bộ môn: {staff.departmentName}</p>

                      {staff.researchAreas && staff.researchAreas.length > 0 && (
                        <div className="mt-2">
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Hướng nghiên cứu:</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {staff.researchAreas.join(", ")}
                          </p>
                        </div>
                      )}

                      <Link
                        href={`/giang-vien/${staff.slug}`}
                        className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Xem chi tiết
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted" className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary md:text-3xl">Câu hỏi thường gặp</h2>

            <div className="space-y-4">
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-primary">Bộ môn có vai trò gì trong Khoa CNTT?</h3>
                  <p className="text-muted-foreground">
                    Bộ môn là đơn vị chuyên môn cơ bản của Khoa, chịu trách nhiệm về công tác giảng dạy, nghiên cứu khoa
                    học, phát triển chương trình đào tạo và quản lý các phòng thí nghiệm trong lĩnh vực chuyên môn của
                    mình.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-primary">Làm thế nào để liên hệ với Bộ môn?</h3>
                  <p className="text-muted-foreground">
                    Bạn có thể liên hệ trực tiếp với Trưởng bộ môn hoặc các giảng viên thông qua email, điện thoại được
                    cung cấp trong trang chi tiết của từng Bộ môn. Ngoài ra, bạn cũng có thể đến văn phòng Khoa CNTT để
                    được hướng dẫn cụ thể.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Sinh viên có thể tham gia nghiên cứu tại các Bộ môn không?
                  </h3>
                  <p className="text-muted-foreground">
                    Có, sinh viên có thể tham gia vào các nhóm nghiên cứu của Bộ môn thông qua các đề tài nghiên cứu
                    khoa học sinh viên, khóa luận tốt nghiệp hoặc làm trợ lý nghiên cứu cho các dự án của giảng viên.
                    Bạn nên liên hệ trực tiếp với giảng viên có hướng nghiên cứu mà bạn quan tâm.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Bạn muốn tìm hiểu thêm về Khoa CNTT?</h2>
            <p className="mb-6 text-white/80">
              Khám phá các chương trình đào tạo, cơ hội nghiên cứu và hoạt động của Khoa Công nghệ Thông tin
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm transition-colors hover:bg-gray-100"
              >
                Giới thiệu Khoa
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center rounded-md border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Liên hệ với chúng tôi
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
