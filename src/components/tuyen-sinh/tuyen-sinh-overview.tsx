import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"

export function TuyenSinhOverview() {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuyển sinh Khoa Công nghệ thông tin</h2>

        <div className="prose prose-blue max-w-none text-gray-600">
          <p>
            Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam là đơn vị đào tạo uy tín với hơn 25 năm kinh nghiệm
            trong lĩnh vực CNTT. Với đội ngũ giảng viên có trình độ cao, cơ sở vật chất hiện đại và chương trình đào tạo
            cập nhật theo xu hướng công nghệ mới nhất, Khoa CNTT VMU là lựa chọn lý tưởng cho các bạn trẻ đam mê công
            nghệ.
          </p>

          <p>
            Sinh viên tốt nghiệp từ Khoa CNTT có cơ hội việc làm rộng mở tại các công ty phần mềm, tập đoàn công nghệ
            trong và ngoài nước với mức lương khởi điểm hấp dẫn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 rounded-lg p-5">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Các ngành đào tạo</h3>
            <p className="text-gray-600 text-sm mb-3">
              Khoa CNTT đào tạo 4 chuyên ngành chính: Công nghệ thông tin, Công nghệ phần mềm, Hệ thống thông tin và Kỹ
              thuật máy tính.
            </p>
            <Link
              href="/tuyen-sinh/thong-tin"
              className="text-blue-600 text-sm font-medium inline-flex items-center hover:text-blue-800"
            >
              Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-blue-50 rounded-lg p-5">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phương thức xét tuyển</h3>
            <p className="text-gray-600 text-sm mb-3">
              Nhiều phương thức xét tuyển linh hoạt: Điểm thi THPT, học bạ, đánh giá năng lực và xét tuyển thẳng cho học
              sinh giỏi.
            </p>
            <Link
              href="/tuyen-sinh/thong-tin"
              className="text-blue-600 text-sm font-medium inline-flex items-center hover:text-blue-800"
            >
              Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-blue-50 rounded-lg p-5">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Chỉ tiêu tuyển sinh</h3>
            <p className="text-gray-600 text-sm mb-3">
              Năm 2023, Khoa CNTT có 300 chỉ tiêu cho các ngành đào tạo. Điểm chuẩn dao động từ 22-24 điểm tùy ngành.
            </p>
            <Link
              href="/tuyen-sinh/diem-chuan"
              className="text-blue-600 text-sm font-medium inline-flex items-center hover:text-blue-800"
            >
              Xem điểm chuẩn <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-80 md:h-96">
        <Image
          src="/images/campus/aerial-view.jpg"
          alt="Khuôn viên Đại học Hàng hải Việt Nam"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
