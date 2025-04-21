import { JsonLD } from "@/components/seo/json-ld"
import {
  generateCourseSchema,
  generateTeacherSchema,
  generateDepartmentSchema,
  generateResearchProjectSchema,
} from "@/components/seo/schema-generators"

/**
 * Ví dụ sử dụng JSON-LD cho trang chương trình đào tạo
 */
export function CourseSchemaExample() {
  const program = {
    title: "Công nghệ thông tin",
    code: "7480201",
    level: "Đại học",
    duration: "4 năm",
    description:
      "Chương trình đào tạo kỹ sư CNTT toàn diện với kiến thức nền tảng và chuyên sâu về công nghệ thông tin.",
    image: "/images/programs/cntt.jpg",
    link: "/dao-tao/chuong-trinh/cntt",
    objectives: [
      "Đào tạo kỹ sư có kiến thức chuyên sâu về công nghệ thông tin",
      "Phát triển kỹ năng thực hành và giải quyết vấn đề",
      "Trang bị khả năng nghiên cứu và học tập suốt đời",
    ],
    skills: [
      "Lập trình và phát triển phần mềm",
      "Phân tích và thiết kế hệ thống",
      "Quản lý dự án công nghệ thông tin",
      "Làm việc nhóm và giao tiếp hiệu quả",
    ],
    requirements: ["Tốt nghiệp THPT hoặc tương đương", "Điểm thi đại học đạt ngưỡng xét tuyển"],
    subjects: [
      { name: "Nhập môn lập trình", credits: 3 },
      { name: "Cấu trúc dữ liệu và giải thuật", credits: 4 },
      { name: "Cơ sở dữ liệu", credits: 3 },
      { name: "Mạng máy tính", credits: 3 },
    ],
  }

  // Cách 1: Sử dụng component JsonLD
  return <JsonLD type="Course" data={program} />

  // Cách 2: Sử dụng hàm tạo schema và thêm trực tiếp vào trang
  const courseSchema = generateCourseSchema(program)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
}

/**
 * Ví dụ sử dụng JSON-LD cho trang giảng viên
 */
export function TeacherSchemaExample() {
  const teacher = {
    name: "PGS.TS. Nguyễn Văn A",
    position: "Trưởng khoa",
    department: "Khoa Công nghệ Thông tin",
    email: "nguyenvana@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
    image: "/placeholder.svg?height=300&width=300",
    link: "/giang-vien/nguyen-van-a",
    research: ["Trí tuệ nhân tạo", "Học máy", "Khai phá dữ liệu", "Xử lý ngôn ngữ tự nhiên"],
    education: [
      "Tiến sĩ Khoa học Máy tính, Đại học Quốc gia Hà Nội, 2005",
      "Thạc sĩ Công nghệ thông tin, Đại học Bách khoa Hà Nội, 2000",
      "Kỹ sư Công nghệ thông tin, Đại học Bách khoa Hà Nội, 1998",
    ],
    publications: [
      {
        title: "A Novel Approach for Traffic Congestion Detection Using Deep Learning and IoT Sensors",
        url: "/nghien-cuu/cong-bo-khoa-hoc/traffic-congestion-detection",
        date: "2023-05-15",
      },
      {
        title: "Improving Healthcare Diagnosis Accuracy with Ensemble Deep Learning Models",
        url: "/nghien-cuu/cong-bo-khoa-hoc/healthcare-diagnosis",
        date: "2022-08-20",
      },
    ],
    awards: ["Giải thưởng Nhà giáo xuất sắc năm 2020", "Bằng khen của Bộ Giáo dục và Đào tạo năm 2018"],
  }

  const teacherSchema = generateTeacherSchema(teacher)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teacherSchema) }} />
}

/**
 * Ví dụ sử dụng JSON-LD cho trang bộ môn
 */
export function DepartmentSchemaExample() {
  const department = {
    name: "Bộ môn Khoa học máy tính",
    description:
      "Bộ môn Khoa học máy tính thuộc Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam, chuyên đào tạo và nghiên cứu về các lĩnh vực thuật toán, trí tuệ nhân tạo, học máy và xử lý ngôn ngữ tự nhiên.",
    url: "/giang-vien/bo-mon/khmt",
    head: {
      name: "TS. Lê Văn C",
      url: "/giang-vien/le-van-c",
    },
    members: 15,
    courses: [
      "Cấu trúc dữ liệu và giải thuật",
      "Trí tuệ nhân tạo",
      "Học máy",
      "Xử lý ngôn ngữ tự nhiên",
      "Thị giác máy tính",
    ],
    researchAreas: ["Trí tuệ nhân tạo", "Học máy", "Xử lý ngôn ngữ tự nhiên", "Thị giác máy tính", "Khai phá dữ liệu"],
  }

  const departmentSchema = generateDepartmentSchema(department)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(departmentSchema) }} />
}

/**
 * Ví dụ sử dụng JSON-LD cho trang đề tài nghiên cứu
 */
export function ResearchProjectSchemaExample() {
  const project = {
    title: "Xây dựng hệ thống giám sát và điều khiển giao thông thông minh ứng dụng AI và IoT",
    description:
      "Đề tài nghiên cứu và phát triển hệ thống giám sát và điều khiển giao thông thông minh dựa trên công nghệ AI và IoT, nhằm giảm thiểu tình trạng ùn tắc giao thông và tai nạn giao thông tại các nút giao thông phức tạp.",
    url: "/nghien-cuu/de-tai/giao-thong-thong-minh",
    leader: {
      name: "PGS.TS. Nguyễn Văn A",
      url: "/giang-vien/nguyen-van-a",
    },
    members: ["TS. Trần Thị B", "ThS. Lê Văn C", "ThS. Phạm Thị D"],
    startDate: "2022-01-01",
    endDate: "2024-12-31",
    status: "Đang thực hiện",
    keywords: ["Trí tuệ nhân tạo", "Internet vạn vật", "Giao thông thông minh", "Xử lý ảnh", "Học sâu"],
    publications: [
      {
        title: "A Novel Approach for Traffic Congestion Detection Using Deep Learning and IoT Sensors",
        url: "/nghien-cuu/cong-bo-khoa-hoc/traffic-congestion-detection",
      },
      {
        title: "Real-time Vehicle Detection and Classification for Smart Traffic Management",
        url: "/nghien-cuu/cong-bo-khoa-hoc/vehicle-detection-classification",
      },
    ],
  }

  const researchProjectSchema = generateResearchProjectSchema(project)
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(researchProjectSchema) }} />
  )
}
