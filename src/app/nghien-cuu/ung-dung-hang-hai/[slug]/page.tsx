import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Thêm generateMetadata để tạo metadata động dựa trên slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Trong thực tế, bạn sẽ fetch dữ liệu dựa trên slug
  // Ở đây chúng ta giả định dữ liệu từ maritimeApplication

  return {
    title: `${maritimeApplication.title} | Ứng dụng CNTT trong hàng hải | Khoa CNTT`,
    description: maritimeApplication.description,
    keywords: `${maritimeApplication.title}, ${maritimeApplication.category}, ${maritimeApplication.technologies.map((t) => t.name).join(", ")}, ứng dụng CNTT, hàng hải, Đại học Hàng hải Việt Nam`,
    openGraph: {
      title: maritimeApplication.title,
      description: maritimeApplication.description,
      type: "article",
      tags: [maritimeApplication.category, ...maritimeApplication.technologies.map((t) => t.name)],
    },
  }
}

// Dữ liệu mẫu cho ứng dụng CNTT trong hàng hải
const maritimeApplication = {
  id: 1,
  title: "Hệ thống quản lý cảng thông minh (Smart Port Management System)",
  category: "Quản lý cảng",
  description:
    "Hệ thống quản lý cảng thông minh tích hợp các công nghệ IoT, AI và Big Data để tối ưu hóa hoạt động cảng, giám sát thời gian thực, quản lý container và điều phối phương tiện vận tải.",
  fullDescription: `
    Hệ thống quản lý cảng thông minh (Smart Port Management System) là một giải pháp toàn diện nhằm số hóa và tối ưu hóa tất cả các hoạt động trong cảng biển. Hệ thống này tích hợp nhiều công nghệ tiên tiến như Internet vạn vật (IoT), Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data) và Điện toán đám mây (Cloud Computing) để tạo ra một nền tảng quản lý cảng hiện đại, hiệu quả và bền vững.
    
    Hệ thống bao gồm nhiều module chức năng như quản lý tàu, quản lý container, quản lý cầu cảng, quản lý phương tiện vận tải, quản lý nhân sự và quản lý an ninh. Các module này hoạt động đồng bộ và liên kết chặt chẽ với nhau, tạo thành một hệ sinh thái thông minh cho cảng biển.
    
    Với khả năng thu thập và phân tích dữ liệu thời gian thực từ nhiều nguồn khác nhau, hệ thống có thể đưa ra các quyết định tối ưu, giúp giảm thời gian chờ đợi của tàu, tăng hiệu quả sử dụng cơ sở hạ tầng cảng, giảm chi phí vận hành và nâng cao an toàn, bảo mật.
    
    Hệ thống quản lý cảng thông minh đã được triển khai thử nghiệm tại Cảng Hải Phòng và đã mang lại những kết quả khả quan, góp phần hiện đại hóa hoạt động cảng và nâng cao năng lực cạnh tranh của cảng biển Việt Nam trong khu vực và trên thế giới.
  `,
  features: [
    "Giám sát thời gian thực các hoạt động cảng",
    "Quản lý container thông minh",
    "Tối ưu hóa lịch trình tàu và phân bổ cầu cảng",
    "Phân tích dữ liệu lớn để dự báo lưu lượng và nhu cầu",
    "Quản lý phương tiện vận tải trong cảng",
    "Hệ thống thanh toán tự động",
    "Quản lý an ninh và kiểm soát ra vào",
    "Báo cáo và thống kê chi tiết",
  ],
  benefits: [
    "Giảm thời gian chờ đợi của tàu",
    "Tăng hiệu quả sử dụng cơ sở hạ tầng cảng",
    "Giảm chi phí vận hành",
    "Nâng cao an toàn và bảo mật",
    "Tối ưu hóa sử dụng nhân lực",
    "Giảm thiểu tác động môi trường",
    "Nâng cao trải nghiệm khách hàng",
    "Tăng năng lực cạnh tranh của cảng",
  ],
  implementation: {
    phases: [
      {
        name: "Giai đoạn 1: Nghiên cứu và thiết kế",
        description:
          "Nghiên cứu quy trình hoạt động của cảng, phân tích yêu cầu, thiết kế kiến trúc hệ thống và xây dựng các mô hình dữ liệu.",
      },
      {
        name: "Giai đoạn 2: Phát triển và tích hợp",
        description:
          "Phát triển các module chức năng, tích hợp các công nghệ IoT, AI và Big Data, xây dựng giao diện người dùng và kết nối với các hệ thống hiện có.",
      },
      {
        name: "Giai đoạn 3: Triển khai thử nghiệm",
        description:
          "Triển khai thử nghiệm hệ thống tại một khu vực của cảng, thu thập phản hồi và điều chỉnh, tối ưu hóa hiệu suất.",
      },
      {
        name: "Giai đoạn 4: Mở rộng và hoàn thiện",
        description:
          "Mở rộng triển khai cho toàn bộ cảng, tích hợp thêm các tính năng nâng cao, đào tạo người dùng và chuyển giao công nghệ.",
      },
    ],
    timeline: "2021-2023",
    status: "Đã triển khai thử nghiệm tại Cảng Hải Phòng",
  },
  technologies: [
    {
      name: "Internet vạn vật (IoT)",
      description:
        "Sử dụng các cảm biến, camera và thiết bị IoT để thu thập dữ liệu thời gian thực về hoạt động cảng, vị trí container, tình trạng phương tiện vận tải.",
    },
    {
      name: "Trí tuệ nhân tạo (AI)",
      description:
        "Áp dụng các thuật toán AI để phân tích dữ liệu, dự báo lưu lượng, tối ưu hóa lịch trình tàu và phân bổ cầu cảng, phát hiện bất thường.",
    },
    {
      name: "Dữ liệu lớn (Big Data)",
      description:
        "Xử lý và phân tích khối lượng dữ liệu lớn từ nhiều nguồn khác nhau để đưa ra các quyết định tối ưu và cải thiện hiệu quả hoạt động cảng.",
    },
    {
      name: "Điện toán đám mây (Cloud Computing)",
      description:
        "Triển khai hệ thống trên nền tảng đám mây để đảm bảo khả năng mở rộng, tính sẵn sàng cao và khả năng truy cập từ xa.",
    },
    {
      name: "Blockchain",
      description:
        "Áp dụng công nghệ blockchain để đảm bảo tính minh bạch, bảo mật và tin cậy trong các giao dịch và quản lý tài liệu.",
    },
  ],
  partners: [
    {
      name: "Cảng Hải Phòng",
      role: "Đối tác triển khai và thử nghiệm",
    },
    {
      name: "Tổng công ty Hàng hải Việt Nam",
      role: "Đơn vị tài trợ và hỗ trợ kỹ thuật",
    },
    {
      name: "Viện Nghiên cứu Công nghệ Thông tin",
      role: "Đơn vị nghiên cứu và phát triển",
    },
  ],
  publications: [
    {
      title: "Smart Port Management System: A Comprehensive Solution for Maritime Logistics",
      authors: "Nguyen Van A, Tran Thi B, Le Van C",
      journal: "Journal of Maritime Technology",
      year: 2022,
      link: "/nghien-cuu/cong-bo-khoa-hoc/smart-port-management",
    },
    {
      title: "Applying IoT and AI in Port Operations: A Case Study of Hai Phong Port",
      authors: "Le Van C, Pham Thi D",
      conference: "International Conference on Smart Maritime Technology",
      year: 2023,
      link: "/nghien-cuu/cong-bo-khoa-hoc/iot-ai-port-operations",
    },
  ],
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  videos: [
    {
      title: "Giới thiệu Hệ thống quản lý cảng thông minh",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Demo Hệ thống quản lý cảng thông minh tại Cảng Hải Phòng",
      url: "https://www.youtube.com/watch?v=example2",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ],
  contactPerson: {
    name: "TS. Lê Văn C",
    position: "Trưởng nhóm nghiên cứu",
    email: "levanc@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
  },
  slug: "he-thong-quan-ly-cang-thong-minh",
}

export default function MaritimeApplicationDetailPage({ params }: { params: { slug: string } }) {
  // Trong thực tế, bạn sẽ lấy dữ liệu dựa trên params.slug
  // Ở đây chúng ta sử dụng dữ liệu mẫu

  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt={maritimeApplication.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{maritimeApplication.title}</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu/ung-dung-hang-hai" className="hover:underline">
                Ứng dụng CNTT trong hàng hải
              </Link>
              <span className="mx-2">/</span>
              <span>{maritimeApplication.slug}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Application details */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {maritimeApplication.category}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-primary">Giới thiệu</h2>

              <div className="prose max-w-none">
                <p className="mb-4">{maritimeApplication.description}</p>

                {maritimeApplication.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Tính năng chính</h3>
                <ul className="list-disc pl-6 mb-4">
                  {maritimeApplication.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Lợi ích</h3>
                <ul className="list-disc pl-6 mb-4">
                  {maritimeApplication.benefits.map((benefit, index) => (
                    <li key={index} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Quá trình triển khai</h3>
                <div className="space-y-4 mb-6">
                  {maritimeApplication.implementation.phases.map((phase, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">{phase.name}</h4>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  ))}
                  <div className="mt-4">
                    <p>
                      <span className="font-medium">Thời gian thực hiện:</span>{" "}
                      {maritimeApplication.implementation.timeline}
                    </p>
                    <p>
                      <span className="font-medium">Trạng thái:</span> {maritimeApplication.implementation.status}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Công nghệ sử dụng</h3>
                <div className="space-y-4 mb-6">
                  {maritimeApplication.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">{tech.name}</h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Hình ảnh</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {maritimeApplication.images.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Hình ảnh ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Video</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {maritimeApplication.videos.map((video, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/80 rounded-full p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6 text-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800">{video.title}</h4>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Công bố khoa học</h3>
                <div className="space-y-4">
                  {maritimeApplication.publications.map((pub, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">
                        <Link href={pub.link} className="hover:text-primary">
                          {pub.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 mb-2">{pub.authors}</p>
                      <div className="text-sm text-gray-500">
                        {pub.journal && <span>{pub.journal}, </span>}
                        {pub.conference && <span>{pub.conference}, </span>}
                        <span>{pub.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Thông tin chi tiết</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Danh mục</h4>
                    <p>{maritimeApplication.category}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Công nghệ</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {maritimeApplication.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-200"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Đối tác</h4>
                    <ul className="list-disc pl-5">
                      {maritimeApplication.partners.map((partner, index) => (
                        <li key={index}>
                          <span className="font-medium">{partner.name}</span>
                          <br />
                          <span className="text-sm text-gray-600">{partner.role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Liên hệ</h4>
                    <p className="font-medium">{maritimeApplication.contactPerson.name}</p>
                    <p className="text-sm">{maritimeApplication.contactPerson.position}</p>
                    <p className="text-sm mt-1">
                      Email:{" "}
                      <a
                        href={`mailto:${maritimeApplication.contactPerson.email}`}
                        className="text-primary hover:underline"
                      >
                        {maritimeApplication.contactPerson.email}
                      </a>
                    </p>
                    <p className="text-sm">
                      Điện thoại:{" "}
                      <a
                        href={`tel:${maritimeApplication.contactPerson.phone.replace(/\D/g, "")}`}
                        className="text-primary hover:underline"
                      >
                        {maritimeApplication.contactPerson.phone}
                      </a>
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full">Liên hệ hợp tác</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related applications */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Ứng dụng liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary">Ứng dụng CNTT trong hàng hải {i}</h3>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  Mô tả ngắn về ứng dụng CNTT liên quan đến lĩnh vực hàng hải và quản lý cảng.
                </p>
                <Link
                  href={`/nghien-cuu/ung-dung-hang-hai/ung-dung-lien-quan-${i}`}
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
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
