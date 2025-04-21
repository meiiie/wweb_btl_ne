import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { PageHero } from "@/components/tin-tuc-su-kien/page-hero"
import { NewsCard } from "@/components/tin-tuc-su-kien/news-card"
import { NewsSidebar } from "@/components/tin-tuc-su-kien/news-sidebar"
import { NewsFilter } from "@/components/tin-tuc-su-kien/news-filter"
import { Pagination } from "@/components/tin-tuc-su-kien/pagination"

// Dữ liệu mẫu cho tin tức
const news = [
  {
    id: 1,
    title: "Lễ khai giảng năm học 2023-2024 của Khoa Công nghệ Thông tin",
    excerpt: "Khoa CNTT đã tổ chức thành công lễ khai giảng năm học mới với sự tham gia của hơn 300 tân sinh viên...",
    date: "15/09/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sự kiện",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/tin-tuc/khai-giang-2023-2024",
  },
  {
    id: 2,
    title: "Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải",
    excerpt: "Khoa CNTT phối hợp với các đối tác tổ chức hội thảo chuyên đề về AI và ứng dụng trong ngành hàng hải...",
    date: "20/08/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hội thảo",
    author: "TS. Lê Văn B",
    link: "/tin-tuc-su-kien/tin-tuc/hoi-thao-ai-hang-hai",
  },
  {
    id: 3,
    title: "Sinh viên Khoa CNTT đạt giải Nhất cuộc thi Sáng tạo Khoa học Kỹ thuật toàn quốc",
    excerpt:
      "Nhóm sinh viên của Khoa đã xuất sắc đạt giải Nhất với đề tài nghiên cứu về ứng dụng IoT trong giao thông thông minh...",
    date: "05/07/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Thành tích",
    author: "ThS. Phạm Thị C",
    link: "/tin-tuc-su-kien/tin-tuc/giai-nhat-sang-tao-khkt",
  },
  {
    id: 4,
    title: "Khoa CNTT ký kết hợp tác với tập đoàn công nghệ hàng đầu",
    excerpt:
      "Khoa Công nghệ Thông tin đã ký kết thỏa thuận hợp tác toàn diện với Tập đoàn FPT nhằm nâng cao chất lượng đào tạo...",
    date: "10/06/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hợp tác",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/tin-tuc/hop-tac-fpt",
  },
  {
    id: 5,
    title: "Thông báo tuyển sinh đại học chính quy năm 2023",
    excerpt:
      "Khoa Công nghệ Thông tin thông báo tuyển sinh đại học chính quy năm 2023 với nhiều chương trình đào tạo hấp dẫn...",
    date: "01/04/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tuyển sinh",
    author: "Ban Tuyển sinh",
    link: "/tin-tuc-su-kien/tin-tuc/tuyen-sinh-2023",
  },
  {
    id: 6,
    title: "Khoa CNTT tổ chức Ngày hội việc làm cho sinh viên năm cuối",
    excerpt:
      "Ngày hội việc làm CNTT 2023 đã thu hút hơn 20 doanh nghiệp lớn tham gia tuyển dụng với hơn 500 vị trí việc làm...",
    date: "25/05/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sự kiện",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/tin-tuc/ngay-hoi-viec-lam-2023",
  },
  {
    id: 7,
    title: "Khoa CNTT tổ chức Hội nghị học tốt cho sinh viên năm nhất",
    excerpt:
      "Hội nghị đã chia sẻ nhiều kinh nghiệm quý báu giúp sinh viên năm nhất nhanh chóng thích nghi với môi trường đại học...",
    date: "20/10/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sự kiện",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/tin-tuc/hoi-nghi-hoc-tot-2023",
  },
  {
    id: 8,
    title: "Giảng viên Khoa CNTT nhận Giải thưởng Nhà khoa học trẻ xuất sắc năm 2023",
    excerpt:
      "TS. Nguyễn Văn D đã vinh dự nhận giải thưởng Nhà khoa học trẻ xuất sắc năm 2023 cho những đóng góp trong lĩnh vực AI...",
    date: "15/11/2023",
    image: "/placeholder.svg?height=400&width=600",
    category: "Thành tích",
    author: "Ban Truyền thông Khoa CNTT",
    link: "/tin-tuc-su-kien/tin-tuc/giai-thuong-nha-khoa-hoc-tre-2023",
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

// Dữ liệu mẫu cho bộ lọc
const filterOptions = [
  {
    name: "category",
    label: "Danh mục",
    options: categories.map((cat) => ({ value: cat.slug, label: cat.name })),
  },
  {
    name: "year",
    label: "Năm",
    options: [
      { value: "2023", label: "2023" },
      { value: "2022", label: "2022" },
      { value: "2021", label: "2021" },
      { value: "2020", label: "2020" },
    ],
  },
]

export default function NewsListPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <PageHero
        title="Tin tức"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức & Sự kiện", href: "/tin-tuc-su-kien" },
          { label: "Tin tức", href: "/tin-tuc-su-kien/tin-tuc" },
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
                <NewsFilter
                  onSortChange={(value) => console.log("Sort by:", value)}
                  onFilterChange={(filters) => console.log("Filters:", filters)}
                  sortOptions={sortOptions}
                  filterOptions={filterOptions}
                />

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
                <Pagination currentPage={1} totalPages={3} baseUrl="/tin-tuc-su-kien/tin-tuc" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
