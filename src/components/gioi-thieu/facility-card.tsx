import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FACILITY_IMAGES } from "@/lib/image-paths"

interface FacilityCardProps {
  title: string
  description: string
  image?: string
  className?: string
}

export function FacilityCard({ title, description, image, className }: FacilityCardProps) {
  // Sử dụng ảnh được cung cấp hoặc mặc định là ảnh lớp học
  const imageSrc = image || FACILITY_IMAGES.CLASSROOM

  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <div className="relative h-48">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`Hình ảnh ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
