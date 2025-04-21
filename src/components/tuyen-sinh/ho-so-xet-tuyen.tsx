import { FileText } from "lucide-react"

export function HoSoXetTuyen() {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hồ sơ xét tuyển</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              Hồ sơ xét tuyển thẳng
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Phiếu đăng ký xét tuyển thẳng (theo mẫu của Trường).</li>
              <li>Bản sao công chứng Giấy chứng nhận đạt giải Kỳ thi học sinh giỏi.</li>
              <li>Bản sao công chứng Học bạ THPT.</li>
              <li>Bản sao công chứng Chứng minh nhân dân/Căn cước công dân.</li>
              <li>Bản sao công chứng các giấy tờ ưu tiên (nếu có).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              Hồ sơ xét tuyển dựa trên kết quả thi tốt nghiệp THPT
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Đăng ký xét tuyển trên Cổng thông tin tuyển sinh của Bộ Giáo dục và Đào tạo.</li>
              <li>Thực hiện theo hướng dẫn của Bộ Giáo dục và Đào tạo.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              Hồ sơ xét tuyển dựa trên học bạ THPT
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Phiếu đăng ký xét tuyển (theo mẫu của Trường).</li>
              <li>Bản sao công chứng Học bạ THPT.</li>
              <li>Bản sao công chứng Giấy chứng nhận tốt nghiệp tạm thời hoặc Bằng tốt nghiệp THPT.</li>
              <li>Bản sao công chứng Chứng minh nhân dân/Căn cước công dân.</li>
              <li>Bản sao công chứng các giấy tờ ưu tiên (nếu có).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              Hồ sơ xét tuyển dựa trên kết quả kỳ thi đánh giá năng lực
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Phiếu đăng ký xét tuyển (theo mẫu của Trường).</li>
              <li>Bản sao công chứng Giấy chứng nhận kết quả thi đánh giá năng lực.</li>
              <li>Bản sao công chứng Học bạ THPT.</li>
              <li>Bản sao công chứng Giấy chứng nhận tốt nghiệp tạm thời hoặc Bằng tốt nghiệp THPT.</li>
              <li>Bản sao công chứng Chứng minh nhân dân/Căn cước công dân.</li>
              <li>Bản sao công chứng các giấy tờ ưu tiên (nếu có).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
