import { GraduationCap } from "lucide-react"

export const navigation = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { name: "Lịch sử phát triển", href: "/gioi-thieu/lich-su" },
      { name: "Tầm nhìn & Tứ mệnh", href: "/gioi-thieu/tam-nhin-su-menh" },
      { name: "Cơ cấu tổ chức", href: "/gioi-thieu/co-cau-to-chuc" },
      { name: "Cơ sở vật chất", href: "/gioi-thieu/co-so-vat-chat" },
    ],
  },
  {
    name: "Đào tạo",
    href: "/dao-tao",
    children: [
      { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
      { name: "Môn học", href: "/dao-tao/mon-hoc" },
      { name: "Tài liệu", href: "/dao-tao/tai-lieu" },
    ],
  },
  {
    name: "Nghiên cứu",
    href: "/nghien-cuu",
    children: [
      { name: "Đề tài nghiên cứu", href: "/nghien-cuu/de-tai" },
      { name: "Công bố khoa học", href: "/nghien-cuu/cong-bo-khoa-hoc" },
      { name: "Ứng dụng hàng hải", href: "/nghien-cuu/ung-dung-hang-hai" },
      { name: "Dự án sinh viên", href: "/nghien-cuu/du-an-sinh-vien" },
    ],
  },
  {
    name: "Đội ngũ",
    href: "/doi-ngu",
    children: [
      { name: "Ban chủ nhiệm", href: "/doi-ngu/ban-chu-nhiem" },
      { name: "Giảng viên", href: "/doi-ngu/giang-vien" },
      { name: "Cán bộ viên chức", href: "/doi-ngu/can-bo-vien-chuc" },
    ],
  },
  {
    name: "Sinh viên",
    href: "/sinh-vien",
    children: [
      { name: "Thông báo", href: "/sinh-vien/thong-bao" },
      { name: "Học tập", href: "/sinh-vien/hoc-tap" },
      { name: "Học bổng", href: "/sinh-vien/hoc-bong" },
      { name: "Hoạt động", href: "/sinh-vien/hoat-dong" },
      { name: "Thực tập", href: "/sinh-vien/thuc-tap" },
      { name: "Cơ hội việc làm", href: "/sinh-vien/co-hoi-viec-lam" },
      { name: "Cựu sinh viên", href: "/sinh-vien/cuu-sinh-vien" },
    ],
  },
  {
    name: "Tin tức & Sự kiện",
    href: "/tin-tuc-su-kien",
    children: [
      { name: "Tin tức", href: "/tin-tuc-su-kien/tin-tuc" },
      { name: "Sự kiện", href: "/tin-tuc-su-kien/su-kien" },
    ],
  },
  {
    name: "Hợp tác",
    href: "/hop-tac",
    children: [
      { name: "Doanh nghiệp", href: "/hop-tac/doanh-nghiep" },
      { name: "Quốc tế", href: "/hop-tac/quoc-te" },
    ],
  },
  {
    name: "Tuyển sinh",
    href: "/tuyen-sinh",
    icon: GraduationCap,
    children: [
      { name: "Thông tin tuyển sinh", href: "/tuyen-sinh/thong-tin" },
      { name: "Điểm chuẩn", href: "/tuyen-sinh/diem-chuan" },
      { name: "Câu hỏi thường gặp", href: "/tuyen-sinh/faq" },
    ],
  },
  {
    name: "Khám phá",
    href: "/kham-pha",
    children: [
      { name: "Bản đồ tương tác", href: "/kham-pha/ban-do" },
      { name: "Tour ảo", href: "/kham-pha/tour-ao" },
    ],
  },
  { name: "Liên hệ", href: "/lien-he" },
]
