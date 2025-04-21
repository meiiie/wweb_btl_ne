export const EDUCATION_PROGRAMS = [
  {
    id: 1,
    title: "Công nghệ thông tin",
    code: "7480201",
    level: "Đại học",
    duration: "4 năm",
    description:
      "Chương trình đào tạo ngành Công nghệ thông tin cung cấp kiến thức và kỹ năng về phát triển phần mềm, quản lý dữ liệu, mạng máy tính, trí tuệ nhân tạo và các công nghệ hiện đại khác.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/dao-tao/chuong-trinh/cong-nghe-thong-tin",
    slug: "cong-nghe-thong-tin",
  },
  {
    id: 2,
    title: "Công nghệ phần mềm",
    code: "7480103",
    level: "Đại học",
    duration: "4 năm",
    description:
      "Chương trình đào tạo ngành Công nghệ phần mềm tập trung vào quy trình phát triển phần mềm, kiểm thử, đảm bảo chất lượng và quản lý dự án phần mềm.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/dao-tao/chuong-trinh/cong-nghe-phan-mem",
    slug: "cong-nghe-phan-mem",
  },
  {
    id: 3,
    title: "Hệ thống thông tin",
    code: "7480104",
    level: "Đại học",
    duration: "4 năm",
    description:
      "Chương trình đào tạo ngành Hệ thống thông tin cung cấp kiến thức về phân tích, thiết kế, xây dựng và quản lý hệ thống thông tin trong tổ chức.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/dao-tao/chuong-trinh/he-thong-thong-tin",
    slug: "he-thong-thong-tin",
  },
  {
    id: 4,
    title: "Kỹ thuật máy tính",
    code: "7480106",
    level: "Đại học",
    duration: "4 năm",
    description:
      "Chương trình đào tạo ngành Kỹ thuật máy tính tập trung vào thiết kế và phát triển phần cứng, hệ thống nhúng, IoT và các hệ thống máy tính.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/dao-tao/chuong-trinh/ky-thuat-may-tinh",
    slug: "ky-thuat-may-tinh",
  },
]

// Export alias for backward compatibility
export const PROGRAMS = EDUCATION_PROGRAMS

export const EDUCATION_SYSTEMS = [
  {
    id: 1,
    title: "Đại học chính quy",
    description: "Hệ đào tạo đại học chính quy với thời gian 4 năm (8 học kỳ) dành cho học sinh tốt nghiệp THPT.",
    features: [
      "Thời gian đào tạo: 4 năm",
      "Hình thức: Toàn thời gian",
      "Văn bằng: Cử nhân/Kỹ sư",
      "Đối tượng: Học sinh tốt nghiệp THPT",
    ],
  },
  {
    id: 2,
    title: "Đại học liên thông",
    description: "Hệ đào tạo liên thông từ cao đẳng lên đại học, thời gian đào tạo 1.5-2 năm tùy theo chuyên ngành.",
    features: [
      "Thời gian đào tạo: 1.5-2 năm",
      "Hình thức: Vừa làm vừa học",
      "Văn bằng: Cử nhân/Kỹ sư",
      "Đối tượng: Người đã tốt nghiệp cao đẳng",
    ],
  },
  {
    id: 3,
    title: "Thạc sĩ",
    description: "Chương trình đào tạo thạc sĩ chuyên ngành Công nghệ thông tin với thời gian 1.5-2 năm.",
    features: [
      "Thời gian đào tạo: 1.5-2 năm",
      "Hình thức: Tập trung/Bán tập trung",
      "Văn bằng: Thạc sĩ",
      "Đối tượng: Người đã tốt nghiệp đại học",
    ],
  },
  {
    id: 4,
    title: "Tiến sĩ",
    description: "Chương trình đào tạo tiến sĩ chuyên ngành Công nghệ thông tin với thời gian 3-4 năm.",
    features: [
      "Thời gian đào tạo: 3-4 năm",
      "Hình thức: Nghiên cứu",
      "Văn bằng: Tiến sĩ",
      "Đối tượng: Người đã tốt nghiệp thạc sĩ",
    ],
  },
]

export const COURSES = [
  {
    id: 1,
    code: "IT1010",
    title: "Nhập môn Công nghệ thông tin",
    credits: 3,
    description:
      "Môn học cung cấp các kiến thức cơ bản về công nghệ thông tin, máy tính, mạng máy tính và các ứng dụng của công nghệ thông tin trong đời sống và khoa học kỹ thuật.",
    slug: "nhap-mon-cong-nghe-thong-tin",
  },
  {
    id: 2,
    code: "IT2020",
    title: "Cấu trúc dữ liệu và giải thuật",
    credits: 4,
    description:
      "Môn học trình bày các cấu trúc dữ liệu cơ bản và nâng cao, các giải thuật xử lý trên các cấu trúc dữ liệu và phân tích độ phức tạp của giải thuật.",
    slug: "cau-truc-du-lieu-va-giai-thuat",
  },
  {
    id: 3,
    code: "IT3030",
    title: "Cơ sở dữ liệu",
    credits: 4,
    description:
      "Môn học cung cấp các kiến thức về mô hình dữ liệu, thiết kế cơ sở dữ liệu, ngôn ngữ truy vấn SQL và quản trị hệ quản trị cơ sở dữ liệu.",
    slug: "co-so-du-lieu",
  },
  {
    id: 4,
    code: "IT3040",
    title: "Lập trình hướng đối tượng",
    credits: 3,
    description:
      "Môn học trình bày các khái niệm, nguyên lý và kỹ thuật lập trình hướng đối tượng, áp dụng vào việc phát triển các ứng dụng phần mềm.",
    slug: "lap-trinh-huong-doi-tuong",
  },
  {
    id: 5,
    code: "IT4050",
    title: "Trí tuệ nhân tạo",
    credits: 3,
    description:
      "Môn học giới thiệu các khái niệm cơ bản về trí tuệ nhân tạo, các phương pháp giải quyết vấn đề, biểu diễn tri thức và học máy.",
    slug: "tri-tue-nhan-tao",
  },
  {
    id: 6,
    code: "IT4060",
    title: "Mạng máy tính",
    credits: 4,
    description:
      "Môn học cung cấp kiến thức về kiến trúc mạng, các giao thức mạng, thiết kế và quản trị mạng máy tính.",
    slug: "mang-may-tinh",
  },
]

export const DOCUMENTS = [
  {
    id: 1,
    title: "Quy chế đào tạo đại học",
    description: "Quy chế đào tạo trình độ đại học của Trường Đại học Hàng hải Việt Nam",
    fileUrl: "/dao-tao/tai-lieu/quy-che-dao-tao.pdf",
    fileType: "pdf",
    fileSize: "2.5 MB",
    uploadDate: "15/08/2023",
  },
  {
    id: 2,
    title: "Mẫu đơn dành cho sinh viên",
    description: "Tập hợp các mẫu đơn dành cho sinh viên Khoa Công nghệ thông tin",
    fileUrl: "/dao-tao/tai-lieu/mau-don.docx",
    fileType: "docx",
    fileSize: "1.2 MB",
    uploadDate: "10/09/2023",
  },
  {
    id: 3,
    title: "Chương trình khung ngành CNTT",
    description: "Chương trình khung đào tạo ngành Công nghệ thông tin hệ đại học chính quy",
    fileUrl: "/dao-tao/tai-lieu/chuong-trinh-khung-cntt.pdf",
    fileType: "pdf",
    fileSize: "3.8 MB",
    uploadDate: "05/07/2023",
  },
  {
    id: 4,
    title: "Hướng dẫn làm đồ án tốt nghiệp",
    description: "Hướng dẫn chi tiết quy trình thực hiện đồ án tốt nghiệp dành cho sinh viên năm cuối",
    fileUrl: "/dao-tao/tai-lieu/huong-dan-do-an.pdf",
    fileType: "pdf",
    fileSize: "4.2 MB",
    uploadDate: "20/10/2023",
  },
  {
    id: 5,
    title: "Lịch thi học kỳ 1 năm học 2023-2024",
    description: "Lịch thi kết thúc học phần học kỳ 1 năm học 2023-2024 của Khoa CNTT",
    fileUrl: "/dao-tao/tai-lieu/lich-thi-hk1-2023-2024.xlsx",
    fileType: "xlsx",
    fileSize: "1.8 MB",
    uploadDate: "01/11/2023",
  },
  {
    id: 6,
    title: "Tài liệu hướng dẫn sử dụng LMS",
    description: "Hướng dẫn sử dụng hệ thống quản lý học tập (LMS) dành cho sinh viên và giảng viên Khoa CNTT",
    fileUrl: "/dao-tao/tai-lieu/huong-dan-lms.pdf",
    fileType: "pdf",
    fileSize: "5.1 MB",
    uploadDate: "15/09/2023",
  },
]
