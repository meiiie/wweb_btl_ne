import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-white">Thông tin liên hệ</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start">
          <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-gray-200">{CONTACT_INFO.address}</span>
        </li>
        <li className="flex items-center">
          <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
          <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`} className="text-gray-200 hover:text-white">
            {CONTACT_INFO.phone}
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-200 hover:text-white">
            {CONTACT_INFO.email}
          </a>
        </li>
        <li className="flex items-center">
          <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
          <span className="text-gray-200">{CONTACT_INFO.workingHours}</span>
        </li>
      </ul>
    </div>
  )
}
