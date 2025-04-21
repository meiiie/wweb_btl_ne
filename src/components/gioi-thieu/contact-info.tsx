"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT_INFO } from "@/lib/constants"

export function ContactInfo() {
  return (
    <Card className="bg-primary text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-2" id="contact-info">
          Thông tin liên hệ
        </h2>
        <div className="space-y-4" aria-labelledby="contact-info">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <address className="text-gray-200 text-sm not-italic">{CONTACT_INFO.address}</address>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 flex-shrink-0" aria-hidden="true" />
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
              className="text-gray-200 hover:text-white text-sm"
              aria-label={`Điện thoại: ${CONTACT_INFO.phone}`}
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 flex-shrink-0" aria-hidden="true" />
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-gray-200 hover:text-white text-sm"
              aria-label={`Email: ${CONTACT_INFO.email}`}
            >
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 flex-shrink-0" aria-hidden="true" />
            <span className="text-gray-200 text-sm">
              <span className="sr-only">Giờ làm việc: </span>
              {CONTACT_INFO.workingHours}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
