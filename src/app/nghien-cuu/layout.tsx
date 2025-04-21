import { Suspense } from "react"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

// Thêm metadata cho layout nghiên cứu
export const metadata: Metadata = {
  title: "Nghiên cứu khoa học | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin về hoạt động nghiên cứu khoa học, đề tài, công bố khoa học và dự án sinh viên tại Khoa Công nghệ Thông tin, Đại học Hàng hải Việt Nam",
  keywords: "nghiên cứu khoa học, đề tài nghiên cứu, công bố khoa học, dự án sinh viên, Đại học Hàng hải Việt Nam",
}

// Thêm loading component
function ResearchSidebarSkeleton() {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      <div className="bg-primary text-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-6 bg-white/20 rounded w-3/4 mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-white/20 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ResearchLayoutProps {
  children: ReactNode
}

export default function ResearchLayout({ children }: ResearchLayoutProps) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Suspense fallback={<ResearchSidebarSkeleton />}>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Nghiên cứu khoa học</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/nghien-cuu" className="block py-2 px-3 rounded hover:bg-gray-100">
                      Tổng quan
                    </Link>
                  </li>
                  <li>
                    <Link href="/nghien-cuu/de-tai" className="block py-2 px-3 rounded hover:bg-gray-100">
                      Đề tài nghiên cứu
                    </Link>
                  </li>
                  <li>
                    <Link href="/nghien-cuu/cong-bo-khoa-hoc" className="block py-2 px-3 rounded hover:bg-gray-100">
                      Công bố khoa học
                    </Link>
                  </li>
                  <li>
                    <Link href="/nghien-cuu/ung-dung-hang-hai" className="block py-2 px-3 rounded hover:bg-gray-100">
                      Ứng dụng CNTT trong hàng hải
                    </Link>
                  </li>
                  <li>
                    <Link href="/nghien-cuu/du-an-sinh-vien" className="block py-2 px-3 rounded hover:bg-gray-100">
                      Dự án sinh viên
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-primary text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Thông tin liên hệ</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3 mt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>
                      TS. Lê Văn C
                      <br />
                      Trưởng bộ phận Nghiên cứu khoa học
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>(0225) 3829 xxx</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>research.fit@vimaru.edu.vn</span>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>

          {/* Main content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg"></div>}>{children}</Suspense>
          </div>
        </div>
      </Container>
    </Section>
  )
}
