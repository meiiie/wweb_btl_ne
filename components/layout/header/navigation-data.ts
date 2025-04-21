export const navigation = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { name: "Lịch sử phát triển", href: "/gioi-thieu/lich-su" },
      { name: "Sứ mệnh & Tầm nhìn", href: "/gioi-thieu/su-menh-tam-nhin" },
      { name: "Cơ cấu tổ chức", href: "/gioi-thieu/co-cau-to-chuc" },
      { name: "Cơ sở vật chất", href: "/gioi-thieu/co-so-vat-chat" },
    ],
  },
  {
    name: "Đào tạo",
    href: "/dao-tao",
    children: [
      { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
      { name: "Đề cương môn học", href: "/dao-tao/de-cuong" },
      { name: "Quy chế đào tạo", href: "/dao-tao/quy-che" },
    ],
  },
  {
    name: "Nghiên cứu",
    href: "/nghien-cuu",
    children: [
      { name: "Hướng nghiên cứu", href: "/nghien-cuu/huong-nghien-cuu" },
      { name: "Đề tài & Dự án", href: "/nghien-cuu/de-tai-du-an" },
      { name: "Công bố khoa học", href: "/nghien-cuu/cong-bo-khoa-hoc" },
      { name: "Seminar & Hội thảo", href: "/nghien-cuu/seminar-hoi-thao" },
    ],
  },
  {
    name: "Giảng viên",
    href: "/giang-vien",
    children: [
      { name: "Ban chủ nhiệm khoa", href: "/giang-vien/ban-chu-nhiem" },
      { name: "Bộ môn KHMT", href: "/giang-vien/bo-mon-khmt" },
      { name: "Bộ môn HTTT", href: "/giang-vien/bo-mon-httt" },
      { name: "Bộ môn KTMT", href: "/giang-vien/bo-mon-ktmt" },
    ],
  },
  { name: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
  { name: "Sinh viên", href: "/sinh-vien" },
  { name: "Liên hệ", href: "/lien-he" },
]
