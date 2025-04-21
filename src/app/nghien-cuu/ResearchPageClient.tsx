"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

// Dữ liệu mẫu cho các hướng nghiên cứu
const researchAreas = [
  {
    id: 1,
    title: "Trí tuệ nhân tạo và Học máy",
    description:
      "Nghiên cứu và phát triển các thuật toán AI, Machine Learning, Deep Learning và ứng dụng trong các lĩnh vực như xử lý ngôn ngữ tự nhiên, thị giác máy tính, hệ thống gợi ý...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/nghien-cuu/de-tai/tri-tue-nhan-tao",
  },
  {
    id: 2,
    title: "Internet vạn vật (IoT) và Điện toán đám mây",
    description:
      "Nghiên cứu về các hệ thống IoT, kiến trúc điện toán đám mây, điện toán sương mù và ứng dụng trong các lĩnh vực như thành phố thông minh, nông nghiệp thông minh, công nghiệp 4.0...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/nghien-cuu/de-tai/iot-dien-toan-dam-may",
  },
  {
    id: 3,
    title: "An toàn thông tin và Bảo mật mạng",
    description:
      "Nghiên cứu về các giải pháp bảo mật, phát hiện và phòng chống tấn công mạng, mã hóa dữ liệu, bảo mật ứng dụng web và di động, blockchain và ứng dụng...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/nghien-cuu/de-tai/an-toan-thong-tin",
  },
  {
    id: 4,
    title: "Dữ liệu lớn và Khai phá dữ liệu",
    description:
      "Nghiên cứu về các kỹ thuật xử lý dữ liệu lớn, khai phá dữ liệu, phân tích dữ liệu, trực quan hóa dữ liệu và ứng dụng trong các lĩnh vực như kinh doanh, y tế, giáo dục...",
    image: "/placeholder.svg?height=300&width=400",
    link: "/nghien-cuu/de-tai/du-lieu-lon",
  },
]

// Dữ liệu mẫu cho các đề tài và dự án
const projects = [
  {
    id: 1,
    title: "Xây dựng hệ thống giám sát và điều khiển giao thông thông minh ứng dụng AI và IoT",
    type: "Đề tài cấp Bộ",
    period: "2022-2024",
    leader: "PGS.TS. Nguyễn Văn A",
    status: "Đang thực hiện",
    link: "/nghien-cuu/de-tai/giao-thong-thong-minh",
  },
  {
    id: 2,
    title: "Nghiên cứu và phát triển hệ thống hỗ trợ chẩn đoán bệnh dựa trên học sâu",
    type: "Đề tài cấp Trường",
    period: "2021-2023",
    leader: "TS. Trần Thị B",
    status: "Đã hoàn thành",
    link: "/nghien-cuu/de-tai/chan-doan-benh",
  },
  {
    id: 3,
    title: "Phát triển nền tảng quản lý chuỗi cung ứng thông minh dựa trên blockchain",
    type: "Dự án hợp tác doanh nghiệp",
    period: "2023-2025",
    leader: "TS. Lê Văn C",
    status: "Đang thực hiện",
    link: "/nghien-cuu/de-tai/chuoi-cung-ung-blockchain",
  },
]

// Dữ liệu mẫu cho các công bố khoa học
const publications = [
  {
    id: 1,
    title: "A Novel Approach for Traffic Congestion Detection Using Deep Learning and IoT Sensors",
    authors: "Nguyen Van A, Tran Thi B, Le Van C",
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    year: 2023,
    type: "Journal",
    link: "/nghien-cuu/cong-bo-khoa-hoc/traffic-congestion-detection",
  },
  {
    id: 2,
    title: "Blockchain-based Supply Chain Management: A Case Study in Maritime Industry",
    authors: "Le Van C, Pham Thi D, Hoang Van E",
    conference: "International Conference on Blockchain Technology",
    year: 2022,
    type: "Conference",
    link: "/nghien-cuu/cong-bo-khoa-hoc/blockchain-supply-chain",
  },
  {
    id: 3,
    title: "Improving Healthcare Diagnosis Accuracy with Ensemble Deep Learning Models",
    authors: "Tran Thi B, Nguyen Van A, Ly Thi H",
    journal: "Journal of Biomedical Informatics",
    year: 2023,
    type: "Journal",
    link: "/nghien-cuu/cong-bo-khoa-hoc/healthcare-diagnosis",
  },
]

export default function ResearchPageClient() {
  // Sử dụng Intersection Observer cho các phần không quan trọng
  const [projectsRef, isProjectsVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: "200px" })
  const [publicationsRef, isPublicationsVisible] = useIntersectionObserver<HTMLDivElement>({ rootMargin: "200px" })

  // State để lưu trữ dữ liệu đã tải
  const [loadedProjects, setLoadedProjects] = useState<typeof projects | null>(null)
  const [loadedPublications, setLoadedPublications] = useState<typeof publications | null>(null)

  // Tải dữ liệu khi phần tử hiển thị trong viewport
  useEffect(() => {
    if (isProjectsVisible && !loadedProjects) {
      // Trong thực tế, đây sẽ là API call
      setLoadedProjects(projects)
    }
  }, [isProjectsVisible, loadedProjects])

  useEffect(() => {
    if (isPublicationsVisible && !loadedPublications) {
      // Trong thực tế, đây sẽ là API call
      setLoadedPublications(publications)
    }
  }, [isPublicationsVisible, loadedPublications])

  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Nghiên cứu khoa học"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nghiên cứu khoa học</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <span>Nghiên cứu khoa học</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giới thiệu */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Giới thiệu về hoạt động nghiên cứu khoa học</h2>
          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Nghiên cứu khoa học"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg mb-4"
            />
          </div>
          <div className="prose max-w-none">
            <p className="mb-4">
              Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam luôn chú trọng đẩy mạnh hoạt động nghiên cứu
              khoa học, coi đây là một trong những nhiệm vụ trọng tâm song song với công tác đào tạo. Hoạt động nghiên
              cứu khoa học của Khoa hướng đến các mục tiêu:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Nâng cao chất lượng đào tạo thông qua việc cập nhật kiến thức mới, phương pháp mới vào giảng dạy
              </li>
              <li className="mb-2">
                Giải quyết các vấn đề thực tiễn của xã hội, đặc biệt trong lĩnh vực hàng hải và logistics
              </li>
              <li className="mb-2">
                Tạo môi trường nghiên cứu cho giảng viên và sinh viên phát triển năng lực nghiên cứu
              </li>
              <li className="mb-2">Tăng cường hợp tác với các đối tác trong và ngoài nước về nghiên cứu khoa học</li>
            </ul>

            <p className="mb-4">
              Trong những năm qua, Khoa đã đạt được nhiều thành tựu trong nghiên cứu khoa học với hàng chục đề tài các
              cấp, hàng trăm bài báo được công bố trên các tạp chí và hội nghị khoa học uy tín trong nước và quốc tế.
              Nhiều kết quả nghiên cứu đã được ứng dụng vào thực tiễn, góp phần nâng cao vị thế của Khoa và Nhà trường
              trong cộng đồng khoa học.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Hướng nghiên cứu */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Hướng nghiên cứu</h2>
            <Link
              href="/nghien-cuu/de-tai"
              className="text-primary hover:text-primary-light font-medium flex items-center"
            >
              Xem tất cả
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <div key={area.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">{area.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{area.description}</p>
                <Link href={area.link} className="text-primary hover:text-primary-light font-medium flex items-center">
                  Xem chi tiết
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Đề tài và dự án - Lazy load */}
      <div ref={projectsRef}>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Đề tài nghiên cứu</h2>
              <Link
                href="/nghien-cuu/de-tai"
                className="text-primary hover:text-primary-light font-medium flex items-center"
              >
                Xem tất cả
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {loadedProjects
                ? loadedProjects.map((project) => (
                    <div key={project.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-primary text-white rounded-lg p-3 text-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                            <Link href={project.link}>{project.title}</Link>
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-3 text-sm">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-2">Loại:</span>
                              <span>{project.type}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-2">Thời gian:</span>
                              <span>{project.period}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-2">Chủ nhiệm:</span>
                              <span>{project.leader}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-2">Trạng thái:</span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  project.status === "Đang thực hiện"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {project.status}
                              </span>
                            </div>
                          </div>
                          <Link
                            href={project.link}
                            className="text-primary hover:text-primary-light font-medium flex items-center text-sm"
                          >
                            Xem chi tiết
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 ml-1"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : // Skeleton loading
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0 animate-pulse">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-gray-200 rounded-lg p-3 text-center mr-4 w-12 h-12"></div>
                        <div className="flex-grow">
                          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-3">
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          </div>
                          <div className="h-4 bg-gray-200 rounded w-1/4 mt-3"></div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Công bố khoa học - Lazy load */}
      <div ref={publicationsRef}>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Công bố khoa học</h2>
              <Link
                href="/nghien-cuu/cong-bo-khoa-hoc"
                className="text-primary hover:text-primary-light font-medium flex items-center"
              >
                Xem tất cả
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {loadedPublications
                ? loadedPublications.map((pub) => (
                    <div key={pub.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-primary text-white rounded-lg p-3 text-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                            <Link href={pub.link}>{pub.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-2">{pub.authors}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-sm">
                            {pub.journal && (
                              <div className="flex items-center">
                                <span className="font-medium text-gray-700 mr-2">Tạp chí:</span>
                                <span>{pub.journal}</span>
                              </div>
                            )}
                            {pub.conference && (
                              <div className="flex items-center">
                                <span className="font-medium text-gray-700 mr-2">Hội nghị:</span>
                                <span>{pub.conference}</span>
                              </div>
                            )}
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-2">Năm:</span>
                              <span>{pub.year}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium text-gray-700 mr-2">Loại:</span>
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  pub.type === "Journal" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                                }`}
                              >
                                {pub.type}
                              </span>
                            </div>
                          </div>
                          <Link
                            href={pub.link}
                            className="text-primary hover:text-primary-light font-medium flex items-center text-sm"
                          >
                            Xem chi tiết
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-4 h-4 ml-1"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : // Skeleton loading
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0 animate-pulse">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-gray-200 rounded-lg p-3 text-center mr-4 w-12 h-12"></div>
                        <div className="flex-grow">
                          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          </div>
                          <div className="h-4 bg-gray-200 rounded w-1/4 mt-3"></div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
