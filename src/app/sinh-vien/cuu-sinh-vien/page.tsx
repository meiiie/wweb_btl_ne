import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Filter, Building, MapPin, Calendar, ArrowRight } from "lucide-react"

export default function AlumniPage() {
  // Dữ liệu mẫu cho cựu sinh viên tiêu biểu
  const featuredAlumni = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: "/placeholder.svg?height=200&width=200",
      position: "Giám đốc Công nghệ",
      company: "FPT Software",
      graduationYear: 2010,
      achievements: [
        "Lãnh đạo đội ngũ phát triển sản phẩm với hơn 100 kỹ sư",
        "Triển khai thành công hệ thống chuyển đổi số cho nhiều tập đoàn lớn",
        "Đóng góp vào nhiều dự án nguồn mở",
      ],
      quote:
        "Thời gian học tập tại Khoa CNTT - ĐH Hàng hải Việt Nam đã giúp tôi xây dựng nền tảng kiến thức vững chắc và tư duy giải quyết vấn đề hiệu quả.",
      link: "/sinh-vien/cuu-sinh-vien/1",
    },
    {
      id: 2,
      name: "Trần Thị B",
      avatar: "/placeholder.svg?height=200&width=200",
      position: "Founder & CEO",
      company: "TechViet Solutions",
      graduationYear: 2012,
      achievements: [
        "Sáng lập công ty công nghệ với hơn 50 nhân viên",
        "Phát triển các giải pháp công nghệ cho doanh nghiệp vừa và nhỏ",
        "Top 30 doanh nhân trẻ tiêu biểu năm 2020",
      ],
      quote:
        "Khoa CNTT không chỉ dạy tôi về công nghệ mà còn truyền cảm hứng để tôi dám theo đuổi ước mơ khởi nghiệp của mình.",
      link: "/sinh-vien/cuu-sinh-vien/2",
    },
    {
      id: 3,
      name: "Lê Văn C",
      avatar: "/placeholder.svg?height=200&width=200",
      position: "Senior Software Engineer",
      company: "Google Singapore",
      graduationYear: 2015,
      achievements: [
        "Làm việc tại Google Singapore từ năm 2018",
        "Phát triển các tính năng cho Google Maps",
        "Đóng góp vào nhiều dự án nguồn mở",
      ],
      quote:
        "Những kiến thức nền tảng và phương pháp tự học mà tôi tiếp thu được từ Khoa CNTT đã giúp tôi tự tin làm việc trong môi trường quốc tế.",
      link: "/sinh-vien/cuu-sinh-vien/3",
    },
  ]

  // Dữ liệu mẫu cho danh sách cựu sinh viên
  const alumniList = [
    {
      id: 4,
      name: "Phạm Văn D",
      avatar: "/placeholder.svg?height=100&width=100",
      position: "Product Manager",
      company: "Microsoft Vietnam",
      graduationYear: 2014,
      link: "/sinh-vien/cuu-sinh-vien/4",
    },
    {
      id: 5,
      name: "Hoàng Thị E",
      avatar: "/placeholder.svg?height=100&width=100",
      position: "Data Scientist",
      company: "VinAI Research",
      graduationYear: 2016,
      link: "/sinh-vien/cuu-sinh-vien/5",
    },
    {
      id: 6,
      name: "Đỗ Văn F",
      avatar: "/placeholder.svg?height=100&width=100",
      position: "Technical Lead",
      company: "Tiki",
      graduationYear: 2013,
      link: "/sinh-vien/cuu-sinh-vien/6",
    },
    {
      id: 7,
      name: "Ngô Thị G",
      avatar: "/placeholder.svg?height=100&width=100",
      position: "DevOps Engineer",
      company: "VNG Corporation",
      graduationYear: 2017,
      link: "/sinh-vien/cuu-sinh-vien/7",
    },
    {
      id: 8,
      name: "Vũ Văn H",
      avatar: "/placeholder.svg?height=100&width=100",
      position: "Mobile Developer",
      company: "Grab Vietnam",
      graduationYear: 2018,
      link: "/sinh-vien/cuu-sinh-vien/8",
    },
    {
      id: 9,
      name: "Đinh Thị I",
      avatar: "/placeholder.svg?height=100&width=100",
      position: "UX/UI Designer",
      company: "Shopee",
      graduationYear: 2019,
      link: "/sinh-vien/cuu-sinh-vien/9",
    },
  ]

  // Dữ liệu mẫu cho các sự kiện cựu sinh viên
  const alumniEvents = [
    {
      id: 1,
      title: "Ngày hội cựu sinh viên Khoa CNTT 2023",
      date: "25/12/2023",
      location: "Hội trường A1, Trường ĐH Hàng hải Việt Nam",
      description:
        "Ngày hội cựu sinh viên Khoa CNTT 2023 là cơ hội để các cựu sinh viên gặp gỡ, giao lưu, chia sẻ kinh nghiệm và kết nối với sinh viên hiện tại.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/cuu-sinh-vien/su-kien/ngay-hoi-cuu-sinh-vien-2023",
    },
    {
      id: 2,
      title: "Hội thảo: Chia sẻ kinh nghiệm làm việc tại doanh nghiệp lớn",
      date: "15/01/2024",
      location: "Phòng A5-301, Trường ĐH Hàng hải Việt Nam",
      description:
        "Hội thảo với sự tham gia của các cựu sinh viên đang làm việc tại các doanh nghiệp lớn như Google, Microsoft, FPT... Chia sẻ kinh nghiệm và cơ hội việc làm cho sinh viên.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/cuu-sinh-vien/su-kien/hoi-thao-chia-se-kinh-nghiem",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Cựu sinh viên"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cựu sinh viên</h1>
            <p className="text-white/90 max-w-2xl">
              Thông tin về cựu sinh viên tiêu biểu, mạng lưới cựu sinh viên và các hoạt động kết nối cựu sinh viên của
              Khoa Công nghệ Thông tin.
            </p>
          </div>
        </div>
      </div>

      {/* Tìm kiếm cựu sinh viên */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tìm kiếm cựu sinh viên</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên, công ty, vị trí..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select className="pl-10 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white">
                <option value="">Khóa tốt nghiệp</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="older">Trước 2015</option>
              </select>
            </div>
            <Button>Tìm kiếm</Button>
          </div>
        </CardContent>
      </Card>

      {/* Cựu sinh viên tiêu biểu */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cựu sinh viên tiêu biểu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAlumni.map((alumni) => (
              <Card key={alumni.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Image
                      src={alumni.avatar || "/placeholder.svg"}
                      alt={alumni.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800">{alumni.name}</h3>
                    <p className="text-primary font-medium">{alumni.position}</p>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Building className="h-4 w-4 mr-1" />
                      <span>{alumni.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Tốt nghiệp: {alumni.graduationYear}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Thành tựu nổi bật:</h4>
                    <ul className="text-gray-600 text-sm space-y-1 mb-4">
                      {alumni.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-600 italic text-sm mb-4">"{alumni.quote}"</p>
                    <Link
                      href={alumni.link}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center text-sm"
                    >
                      Xem chi tiết
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Danh sách cựu sinh viên */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Danh sách cựu sinh viên</h2>
            <Button variant="outline">Xem tất cả</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniList.map((alumni) => (
              <Link key={alumni.id} href={alumni.link} className="block">
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <Image
                          src={alumni.avatar || "/placeholder.svg"}
                          alt={alumni.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{alumni.name}</h3>
                        <p className="text-primary text-sm">{alumni.position}</p>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <Building className="h-3 w-3 mr-1" />
                          <span>{alumni.company}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>Tốt nghiệp: {alumni.graduationYear}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sự kiện cựu sinh viên */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sự kiện cựu sinh viên</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {alumniEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={400}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">
                          Sự kiện
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                        <Link href={event.link}>{event.title}</Link>
                      </h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                      <Link
                        href={event.link}
                        className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                      >
                        Xem chi tiết
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mạng lưới cựu sinh viên */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Mạng lưới cựu sinh viên</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kết nối với cựu sinh viên</h3>
              <p className="text-gray-600 mb-4">
                Mạng lưới cựu sinh viên Khoa CNTT - ĐH Hàng hải Việt Nam là cầu nối giữa các thế hệ sinh viên, tạo cơ
                hội giao lưu, học hỏi và phát triển. Tham gia mạng lưới để cập nhật thông tin, cơ hội việc làm và các sự
                kiện của Khoa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Nhóm Facebook</h4>
                    <a
                      href="https://facebook.com/groups/cuu-sinh-vien-cntt-vmu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Cựu sinh viên CNTT - VMU
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:alumni@vimaru.edu.vn" className="text-primary hover:underline">
                      alumni@vimaru.edu.vn
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/company/vmu-fit-alumni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      VMU FIT Alumni Network
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Đóng góp cho Khoa</h3>
              <p className="text-gray-600 mb-4">
                Cựu sinh viên có thể đóng góp cho sự phát triển của Khoa CNTT thông qua nhiều hình thức khác nhau:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Chia sẻ kinh nghiệm, kiến thức với sinh viên hiện tại</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tham gia giảng dạy, hướng dẫn đồ án, khóa luận</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hỗ trợ sinh viên thực tập, việc làm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tài trợ học bổng, trang thiết bị cho Khoa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Kết nối Khoa với doanh nghiệp, đối tác</span>
                </li>
              </ul>
              <Button className="mt-4">Đăng ký đóng góp</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
