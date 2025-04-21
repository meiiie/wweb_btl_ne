/**
 * Thông tin liên hệ của khoa
 */
export const CONTACT_INFO = {
  address: "Phòng 116B - Nhà A1, Trường Đại học Hàng hải Việt Nam, 484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng",
  phone: "(0225) 3829 109",
  email: "fit@vimaru.edu.vn",
  workingHours: "Thứ Hai - Thứ Sáu: 7:30 - 17:00",
}

/**
 * Các đường dẫn chính trong website
 */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/gioi-thieu",
  EDUCATION: "/dao-tao",
  RESEARCH: "/nghien-cuu",
  FACULTY: "/giang-vien",
  NEWS: "/tin-tuc-su-kien",
  STUDENT: "/sinh-vien",
  CONTACT: "/lien-he",
}

/**
 * Các mạng xã hội của khoa
 */
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
}

/**
 * Các chương trình đào tạo
 */
export const EDUCATION_PROGRAMS = [
  {
    id: 1,
    title: "Công nghệ thông tin",
    code: "7480201",
    level: "Đại học",
    duration: "4 năm",
    description:
      "Chương trình đào tạo kỹ sư CNTT toàn diện với kiến thức nền tảng và chuyên sâu về công nghệ thông tin.",
    image: "/images/programs/cntt.jpg",
    link: "/dao-tao/chuong-trinh/cntt",
  },
  {
    id: 2,
    title: "Kỹ thuật phần mềm",
    code: "7480103",
    level: "Đại học",
    duration: "4 năm",
    description: "Đào tạo chuyên sâu về phát triển, kiểm thử và bảo trì phần mềm theo chuẩn quốc tế.",
    image: "/images/programs/ktpm.jpg",
    link: "/dao-tao/chuong-trinh/ktpm",
  },
  {
    id: 3,
    title: "Hệ thống thông tin",
    code: "7480104",
    level: "Đại học",
    duration: "4 năm",
    description: "Trang bị kiến thức về thiết kế, xây dựng và quản lý hệ thống thông tin cho doanh nghiệp.",
    image: "/images/programs/httt.jpg",
    link: "/dao-tao/chuong-trinh/httt",
  },
  {
    id: 4,
    title: "Trí tuệ nhân tạo",
    code: "7480207",
    level: "Đại học",
    duration: "4 năm",
    description: "Chương trình đào tạo hiện đại về AI, Machine Learning và ứng dụng trong các lĩnh vực.",
    image: "/images/programs/ttnt.jpg",
    link: "/dao-tao/chuong-trinh/ttnt",
  },
]
