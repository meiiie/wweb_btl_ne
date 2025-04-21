import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sinh viên | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
  description: "Thông tin dành cho sinh viên Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
}

const sidebarLinks = [
  { title: "Tổng quan", href: "/sinh-vien" },
  { title: "Thông tin học tập", href: "/sinh-vien/hoc-tap" },
  { title: "Học bổng", href: "/sinh-vien/hoc-bong" },
  { title: "Hoạt động ngoại khóa", href: "/sinh-vien/hoat-dong" },
  { title: "Cơ hội việc làm", href: "/sinh-vien/co-hoi-viec-lam" },
  { title: "Thực tập", href: "/sinh-vien/thuc-tap" },
  { title: "Lịch sử việc làm", href: "/sinh-vien/lich-su-viec-lam" },
  { title: "Cựu sinh viên", href: "/sinh-vien/cuu-sinh-vien" },
]

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section className="py-8">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-primary border-b pb-2">Thông tin sinh viên</h2>
                    <nav>
                      <ul className="space-y-1">
                        {sidebarLinks.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.href}
                              className="block py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardContent className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-primary border-b pb-2">Liên kết nhanh</h2>
                    <ul className="space-y-1">
                      <li>
                        <a
                          href="https://qldt.vimaru.edu.vn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          Cổng thông tin đào tạo
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://lms.vimaru.edu.vn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          Hệ thống học tập trực tuyến
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tuyensinh.vimaru.edu.vn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          Cổng thông tin tuyển sinh
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://thuvien.vimaru.edu.vn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          Thư viện điện tử
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main content */}
            <div className="w-full md:w-3/4">{children}</div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
