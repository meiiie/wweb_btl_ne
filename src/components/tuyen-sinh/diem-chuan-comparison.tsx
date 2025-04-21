export function DiemChuanComparison() {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">So sánh điểm chuẩn các ngành</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Công nghệ thông tin</h3>
              <div className="text-2xl font-bold text-blue-600">23.5</div>
              <p className="text-xs text-gray-500 mt-1">Điểm chuẩn năm 2022</p>
              <div className="flex items-center mt-2">
                <div className="text-xs font-medium text-green-600">+0.75</div>
                <div className="text-xs text-gray-500 ml-1">so với 2021</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Công nghệ phần mềm</h3>
              <div className="text-2xl font-bold text-green-600">24.2</div>
              <p className="text-xs text-gray-500 mt-1">Điểm chuẩn năm 2022</p>
              <div className="flex items-center mt-2">
                <div className="text-xs font-medium text-green-600">+0.7</div>
                <div className="text-xs text-gray-500 ml-1">so với 2021</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Hệ thống thông tin</h3>
              <div className="text-2xl font-bold text-orange-600">22.8</div>
              <p className="text-xs text-gray-500 mt-1">Điểm chuẩn năm 2022</p>
              <div className="flex items-center mt-2">
                <div className="text-xs font-medium text-green-600">+0.8</div>
                <div className="text-xs text-gray-500 ml-1">so với 2021</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Kỹ thuật máy tính</h3>
              <div className="text-2xl font-bold text-purple-600">22.5</div>
              <p className="text-xs text-gray-500 mt-1">Điểm chuẩn năm 2022</p>
              <div className="flex items-center mt-2">
                <div className="text-xs font-medium text-green-600">+0.7</div>
                <div className="text-xs text-gray-500 ml-1">so với 2021</div>
              </div>
            </div>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600">
            <p>
              Qua bảng so sánh điểm chuẩn các ngành của Khoa CNTT - VMU trong 5 năm gần đây, có thể thấy điểm chuẩn có
              xu hướng tăng đều qua các năm, phản ánh sự quan tâm ngày càng lớn của thí sinh đối với các ngành CNTT.
            </p>

            <p>
              Ngành Công nghệ phần mềm luôn có điểm chuẩn cao nhất, tiếp theo là Công nghệ thông tin, Hệ thống thông tin
              và Kỹ thuật máy tính. Điều này phù hợp với xu hướng thị trường lao động hiện nay khi nhu cầu về nhân lực
              phát triển phần mềm ngày càng cao.
            </p>

            <p>
              Dự kiến điểm chuẩn năm 2023 sẽ tiếp tục tăng nhẹ do nhu cầu xã hội về nhân lực CNTT vẫn đang ở mức cao và
              sự quan tâm của thí sinh đối với ngành học này ngày càng lớn.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
