import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { PageHero } from "@/components/tin-tuc-su-kien/page-hero"
import { NewsCard } from "@/components/tin-tuc-su-kien/news-card"
import { EventCard } from "@/components/tin-tuc-su-kien/event-card"
import { NewsSidebar } from "@/components/tin-tuc-su-kien/news-sidebar"
import { NewsFilter } from "@/components/tin-tuc-su-kien/news-filter"
import { Pagination } from "@/components/tin-tuc-su-kien/pagination"

// Dữ liệu mẫu cho tin tức
const news = [
  {
    id: 1,
    title: "Lễ khai giảng năm học 2023-2024 của Khoa Công nghệ Thông tin",
    excerpt: "Khoa CNTT đã tổ chức thành công lễ khai giảng năm học mới với sự tham gia của hơn 300 tân sinh viên...",
    content:
      "Sáng ngày 15/09/2023, Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam đã long trọng tổ chức Lễ khai giảng năm học 2023-2024. Buổi lễ có sự tham dự của Ban Giám hiệu Nhà trường, lãnh đạo Khoa CNTT, các giảng viên và đặc biệt là hơn 300 tân sinh viên khóa 64. Phát biểu tại buổi lễ, PGS.TS. Nguyễn Văn A - Trưởng khoa CNTT đã gửi lời chúc mừng đến các tân sinh viên và nhấn mạnh tầm quan trọng của ngành CNTT trong kỷ nguyên số hiện nay...",
    date: "15/09/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sự kiện",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/khai-giang-2023-2024",
  },
  {
    id: 2,
    title: "Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải",
    excerpt: "Khoa CNTT phối hợp với các đối tác tổ chức hội thảo chuyên đề về AI và ứng dụng trong ngành hàng hải...",
    content:
      "Ngày 20/08/2023, Khoa Công nghệ Thông tin phối hợp với Viện Nghiên cứu Hàng hải và Công ty FPT Software đã tổ chức Hội thảo khoa học với chủ đề 'Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải'. Hội thảo đã thu hút sự tham gia của nhiều chuyên gia hàng đầu trong lĩnh vực AI và hàng hải, cùng đông đảo giảng viên, nghiên cứu sinh và sinh viên. Các báo cáo tại hội thảo đã trình bày những nghiên cứu mới nhất về ứng dụng AI trong quản lý cảng biển thông minh, hệ thống hỗ trợ điều hướng tàu tự động, dự báo thời tiết biển và nhiều ứng dụng tiên tiến khác...",
    date: "20/08/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hội thảo",
    author: "TS. Lê Văn B",
    link: "/tin-tuc-su-kien/hoi-thao-ai-hang-hai",
  },
  {
    id: 3,
    title: "Sinh viên Khoa CNTT đạt giải Nhất cuộc thi Sáng tạo Khoa học Kỹ thuật toàn quốc",
    excerpt:
      "Nhóm sinh viên của Khoa đã xuất sắc đạt giải Nhất với đề tài nghiên cứu về ứng dụng IoT trong giao thông thông minh...",
    content:
      "Vừa qua, nhóm sinh viên của Khoa Công nghệ Thông tin gồm các bạn Nguyễn Văn X, Trần Thị Y và Lê Quang Z đã xuất sắc đạt giải Nhất cuộc thi Sáng tạo Khoa học Kỹ thuật toàn quốc năm 2023 với đề tài 'Hệ thống giám sát và điều khiển giao thông thông minh ứng dụng công nghệ IoT và AI'. Đề tài của nhóm đã được đánh giá cao về tính sáng tạo, khả năng ứng dụng thực tiễn và hiệu quả kinh tế. Sản phẩm của nhóm có thể giúp giảm thiểu tình trạng ùn tắc giao thông và tai nạn giao thông tại các nút giao thông phức tạp...",
    date: "05/07/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Thành tích",
    author: "ThS. Phạm Thị C",
    link: "/tin-tuc-su-kien/giai-nhat-sang-tao-khkt",
  },
  {
    id: 4,
    title: "Khoa CNTT ký kết hợp tác với tập đoàn công nghệ hàng đầu",
    excerpt:
      "Khoa Công nghệ Thông tin đã ký kết thỏa thuận hợp tác toàn diện với Tập đoàn FPT nhằm nâng cao chất lượng đào tạo...",
    content:
      "Sáng ngày 10/06/2023, tại Trường Đại học Hàng hải Việt Nam đã diễn ra Lễ ký kết thỏa thuận hợp tác toàn diện giữa Khoa Công nghệ Thông tin và Tập đoàn FPT. Theo thỏa thuận, hai bên sẽ hợp tác trong nhiều lĩnh vực như: cập nhật chương trình đào tạo theo nhu cầu thực tế của doanh nghiệp, tổ chức các khóa đào tạo ngắn hạn về công nghệ mới, tạo cơ hội thực tập và việc làm cho sinh viên, hợp tác nghiên cứu và chuyển giao công nghệ...",
    date: "10/06/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hợp tác",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/hop-tac-fpt",
  },
  {
    id: 5,
    title: "Thông báo tuyển sinh đại học chính quy năm 2023",
    excerpt:
      "Khoa Công nghệ Thông tin thông báo tuyển sinh đại học chính quy năm 2023 với nhiều chương trình đào tạo hấp dẫn...",
    content:
      "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam thông báo tuyển sinh đại học chính quy năm 2023 với các ngành đào tạo: Công nghệ thông tin (mã ngành: 7480201), Kỹ thuật phần mềm (mã ngành: 7480103), Hệ thống thông tin (mã ngành: 7480104) và Trí tuệ nhân tạo (mã ngành: 7480207). Chỉ tiêu tuyển sinh: 400 sinh viên. Phương thức xét tuyển: Xét tuyển dựa trên kết quả kỳ thi tốt nghiệp THPT năm 2023, xét tuyển học bạ THPT, xét tuyển thẳng theo quy định của Bộ Giáo dục và Đào tạo. Thời gian nhận hồ sơ: từ ngày 01/04/2023 đến hết ngày 30/06/2023. Để biết thêm thông tin chi tiết, vui lòng truy cập website tuyển sinh của Trường hoặc liên hệ trực tiếp với Khoa CNTT...",
    date: "01/04/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tuyển sinh",
    author: "Ban Tuyển sinh",
    link: "/tin-tuc-su-kien/tuyen-sinh-2023",
  },
  {
    id: 6,
    title: "Khoa CNTT tổ chức Ngày hội việc làm cho sinh viên năm cuối",
    excerpt:
      "Ngày hội việc làm CNTT 2023 đã thu hút hơn 20 doanh nghiệp lớn tham gia tuyển dụng với hơn 500 vị trí việc làm...",
    content:
      "Ngày 25/05/2023, Khoa Công nghệ Thông tin đã tổ chức thành công 'Ngày hội việc làm CNTT 2023' dành cho sinh viên năm cuối và cựu sinh viên. Sự kiện đã thu hút hơn 20 doanh nghiệp lớn trong lĩnh vực CNTT tham gia với hơn 500 vị trí việc làm. Các doanh nghiệp tham gia ngày hội bao gồm: FPT Software, Viettel, VNPT, CMC, IBM Vietnam, Microsoft Vietnam... Đây là cơ hội quý báu để sinh viên tiếp xúc trực tiếp với nhà tuyển dụng, tìm hiểu thông tin việc làm và tham gia phỏng vấn tuyển dụng ngay tại sự kiện...",
    date: "25/05/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sự kiện",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/ngay-hoi-viec-lam-2023",
  },
]

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
const recentPosts = news.slice(0, 3).map((item) => ({
  id: item.id,
  title: item.title,
  date: item.date,
  image: item.image,
  link: item.link,
}))

// Dữ liệu mẫu cho thẻ
const tags = [
  { id: 1, name: "CNTT", slug: "cntt" },
  { id: 2, name: "AI", slug: "ai" },
  { id: 3, name: "IoT", slug: "iot" },
  { id: 4, name: "Tuyển sinh", slug: "tuyen-sinh" },
  { id: 5, name: "Hội thảo", slug: "hoi-thao" },
  { id: 6, name: "Sinh viên", slug: "sinh-vien" },
  { id: 7, name: "Việc làm", slug: "viec-lam" },
  { id: 8, name: "Nghiên cứu", slug: "nghien-cuu" },
]

// Dữ liệu mẫu cho tùy chọn sắp xếp
const sortOptions = [
  { value: "newest", label: "Mới nhất" },
  { value: "oldest", label: "Cũ nhất" },
  { value: "popular", label: "Phổ biến nhất" },
  { value: "a-z", label: "A-Z" },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <PageHero
        title="Tin tức & Sự kiện"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
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

            {/* News list */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <NewsFilter onSortChange={(value) => console.log("Sort by:", value)} sortOptions={sortOptions} />

                {/* Sự kiện sắp diễn ra */}
                {events.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-[#0056a6] flex items-center">
                      <span className="inline-block w-2 h-6 bg-[#ff9800] mr-2"></span>
                      Sự kiện sắp diễn ra
                    </h3>
                    <div className="space-y-8">
                      {events.map((event) => (
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
                    <div className="mt-6 text-center">
                      <Link
                        href="/tin-tuc-su-kien/su-kien"
                        className="inline-block bg-white border border-[#0056a6] text-[#0056a6] hover:bg-[#0056a6] hover:text-white font-medium py-2 px-6 rounded-md transition-colors"
                      >
                        Xem tất cả sự kiện
                      </Link>
                    </div>
                  </div>
                )}

                {/* Tin tức mới nhất */}
                <div className="space-y-8">
                  {news.map((item) => (
                    <NewsCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      excerpt={item.excerpt}
                      date={item.date}
                      image={item.image}
                      category={item.category}
                      author={item.author}
                      link={item.link}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination currentPage={1} totalPages={5} baseUrl="/tin-tuc-su-kien" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
