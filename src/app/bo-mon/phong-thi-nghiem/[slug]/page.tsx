import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { getLabBySlug } from "@/services/department-service"
import { MapPin, User } from "lucide-react"

interface LabPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: LabPageProps): Promise<Metadata> {
  const lab = getLabBySlug(params.slug)

  if (!lab) {
    return {
      title: "Không tìm thấy phòng thí nghiệm | Khoa CNTT - Đại học Hàng hải Việt Nam",
    }
  }

  return {
    title: `${lab.name} | Phòng thí nghiệm | Khoa CNTT - Đại học Hàng hải Việt Nam`,
    description: lab.description,
  }
}

export default function LabPage({ params }: LabPageProps) {
  const lab = getLabBySlug(params.slug)

  if (!lab) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="primary" className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{lab.name}</h1>
            <p className="text-lg text-white/80 md:text-xl">{lab.description}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {/* Giới thiệu phòng thí nghiệm */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-primary">Giới thiệu</h2>
                <div className="prose max-w-none">
                  <p className="mb-4 text-muted-foreground">{lab.description}</p>
                </div>
              </div>

              {/* Thông tin chi tiết */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-primary">Thông tin chi tiết</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Địa điểm</p>
                      <p className="text-muted-foreground">{lab.location}</p>
                    </div>
                  </div>

                  {lab.manager && (
                    <div className="flex items-start gap-3">
                      <User className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Quản lý</p>
                        <p className="text-muted-foreground">{lab.manager}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Trang thiết bị */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-primary">Trang thiết bị</h2>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Máy tính cấu hình cao</li>
                  <li>Thiết bị mạng</li>
                  <li>Thiết bị IoT</li>
                  <li>...</li>
                </ul>
              </div>

              {/* Môn học liên quan */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-primary">Môn học liên quan</h2>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Nhập môn IoT</li>
                  <li>Mạng máy tính</li>
                  <li>Lập trình nhúng</li>
                  <li>...</li>
                </ul>
              </div>
            </div>

            <div>
              {/* Hình ảnh phòng thí nghiệm */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={lab.image || "/placeholder.svg?height=400&width=600"}
                  alt={lab.name}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
