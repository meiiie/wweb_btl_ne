import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Search, Filter, ArrowRight, FileText } from "lucide-react"

export default function ScholarshipPage() {
  // Dữ liệu mẫu cho học bổng
  const scholarships = [
    {
      id: 1,
      title: "Học bổng khuyến khích học tập học kỳ 1 năm học 2023-2024",
      type: "Học bổng khuyến khích học tập",
      amount: "3.000.000 - 5.000.000 VNĐ",
      deadline: "30/12/2023",
      eligibility: "Sinh viên có kết quả học tập và rèn luyện từ khá trở lên",
      description:
        "Học bổng khuyến khích học tập được xét cấp cho sinh viên có kết quả học tập và rèn luyện từ khá trở lên. Mức học bổng tùy thuộc vào kết quả học tập và rèn luyện của sinh viên.",
      link: "/sinh-vien/hoc-bong/khuyen-khich-hoc-tap-hk1-2023-2024",
    },
    {
      id: 2,
      title: "Học bổng Viettel 2023",
      type: "Học bổng doanh nghiệp",
      amount: "10.000.000 VNĐ",
      deadline: "15/01/2024",
      eligibility: "Sinh viên ngành CNTT có kết quả học tập xuất sắc",
      description:
        "Tập đoàn Viettel tài trợ học bổng cho sinh viên ngành CNTT có kết quả học tập xuất sắc, có nghiên cứu khoa học hoặc các sản phẩm công nghệ tiêu biểu.",
      link: "/sinh-vien/hoc-bong/viettel-2023",
    },
    {
      id: 3,
      title: "Học bổng FPT 2023",
      type: "Học bổng doanh nghiệp",
      amount: "15.000.000 VNĐ",
      deadline: "20/01/2024",
      eligibility: "Sinh viên năm 3, 4 ngành CNTT có kết quả học tập tốt",
      description:
        "Tập đoàn FPT tài trợ học bổng cho sinh viên năm 3, 4 ngành CNTT có kết quả học tập tốt, có định hướng làm việc trong lĩnh vực công nghệ thông tin.",
      link: "/sinh-vien/hoc-bong/fpt-2023",
    },
    {
      id: 4,
      title: "Học bổng VNPT 2023",
      type: "Học bổng doanh nghiệp",
      amount: "12.000.000 VNĐ",
      deadline: "25/01/2024",
      eligibility: "Sinh viên ngành CNTT có kết quả học tập khá trở lên",
      description:
        "Tập đoàn VNPT tài trợ học bổng cho sinh viên ngành CNTT có kết quả học tập khá trở lên, có định hướng làm việc trong lĩnh vực viễn thông và công nghệ thông tin.",
      link: "/sinh-vien/hoc-bong/vnpt-2023",
    },
    {
      id: 5,
      title: "Học bổng Samsung 2023",
      type: "Học bổng doanh nghiệp",
      amount: "20.000.000 VNĐ",
      deadline: "30/01/2024",
      eligibility: "Sinh viên có kết quả học tập xuất sắc và có nghiên cứu khoa học",
      description:
        "Tập đoàn Samsung tài trợ học bổng cho sinh viên có kết quả học tập xuất sắc và có nghiên cứu khoa học trong lĩnh vực công nghệ thông tin, điện tử viễn thông.",
      link: "/sinh-vien/hoc-bong/samsung-2023",
    },
    {
      id: 6,
      title: "Học bổng Vingroup 2023",
      type: "Học bổng doanh nghiệp",
      amount: "25.000.000 VNĐ",
      deadline: "05/02/2024",
      eligibility: "Sinh viên có kết quả học tập xuất sắc và có nghiên cứu khoa học",
      description:
        "Tập đoàn Vingroup tài trợ học bổng cho sinh viên có kết quả học tập xuất sắc và có nghiên cứu khoa học trong lĩnh vực công nghệ thông tin, trí tuệ nhân tạo.",
      link: "/sinh-vien/hoc-bong/vingroup-2023",
    },
  ]

  // Dữ liệu mẫu cho các loại học bổng
  const scholarshipTypes = [
    { id: 1, name: "Tất cả", count: 12 },
    { id: 2, name: "Học bổng khuyến khích học tập", count: 3 },
    { id: 3, name: "Học bổng doanh nghiệp", count: 5 },
    { id: 4, name: "Học bổng tài năng", count: 2 },
    { id: 5, name: "Học bổng nghiên cứu", count: 1 },
    { id: 6, name: "Học bổng khó khăn", count: 1 },
  ]

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Học bổng"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Học bổng</h1>
            <p className="text-white/90 max-w-2xl">
              Thông tin về các loại học bổng dành cho sinh viên Khoa Công nghệ Thông tin, bao gồm học bổng khuyến khích
              học tập và học bổng tài trợ từ các doanh nghiệp.
            </p>
          </div>
        </div>
      </div>

      {/* Tìm kiếm và lọc */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm học bổng..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select className="pl-10 pr-8 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white">
                <option value="">Tất cả loại học bổng</option>
                <option value="khuyen-khich">Học bổng khuyến khích học tập</option>
                <option value="doanh-nghiep">Học bổng doanh nghiệp</option>
                <option value="tai-nang">Học bổng tài năng</option>
                <option value="nghien-cuu">Học bổng nghiên cứu</option>
                <option value="kho-khan">Học bổng khó khăn</option>
              </select>
            </div>
            <Button>Tìm kiếm</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-primary border-b pb-2">Loại học bổng</h2>
              <ul className="space-y-2">
                {scholarshipTypes.map((type) => (
                  <li key={type.id}>
                    <Link
                      href={`/sinh-vien/hoc-bong/loai/${type.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <span>{type.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {type.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-primary border-b pb-2">Thông tin hữu ích</h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/sinh-vien/hoc-bong/huong-dan-xet-hoc-bong"
                    className="flex items-center text-gray-700 hover:text-primary"
                  >
                    <div className="bg-blue-100 p-2 rounded mr-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Hướng dẫn xét học bổng khuyến khích học tập</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sinh-vien/hoc-bong/mau-don-xin-hoc-bong"
                    className="flex items-center text-gray-700 hover:text-primary"
                  >
                    <div className="bg-green-100 p-2 rounded mr-3">
                      <FileText className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Mẫu đơn xin học bổng</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sinh-vien/hoc-bong/quy-dinh-hoc-bong"
                    className="flex items-center text-gray-700 hover:text-primary"
                  >
                    <div className="bg-purple-100 p-2 rounded mr-3">
                      <FileText className="h-4 w-4 text-purple-600" />
                    </div>
                    <span>Quy định về học bổng</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Danh sách học bổng */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">
                        {scholarship.type}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Hạn nộp: {scholarship.deadline}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                      <Link href={scholarship.link}>{scholarship.title}</Link>
                    </h3>
                    <div className="flex items-center mb-3">
                      <Award className="h-4 w-4 text-primary mr-1" />
                      <span className="text-gray-700 font-medium">{scholarship.amount}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{scholarship.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Điều kiện:</span>
                        <span className="text-sm text-gray-600 ml-1">{scholarship.eligibility}</span>
                      </div>
                      <Link
                        href={scholarship.link}
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

          {/* Phân trang */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-1">
              <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
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
              <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
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
        </div>
      </div>
    </div>
  )
}
