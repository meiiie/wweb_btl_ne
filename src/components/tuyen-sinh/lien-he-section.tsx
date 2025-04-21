import { Mail, MapPin, Phone } from "lucide-react"

export function LienHeSection() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Thông tin liên hệ</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Địa chỉ</p>
                <p className="text-blue-100">
                  Phòng 116B, Nhà A1, Đại học Hàng hải Việt Nam, 484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-blue-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Điện thoại</p>
                <p className="text-blue-100">Văn phòng Khoa: 0225.3829.109</p>
                <p className="text-blue-100">Hotline tuyển sinh: 0225.3829.109 / 0912.345.678</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-blue-200 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-blue-100">khoacntt@vimaru.edu.vn</p>
                <p className="text-blue-100">tuyensinh@vimaru.edu.vn</p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Gửi thông tin liên hệ</h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-blue-300 border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-blue-300 border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-blue-300 border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <textarea
                  placeholder="Nội dung"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-blue-300 border-opacity-30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-5 py-2 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors"
              >
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
