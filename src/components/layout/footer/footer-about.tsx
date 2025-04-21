import Image from "next/image"
import { Facebook, Youtube } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

export function FooterAbout() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative h-12 w-12 bg-white rounded-full p-1">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Logo Khoa CNTT"
            width={48}
            height={48}
            className="object-contain"
            height={48}
          />
        </div>
        <div>
          <div className="font-bold text-lg leading-tight">KHOA CNTT</div>
          <div className="text-xs opacity-80">ĐH HÀNG HẢI VIỆT NAM</div>
        </div>
      </div>
      <p className="text-sm mb-4 text-gray-200">
        Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam là đơn vị đào tạo và nghiên cứu hàng đầu trong lĩnh
        vực CNTT tại miền Bắc Việt Nam.
      </p>
      <div className="flex space-x-3">
        <a
          href={SOCIAL_LINKS.facebook}
          className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size={18} />
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href={SOCIAL_LINKS.youtube}
          className="bg-white text-primary p-2 rounded-full hover:bg-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube size={18} />
          <span className="sr-only">Youtube</span>
        </a>
      </div>
    </div>
  )
}
