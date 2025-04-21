import { Mail, MessageCircle, Phone } from "lucide-react"

export function FaqContact() {
  return (
    <div className="bg-blue-50 rounded-xl border border-blue-100 overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Không tìm thấy câu trả lời?</h2>

        <p className="text-gray-600 mb-6">
          Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình, vui lòng liên hệ với chúng tôi qua các kênh sau:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gọi điện</h3>
            <p className="text-gray-600 text-sm mb-2">Gọi cho chúng tôi trong giờ hành chính</p>
            <p className="font-medium text-gray-900">0225.3829.109</p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-2">Gửi email cho chúng tôi</p>
            <p className="font-medium text-gray-900">tuyensinh@vimaru.edu.vn</p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <MessageCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fanpage</h3>
            <p className="text-gray-600 text-sm mb-2">Nhắn tin qua Facebook</p>
            <p className="font-medium text-gray-900">facebook.com/fit.vimaru</p>
          </div>
        </div>
      </div>
    </div>
  )
}
