import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PartnerCardProps {
  id: string
  name: string
  logo: string
  description: string
  type: "doanh-nghiep" | "quoc-te"
  year: number
}

export function PartnerCard({ id, name, logo, description, type, year }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 mr-4 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
            <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain p-2" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">{name}</h3>
            <p className="text-sm text-gray-500">Hợp tác từ năm {year}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{description}</p>
        <Link
          href={`/hop-tac/${type}/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Xem chi tiết
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
