"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { StaffProfileCard } from "@/components/doi-ngu/staff-profile-card"
import { StaffFilter } from "@/components/doi-ngu/staff-filter"

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API
const staffData = [
  {
    id: "nguyen-van-a",
    name: "PGS.TS. Nguyễn Văn A",
    position: "Trưởng khoa",
    department: "Bộ môn Khoa học máy tính",
    degree: "PGS.TS",
    email: "nguyenvana@vimaru.edu.vn",
    phone: "0123456789",
    office: "Phòng 305, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
    researchAreas: ["Trí tuệ nhân tạo", "Học máy", "Khai phá dữ liệu"],
    courses: ["Trí tuệ nhân tạo", "Học máy", "Khai phá dữ liệu", "Lập trình Python"],
    publications: 25,
    featured: true,
  },
  {
    id: "tran-thi-b",
    name: "TS. Trần Thị B",
    position: "Phó Trưởng khoa",
    department: "Bộ môn Hệ thống thông tin",
    degree: "TS",
    email: "tranthib@vimaru.edu.vn",
    phone: "0123456788",
    office: "Phòng 306, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
    researchAreas: ["Hệ thống thông tin", "Cơ sở dữ liệu", "Phân tích dữ liệu lớn"],
    courses: ["Cơ sở dữ liệu", "Hệ quản trị cơ sở dữ liệu", "Kho dữ liệu và OLAP"],
    publications: 18,
    featured: true,
  },
  {
    id: "le-van-c",
    name: "TS. Lê Văn C",
    position: "Phó Trưởng khoa",
    department: "Bộ môn Kỹ thuật máy tính",
    degree: "TS",
    email: "levanc@vimaru.edu.vn",
    phone: "0123456787",
    office: "Phòng 307, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
    researchAreas: ["An toàn thông tin", "Mạng máy tính", "Điện toán đám mây"],
    courses: ["An toàn thông tin", "Mạng máy tính", "Điện toán đám mây"],
    publications: 20,
    featured: true,
  },
  {
    id: "pham-thi-d",
    name: "TS. Phạm Thị D",
    position: "Giảng viên",
    department: "Bộ môn Khoa học máy tính",
    degree: "TS",
    email: "phamthid@vimaru.edu.vn",
    phone: "0123456786",
    office: "Phòng 308, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
    researchAreas: ["Xử lý ngôn ngữ tự nhiên", "Học sâu", "Thị giác máy tính"],
    courses: ["Xử lý ngôn ngữ tự nhiên", "Học sâu", "Thị giác máy tính"],
    publications: 15,
  },
  {
    id: "hoang-van-e",
    name: "ThS. Hoàng Văn E",
    position: "Giảng viên",
    department: "Bộ môn Hệ thống thông tin",
    degree: "ThS",
    email: "hoangvane@vimaru.edu.vn",
    phone: "0123456785",
    office: "Phòng 309, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
    researchAreas: ["Phát triển ứng dụng web", "Công nghệ phần mềm"],
    courses: ["Lập trình web", "Công nghệ phần mềm", "Phân tích thiết kế hệ thống"],
    publications: 5,
  },
  {
    id: "nguyen-thi-f",
    name: "ThS. Nguyễn Thị F",
    position: "Giảng viên",
    department: "Bộ môn Kỹ thuật máy tính",
    degree: "ThS",
    email: "nguyenthif@vimaru.edu.vn",
    phone: "0123456784",
    office: "Phòng 310, Nhà A1",
    image: "/placeholder.svg?height=300&width=300",
    researchAreas: ["IoT", "Hệ thống nhúng", "Robotics"],
    courses: ["IoT", "Hệ thống nhúng", "Vi xử lý"],
    publications: 8,
  },
]

const departments = ["Bộ môn Khoa học máy tính", "Bộ môn Hệ thống thông tin", "Bộ môn Kỹ thuật máy tính"]

export default function GiangVienPage() {
  const [filteredStaff, setFilteredStaff] = useState(staffData)
  const [filters, setFilters] = useState({ search: "", department: "" })

  useEffect(() => {
    const filtered = staffData.filter((staff) => {
      const matchSearch =
        filters.search === "" ||
        staff.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        staff.position.toLowerCase().includes(filters.search.toLowerCase())

      const matchDepartment = filters.department === "" || staff.department === filters.department

      return matchSearch && matchDepartment
    })

    setFilteredStaff(filtered)
  }, [filters])

  const handleFilterChange = (newFilters: { search: string; department: string }) => {
    setFilters(newFilters)
  }

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Đội ngũ Giảng viên</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Khoa Công nghệ Thông tin tự hào với đội ngũ giảng viên có trình độ cao, giàu kinh nghiệm và nhiệt huyết trong
          giảng dạy và nghiên cứu khoa học.
        </p>
      </div>

      <Section className="mt-12">
        <StaffFilter departments={departments} onFilterChange={handleFilterChange} />

        <div className="space-y-8">
          {filteredStaff.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredStaff.map((staff) => (
                <StaffProfileCard
                  key={staff.id}
                  id={staff.id}
                  name={staff.name}
                  position={staff.position}
                  department={staff.department}
                  degree={staff.degree}
                  email={staff.email}
                  phone={staff.phone}
                  office={staff.office}
                  image={staff.image}
                  researchAreas={staff.researchAreas}
                  courses={staff.courses}
                  publications={staff.publications}
                  featured={staff.featured}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border bg-white p-8 text-center">
              <p className="text-lg text-muted-foreground">Không tìm thấy giảng viên phù hợp với tiêu chí tìm kiếm.</p>
            </div>
          )}
        </div>
      </Section>
    </Container>
  )
}
