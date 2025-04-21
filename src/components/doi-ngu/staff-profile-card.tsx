import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Award, BookOpen, MapPin, ExternalLink } from "lucide-react"

export interface StaffProfileProps {
  id: string
  name: string
  position: string
  department?: string
  degree?: string
  email?: string
  phone?: string
  office?: string
  image: string
  researchAreas?: string[]
  courses?: string[]
  publications?: number
  bio?: string
  website?: string
  featured?: boolean
}

export function StaffProfileCard({
  id,
  name,
  position,
  department,
  degree,
  email,
  phone,
  office,
  image,
  researchAreas,
  courses,
  publications,
  website,
  featured = false,
}: StaffProfileProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-md ${featured ? "border-primary/20 bg-primary/5" : ""}`}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-60 w-full md:h-auto md:w-2/5">
            <Image
              src={image || "/placeholder.svg?height=300&width=300"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="flex-1 p-5">
            <Link href={`/doi-ngu/giang-vien/${id}`} className="group">
              <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">
                {name}
                {degree && <span className="ml-2 text-base font-normal text-muted-foreground">({degree})</span>}
              </h3>
            </Link>
            <p className="mb-3 text-muted-foreground">{position}</p>
            {department && <p className="mb-3 text-sm text-muted-foreground">{department}</p>}

            <div className="mt-3 space-y-2">
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

              {office && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{office}</span>
                </div>
              )}

              {website && (
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                    Website cá nhân
                  </a>
                </div>
              )}
            </div>

            {researchAreas && researchAreas.length > 0 && (
              <div className="mt-4">
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {courses.length > 3
                    ? `${courses.slice(0, 3).join(", ")} và ${courses.length - 3} môn khác`
                    : courses.join(", ")}
                </p>
              </div>
            )}

            {publications !== undefined && publications > 0 && (
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {publications} công bố khoa học
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
