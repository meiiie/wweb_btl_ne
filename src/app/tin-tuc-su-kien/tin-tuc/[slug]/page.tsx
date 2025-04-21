import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { PageHero } from "@/components/tin-tuc-su-kien/page-hero"
import { NewsDetail } from "@/components/tin-tuc-su-kien/news-detail"
import { NewsSidebar } from "@/components/tin-tuc-su-kien/news-sidebar"

// Dữ liệu mẫu cho tin tức chi tiết
const newsDetail = {
  id: 1,
  title: "Lễ khai giảng năm học 2023-2024 của Khoa Công nghệ Thông tin",
  excerpt: "Khoa CNTT đã tổ chức thành công lễ khai giảng năm học mới với sự tham gia của hơn 300 tân sinh viên...",
  content: `
    <p>Sáng ngày 15/09/2023, Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam đã long trọng tổ chức Lễ khai giảng năm học 2023-2024. Buổi lễ có sự tham dự của Ban Giám hiệu Nhà trường, lãnh đạo Khoa CNTT, các giảng viên và đặc biệt là hơn 300 tân sinh viên khóa 64.</p>
    
    <p>Phát biểu tại buổi lễ, PGS.TS. Nguyễn Văn A - Trưởng khoa CNTT đã gửi lời chúc mừng đến các tân sinh viên và nhấn mạnh tầm quan trọng của ngành CNTT trong kỷ nguyên số hiện nay. Ông cũng chia sẻ về những thành tựu nổi bật của Khoa trong năm học vừa qua và định hướng phát triển trong tương lai.</p>
    
    <h3>Thành tựu nổi bật trong năm học 2022-2023</h3>
    
    <ul>
      <li>Tỷ lệ sinh viên có việc làm sau tốt nghiệp đạt trên 95%</li>
      <li>Nhiều sinh viên đạt giải cao trong các cuộc thi học thuật cấp quốc gia và quốc tế</li>
      <li>Khoa đã ký kết hợp tác với nhiều doanh nghiệp công nghệ hàng đầu</li>
      <li>Các giảng viên đã công bố nhiều công trình nghiên cứu trên các tạp chí quốc tế uy tín</li>
    </ul>
    
    <p>Trong năm học mới 2023-2024, Khoa CNTT sẽ tiếp tục đổi mới phương pháp giảng dạy, cập nhật chương trình đào tạo theo hướng tiếp cận với các công nghệ mới nhất, tăng cường hợp tác với doanh nghiệp để sinh viên có nhiều cơ hội thực tập và việc làm.</p>
    
    <h3>Chương trình học bổng và hỗ trợ sinh viên</h3>
    
    <p>Tại buổi lễ, đại diện Khoa CNTT cũng đã công bố chương trình học bổng dành cho sinh viên xuất sắc và sinh viên có hoàn cảnh khó khăn. Theo đó, trong năm học 2023-2024, Khoa sẽ dành tổng cộng 50 suất học bổng với tổng giá trị lên đến 500 triệu đồng.</p>
    
    <p>Ngoài ra, Khoa cũng sẽ tổ chức nhiều hoạt động hỗ trợ sinh viên như câu lạc bộ học thuật, workshop kỹ năng mềm, tư vấn nghề nghiệp và kết nối doanh nghiệp.</p>
    
    <p>Buổi lễ khai giảng đã diễn ra trong không khí trang trọng và ấm cúng. Các tân sinh viên đã có cơ hội giao lưu, làm quen với môi trường học tập mới và được định hướng rõ ràng về lộ trình học tập trong những năm tới.</p>
  `,
  date: "15/09/2023",
  image: "/placeholder.svg?height=500&width=1200",
  category: "Sự kiện",
  author: "Ban Truyền thông Khoa CNTT",
  tags: ["Khai giảng", "Sinh viên", "Năm học mới", "Khóa 64"],
  readTime: 5,
}

// Dữ liệu mẫu cho bài viết liên quan
const relatedPosts = [
  {
    id: 2,
    title: "Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải",
    image: "/placeholder.svg?height=200&width=400",
    link: "/tin-tuc-su-kien/tin-tuc/hoi-thao-ai-hang-hai",
  },
  {
    id: 3,
    title: "Sinh viên Khoa CNTT đạt giải Nhất cuộc thi Sáng tạo Khoa học Kỹ thuật toàn quốc",
    image: "/placeholder.svg?height=200&width=400",
    link: "/tin-tuc-su-kien/tin-tuc/giai-nhat-sang-tao-khkt",
  },
  {
    id: 6,
    title: "Khoa CNTT tổ chức Ngày hội việc làm cho sinh viên năm cuối",
    image: "/placeholder.svg?height=200&width=400",
    link: "/tin-tuc-su-kien/tin-tuc/ngay-hoi-viec-lam-2023",
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
    id: 7,
    title: "Khoa CNTT tổ chức Hội nghị học tốt cho sinh viên năm nhất",
    date: "20/10/2023",
    image: "/placeholder.svg?height=80&width=80",
    link: "/tin-tuc-su-kien/tin-tuc/hoi-nghi-hoc-tot-2023",
  },
  {
    id: 8,
    title: "Giảng viên Khoa CNTT nhận Giải thưởng Nhà khoa học trẻ xuất sắc năm 2023",
    date: "15/11/2023",
    image: "/placeholder.svg?height=80&width=80",
    link: "/tin-tuc-su-kien/tin-tuc/giai-thuong-nha-khoa-hoc-tre-2023",
  },
  {
    id: 2,
    title: "Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải",
    date: "20/08/2023",
    image: "/placeholder.svg?height=80&width=80",
    link: "/tin-tuc-su-kien/tin-tuc/hoi-thao-ai-hang-hai",
  },
]

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

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Trong thực tế, bạn sẽ sử dụng params.slug để lấy dữ liệu từ API
  console.log("Slug:", params.slug)

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <PageHero
        title={newsDetail.title}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
          { label: "Tin tức", href: "/tin-tuc-su-kien/tin-tuc" },
          { label: newsDetail.title, href: `/tin-tuc-su-kien/tin-tuc/${params.slug}` },
        ]}
        backgroundImage={newsDetail.image}
      />

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <NewsSidebar categories={categories} recentPosts={recentPosts} tags={tags} />
            </div>

            {/* News detail */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <NewsDetail
                title={newsDetail.title}
                content={newsDetail.content}
                date={newsDetail.date}
                author={newsDetail.author}
                category={newsDetail.category}
                tags={newsDetail.tags}
                image={newsDetail.image}
                readTime={newsDetail.readTime}
                relatedPosts={relatedPosts}
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
