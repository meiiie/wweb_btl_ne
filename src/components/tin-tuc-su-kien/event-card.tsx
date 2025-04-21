import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { CalendarIcon, MapPinIcon } from "lucide-react"

export interface EventCardProps {
  id: number | string
  title: string
  excerpt: string
  startDate: string
  endDate?: string
  location: string
  image: string
  link: string
  isUpcoming?: boolean
}

export function EventCard({
  id,
  title,
  excerpt,
  startDate,
  endDate,
  location,
  image,
  link,
  isUpcoming = false,
}: EventCardProps) {
  return (
    <div
      className={`border-b pb-8 last:border-b-0 ${isUpcoming ? "bg-orange-50 p-4 rounded-lg border border-orange-100" : ""}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative h-60 md:h-48 rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=400&width=600"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            {isUpcoming && (
              <div className="absolute top-0 left-0 bg-[#ff9800] text-white text-xs font-bold px-3 py-1 m-2 rounded">
                Sắp diễn ra
              </div>
            )}
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <CalendarIcon className="h-4 w-4 mr-2 text-[#0056a6]" />
              <span>
                {formatDate(startDate)}
                {endDate ? ` - ${formatDate(endDate)}` : ""}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPinIcon className="h-4 w-4 mr-2 text-[#0056a6]" />
              <span>{location}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-[#0056a6] transition-colors">
            <Link href={link}>{title}</Link>
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <Link
            href={link}
            className="inline-block bg-[#0056a6] hover:bg-[#00408c] text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  )
}
