import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Briefcase, ArrowRight, FileText, CheckCircle } from "lucide-react"

export default function InternshipPage() {
  // Dữ liệu mẫu cho các cơ hội thực tập
  const internships = [
    {
      id: 1,
      title: "Thực tập sinh Frontend Developer",
      company: "FPT Software",
      location: "Hải Phòng",
      duration: "3 tháng",
      deadline: "30/12/2023",
      allowance: "5-7 triệu/tháng",
      requirements: [
        "Sinh viên năm cuối ngành CNTT hoặc các ngành liên quan",
        "Có kiến thức cơ bản về HTML, CSS, JavaScript",
        "Có hiểu biết về React, Angular hoặc Vue.js là một lợi thế",
        "Có khả năng làm việc nhóm và giao tiếp tốt",
      ],
      description:
        "FPT Software đang tìm kiếm các sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT để tham gia chương trình thực tập Frontend Developer. Ứng viên sẽ được đào tạo và làm việc với các công nghệ hiện đại như React, Angular, Vue.js...",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/thuc-tap/fpt-frontend-developer",
    },
    {
      id: 2,
      title: "Thực tập sinh Backend Developer",
      company: "VNPT Technology",
      location: "Hà Nội, Hải Phòng",
      duration: "3-6 tháng",
      deadline: "15/01/2024",
      allowance: "6-8 triệu/tháng",
      requirements: [
        "Sinh viên năm cuối ngành CNTT hoặc các ngành liên quan",
        "Có kiến thức cơ bản về Java, Python hoặc NodeJS",
        "Có hiểu biết về cơ sở dữ liệu SQL/NoSQL",
        "Có khả năng làm việc nhóm và giao tiếp tốt",
      ],
      description:
        "VNPT Technology đang tìm kiếm các sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT để tham gia chương trình thực tập Backend Developer. Ứng viên sẽ được đào tạo và làm việc với các công nghệ hiện đại như Java Spring Boot, Python Django, NodeJS...",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/thuc-tap/vnpt-backend-developer",
    },
    {
      id: 3,
      title: "Thực tập sinh Mobile Developer",
      company: "Viettel Digital",
      location: "Hà Nội",
      duration: "3-6 tháng",
      deadline: "20/01/2024",
      allowance: "7-9 triệu/tháng",
      requirements: [
        "Sinh viên năm cuối ngành CNTT hoặc các ngành liên quan",
        "Có kiến thức cơ bản về Java, Kotlin hoặc Swift",
        "Có hiểu biết về Android hoặc iOS development",
        "Có khả năng làm việc nhóm và giao tiếp tốt",
      ],
      description:
        "Viettel Digital đang tìm kiếm các sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT để tham gia chương trình thực tập Mobile Developer. Ứng viên sẽ được đào tạo và làm việc với các công nghệ hiện đại như Android, iOS, React Native, Flutter...",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/thuc-tap/viettel-mobile-developer",
    },
    {
      id: 4,
      title: "Thực tập sinh QA/Tester",
      company: "CMC Technology",
      location: "Hải Phòng",
      duration: "3 tháng",
      deadline: "25/01/2024",
      allowance: "5-6 triệu/tháng",
      requirements: [
        "Sinh viên năm cuối ngành CNTT hoặc các ngành liên quan",
        "Có kiến thức cơ bản về quy trình phát triển phần mềm",
        "Có hiểu biết về kiểm thử phần mềm là một lợi thế",
        "Có khả năng làm việc nhóm và giao tiếp tốt",
      ],
      description:
        "CMC Technology đang tìm kiếm các sinh viên năm cuối hoặc mới tốt nghiệp ngành CNTT để tham gia chương trình thực tập QA/Tester. Ứng viên sẽ được đào tạo và làm việc với các công cụ kiểm thử hiện đại, tham gia vào quy trình đảm bảo chất lượng phần mềm.",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/thuc-tap/cmc-qa-tester",
    },
  ]

  // Dữ liệu mẫu cho quy trình thực tập
  const internshipProcess = [
    {
      id: 1,
      title: "Đăng ký thực tập",
      description:
        "Sinh viên đăng ký thực tập tại Văn phòng Khoa hoặc qua hệ thống đăng ký trực tuyến. Thời gian đăng ký thường bắt đầu từ tháng 11 hàng năm cho học kỳ 2.",
    },
    {
      id: 2,
      title: "Phân công giảng viên hướng dẫn",
      description:
        "Khoa sẽ phân công giảng viên hướng dẫn cho từng sinh viên dựa trên nguyện vọng và chuyên môn. Sinh viên sẽ được thông báo về giảng viên hướng dẫn qua email.",
    },
    {
      id: 3,
      title: "Liên hệ doanh nghiệp",
      description:
        "Sinh viên chủ động liên hệ với doanh nghiệp để xin thực tập hoặc đăng ký vào các chương trình thực tập do Khoa giới thiệu. Khoa sẽ cung cấp giấy giới thiệu nếu cần thiết.",
    },
    {
      id: 4,
      title: "Thực hiện thực tập",
      description:
        "Sinh viên thực hiện thực tập tại doanh nghiệp theo kế hoạch đã được phê duyệt. Trong quá trình thực tập, sinh viên cần giữ liên lạc thường xuyên với giảng viên hướng dẫn.",
    },
    {
      id: 5,
      title: "Viết báo cáo thực tập",
      description:
        "Sau khi kết thúc thực tập, sinh viên viết báo cáo thực tập theo mẫu quy định và nộp cho giảng viên hướng dẫn để đánh giá.",
    },
    {
      id: 6,
      title: "Bảo vệ thực tập",
      description:
        "Sinh viên tham gia buổi bảo vệ thực tập trước hội đồng đánh giá. Điểm thực tập sẽ được tính dựa trên báo cáo, nhận xét của doanh nghiệp và kết quả bảo vệ.",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Thực tập"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Thực tập sinh viên</h1>
            <p className="text-white/90 max-w-2xl">
              Thông tin về chương trình thực tập, quy trình đăng ký và các cơ hội thực tập dành cho sinh viên Khoa Công
              nghệ Thông tin.
            </p>
          </div>
        </div>
      </div>

      {/* Quy trình thực tập */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quy trình thực tập</h2>
          <div className="relative">
            {/* Đường kẻ dọc */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              {internshipProcess.map((step, index) => (
                <div key={step.id} className="relative flex items-start">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white z-10">
                    {index + 1}
                  </div>
                  <div className="ml-10">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thông tin và tài liệu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin thực tập</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Thời gian thực tập</h3>
                  <p className="text-gray-600">
                    Thực tập thường diễn ra trong học kỳ 2 của năm thứ 4, kéo dài từ 8-12 tuần tùy theo chương trình đào
                    tạo.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Điều kiện thực tập</h3>
                  <p className="text-gray-600">
                    Sinh viên cần hoàn thành các môn học tiên quyết và có số tín chỉ tích lũy đạt yêu cầu theo quy định
                    của Khoa.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Đánh giá thực tập</h3>
                  <p className="text-gray-600">
                    Điểm thực tập được đánh giá dựa trên báo cáo thực tập, nhận xét của doanh nghiệp và kết quả bảo vệ
                    trước hội đồng.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Hỗ trợ từ Khoa</h3>
                  <p className="text-gray-600">
                    Khoa sẽ hỗ trợ sinh viên trong việc tìm kiếm cơ hội thực tập, cung cấp giấy giới thiệu và phân công
                    giảng viên hướng dẫn.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tài liệu thực tập</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sinh-vien/thuc-tap/tai-lieu/quy-dinh-thuc-tap.pdf"
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-red-100 p-2 rounded mr-3">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Quy định thực tập</h3>
                    <p className="text-sm text-gray-600">PDF - 1.2 MB</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/sinh-vien/thuc-tap/tai-lieu/mau-bao-cao-thuc-tap.docx"
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Mẫu báo cáo thực tập</h3>
                    <p className="text-sm text-gray-600">DOCX - 0.8 MB</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/sinh-vien/thuc-tap/tai-lieu/mau-nhan-xet-doanh-nghiep.docx"
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-green-100 p-2 rounded mr-3">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Mẫu nhận xét của doanh nghiệp</h3>
                    <p className="text-sm text-gray-600">DOCX - 0.5 MB</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/sinh-vien/thuc-tap/tai-lieu/huong-dan-viet-bao-cao.pdf"
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-purple-100 p-2 rounded mr-3">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Hướng dẫn viết báo cáo thực tập</h3>
                    <p className="text-sm text-gray-600">PDF - 1.5 MB</p>
                  </div>
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Cơ hội thực tập */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Cơ hội thực tập</h2>
            <Button variant="outline" asChild>
              <Link href="/sinh-vien/thuc-tap/co-hoi">Xem tất cả</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <Card key={internship.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        src={internship.image || "/placeholder.svg"}
                        alt={internship.company}
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">
                          {internship.company}
                        </span>
                        <span className="text-gray-500 text-xs flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Hạn nộp: {internship.deadline}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                        <Link href={internship.link}>{internship.title}</Link>
                      </h3>
                      <div className="flex flex-col space-y-1 text-gray-600 mb-2 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-1" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 text-primary mr-1" />
                          <span>{internship.allowance}</span>
                        </div>
                      </div>
                      <Link
                        href={internship.link}
                        className="text-primary hover:text-primary/80 font-medium inline-flex items-center text-sm"
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

      {/* Doanh nghiệp đối tác */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Doanh nghiệp đối tác</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "FPT Software",
              "VNPT Technology",
              "Viettel Digital",
              "CMC Technology",
              "IBM Vietnam",
              "Samsung Vietnam",
              "Microsoft Vietnam",
              "Misa",
            ].map((company, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24 hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700 font-medium text-center">{company}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
