import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Clock, BookOpen, GraduationCap, Users } from "lucide-react"

export default function StudyInfoPage() {
  // Dữ liệu mẫu cho lịch học
  const scheduleData = [
    {
      id: 1,
      subject: "Lập trình Web nâng cao",
      code: "IT4409",
      time: "07:00 - 09:50",
      day: "Thứ 2",
      room: "A5-301",
      lecturer: "TS. Nguyễn Văn A",
    },
    {
      id: 2,
      subject: "Trí tuệ nhân tạo",
      code: "IT4501",
      time: "13:00 - 15:50",
      day: "Thứ 3",
      room: "A5-402",
      lecturer: "TS. Trần Thị B",
    },
    {
      id: 3,
      subject: "Phân tích và thiết kế hệ thống",
      code: "IT4350",
      time: "07:00 - 09:50",
      day: "Thứ 4",
      room: "A5-301",
      lecturer: "ThS. Lê Văn C",
    },
    {
      id: 4,
      subject: "Công nghệ phần mềm",
      code: "IT4490",
      time: "13:00 - 15:50",
      day: "Thứ 5",
      room: "A5-402",
      lecturer: "PGS.TS. Phạm Văn D",
    },
  ]

  // Dữ liệu mẫu cho thông báo học vụ
  const academicNotices = [
    {
      id: 1,
      title: "Thông báo về việc đăng ký học phần học kỳ 2 năm học 2023-2024",
      date: "15/12/2023",
      excerpt:
        "Phòng Đào tạo thông báo kế hoạch đăng ký học phần học kỳ 2 năm học 2023-2024 cho sinh viên các khóa. Thời gian đăng ký từ ngày 20/12/2023 đến ngày 25/12/2023.",
      link: "/sinh-vien/thong-bao/dang-ky-hoc-phan-hk2-2023-2024",
    },
    {
      id: 2,
      title: "Thông báo lịch thi kết thúc học phần học kỳ 1 năm học 2023-2024",
      date: "10/12/2023",
      excerpt:
        "Phòng Khảo thí và Đảm bảo chất lượng thông báo lịch thi kết thúc học phần học kỳ 1 năm học 2023-2024. Sinh viên xem lịch thi chi tiết tại đây.",
      link: "/sinh-vien/thong-bao/lich-thi-hk1-2023-2024",
    },
    {
      id: 3,
      title: "Thông báo về việc nghỉ Tết Nguyên đán Giáp Thìn 2024",
      date: "05/12/2023",
      excerpt:
        "Trường thông báo lịch nghỉ Tết Nguyên đán Giáp Thìn 2024 cho sinh viên. Thời gian nghỉ từ ngày 07/02/2024 đến hết ngày 18/02/2024.",
      link: "/sinh-vien/thong-bao/nghi-tet-nguyen-dan-2024",
    },
  ]

  // Dữ liệu mẫu cho tài liệu học tập
  const studyMaterials = [
    {
      id: 1,
      title: "Tài liệu môn Lập trình Web nâng cao",
      type: "PDF",
      size: "2.5 MB",
      uploadDate: "01/12/2023",
      link: "/sinh-vien/tai-lieu/lap-trinh-web-nang-cao.pdf",
    },
    {
      id: 2,
      title: "Tài liệu môn Trí tuệ nhân tạo",
      type: "PDF",
      size: "3.2 MB",
      uploadDate: "05/12/2023",
      link: "/sinh-vien/tai-lieu/tri-tue-nhan-tao.pdf",
    },
    {
      id: 3,
      title: "Tài liệu môn Phân tích và thiết kế hệ thống",
      type: "PDF",
      size: "4.1 MB",
      uploadDate: "10/12/2023",
      link: "/sinh-vien/tai-lieu/phan-tich-thiet-ke-he-thong.pdf",
    },
    {
      id: 4,
      title: "Tài liệu môn Công nghệ phần mềm",
      type: "PDF",
      size: "3.8 MB",
      uploadDate: "15/12/2023",
      link: "/sinh-vien/tai-lieu/cong-nghe-phan-mem.pdf",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Thông tin học tập"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Thông tin học tập</h1>
            <p className="text-white/90 max-w-2xl">
              Thông tin về lịch học, lịch thi, thông báo học vụ và tài liệu học tập dành cho sinh viên Khoa Công nghệ
              Thông tin.
            </p>
          </div>
        </div>
      </div>

      {/* Thống kê nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">15</h3>
              <p className="text-blue-600">Môn học đang mở</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800">25</h3>
              <p className="text-green-600">Giảng viên</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-800">450</h3>
              <p className="text-purple-600">Sinh viên đang học</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lịch học */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Lịch học tuần này</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/sinh-vien/hoc-tap/lich-hoc">Xem toàn bộ lịch học</Link>
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Môn học</th>
                  <th className="border px-4 py-2 text-left">Mã HP</th>
                  <th className="border px-4 py-2 text-left">Thời gian</th>
                  <th className="border px-4 py-2 text-left">Thứ</th>
                  <th className="border px-4 py-2 text-left">Phòng</th>
                  <th className="border px-4 py-2 text-left">Giảng viên</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-3 font-medium">{item.subject}</td>
                    <td className="border px-4 py-3">{item.code}</td>
                    <td className="border px-4 py-3">{item.time}</td>
                    <td className="border px-4 py-3">{item.day}</td>
                    <td className="border px-4 py-3">{item.room}</td>
                    <td className="border px-4 py-3">{item.lecturer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Thông báo học vụ */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Thông báo học vụ</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/sinh-vien/hoc-tap/thong-bao">Xem tất cả thông báo</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {academicNotices.map((notice) => (
              <div key={notice.id} className="border-b pb-4 last:border-0">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mr-2">
                    Thông báo
                  </span>
                  <span>{notice.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={notice.link} className="hover:text-primary transition-colors">
                    {notice.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-2">{notice.excerpt}</p>
                <Link
                  href={notice.link}
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Xem chi tiết
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tài liệu học tập */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-primary mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Tài liệu học tập</h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/sinh-vien/hoc-tap/tai-lieu">Xem tất cả tài liệu</Link>
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Tên tài liệu</th>
                  <th className="border px-4 py-2 text-left">Định dạng</th>
                  <th className="border px-4 py-2 text-left">Kích thước</th>
                  <th className="border px-4 py-2 text-left">Ngày đăng</th>
                  <th className="border px-4 py-2 text-left">Tải xuống</th>
                </tr>
              </thead>
              <tbody>
                {studyMaterials.map((material) => (
                  <tr key={material.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-3 font-medium">{material.title}</td>
                    <td className="border px-4 py-3">{material.type}</td>
                    <td className="border px-4 py-3">{material.size}</td>
                    <td className="border px-4 py-3">{material.uploadDate}</td>
                    <td className="border px-4 py-3">
                      <Link
                        href={material.link}
                        className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                      >
                        Tải xuống
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quy chế, quy định */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quy chế, quy định</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/sinh-vien/hoc-tap/quy-che/quy-che-dao-tao"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-start"
            >
              <div className="bg-blue-100 p-2 rounded mr-3">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Quy chế đào tạo</h3>
                <p className="text-sm text-gray-600">Quy chế đào tạo trình độ đại học hệ chính quy</p>
              </div>
            </Link>

            <Link
              href="/sinh-vien/hoc-tap/quy-che/quy-che-cong-tac-sinh-vien"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-start"
            >
              <div className="bg-green-100 p-2 rounded mr-3">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Quy chế công tác sinh viên</h3>
                <p className="text-sm text-gray-600">Quy chế công tác sinh viên đối với chương trình đào tạo đại học</p>
              </div>
            </Link>

            <Link
              href="/sinh-vien/hoc-tap/quy-che/quy-dinh-danh-gia-ket-qua-ren-luyen"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-start"
            >
              <div className="bg-purple-100 p-2 rounded mr-3">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Quy định đánh giá kết quả rèn luyện</h3>
                <p className="text-sm text-gray-600">Quy định về việc đánh giá kết quả rèn luyện của sinh viên</p>
              </div>
            </Link>

            <Link
              href="/sinh-vien/hoc-tap/quy-che/quy-dinh-cong-tac-co-van-hoc-tap"
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-start"
            >
              <div className="bg-orange-100 p-2 rounded mr-3">
                <FileText className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Quy định công tác cố vấn học tập</h3>
                <p className="text-sm text-gray-600">Quy định về công tác cố vấn học tập trong đào tạo theo tín chỉ</p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
