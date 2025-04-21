import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SidebarNav } from "@/components/gioi-thieu/sidebar-nav"
import { ContactInfo } from "@/components/gioi-thieu/contact-info"

export const metadata: Metadata = {
  title: "Giới thiệu | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Thông tin giới thiệu về Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
  keywords:
    "giới thiệu, lịch sử, tầm nhìn, sứ mệnh, cơ cấu tổ chức, cơ sở vật chất, Khoa CNTT, Đại học Hàng hải Việt Nam",
}

// Các mục trong sidebar
const sidebarItems = [
  { title: "Tổng quan", href: "/gioi-thieu" },
  { title: "Lịch sử phát triển", href: "/gioi-thieu/lich-su" },
  { title: "Tầm nhìn & Sứ mệnh", href: "/gioi-thieu/tam-nhin-su-menh" },
  { title: "Cơ cấu tổ chức", href: "/gioi-thieu/co-cau-to-chuc" },
  { title: "Cơ sở vật chất", href: "/gioi-thieu/co-so-vat-chat" },
]

interface AboutLayoutProps {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <SidebarNav items={sidebarItems} />
              <ContactInfo />
            </div>
          </div>

          {/* Main content */}
          <main className="lg:col-span-3" id="main-content" tabIndex={-1}>
            {children}
          </main>
        </div>
      </Container>
    </Section>
  )
}
