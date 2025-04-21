import { CheckCircle } from "lucide-react"

export function PhuongThucXetTuyen() {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Phương thức xét tuyển</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Phương thức 1: Xét tuyển thẳng</h3>

            <div className="space-y-2">
              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Thí sinh đạt giải trong kỳ thi học sinh giỏi quốc gia, quốc tế các môn Toán, Vật lý, Hóa học, Tin học.
                </p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Thí sinh có chứng chỉ quốc tế SAT từ 1200/1600 trở lên.</p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Thí sinh có chứng chỉ tiếng Anh quốc tế IELTS từ 6.0 trở lên hoặc tương đương và có điểm trung bình
                  môn Toán lớp 12 từ 8.0 trở lên.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Phương thức 2: Xét tuyển dựa trên kết quả kỳ thi tốt nghiệp THPT
            </h3>

            <div className="space-y-2">
              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Xét tuyển dựa trên điểm thi tốt nghiệp THPT năm 2023.</p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Tổ hợp xét tuyển: A00, A01, D01, D07.</p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Điểm xét tuyển = Tổng điểm 3 môn theo tổ hợp + Điểm ưu tiên (khu vực, đối tượng).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Phương thức 3: Xét tuyển dựa trên học bạ THPT</h3>

            <div className="space-y-2">
              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Xét tuyển dựa trên kết quả học tập THPT (học bạ).</p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Điểm xét tuyển = Tổng điểm trung bình 3 môn theo tổ hợp lớp 12 + Điểm ưu tiên.
                </p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Điều kiện: Học lực lớp 12 đạt loại Khá trở lên hoặc điểm xét tốt nghiệp THPT đạt từ 6.5 trở lên.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Phương thức 4: Xét tuyển dựa trên kết quả kỳ thi đánh giá năng lực
            </h3>

            <div className="space-y-2">
              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  Xét tuyển dựa trên kết quả kỳ thi đánh giá năng lực của ĐHQG Hà Nội hoặc ĐHQG TP.HCM năm 2023.
                </p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Điểm xét tuyển = Điểm bài thi đánh giá năng lực.</p>
              </div>

              <div className="flex">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Điểm tối thiểu để đăng ký xét tuyển: 80/150 điểm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
