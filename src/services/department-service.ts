// Dữ liệu mẫu cho các bộ môn
// Trong thực tế, dữ liệu này sẽ được lấy từ API

interface Staff {
  id: number
  name: string
  degree?: string
  position: string
  email?: string
  phone?: string
  image: string
  slug: string
  researchAreas?: string[]
  courses?: string[]
  featured?: boolean
}

interface Course {
  id: number
  code: string
  name: string
  credits: number
  semester?: string
  description?: string
  link: string
}

interface Lab {
  id: number
  name: string
  description: string
  image: string
  location: string
  manager?: string
  link: string
}

interface Achievement {
  id: number
  title: string
  description: string
  year: string
  type: "award" | "project" | "publication"
  participants?: string[]
}

export interface Department {
  id: number
  name: string
  slug: string
  head: string
  shortDescription: string
  description: string
  image: string
  contactInfo: {
    email: string
    phone: string
    address: string
    workingHours: string
  }
  staff: Staff[]
  courses: Course[]
  labs: Lab[]
  researchAreas: string[]
  achievements: Achievement[]
}

// Dữ liệu mẫu
const departments: Department[] = [
  {
    id: 1,
    name: "Bộ môn Khoa học máy tính",
    slug: "khoa-hoc-may-tinh",
    head: "PGS.TS. Nguyễn Văn A",
    shortDescription:
      "Bộ môn Khoa học máy tính đảm nhận giảng dạy các môn học liên quan đến lập trình, cấu trúc dữ liệu và giải thuật, trí tuệ nhân tạo, và các lĩnh vực nền tảng của khoa học máy tính.",
    description:
      "Bộ môn Khoa học máy tính là một trong những bộ môn lâu đời nhất của Khoa CNTT, được thành lập từ năm 1995. Bộ môn đảm nhận giảng dạy các môn học nền tảng trong chương trình đào tạo ngành Công nghệ thông tin và các ngành liên quan. Các giảng viên của bộ môn có trình độ chuyên môn cao, nhiều kinh nghiệm trong giảng dạy và nghiên cứu khoa học.\n\nCác hướng nghiên cứu chính của bộ môn bao gồm: Trí tuệ nhân tạo, Học máy, Xử lý ngôn ngữ tự nhiên, Thị giác máy tính, Tối ưu hóa và Thuật toán.",
    image: "/placeholder.svg?height=400&width=600",
    contactInfo: {
      email: "cs@vimaru.edu.vn",
      phone: "(+84) 225 3829 109",
      address: "Phòng 201, Nhà A1, Trường Đại học Hàng hải Việt Nam",
      workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:00",
    },
    staff: [
      {
        id: 1,
        name: "PGS.TS. Nguyễn Văn A",
        degree: "Tiến sĩ",
        position: "Trưởng bộ môn",
        email: "anv@vimaru.edu.vn",
        phone: "(+84) 912 345 678",
        image: "/placeholder.svg?height=300&width=200",
        slug: "nguyen-van-a",
        researchAreas: ["Trí tuệ nhân tạo", "Học máy", "Thị giác máy tính"],
        courses: ["Nhập môn lập trình", "Cấu trúc dữ liệu và giải thuật", "Trí tuệ nhân tạo"],
        featured: true,
      },
      {
        id: 2,
        name: "TS. Trần Thị B",
        degree: "Tiến sĩ",
        position: "Giảng viên",
        email: "btt@vimaru.edu.vn",
        phone: "(+84) 987 654 321",
        image: "/placeholder.svg?height=300&width=200",
        slug: "tran-thi-b",
        researchAreas: ["Xử lý ngôn ngữ tự nhiên", "Học sâu", "Khai phá dữ liệu"],
        courses: ["Xử lý ngôn ngữ tự nhiên", "Học máy", "Khai phá dữ liệu"],
      },
      {
        id: 3,
        name: "ThS. Lê Văn C",
        degree: "Thạc sĩ",
        position: "Giảng viên",
        email: "clv@vimaru.edu.vn",
        phone: "(+84) 912 345 679",
        image: "/placeholder.svg?height=300&width=200",
        slug: "le-van-c",
        researchAreas: ["Thuật toán", "Tối ưu hóa", "Lập trình"],
        courses: ["Lập trình Python", "Thuật toán nâng cao", "Lập trình hướng đối tượng"],
      },
    ],
    courses: [
      {
        id: 1,
        code: "CS101",
        name: "Nhập môn lập trình",
        credits: 3,
        semester: "1",
        description: "Môn học giới thiệu các khái niệm cơ bản về lập trình, cấu trúc điều khiển, hàm, mảng...",
        link: "/dao-tao/mon-hoc/nhap-mon-lap-trinh",
      },
      {
        id: 2,
        code: "CS201",
        name: "Cấu trúc dữ liệu và giải thuật",
        credits: 4,
        semester: "3",
        description: "Môn học trình bày các cấu trúc dữ liệu cơ bản và các giải thuật xử lý trên chúng.",
        link: "/dao-tao/mon-hoc/cau-truc-du-lieu-va-giai-thuat",
      },
      {
        id: 3,
        code: "CS401",
        name: "Trí tuệ nhân tạo",
        credits: 3,
        semester: "5",
        description: "Môn học giới thiệu các khái niệm và kỹ thuật cơ bản trong lĩnh vực trí tuệ nhân tạo.",
        link: "/dao-tao/mon-hoc/tri-tue-nhan-tao",
      },
    ],
    labs: [
      {
        id: 1,
        name: "Phòng thí nghiệm Trí tuệ nhân tạo",
        description:
          "Phòng thí nghiệm được trang bị các máy tính hiệu năng cao, GPU, và các thiết bị chuyên dụng cho nghiên cứu và phát triển các ứng dụng AI.",
        image: "/placeholder.svg?height=300&width=500",
        location: "Phòng 305, Nhà A1",
        manager: "PGS.TS. Nguyễn Văn A",
        link: "/bo-mon/phong-thi-nghiem/tri-tue-nhan-tao",
      },
    ],
    researchAreas: [
      "Trí tuệ nhân tạo và Học máy",
      "Thị giác máy tính",
      "Xử lý ngôn ngữ tự nhiên",
      "Khai phá dữ liệu",
      "Thuật toán và Tối ưu hóa",
    ],
    achievements: [
      {
        id: 1,
        title: "Giải thưởng Nghiên cứu khoa học xuất sắc cấp Trường",
        description: "Đề tài nghiên cứu về ứng dụng học máy trong dự báo thời tiết hàng hải",
        year: "2022",
        type: "award",
        participants: ["PGS.TS. Nguyễn Văn A", "TS. Trần Thị B", "ThS. Lê Văn C"],
      },
      {
        id: 2,
        title: "Dự án Phát triển hệ thống nhận dạng tàu thuyền tự động",
        description:
          "Dự án hợp tác với Cục Hàng hải Việt Nam nhằm phát triển hệ thống nhận dạng tàu thuyền tự động dựa trên công nghệ thị giác máy tính",
        year: "2021-2023",
        type: "project",
        participants: ["PGS.TS. Nguyễn Văn A", "TS. Trần Thị B"],
      },
    ],
  },
  {
    id: 2,
    name: "Bộ môn Hệ thống thông tin",
    slug: "he-thong-thong-tin",
    head: "TS. Phạm Văn D",
    shortDescription:
      "Bộ môn Hệ thống thông tin chuyên về các lĩnh vực liên quan đến cơ sở dữ liệu, phân tích và thiết kế hệ thống, hệ thống thông tin quản lý, và các ứng dụng CNTT trong doanh nghiệp.",
    description:
      "Bộ môn Hệ thống thông tin được thành lập năm 2000, là một trong những bộ môn chủ chốt của Khoa CNTT. Bộ môn đảm nhận giảng dạy các môn học liên quan đến cơ sở dữ liệu, hệ thống thông tin, phân tích và thiết kế hệ thống, và các ứng dụng CNTT trong quản lý và kinh doanh.\n\nCác hướng nghiên cứu chính của bộ môn bao gồm: Cơ sở dữ liệu tiên tiến, Kho dữ liệu và Khai phá dữ liệu, Hệ thống thông tin doanh nghiệp, Phân tích dữ liệu lớn, và Ứng dụng CNTT trong lĩnh vực hàng hải.",
    image: "/placeholder.svg?height=400&width=600",
    contactInfo: {
      email: "is@vimaru.edu.vn",
      phone: "(+84) 225 3829 110",
      address: "Phòng 202, Nhà A1, Trường Đại học Hàng hải Việt Nam",
      workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:00",
    },
    staff: [
      {
        id: 4,
        name: "TS. Phạm Văn D",
        degree: "Tiến sĩ",
        position: "Trưởng bộ môn",
        email: "dpv@vimaru.edu.vn",
        phone: "(+84) 912 345 680",
        image: "/placeholder.svg?height=300&width=200",
        slug: "pham-van-d",
        researchAreas: ["Cơ sở dữ liệu", "Kho dữ liệu", "Phân tích dữ liệu lớn"],
        courses: ["Cơ sở dữ liệu", "Kho dữ liệu và OLAP", "Phân tích dữ liệu lớn"],
        featured: true,
      },
      {
        id: 5,
        name: "ThS. Hoàng Thị E",
        degree: "Thạc sĩ",
        position: "Giảng viên",
        email: "eth@vimaru.edu.vn",
        phone: "(+84) 987 654 322",
        image: "/placeholder.svg?height=300&width=200",
        slug: "hoang-thi-e",
        researchAreas: ["Hệ thống thông tin doanh nghiệp", "ERP", "Thương mại điện tử"],
        courses: ["Hệ thống thông tin quản lý", "ERP", "Thương mại điện tử"],
      },
    ],
    courses: [
      {
        id: 4,
        code: "IS201",
        name: "Cơ sở dữ liệu",
        credits: 4,
        semester: "3",
        description: "Môn học trình bày các khái niệm cơ bản về cơ sở dữ liệu, mô hình dữ liệu, ngôn ngữ SQL...",
        link: "/dao-tao/mon-hoc/co-so-du-lieu",
      },
      {
        id: 5,
        code: "IS301",
        name: "Phân tích và thiết kế hệ thống",
        credits: 3,
        semester: "5",
        description: "Môn học giới thiệu các phương pháp và kỹ thuật phân tích, thiết kế hệ thống thông tin.",
        link: "/dao-tao/mon-hoc/phan-tich-va-thiet-ke-he-thong",
      },
    ],
    labs: [
      {
        id: 2,
        name: "Phòng thí nghiệm Cơ sở dữ liệu và Hệ thống thông tin",
        description:
          "Phòng thí nghiệm được trang bị các máy chủ, hệ thống lưu trữ và các phần mềm chuyên dụng cho nghiên cứu và phát triển các ứng dụng cơ sở dữ liệu và hệ thống thông tin.",
        image: "/placeholder.svg?height=300&width=500",
        location: "Phòng 306, Nhà A1",
        manager: "TS. Phạm Văn D",
        link: "/bo-mon/phong-thi-nghiem/co-so-du-lieu-va-he-thong-thong-tin",
      },
    ],
    researchAreas: [
      "Cơ sở dữ liệu tiên tiến",
      "Kho dữ liệu và Khai phá dữ liệu",
      "Hệ thống thông tin doanh nghiệp",
      "Phân tích dữ liệu lớn",
      "Ứng dụng CNTT trong lĩnh vực hàng hải",
    ],
    achievements: [
      {
        id: 3,
        title: "Công bố quốc tế về mô hình dữ liệu cho hệ thống quản lý cảng biển",
        description: "Bài báo được đăng trên tạp chí quốc tế uy tín về mô hình dữ liệu cho hệ thống quản lý cảng biển",
        year: "2022",
        type: "publication",
        participants: ["TS. Phạm Văn D", "ThS. Hoàng Thị E"],
      },
    ],
  },
  {
    id: 3,
    name: "Bộ môn Kỹ thuật máy tính",
    slug: "ky-thuat-may-tinh",
    head: "PGS.TS. Lý Văn F",
    shortDescription:
      "Bộ môn Kỹ thuật máy tính chuyên về các lĩnh vực liên quan đến kiến trúc máy tính, mạng máy tính, hệ điều hành, IoT, và các hệ thống nhúng.",
    description:
      "Bộ môn Kỹ thuật máy tính được thành lập năm 2005, chuyên về các lĩnh vực liên quan đến phần cứng, mạng máy tính và các hệ thống nhúng. Bộ môn đảm nhận giảng dạy các môn học liên quan đến kiến trúc máy tính, mạng máy tính, hệ điều hành, IoT, và các hệ thống nhúng.\n\nCác hướng nghiên cứu chính của bộ môn bao gồm: Mạng máy tính và An toàn thông tin, Internet of Things (IoT), Hệ thống nhúng, Điện toán đám mây, và Ứng dụng CNTT trong giao thông và hàng hải.",
    image: "/placeholder.svg?height=400&width=600",
    contactInfo: {
      email: "ce@vimaru.edu.vn",
      phone: "(+84) 225 3829 111",
      address: "Phòng 203, Nhà A1, Trường Đại học Hàng hải Việt Nam",
      workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:00",
    },
    staff: [
      {
        id: 6,
        name: "PGS.TS. Lý Văn F",
        degree: "Tiến sĩ",
        position: "Trưởng bộ môn",
        email: "flv@vimaru.edu.vn",
        phone: "(+84) 912 345 681",
        image: "/placeholder.svg?height=300&width=200",
        slug: "ly-van-f",
        researchAreas: ["Mạng máy tính", "An toàn thông tin", "Điện toán đám mây"],
        courses: ["Mạng máy tính", "An toàn thông tin", "Điện toán đám mây"],
        featured: true,
      },
      {
        id: 7,
        name: "TS. Ngô Thị G",
        degree: "Tiến sĩ",
        position: "Giảng viên",
        email: "gnt@vimaru.edu.vn",
        phone: "(+84) 987 654 323",
        image: "/placeholder.svg?height=300&width=200",
        slug: "ngo-thi-g",
        researchAreas: ["Internet of Things", "Hệ thống nhúng", "Xử lý tín hiệu số"],
        courses: ["Internet of Things", "Hệ thống nhúng", "Xử lý tín hiệu số"],
      },
    ],
    courses: [
      {
        id: 6,
        code: "CE201",
        name: "Mạng máy tính",
        credits: 4,
        semester: "4",
        description: "Môn học trình bày các khái niệm cơ bản về mạng máy tính, các giao thức mạng, và ứng dụng.",
        link: "/dao-tao/mon-hoc/mang-may-tinh",
      },
      {
        id: 7,
        code: "CE301",
        name: "An toàn thông tin",
        credits: 3,
        semester: "5",
        description: "Môn học giới thiệu các khái niệm và kỹ thuật bảo mật thông tin, mã hóa, và an toàn mạng.",
        link: "/dao-tao/mon-hoc/an-toan-thong-tin",
      },
    ],
    labs: [
      {
        id: 3,
        name: "Phòng thí nghiệm Mạng và An toàn thông tin",
        description:
          "Phòng thí nghiệm được trang bị các thiết bị mạng, máy chủ, và các công cụ chuyên dụng cho nghiên cứu và thực hành về mạng máy tính và an toàn thông tin.",
        image: "/placeholder.svg?height=300&width=500",
        location: "Phòng 307, Nhà A1",
        manager: "PGS.TS. Lý Văn F",
        link: "/bo-mon/phong-thi-nghiem/mang-va-an-toan-thong-tin",
      },
    ],
    researchAreas: [
      "Mạng máy tính và An toàn thông tin",
      "Internet of Things (IoT)",
      "Hệ thống nhúng",
      "Điện toán đám mây",
      "Ứng dụng CNTT trong giao thông và hàng hải",
    ],
    achievements: [
      {
        id: 4,
        title: "Dự án Phát triển hệ thống giám sát tàu thuyền thông minh",
        description:
          "Dự án hợp tác với Cảng vụ Hàng hải Hải Phòng nhằm phát triển hệ thống giám sát tàu thuyền thông minh dựa trên công nghệ IoT",
        year: "2021-2023",
        type: "project",
        participants: ["PGS.TS. Lý Văn F", "TS. Ngô Thị G"],
      },
    ],
  },
  {
    id: 4,
    name: "Bộ môn Công nghệ phần mềm",
    slug: "cong-nghe-phan-mem",
    head: "TS. Đỗ Văn H",
    shortDescription:
      "Bộ môn Công nghệ phần mềm chuyên về các lĩnh vực liên quan đến phát triển phần mềm, công nghệ web, ứng dụng di động, và đảm bảo chất lượng phần mềm.",
    description:
      "Bộ môn Công nghệ phần mềm được thành lập năm 2010, là bộ môn trẻ nhất của Khoa CNTT. Bộ môn đảm nhận giảng dạy các môn học liên quan đến phát triển phần mềm, công nghệ web, ứng dụng di động, và đảm bảo chất lượng phần mềm.\n\nCác hướng nghiên cứu chính của bộ môn bao gồm: Công nghệ phần mềm tiên tiến, Phát triển ứng dụng web và di động, Kiểm thử và Đảm bảo chất lượng phần mềm, DevOps, và Ứng dụng CNTT trong giáo dục.",
    image: "/placeholder.svg?height=400&width=600",
    contactInfo: {
      email: "se@vimaru.edu.vn",
      phone: "(+84) 225 3829 112",
      address: "Phòng 204, Nhà A1, Trường Đại học Hàng hải Việt Nam",
      workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:00",
    },
    staff: [
      {
        id: 8,
        name: "TS. Đỗ Văn H",
        degree: "Tiến sĩ",
        position: "Trưởng bộ môn",
        email: "hdv@vimaru.edu.vn",
        phone: "(+84) 912 345 682",
        image: "/placeholder.svg?height=300&width=200",
        slug: "do-van-h",
        researchAreas: ["Công nghệ phần mềm", "DevOps", "Kiểm thử phần mềm"],
        courses: ["Công nghệ phần mềm", "Kiểm thử phần mềm", "DevOps"],
      },
      {
        id: 9,
        name: "ThS. Trịnh Thị I",
        degree: "Thạc sĩ",
        position: "Giảng viên",
        email: "itt@vimaru.edu.vn",
        phone: "(+84) 987 654 324",
        image: "/placeholder.svg?height=300&width=200",
        slug: "trinh-thi-i",
        researchAreas: ["Phát triển ứng dụng web", "Phát triển ứng dụng di động", "UX/UI"],
        courses: ["Lập trình web", "Phát triển ứng dụng di động", "Thiết kế giao diện người dùng"],
        featured: true,
      },
    ],
    courses: [
      {
        id: 8,
        code: "SE201",
        name: "Công nghệ phần mềm",
        credits: 4,
        semester: "4",
        description: "Môn học trình bày các khái niệm, nguyên lý, và kỹ thuật trong quy trình phát triển phần mềm.",
        link: "/dao-tao/mon-hoc/cong-nghe-phan-mem",
      },
      {
        id: 9,
        code: "SE301",
        name: "Lập trình web",
        credits: 3,
        semester: "5",
        description: "Môn học giới thiệu các công nghệ và kỹ thuật phát triển ứng dụng web hiện đại.",
        link: "/dao-tao/mon-hoc/lap-trinh-web",
      },
    ],
    labs: [
      {
        id: 4,
        name: "Phòng thí nghiệm Phát triển phần mềm",
        description:
          "Phòng thí nghiệm được trang bị các máy tính hiệu năng cao và các công cụ phát triển phần mềm hiện đại cho nghiên cứu và thực hành về phát triển phần mềm.",
        image: "/placeholder.svg?height=300&width=500",
        location: "Phòng 308, Nhà A1",
        manager: "TS. Đỗ Văn H",
        link: "/bo-mon/phong-thi-nghiem/phat-trien-phan-mem",
      },
    ],
    researchAreas: [
      "Công nghệ phần mềm tiên tiến",
      "Phát triển ứng dụng web và di động",
      "Kiểm thử và Đảm bảo chất lượng phần mềm",
      "DevOps",
      "Ứng dụng CNTT trong giáo dục",
    ],
    achievements: [
      {
        id: 5,
        title: "Giải thưởng Sản phẩm phần mềm xuất sắc cấp Thành phố",
        description:
          "Phần mềm quản lý đào tạo được phát triển bởi nhóm nghiên cứu của bộ môn đã đạt giải thưởng Sản phẩm phần mềm xuất sắc cấp Thành phố Hải Phòng",
        year: "2023",
        type: "award",
        participants: ["TS. Đỗ Văn H", "ThS. Trịnh Thị I"],
      },
    ],
  },
]

export function getAllDepartments(): Department[] {
  return departments
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((department) => department.slug === slug)
}

export function getAllLabs(): Lab[] {
  return departments.flatMap((department) => department.labs)
}

export function getLabBySlug(slug: string): Lab | undefined {
  const allLabs = getAllLabs()
  // Giả định rằng mỗi lab có một slug được tạo từ tên
  return allLabs.find((lab) => {
    const labSlug = lab.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
    return labSlug === slug
  })
}
