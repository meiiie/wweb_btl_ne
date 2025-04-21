import { Mail, MapPin, Phone } from "lucide-react"

export function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-300" />
          <span className="text-gray-200">
            Phòng 116B, Nhà A1, Đại học Hàng hải Việt Nam, 484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng
          </span>
        </li>
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-gray-300" />
          <a href="tel:+842253829111" className="text-gray-200 hover:text-white transition-colors">
            (0225) 3829 111
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-gray-300" />
          <a href="mailto:fit@vimaru.edu.vn" className="text-gray-200 hover:text-white transition-colors">
            fit@vimaru.edu.vn
          </a>
        </li>
      </ul>
    </div>
  )
}
