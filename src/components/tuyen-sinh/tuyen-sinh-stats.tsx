export function TuyenSinhStats() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden">
      <div className="px-6 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-10">Khoa CNTT - VMU trong con số</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
            <p className="text-blue-100 text-sm md:text-base">Năm đào tạo</p>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
            <p className="text-blue-100 text-sm md:text-base">Chuyên ngành đào tạo</p>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <p className="text-blue-100 text-sm md:text-base">Sinh viên có việc làm</p>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <p className="text-blue-100 text-sm md:text-base">Đối tác doanh nghiệp</p>
          </div>
        </div>
      </div>
    </div>
  )
}
