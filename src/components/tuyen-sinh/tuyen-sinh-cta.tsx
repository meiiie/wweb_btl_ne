import Link from "next/link"
import { ArrowRight, FileText, HelpCircle } from "lucide-react"

export function TuyenSinhCTA() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Link
        href="/tuyen-sinh/thong-tin"
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          Thông tin tuyển sinh
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Xem chi tiết về các ngành đào tạo, chỉ tiêu và phương thức xét tuyển.
        </p>
        <span className="text-blue-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
          Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </Link>

      <Link
        href="/tuyen-sinh/diem-chuan"
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          Điểm chuẩn các năm
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Tra cứu điểm chuẩn trúng tuyển các ngành của Khoa CNTT qua các năm.
        </p>
        <span className="text-blue-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
          Xem điểm chuẩn <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </Link>

      <Link
        href="/tuyen-sinh/faq"
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
      >
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <HelpCircle className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          Câu hỏi thường gặp
        </h3>
        <p className="text-gray-600 text-sm mb-4">Giải đáp các thắc mắc thường gặp về tuyển sinh Khoa CNTT.</p>
        <span className="text-blue-600 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
          Xem câu hỏi <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </Link>
    </div>
  )
}
