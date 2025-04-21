import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, ExternalLink } from "lucide-react"

interface Instructor {
  id: string
  name: string
  degree: string
  position: string
  department: string
  email: string
  phone?: string
  bio?: string
  imageUrl: string
  profileUrl: string
}

interface CourseInstructorsProps {
  instructors: Instructor[]
}

export function CourseInstructors({ instructors }: CourseInstructorsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Giảng viên phụ trách</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg">
            <div className="w-full md:w-auto flex justify-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary-50">
                <Image
                  src={instructor.imageUrl || "/placeholder.svg"}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 96px"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{instructor.name}</h3>
              <p className="text-primary font-medium">{instructor.degree}</p>
              <p className="text-gray-600 text-sm mb-2">
                {instructor.position}, {instructor.department}
              </p>

              <div className="space-y-1 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 mr-2" />
                  <a href={`mailto:${instructor.email}`} className="text-gray-600 hover:text-primary">
                    {instructor.email}
                  </a>
                </div>

                {instructor.phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-2" />
                    <a href={`tel:${instructor.phone}`} className="text-gray-600 hover:text-primary">
                      {instructor.phone}
                    </a>
                  </div>
                )}
              </div>

              {instructor.bio && <p className="text-gray-600 text-sm mt-2 line-clamp-2">{instructor.bio}</p>}

              <div className="mt-3">
                <Link
                  href={instructor.profileUrl}
                  className="inline-flex items-center text-sm text-primary hover:text-primary-dark"
                >
                  Xem hồ sơ chi tiết
                  <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
