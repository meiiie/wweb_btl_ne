import { Container } from "@/components/ui/container"
import { FooterAbout } from "./footer/footer-about"
import { FooterLinks } from "./footer/footer-links"
import { FooterContact } from "./footer/footer-contact"

const quickLinks = [
  { name: "Giới thiệu", href: "/gioi-thieu" },
  { name: "Chương trình đào tạo", href: "/dao-tao/chuong-trinh" },
  { name: "Nghiên cứu khoa học", href: "/nghien-cuu" },
  { name: "Đội ngũ giảng viên", href: "/giang-vien" },
  { name: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
  { name: "Cơ hội việc làm", href: "/sinh-vien/tuyen-dung" },
  { name: "Liên hệ", href: "/lien-he" },
]

const educationLinks = [
  { name: "Công nghệ thông tin", href: "/dao-tao/chuong-trinh/cntt" },
  { name: "Kỹ thuật phần mềm", href: "/dao-tao/chuong-trinh/ktpm" },
  { name: "Hệ thống thông tin", href: "/dao-tao/chuong-trinh/httt" },
  { name: "Khoa học máy tính", href: "/dao-tao/chuong-trinh/khmt" },
  { name: "Trí tuệ nhân tạo", href: "/dao-tao/chuong-trinh/ttnt" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <FooterAbout />

          {/* Column 2: Quick Links */}
          <FooterLinks title="Liên kết nhanh" links={quickLinks} />

          {/* Column 3: Programs */}
          <FooterLinks title="Chương trình đào tạo" links={educationLinks} />

          {/* Column 4: Contact */}
          <FooterContact />
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="bg-primary-dark py-4 border-t border-blue-800">
        <Container className="text-center text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam. Tất cả các quyền
            được bảo lưu.
          </p>
        </Container>
      </div>
    </footer>
  )
}
