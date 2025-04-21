import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, BookOpen, Award } from "lucide-react"

interface StaffCardProps {
  name: string
  position: string
  degree?: string
  email?: string
  phone?: string
  image: string
  link: string
  researchAreas?: string[]
  courses?: string[]
}

export function StaffCard({
  name,
  position,
  degree,
  email,
  phone,
  image,
  link,
  researchAreas,
  courses,
}: StaffCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 w-full md:h-auto md:w-1/3">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex-1 p-4">
            <Link href={link} className="group">
              <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">
                {name}
                {degree && <span className="ml-2 text-base font-normal text-muted-foreground">({degree})</span>}
              </h3>
            </Link>
            <p className="mb-3 text-muted-foreground">{position}</p>

            <div className="mt-2 space-y-1">
              {email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${email}`} className="text-sm hover:underline">
                    {email}
                  </a>
                </div>
              )}

              {phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${phone}`} className="text-sm hover:underline">
                    {phone}
                  </a>
                </div>
              )}
            </div>

            {researchAreas && researchAreas.length > 0 && (
              <div className="mt-3">
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Hướng nghiên cứu:</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{researchAreas.join(", ")}</p>
              </div>
            )}

            {courses && courses.length > 0 && (
              <div className="mt-3">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Giảng dạy:</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{courses.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
