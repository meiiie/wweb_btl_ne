import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { LeadershipCard } from "@/components/doi-ngu/leadership-card"

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API
const leadershipData = [
  {
    id: "truong-khoa",
    name: "PGS.TS. Nguyễn Văn A",
    position: "Trưởng khoa",
    degree: "PGS.TS",
    email: "nguyenvana@vimaru.edu.vn",
    phone: "0123456789",
    image: "/placeholder.svg?height=400&width=300",
    appointmentDate: "01/01/2020",
    bio: "PGS.TS. Nguyễn Văn A có hơn 20 năm kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực Công nghệ thông tin. Ông đã công bố hơn 50 bài báo khoa học trên các tạp chí quốc tế uy tín và tham gia nhiều dự án nghiên cứu cấp nhà nước.",
  },
  {
    id: "pho-truong-khoa-1",
    name: "TS. Trần Thị B",
    position: "Phó Trưởng khoa",
    degree: "TS",
    email: "tranthib@vimaru.edu.vn",
    phone: "0123456788",
    image: "/placeholder.svg?height=400&width=300",
    appointmentDate: "01/06/2020",
    bio: "TS. Trần Thị B tốt nghiệp Tiến sĩ tại Đại học Quốc gia Hà Nội, chuyên ngành Khoa học máy tính. Bà có nhiều năm kinh nghiệm trong lĩnh vực Trí tuệ nhân tạo và Học máy, đã hướng dẫn nhiều sinh viên đạt giải trong các cuộc thi quốc gia và quốc tế.",
  },
  {
    id: "pho-truong-khoa-2",
    name: "TS. Lê Văn C",
    position: "Phó Trưởng khoa",
    degree: "TS",
    email: "levanc@vimaru.edu.vn",
    phone: "0123456787",
    image: "/placeholder.svg?height=400&width=300",
    appointmentDate: "01/09/2021",
    bio: "TS. Lê Văn C tốt nghiệp Tiến sĩ tại Đại học Công nghệ Sydney, Australia. Ông có chuyên môn sâu về An toàn thông tin và Mạng máy tính, đã tham gia nhiều dự án hợp tác quốc tế và có nhiều công bố khoa học trên các tạp chí uy tín.",
  },
]

export default function BanChuNhiemPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Ban Chủ nhiệm Khoa</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ban Chủ nhiệm Khoa Công nghệ Thông tin là đội ngũ lãnh đạo có trình độ chuyên môn cao, giàu kinh nghiệm, tâm
          huyết với sự nghiệp giáo dục và có tầm nhìn chiến lược trong phát triển Khoa.
        </p>
      </div>

      <Section className="mt-12">
        <div className="grid gap-8 md:grid-cols-3">
          {leadershipData.map((leader) => (
            <LeadershipCard
              key={leader.id}
              id={leader.id}
              name={leader.name}
              position={leader.position}
              degree={leader.degree}
              email={leader.email}
              phone={leader.phone}
              image={leader.image}
              appointmentDate={leader.appointmentDate}
              bio={leader.bio}
            />
          ))}
        </div>
      </Section>

      <Section className="mt-16">
        <div className="rounded-lg bg-primary/5 p-8">
          <h2 className="text-2xl font-bold text-primary">Nhiệm vụ của Ban Chủ nhiệm Khoa</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-primary">Quản lý đào tạo</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Xây dựng và phát triển chương trình đào tạo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Quản lý và điều hành công tác giảng dạy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Đảm bảo chất lượng đào tạo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Phát triển đội ngũ giảng viên</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-primary">Nghiên cứu khoa học</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Định hướng nghiên cứu của Khoa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Thúc đẩy hoạt động nghiên cứu khoa học</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Hợp tác nghiên cứu trong và ngoài nước</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Chuyển giao công nghệ và ứng dụng</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-primary">Hợp tác đối ngoại</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Phát triển quan hệ hợp tác với doanh nghiệp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Hợp tác với các trường đại học trong và ngoài nước</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Tổ chức hội thảo, hội nghị khoa học</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Tạo cơ hội việc làm cho sinh viên</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-primary">Công tác sinh viên</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Quản lý và hỗ trợ sinh viên</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Tổ chức các hoạt động ngoại khóa</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Tư vấn học tập và nghề nghiệp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Kết nối cựu sinh viên</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
