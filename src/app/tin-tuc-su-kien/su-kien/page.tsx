import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { PageHero } from "@/components/tin-tuc-su-kien/page-hero"
import { EventCard } from "@/components/tin-tuc-su-kien/event-card"
import { NewsSidebar } from "@/components/tin-tuc-su-kien/news-sidebar"
import { NewsFilter } from "@/components/tin-tuc-su-kien/news-filter"
import { Pagination } from "@/components/tin-tuc-su-kien/pagination"

// Dữ liệu mẫu cho sự kiện
const events = [
  {
    id: 1,
    title: "Hội thảo: Trí tuệ nhân tạo và Ứng dụng trong Hàng hải",
    excerpt: "Hội thảo chuyên đề về các ứng dụng mới nhất của AI trong lĩnh vực hàng hải và logistics...",
    startDate: "2023-11-15T09:00:00",
    endDate: "2023-11-15T16:00:00",
    location: "Hội trường A1, Trường Đại học Hàng hải Việt Nam",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/hoi-thao-ai-hang-hai-2023",
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Workshop: Phát triển ứng dụng Web với React và Next.js",
    excerpt: "Workshop thực hành về phát triển ứng dụng web hiện đại với React và Next.js framework...",
    startDate: "2023-10-28T13:30:00",
    endDate: "2023-10-28T17:30:00",
    location: "Phòng Lab 305, Tòa nhà A3, Khoa CNTT",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/workshop-react-nextjs",
    isUpcoming: true,
  },
  {
    id: 3,
    title: "Cuộc thi Lập trình Sinh viên VMU 2023",
    excerpt: "Cuộc thi thường niên dành cho sinh viên đam mê lập trình và giải thuật...",
    startDate: "2023-12-10T08:00:00",
    endDate: "2023-12-10T17:00:00",
    location: "Trung tâm Tin học, Trường Đại học Hàng hải Việt Nam",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/cuoc-thi-lap-trinh-2023",
    isUpcoming: true,
  },
  {
    id: 4,
    title: "Ngày hội Việc làm CNTT 2023",
    excerpt: "Cơ hội gặp gỡ và phỏng vấn trực tiếp với hơn 20 doanh nghiệp công nghệ hàng đầu...",
    startDate: "2023-05-25T08:30:00",
    endDate: "2023-05-25T16:30:00",
    location: "Sảnh A, Tòa nhà A1, Trường Đại học Hàng hải Việt Nam",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/ngay-hoi-viec-lam-2023",
    isUpcoming: false,
  },
  {
    id: 5,
    title: "Hội thảo: Blockchain và Ứng dụng trong Logistics",
    excerpt: "Hội thảo về công nghệ blockchain và các ứng dụng tiềm năng trong quản lý chuỗi cung ứng và logistics...",
    startDate: "2023-04-18T09:00:00",
    endDate: "2023-04-18T16:00:00",
    location: "Hội trường B, Tòa nhà A1, Trường Đại học Hàng hải Việt Nam",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/hoi-thao-blockchain-logistics",
    isUpcoming: false,
  },
  {
    id: 6,
    title: "Seminar: Xu hướng Công nghệ 2023",
    excerpt: "Buổi chia sẻ về các xu hướng công nghệ mới nhất và cơ hội nghề nghiệp trong lĩnh vực CNTT...",
    startDate: "2023-03-10T14:00:00",
    endDate: "2023-03-10T17:00:00",
    location: "Phòng 305, Tòa nhà A3, Khoa CNTT",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/seminar-xu-huong-cong-nghe-2023",
    isUpcoming: false,
  },
  {
    id: 7,
    title: "Lễ kỷ niệm 20 năm thành lập Khoa CNTT",
    excerpt: "Chương trình kỷ niệm 20 năm xây dựng và phát triển của Khoa Công nghệ Thông tin...",
    startDate: "2023-02-15T08:00:00",
    endDate: "2023-02-15T21:00:00",
    location: "Hội trường lớn, Trường Đại học Hàng hải Việt Nam",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/ky-niem-20-nam-khoa-cntt",
    isUpcoming: false,
  },
  {
    id: 8,
    title: "Talkshow: Chuyển đổi số trong Giáo dục Đại học",
    excerpt: "Buổi tọa đàm về quá trình chuyển đổi số và ứng dụng công nghệ trong giáo dục đại học...",
    startDate: "2023-01-20T14:00:00",
    endDate: "2023-01-20T17:00:00",
    location: "Phòng họp 2, Tòa nhà A1, Trường Đại học Hàng hải Việt Nam",
    image: "/placeholder.svg?height=400&width=600",
    link: "/tin-tuc-su-kien/su-kien/talkshow-chuyen-doi-so-giao-duc",
    isUpcoming: false,
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
const recentPosts = events.slice(0, 3).map((item) => ({
  id: item.id,
  title: item.title,
  date: new Date(item.startDate).toLocaleDateString("vi-VN"),
  image: item.image,
  link: item.link,
}))

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

// Dữ liệu mẫu cho tùy chọn sắp xếp
const sortOptions = [
  { value: "upcoming", label: "Sắp diễn ra" },
  { value: "newest", label: "Mới nhất" },
  { value: "oldest", label: "Cũ nhất" },
]

// Dữ liệu mẫu cho bộ lọc
const filterOptions = [
  {
    name: "eventType",
    label: "Loại sự kiện",
    options: [
      { value: "all", label: "Tất cả" },
      { value: "workshop", label: "Workshop" },
      { value: "seminar", label: "Seminar" },
      { value: "conference", label: "Hội thảo" },
      { value: "competition", label: "Cuộc thi" },
      { value: "ceremony", label: "Lễ kỷ niệm" },
    ],
  },
  {
    name: "timeframe",
    label: "Thời gian",
    options: [
      { value: "all", label: "Tất cả" },
      { value: "upcoming", label: "Sắp diễn ra" },
      { value: "past", label: "Đã diễn ra" },
      { value: "thisMonth", label: "Tháng này" },
      { value: "nextMonth", label: "Tháng tới" },
    ],
  },
]

export default function EventsListPage() {
  // Phân loại sự kiện sắp diễn ra và đã diễn ra
  const upcomingEvents = events.filter((event) => event.isUpcoming)
  const pastEvents = events.filter((event) => !event.isUpcoming)

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <PageHero
        title="Sự kiện"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
          { label: "Sự kiện", href: "/tin-tuc-su-kien/su-kien" },
        ]}
      />

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <NewsSidebar categories={categories} recentPosts={recentPosts} tags={tags} />
            </div>

            {/* Events list */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <NewsFilter
                  onSortChange={(value) => console.log("Sort by:", value)}
                  onFilterChange={(filters) => console.log("Filters:", filters)}
                  sortOptions={sortOptions}
                  filterOptions={filterOptions}
                />

                {/* Sự kiện sắp diễn ra */}
                {upcomingEvents.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-[#0056a6] flex items-center">
                      <span className="inline-block w-2 h-6 bg-[#ff9800] mr-2"></span>
                      Sự kiện sắp diễn ra
                    </h3>
                    <div className="space-y-8">
                      {upcomingEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          id={event.id}
                          title={event.title}
                          excerpt={event.excerpt}
                          startDate={event.startDate}
                          endDate={event.endDate}
                          location={event.location}
                          image={event.image}
                          link={event.link}
                          isUpcoming={event.isUpcoming}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Sự kiện đã diễn ra */}
                {pastEvents.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#0056a6] flex items-center">
                      <span className="inline-block w-2 h-6 bg-gray-400 mr-2"></span>
                      Sự kiện đã diễn ra
                    </h3>
                    <div className="space-y-8">
                      {pastEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          id={event.id}
                          title={event.title}
                          excerpt={event.excerpt}
                          startDate={event.startDate}
                          endDate={event.endDate}
                          location={event.location}
                          image={event.image}
                          link={event.link}
                          isUpcoming={event.isUpcoming}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Pagination */}
                <Pagination currentPage={1} totalPages={2} baseUrl="/tin-tuc-su-kien/su-kien" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
