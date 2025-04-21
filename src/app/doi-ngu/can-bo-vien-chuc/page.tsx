import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { StaffProfileCard } from "@/components/doi-ngu/staff-profile-card"

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API
const staffData = [
  {
    id: "nguyen-thi-g",
    name: "Nguyễn Thị G",
    position: "Trợ lý Khoa",
    department: "Văn phòng Khoa",
    email: "nguyenthig@vimaru.edu.vn",
    phone: "0123456783",
    office: "Phòng 301, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "tran-van-h",
    name: "Trần Văn H",
    position: "Chuyên viên Đào tạo",
    department: "Văn phòng Khoa",
    email: "tranvanh@vimaru.edu.vn",
    phone: "0123456782",
    office: "Phòng 302, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "le-thi-i",
    name: "Lê Thị I",
    position: "Chuyên viên Công nghệ",
    department: "Phòng thí nghiệm",
    email: "lethii@vimaru.edu.vn",
    phone: "0123456781",
    office: "Phòng 401, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "pham-van-j",
    name: "Phạm Văn J",
    position: "Kỹ thuật viên",
    department: "Phòng thí nghiệm",
    email: "phamvanj@vimaru.edu.vn",
    phone: "0123456780",
    office: "Phòng 402, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function CanBoVienChucPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Cán bộ viên chức</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Đội ngũ cán bộ, viên chức của Khoa Công nghệ Thông tin luôn tận tâm, nhiệt tình hỗ trợ sinh viên và giảng
          viên, góp phần quan trọng vào sự phát triển của Khoa.
        </p>
      </div>

      <Section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {staffData.map((staff) => (
            <StaffProfileCard
              key={staff.id}
              id={staff.id}
              name={staff.name}
              position={staff.position}
              department={staff.department}
              email={staff.email}
              phone={staff.phone}
              office={staff.office}
              image={staff.image}
            />
          ))}
        </div>
      </Section>

      <Section className="mt-16">
        <div className="rounded-lg bg-primary/5 p-8">
          <h2 className="text-2xl font-bold text-primary">Nhiệm vụ của đội ngũ cán bộ viên chức</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-primary">Văn phòng Khoa</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Hỗ trợ công tác quản lý và điều hành của Ban chủ nhiệm Khoa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Quản lý hồ sơ, văn bản, giấy tờ hành chính</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Hỗ trợ sinh viên về các thủ tục hành chính</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Phối hợp tổ chức các sự kiện của Khoa</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-primary">Phòng thí nghiệm</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Quản lý, bảo trì các phòng máy tính và thiết bị</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Hỗ trợ kỹ thuật cho giảng viên và sinh viên</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Chuẩn bị thiết bị cho các bài thực hành</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Hỗ trợ các dự án nghiên cứu của Khoa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
