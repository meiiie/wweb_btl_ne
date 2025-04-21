import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "Khám Phá Khoa CNTT - Trường Đại học Hàng hải Việt Nam",
  description:
    "Khám phá cơ sở vật chất, không gian học tập và nghiên cứu của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam thông qua bản đồ tương tác và tour ảo 360°.",
}

export default function KhamPhaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="relative z-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      </div>

      <div className="relative z-20">
        <header className="py-8 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              Khám Phá <span className="text-primary-500">Khoa CNTT</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
              Trải nghiệm không gian học tập, nghiên cứu và các cơ sở vật chất hiện đại của Khoa Công nghệ Thông tin
            </p>
          </div>
        </header>

        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 mb-8 sticky top-0 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <ul className="flex space-x-1 overflow-x-auto scrollbar-hide">
              <li>
                <a
                  href="/kham-pha"
                  className="inline-block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-t-lg transition"
                >
                  Tổng Quan
                </a>
              </li>
              <li>
                <a
                  href="/kham-pha/ban-do"
                  className="inline-block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-t-lg transition"
                >
                  Bản Đồ Tương Tác
                </a>
              </li>
              <li>
                <a
                  href="/kham-pha/tour-ao"
                  className="inline-block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-t-lg transition"
                >
                  Tour Ảo 360°
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
