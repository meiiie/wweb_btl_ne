import { Container } from "@/components/ui/container"
import { StaffDetail } from "@/components/doi-ngu/staff-detail"
import { notFound } from "next/navigation"

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API
const staffData = {
  "nguyen-van-a": {
    name: "PGS.TS. Nguyễn Văn A",
    position: "Trưởng khoa",
    department: "Bộ môn Khoa học máy tính",
    degree: "PGS.TS",
    email: "nguyenvana@vimaru.edu.vn",
    phone: "0123456789",
    office: "Phòng 305, Nhà A1",
    image: "/placeholder.svg?height=400&width=300",
    bio: "PGS.TS. Nguyễn Văn A có hơn 20 năm kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực Công nghệ thông tin. Ông đã công bố hơn 50 bài báo khoa học trên các tạp chí quốc tế uy tín và tham gia nhiều dự án nghiên cứu cấp nhà nước. Ông tốt nghiệp Tiến sĩ tại Đại học Quốc gia Hà Nội và đã có thời gian nghiên cứu sau tiến sĩ tại Đại học Stanford, Hoa Kỳ.",
    education: [
      "Tiến sĩ Khoa học máy tính, Đại học Quốc gia Hà Nội, 2005",
      "Thạc sĩ Khoa học máy tính, Đại học Bách Khoa Hà Nội, 2000",
      "Cử nhân Toán - Tin, Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội, 1998",
    ],
    researchAreas: ["Trí tuệ nhân tạo", "Học máy", "Khai phá dữ liệu", "Xử lý ngôn ngữ tự nhiên"],
    courses: ["Trí tuệ nhân tạo", "Học máy", "Khai phá dữ liệu", "Lập trình Python", "Nhập môn Khoa học dữ liệu"],
    publications: [
      {
        title: "A Novel Approach to Deep Learning for Natural Language Processing",
        journal: "IEEE Transactions on Neural Networks and Learning Systems",
        year: 2022,
        authors: "Nguyễn Văn A, John Smith, Maria Garcia",
        url: "#",
      },
      {
        title: "Improving Recommendation Systems with Hybrid Deep Learning Models",
        journal: "ACM Transactions on Information Systems",
        year: 2021,
        authors: "Nguyễn Văn A, David Johnson, Sarah Lee",
        url: "#",
      },
      {
        title: "Data Mining Techniques for Educational Data Analysis",
        journal: "International Journal of Educational Technology",
        year: 2020,
        authors: "Nguyễn Văn A, Trần Thị B, Lê Văn C",
        url: "#",
      },
    ],
    projects: [
      {
        title: "Phát triển hệ thống gợi ý thông minh cho thương mại điện tử",
        year: "2020-2022",
        role: "Chủ nhiệm đề tài",
      },
      {
        title: "Ứng dụng học máy trong phân tích dữ liệu y tế",
        year: "2018-2020",
        role: "Chủ nhiệm đề tài",
      },
      {
        title: "Xây dựng hệ thống hỗ trợ ra quyết định cho nông nghiệp thông minh",
        year: "2016-2018",
        role: "Thành viên chính",
      },
    ],
    awards: [
      {
        title: "Giảng viên xuất sắc cấp Trường",
        year: "2021",
      },
      {
        title: "Nhà khoa học tiêu biểu",
        year: "2019",
      },
      {
        title: "Bằng khen của Bộ Giáo dục và Đào tạo",
        year: "2018",
      },
    ],
    website: "https://scholar.google.com",
    joinDate: "09/2005",
  },
  "tran-thi-b": {
    name: "TS. Trần Thị B",
    position: "Phó Trưởng khoa",
    department: "Bộ môn Hệ thống thông tin",
    degree: "TS",
    email: "tranthib@vimaru.edu.vn",
    phone: "0123456788",
    office: "Phòng 306, Nhà A1",
    image: "/placeholder.svg?height=400&width=300",
    bio: "TS. Trần Thị B tốt nghiệp Tiến sĩ tại Đại học Quốc gia Hà Nội, chuyên ngành Hệ thống thông tin. Bà có nhiều năm kinh nghiệm trong lĩnh vực Cơ sở dữ liệu và Phân tích dữ liệu lớn, đã hướng dẫn nhiều sinh viên đạt giải trong các cuộc thi quốc gia và quốc tế.",
    education: [
      "Tiến sĩ Hệ thống thông tin, Đại học Quốc gia Hà Nội, 2010",
      "Thạc sĩ Công nghệ thông tin, Đại học Bách Khoa Hà Nội, 2005",
      "Cử nhân Công nghệ thông tin, Đại học Bách Khoa Hà Nội, 2003",
    ],
    researchAreas: ["Hệ thống thông tin", "Cơ sở dữ liệu", "Phân tích dữ liệu lớn", "Kho dữ liệu"],
    courses: ["Cơ sở dữ liệu", "Hệ quản trị cơ sở dữ liệu", "Kho dữ liệu và OLAP", "Phân tích dữ liệu lớn"],
    publications: [
      {
        title: "Big Data Analytics for Smart Healthcare Systems",
        journal: "Journal of Big Data",
        year: 2021,
        authors: "Trần Thị B, Nguyễn Văn A, Robert Chen",
        url: "#",
      },
      {
        title: "A Comprehensive Survey on Data Warehousing Techniques",
        journal: "ACM Computing Surveys",
        year: 2020,
        authors: "Trần Thị B, Michael Brown",
        url: "#",
      },
      {
        title: "Optimizing Database Queries for Educational Information Systems",
        journal: "International Journal of Database Management Systems",
        year: 2019,
        authors: "Trần Thị B, Lê Văn C",
        url: "#",
      },
    ],
    projects: [
      {
        title: "Xây dựng hệ thống phân tích dữ liệu lớn cho y tế",
        year: "2019-2021",
        role: "Chủ nhiệm đề tài",
      },
      {
        title: "Phát triển kho dữ liệu cho hệ thống quản lý đào tạo",
        year: "2017-2019",
        role: "Chủ nhiệm đề tài",
      },
    ],
    awards: [
      {
        title: "Giảng viên xuất sắc cấp Khoa",
        year: "2020",
      },
      {
        title: "Bằng khen của Hiệu trưởng",
        year: "2018",
      },
    ],
    website: "https://scholar.google.com",
    joinDate: "06/2010",
  },
}

export default function GiangVienDetailPage({ params }: { params: { id: string } }) {
  const staff = staffData[params.id]

  if (!staff) {
    notFound()
  }

  return (
    <Container className="py-12">
      <StaffDetail {...staff} />
    </Container>
  )
}
