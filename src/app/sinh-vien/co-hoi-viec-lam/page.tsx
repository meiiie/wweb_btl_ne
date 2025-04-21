import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Dữ liệu mẫu cho các cơ hội việc làm
const jobOpportunities = [
  {
    id: 1,
    title: "Thực tập sinh lập trình Frontend",
    company: "FPT Software",
    location: "Hải Phòng",
    type: "Thực tập",
    salary: "5-7 triệu/tháng",
    deadline: "31/12/2023",
    description:
      "FPT Software đang tìm kiếm các sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT để tham gia chương trình thực tập Frontend Developer. Ứng viên sẽ được đào tạo và làm việc với các công nghệ hiện đại như React, Angular, Vue.js...",
    requirements: [
      "Sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT",
      "Có kiến thức cơ bản về HTML, CSS, JavaScript",
      "Có hiểu biết về React, Angular hoặc Vue.js là một lợi thế",
      "Có khả năng làm việc nhóm và giao tiếp tốt",
      "Có thể làm việc full-time (8h/ngày) trong thời gian thực tập",
    ],
    benefits: [
      "Lương thực tập hấp dẫn: 5-7 triệu/tháng",
      "Cơ hội được đào tạo bởi các chuyên gia hàng đầu",
      "Làm việc trong môi trường chuyên nghiệp, năng động",
      "Cơ hội được nhận vào làm chính thức sau khi kết thúc thực tập",
      "Được tham gia các hoạt động nội bộ của công ty",
    ],
    link: "/sinh-vien/co-hoi-viec-lam/fpt-thuc-tap-frontend",
  },
  {
    id: 2,
    title: "Kỹ sư phát triển phần mềm",
    company: "VNPT Technology",
    location: "Hà Nội, Hải Phòng",
    type: "Toàn thời gian",
    salary: "15-25 triệu/tháng",
    deadline: "15/01/2024",
    description:
      "VNPT Technology đang tìm kiếm các kỹ sư phát triển phần mềm có kinh nghiệm để tham gia vào các dự án lớn về chuyển đổi số. Ứng viên sẽ được làm việc với các công nghệ tiên tiến và có cơ hội phát triển sự nghiệp trong một môi trường chuyên nghiệp.",
    requirements: [
      "Tốt nghiệp đại học chuyên ngành CNTT, KTPM hoặc các ngành liên quan",
      "Có ít nhất 1 năm kinh nghiệm trong phát triển phần mềm",
      "Thành thạo ít nhất một ngôn ngữ lập trình: Java, C#, Python",
      "Có kinh nghiệm làm việc với cơ sở dữ liệu SQL/NoSQL",
      "Có khả năng làm việc độc lập và theo nhóm",
    ],
    benefits: [
      "Mức lương cạnh tranh: 15-25 triệu/tháng tùy theo kinh nghiệm",
      "Thưởng dự án, thưởng hiệu suất, thưởng cuối năm",
      "Chế độ bảo hiểm đầy đủ theo quy định",
      "Được đào tạo và nâng cao kỹ năng chuyên môn",
      "Cơ hội thăng tiến rõ ràng",
    ],
    link: "/sinh-vien/co-hoi-viec-lam/vnpt-ky-su-phat-trien",
  },
  {
    id: 3,
    title: "Kỹ sư AI/Machine Learning",
    company: "Viettel AI",
    location: "Hà Nội",
    type: "Toàn thời gian",
    salary: "20-35 triệu/tháng",
    deadline: "20/01/2024",
    description:
      "Viettel AI đang tìm kiếm các kỹ sư AI/Machine Learning tài năng để tham gia vào các dự án nghiên cứu và phát triển các giải pháp AI tiên tiến. Đây là cơ hội tuyệt vời để làm việc với các công nghệ AI mới nhất và đóng góp vào sự phát triển của ngành công nghệ AI tại Việt Nam.",
    requirements: [
      "Tốt nghiệp đại học/sau đại học chuyên ngành CNTT, Toán học, hoặc các ngành liên quan",
      "Có kiến thức vững về Machine Learning, Deep Learning",
      "Thành thạo Python và các thư viện ML như TensorFlow, PyTorch, scikit-learn",
      "Có kinh nghiệm với xử lý dữ liệu lớn và phân tích dữ liệu",
      "Có khả năng nghiên cứu và áp dụng các thuật toán AI mới",
    ],
    benefits: [
      "Mức lương hấp dẫn: 20-35 triệu/tháng tùy theo kinh nghiệm",
      "Môi trường làm việc đẳng cấp quốc tế",
      "Cơ hội làm việc với các chuyên gia hàng đầu trong lĩnh vực AI",
      "Được tham gia các hội thảo, khóa học chuyên sâu về AI",
      "Chế độ phúc lợi đầy đủ và cạnh tranh",
    ],
    link: "/sinh-vien/co-hoi-viec-lam/viettel-ai-engineer",
  },
  {
    id: 4,
    title: "Thực tập sinh Kiểm thử phần mềm",
    company: "CMC Technology",
    location: "Hải Phòng",
    type: "Thực tập",
    salary: "4-6 triệu/tháng",
    deadline: "10/01/2024",
    description:
      "CMC Technology đang tìm kiếm các sinh viên năm cuối hoặc mới tốt nghiệp để tham gia chương trình thực tập Kiểm thử phần mềm. Đây là cơ hội tốt để bạn học hỏi và phát triển kỹ năng trong lĩnh vực đảm bảo chất lượng phần mềm.",
    requirements: [
      "Sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT hoặc các ngành liên quan",
      "Có kiến thức cơ bản về quy trình phát triển phần mềm",
      "Hiểu biết về các phương pháp kiểm thử phần mềm là một lợi thế",
      "Có kỹ năng phân tích và giải quyết vấn đề tốt",
      "Có khả năng làm việc nhóm và giao tiếp hiệu quả",
    ],
    benefits: [
      "Lương thực tập: 4-6 triệu/tháng",
      "Được đào tạo bài bản về kiểm thử phần mềm",
      "Làm việc trong môi trường chuyên nghiệp",
      "Cơ hội được nhận vào làm chính thức sau khi kết thúc thực tập",
      "Được tham gia các hoạt động nội bộ của công ty",
    ],
    link: "/sinh-vien/co-hoi-viec-lam/cmc-thuc-tap-kiem-thu",
  },
]

// Dữ liệu mẫu cho các danh mục việc làm
const jobCategories = [
  { id: 1, name: "Tất cả", count: 24 },
  { id: 2, name: "Thực tập", count: 10 },
  { id: 3, name: "Toàn thời gian", count: 8 },
  { id: 4, name: "Bán thời gian", count: 6 },
  { id: 5, name: "Từ xa", count: 4 },
  { id: 6, name: "Dự án", count: 3 },
]

// Dữ liệu mẫu cho các địa điểm
const locations = [
  { id: 1, name: "Hải Phòng", count: 15 },
  { id: 2, name: "Hà Nội", count: 12 },
  { id: 3, name: "TP. Hồ Chí Minh", count: 8 },
  { id: 4, name: "Đà Nẵng", count: 5 },
  { id: 5, name: "Cần Thơ", count: 2 },
]

export default function JobOpportunitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Cơ hội việc làm" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cơ hội việc làm</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/sinh-vien" className="hover:underline">
                Sinh viên
              </Link>
              <span className="mx-2">/</span>
              <span>Cơ hội việc làm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Tìm kiếm việc làm</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">
                        Từ khóa
                      </label>
                      <input
                        type="text"
                        id="keyword"
                        placeholder="Nhập từ khóa..."
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Loại công việc
                      </label>
                      <select
                        id="category"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">-- Chọn loại công việc --</option>
                        {jobCategories.map((category) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Địa điểm
                      </label>
                      <select
                        id="location"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">-- Chọn địa điểm --</option>
                        {locations.map((location) => (
                          <option key={location.id} value={location.name}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Button className="w-full">Tìm kiếm</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Job categories */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Loại công việc</h3>
                  <ul className="space-y-2">
                    {jobCategories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/sinh-vien/co-hoi-viec-lam/loai/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100"
                        >
                          <span className="text-gray-700 hover:text-primary">{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Locations */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Địa điểm</h3>
                  <ul className="space-y-2">
                    {locations.map((location) => (
                      <li key={location.id}>
                        <Link
                          href={`/sinh-vien/co-hoi-viec-lam/dia-diem/${location.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100"
                        >
                          <span className="text-gray-700 hover:text-primary">{location.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {location.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Partner companies */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Doanh nghiệp đối tác</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["FPT Software", "Viettel", "VNPT", "CMC", "IBM Vietnam", "Microsoft Vietnam"].map(
                      (company, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 p-3 rounded-lg flex items-center justify-center h-16 hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-gray-700 font-medium text-sm text-center">{company}</span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Job listings */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">Danh sách việc làm</h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Sắp xếp theo:</span>
                      <select className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Mới nhất</option>
                        <option>Lương cao nhất</option>
                        <option>Hạn nộp gần nhất</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {jobOpportunities.map((job) => (
                      <Card key={job.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-2/3">
                              <div className="flex items-center mb-2">
                                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                                  {job.type}
                                </span>
                                <span className="text-gray-500 text-sm ml-2">Hạn nộp: {job.deadline}</span>
                              </div>
                              <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                                <Link href={job.link}>{job.title}</Link>
                              </h3>
                              <div className="flex flex-col space-y-1 text-gray-600 mb-3">
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 mr-2 text-primary"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                  <span>{job.company}</span>
                                </div>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 mr-2 text-primary"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 mr-2 text-primary"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>{job.salary}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{job.description}</p>
                              <Link
                                href={job.link}
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
                            <div className="md:w-1/3 flex justify-center items-center">
                              <div className="bg-gray-100 rounded-lg p-4 w-full h-32 flex items-center justify-center">
                                <span className="text-lg font-bold text-gray-700">{job.company}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-1">
                      <a
                        href="#"
                        className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </a>
                      <a href="#" className="px-4 py-2 rounded-md bg-primary text-white font-medium">
                        1
                      </a>
                      <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                        2
                      </a>
                      <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                        3
                      </a>
                      <a
                        href="#"
                        className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
