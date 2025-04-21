import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin } from "lucide-react"
import { LAB_IMAGES } from "@/lib/image-paths"

interface LabCardProps {
  name: string
  description: string
  image?: string
  location: string
  manager?: string
  link: string
}

export function LabCard({ name, description, image, location, manager, link }: LabCardProps) {
  // Sử dụng ảnh được cung cấp hoặc mặc định là ảnh phòng thí nghiệm máy tính
  const imageSrc = image || LAB_IMAGES.EQUIPMENT_LAB

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <CardContent className="p-4">
        <Link href={link} className="group">
          <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">{name}</h3>
        </Link>

        <div className="mt-2 space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>

          {manager && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span>Quản lý: {manager}</span>
            </div>
          )}
        </div>

        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{description}</p>

        <Link
          href={link}
          className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
        >
          <span>Xem chi tiết</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </CardContent>
    </Card>
  )
}
