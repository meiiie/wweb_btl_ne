import Image from "next/image"
import { Container } from "@/components/ui/container"
import { FooterLinks } from "./footer/footer-links"
import { FooterContact } from "./footer/footer-contact"

const quickLinks = [
  { name: "Giới thiệu", href: "/gioi-thieu" },
  { name: "Đào tạo", href: "/dao-tao" },
  { name: "Nghiên cứu", href: "/nghien-cuu" },
  { name: "Bộ môn", href: "/bo-mon" },
  { name: "Đội ngũ", href: "/doi-ngu" },
  { name: "Sinh viên", href: "/sinh-vien" },
  { name: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
  { name: "Liên hệ", href: "/lien-he" },
]

const educationLinks = [
  { name: "Công nghệ thông tin", href: "/dao-tao/chuong-trinh/cong-nghe-thong-tin" },
  { name: "Công nghệ phần mềm", href: "/dao-tao/chuong-trinh/cong-nghe-phan-mem" },
  { name: "Hệ thống thông tin", href: "/dao-tao/chuong-trinh/he-thong-thong-tin" },
  { name: "Kỹ thuật máy tính", href: "/dao-tao/chuong-trinh/ky-thuat-may-tinh" },
  { name: "Danh sách môn học", href: "/dao-tao/mon-hoc" },
]

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Ảnh nền */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/footer-bg.jpg" alt="Footer background" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      {/* Nội dung footer */}
      <div className="relative z-10">
        <Container className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About with Logo */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 mr-3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20H%E1%BB%8Dc%20H%C3%A0ng%20H%E1%BA%A3i-0s0QUiKWwj9SFgSuKZKAXXqo00dhXk.png"
                    alt="Logo Trường Đại học Hàng hải Việt Nam"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">KHOA CNTT</h3>
                  <p className="text-sm text-gray-200">ĐH HÀNG HẢI VIỆT NAM</p>
                </div>
              </div>
              <p className="text-gray-200 mb-4">
                Đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực Công nghệ thông tin, đáp ứng nhu cầu của xã hội và
                hội nhập quốc tế.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <FooterLinks title="Liên kết nhanh" links={quickLinks} />

            {/* Column 3: Programs */}
            <FooterLinks title="Chương trình đào tạo" links={educationLinks} />

            {/* Column 4: Contact */}
            <FooterContact />
          </div>
        </Container>

        {/* Bottom bar */}
        <div className="relative border-t border-white/20 py-4">
          <Container className="text-center text-sm text-gray-300">
            <p>
              © {new Date().getFullYear()} Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam. Tất cả các quyền
              được bảo lưu.
            </p>
          </Container>
        </div>
      </div>
    </footer>
  )
}
