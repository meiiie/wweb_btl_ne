import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { PageHero } from "@/components/tin-tuc-su-kien/page-hero"
import { NewsSidebar } from "@/components/tin-tuc-su-kien/news-sidebar"
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

// Dữ liệu mẫu cho sự kiện chi tiết
const eventDetail = {
  id: 1,
  title: "Hội thảo: Trí tuệ nhân tạo và Ứng dụng trong Hàng hải",
  excerpt: "Hội thảo chuyên đề về các ứng dụng mới nhất của AI trong lĩnh vực hàng hải và logistics...",
  content: `
    <p>Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam phối hợp với Viện Nghiên cứu Hàng hải và Công ty FPT Software trân trọng kính mời quý vị tham dự Hội thảo khoa học với chủ đề "Trí tuệ nhân tạo và Ứng dụng trong lĩnh vực Hàng hải".</p>
    
    <h3>Mục đích hội thảo</h3>
    
    <p>Hội thảo nhằm tạo diễn đàn để các nhà khoa học, giảng viên, nghiên cứu sinh, sinh viên và doanh nghiệp trao đổi, chia sẻ những nghiên cứu mới nhất về ứng dụng trí tuệ nhân tạo (AI) trong lĩnh vực hàng hải. Đồng thời, hội thảo cũng là cơ hội để kết nối giữa cơ sở đào tạo, nghiên cứu với doanh nghiệp, thúc đẩy chuyển giao công nghệ và ứng dụng vào thực tiễn.</p>
    
    <h3>Nội dung chính</h3>
    
    <ul>
      <li>Tổng quan về tình hình nghiên cứu và ứng dụng AI trong lĩnh vực hàng hải trên thế giới và tại Việt Nam</li>
      <li>Ứng dụng AI trong quản lý cảng biển thông minh</li>
      <li>Hệ thống hỗ trợ điều hướng tàu tự động</li>
      <li>Dự báo thời tiết biển sử dụng AI</li>
      <li>Ứng dụng AI trong tối ưu hóa logistics hàng hải</li>
      <li>Các vấn đề an ninh mạng trong hệ thống hàng hải thông minh</li>
    </ul>
    
    <h3>Diễn giả</h3>
    
    <p>Hội thảo vinh dự được đón tiếp các diễn giả là chuyên gia hàng đầu trong lĩnh vực AI và hàng hải:</p>
    
    <ul>
      <li>GS.TS. Nguyễn Văn A - Viện Nghiên cứu Hàng hải</li>
      <li>PGS.TS. Trần Thị B - Trường Đại học Hàng hải Việt Nam</li>
      <li>TS. Lê Văn C - Giám đốc Kỹ thuật, FPT Software</li>
      <li>ThS. Phạm Thị D - Chuyên gia AI, Viettel</li>
    </ul>
    
    <h3>Thời gian và địa điểm</h3>
    
    <p><strong>Thời gian:</strong> 09:00 - 16:00, Thứ Tư, ngày 15/11/2023</p>
    <p><strong>Địa điểm:</strong> Hội trường A1, Trường Đại học Hàng hải Việt Nam</p>
    <p><strong>Địa chỉ:</strong> 484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng</p>
    
    <h3>Đối tượng tham dự</h3>
    
    <ul>
      <li>Giảng viên, nghiên cứu sinh, sinh viên ngành CNTT và Hàng hải</li>
      <li>Các nhà khoa học, chuyên gia trong lĩnh vực AI và Hàng hải</li>
      <li>Đại diện các doanh nghiệp công nghệ, logistics và hàng hải</li>
      <li>Những người quan tâm đến lĩnh vực AI và ứng dụng trong hàng hải</li>
    </ul>
    
    <h3>Đăng ký tham dự</h3>
    
    <p>Quý vị quan tâm vui lòng đăng ký tham dự trước ngày 10/11/2023 theo link: <a href="#">https://forms.vmu.edu.vn/dang-ky-hoi-thao-ai</a></p>
    
    <p>Mọi thông tin chi tiết, vui lòng liên hệ:</p>
    <p>ThS. Nguyễn Văn E<br>
    Email: nguyenvane@vmu.edu.vn<br>
    Điện thoại: 0912.345.678</p>
    
    <p>Trân trọng kính mời!</p>
  `,
  startDate: "2023-11-15T09:00:00",
  endDate: "2023-11-15T16:00:00",
  location: "Hội trường A1, Trường Đại học Hàng hải Việt Nam",
  address: "484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng",
  organizer: "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
  contact: {
    name: "ThS. Nguyễn Văn E",
    email: "nguyenvane@vmu.edu.vn",
    phone: "0912.345.678",
  },
  image: "/placeholder.svg?height=500&width=1200",
  category: "Hội thảo",
  tags: ["AI", "Hàng hải", "Hội thảo", "Nghiên cứu"],
  isUpcoming: true,
  registrationLink: "https://forms.vmu.edu.vn/dang-ky-hoi-thao-ai",
  speakers: [
    { name: "GS.TS. Nguyễn Văn A", organization: "Viện Nghiên cứu Hàng hải" },
    { name: "PGS.TS. Trần Thị B", organization: "Trường Đại học Hàng hải Việt Nam" },
    { name: "TS. Lê Văn C", organization: "Giám đốc Kỹ thuật, FPT Software" },
    { name: "ThS. Phạm Thị D", organization: "Chuyên gia AI, Viettel" },
  ],
}

// Dữ liệu mẫu cho sự kiện liên quan
const relatedEvents = [
  {
    id: 2,
    title: "Workshop: Phát triển ứng dụng Web với React và Next.js",
    image: "/placeholder.svg?height=200&width=400",
    link: "/tin-tuc-su-kien/su-kien/workshop-react-nextjs",
  },
  {
    id: 3,
    title: "Cuộc thi Lập trình Sinh viên VMU 2023",
    image: "/placeholder.svg?height=200&width=400",
    link: "/tin-tuc-su-kien/su-kien/cuoc-thi-lap-trinh-2023",
  },
  {
    id: 5,
    title: "Hội thảo: Blockchain và Ứng dụng trong Logistics",
    image: "/placeholder.svg?height=200&width=400",
    link: "/tin-tuc-su-kien/su-kien/hoi-thao-blockchain-logistics",
  },
]

// Dữ liệu mẫu cho danh mục
const categories = [
  { id: 1, name: "Tất cả", count: 24, slug: "tat-ca" },
  { id: 2, name: "Sự kiện", count: 8, slug: "su-kien" },
  { id: 3, name: "Hội thảo", count: 5, slug: "hoi-thao" },
  { id: 4, name: "Thành tích", count: 4, slug: "thanh-tich" },
  { id: 5, name: "Hợp tác", count: 3, slug: "hop-tac" },
  { id: 6, name: "Tuyển sinh", count: 2, slug: "tuyen-sinh" },
  { id: 7, name: "Thông báo", count: 2, slug: "thong-bao" },
]

// Dữ liệu mẫu cho bài viết gần đây
const recentPosts = [
  {
    id: 2,
    title: "Workshop: Phát triển ứng dụng Web với React và Next.js",
    date: "28/10/2023",
    image: "/placeholder.svg?height=80&width=80",
    link: "/tin-tuc-su-kien/su-kien/workshop-react-nextjs",
  },
  {
    id: 3,
    title: "Cuộc thi Lập trình Sinh viên VMU 2023",
    date: "10/12/2023",
    image: "/placeholder.svg?height=80&width=80",
    link: "/tin-tuc-su-kien/su-kien/cuoc-thi-lap-trinh-2023",
  },
  {
    id: 4,
    title: "Ngày hội Việc làm CNTT 2023",
    date: "25/05/2023",
    image: "/placeholder.svg?height=80&width=80",
    link: "/tin-tuc-su-kien/su-kien/ngay-hoi-viec-lam-2023",
  },
]

// Dữ liệu mẫu cho thẻ
const tags = [
  { id: 1, name: "Hội thảo", slug: "hoi-thao" },
  { id: 2, name: "Workshop", slug: "workshop" },
  { id: 3, name: "Cuộc thi", slug: "cuoc-thi" },
  { id: 4, name: "Seminar", slug: "seminar" },
  { id: 5, name: "Talkshow", slug: "talkshow" },
  { id: 6, name: "Tuyển dụng", slug: "tuyen-dung" },
  { id: 7, name: "Kỷ niệm", slug: "ky-niem" },
  { id: 8, name: "Giao lưu", slug: "giao-luu" },
]

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // Trong thực tế, bạn sẽ sử dụng params.slug để lấy dữ liệu từ API
  console.log("Slug:", params.slug)

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <PageHero
        title={eventDetail.title}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
          { label: "Sự kiện", href: "/tin-tuc-su-kien/su-kien" },
          { label: eventDetail.title, href: `/tin-tuc-su-kien/su-kien/${params.slug}` },
        ]}
        backgroundImage={eventDetail.image}
      />

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <NewsSidebar categories={categories} recentPosts={recentPosts} tags={tags} />
            </div>

            {/* Event detail */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                  <Image
                    src={eventDetail.image || "/placeholder.svg?height=500&width=1200"}
                    alt={eventDetail.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Event Info */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CalendarIcon className="w-5 h-5 text-[#0056a6] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-700">Thời gian</h4>
                          <p className="text-gray-600">
                            {formatDate(eventDetail.startDate, true)}
                            {eventDetail.endDate && ` - ${formatDate(eventDetail.endDate, true)}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPinIcon className="w-5 h-5 text-[#0056a6] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-700">Địa điểm</h4>
                          <p className="text-gray-600">{eventDetail.location}</p>
                          <p className="text-gray-600 text-sm">{eventDetail.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <UserIcon className="w-5 h-5 text-[#0056a6] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-700">Đơn vị tổ chức</h4>
                          <p className="text-gray-600">{eventDetail.organizer}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <ClockIcon className="w-5 h-5 text-[#0056a6] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-700">Trạng thái</h4>
                          <p className={`${eventDetail.isUpcoming ? "text-green-600" : "text-gray-600"}`}>
                            {eventDetail.isUpcoming ? "Sắp diễn ra" : "Đã diễn ra"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {eventDetail.isUpcoming && eventDetail.registrationLink && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <a
                          href={eventDetail.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#ff9800] hover:bg-[#f57c00] text-white font-medium py-2 px-6 rounded-md transition-colors"
                        >
                          Đăng ký tham dự
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{eventDetail.title}</h1>

                  {/* Content */}
                  <div
                    className="prose prose-lg max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: eventDetail.content }}
                  />

                  {/* Speakers */}
                  {eventDetail.speakers && eventDetail.speakers.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Diễn giả</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {eventDetail.speakers.map((speaker, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                          >
                            <div className="mr-3 bg-[#0056a6] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                              {speaker.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">{speaker.name}</h4>
                              <p className="text-sm text-gray-600">{speaker.organization}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact */}
                  {eventDetail.contact && (
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Thông tin liên hệ</h3>
                      <p className="mb-1">
                        <span className="font-medium">Người liên hệ:</span> {eventDetail.contact.name}
                      </p>
                      <p className="mb-1">
                        <span className="font-medium">Email:</span> {eventDetail.contact.email}
                      </p>
                      <p>
                        <span className="font-medium">Điện thoại:</span> {eventDetail.contact.phone}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  {eventDetail.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t">
                      {eventDetail.tags.map((tag, index) => (
                        <Link
                          key={index}
                          href={`/tin-tuc-su-kien/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Related Events */}
                  {relatedEvents.length > 0 && (
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Sự kiện liên quan</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedEvents.map((event) => (
                          <div
                            key={event.id}
                            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="relative h-48">
                              <Image
                                src={event.image || "/placeholder.svg?height=200&width=400"}
                                alt={event.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-gray-800 hover:text-[#0056a6] transition-colors line-clamp-2">
                                <Link href={event.link}>{event.title}</Link>
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
