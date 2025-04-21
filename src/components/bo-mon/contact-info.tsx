import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

interface ContactInfoProps {
  email: string
  phone: string
  address: string
  workingHours: string
}

export function ContactInfo({ email, phone, address, workingHours }: ContactInfoProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <h3 className="mb-4 text-xl font-bold text-primary">Thông tin liên hệ</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <a href={`mailto:${email}`} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                {email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Điện thoại</p>
              <a href={`tel:${phone}`} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Địa chỉ</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Giờ làm việc</p>
              <p className="text-sm text-muted-foreground">{workingHours}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
