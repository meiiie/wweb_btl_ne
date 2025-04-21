import Image from "next/image"
import { Calendar, MapPin, FileText } from "lucide-react"

interface CooperationActivity {
  title: string
  date: string
  description: string
  image?: string
}

interface CooperationDetailProps {
  name: string
  logo: string
  description: string
  website: string
  location: string
  startYear: number
  endYear?: number
  focusAreas: string[]
  activities: CooperationActivity[]
  documents?: {
    title: string
    url: string
  }[]
}

export function CooperationDetail({
  name,
  logo,
  description,
  website,
  location,
  startYear,
  endYear,
  focusAreas,
  activities,
  documents,
}: CooperationDetailProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="mb-8 flex flex-col md:flex-row items-start gap-6">
        <div className="relative w-32 h-32 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
          <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain p-4" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-800 mb-2">{name}</h1>
          <div className="flex flex-wrap gap-y-2 text-gray-600">
            <div className="flex items-center mr-6">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>
                {startYear} - {endYear ? endYear : "Hiện tại"}
              </span>
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Giới thiệu</h2>
        <div className="prose max-w-none text-gray-700">
          <p>{description}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Lĩnh vực hợp tác</h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Hoạt động hợp tác</h2>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start gap-4">
                {activity.image && (
                  <div className="relative w-24 h-24 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">{activity.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{activity.date}</p>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {documents && documents.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-4">Tài liệu liên quan</h2>
          <div className="space-y-2">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700 hover:text-blue-700">{doc.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
