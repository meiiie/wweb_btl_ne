import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Award, ArrowRight } from "lucide-react"

interface ProgramCardProps {
  title: string
  code: string
  level: string
  duration: string
  description: string
  image: string
  slug: string
}

export function ProgramCard({ title, code, level, duration, description, image, slug }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Award className="w-4 h-4 mr-2 text-primary" />
            <span>Mã ngành: {code}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-primary" />
            <span>Bậc: {level}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>Thời gian: {duration}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <Link
          href={`/dao-tao/chuong-trinh/${slug}`}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Xem chi tiết
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
