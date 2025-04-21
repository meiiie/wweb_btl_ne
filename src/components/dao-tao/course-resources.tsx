import { FileText, Book, Video, Download, ExternalLink, File } from "lucide-react"
import Link from "next/link"

interface Resource {
  id: string
  title: string
  type: "document" | "book" | "video" | "link" | "file"
  url: string
  description?: string
  fileType?: string
  fileSize?: string
}

interface CourseResourcesProps {
  resources: Resource[]
}

export function CourseResources({ resources }: CourseResourcesProps) {
  // Nhóm tài nguyên theo loại
  const groupedResources = resources.reduce(
    (acc, resource) => {
      if (!acc[resource.type]) {
        acc[resource.type] = []
      }
      acc[resource.type].push(resource)
      return acc
    },
    {} as Record<string, Resource[]>,
  )

  // Lấy icon tương ứng với loại tài nguyên
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5" />
      case "book":
        return <Book className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "link":
        return <ExternalLink className="h-5 w-5" />
      default:
        return <File className="h-5 w-5" />
    }
  }

  // Lấy màu cho icon dựa trên loại tài nguyên
  const getIconColor = (type: string) => {
    switch (type) {
      case "document":
        return "text-blue-500"
      case "book":
        return "text-green-500"
      case "video":
        return "text-red-500"
      case "link":
        return "text-purple-500"
      default:
        return "text-gray-500"
    }
  }

  // Lấy tiêu đề cho từng nhóm tài nguyên
  const getResourceTypeTitle = (type: string) => {
    switch (type) {
      case "document":
        return "Tài liệu học tập"
      case "book":
        return "Sách tham khảo"
      case "video":
        return "Video bài giảng"
      case "link":
        return "Liên kết hữu ích"
      default:
        return "Tài nguyên khác"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Tài nguyên học tập</h2>

      {Object.keys(groupedResources).length === 0 ? (
        <p className="text-gray-500 italic">Chưa có tài nguyên cho môn học này.</p>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedResources).map(([type, resources]) => (
            <div key={type}>
              <h3 className="text-lg font-semibold mb-4">{getResourceTypeTitle(type)}</h3>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`flex items-center justify-center p-4 ${getIconColor(type)} bg-gray-50`}
                      style={{ minWidth: "60px" }}
                    >
                      {getResourceIcon(type)}
                    </div>
                    <div className="flex-1 p-4">
                      <h4 className="font-medium text-gray-800">{resource.title}</h4>
                      {resource.description && <p className="text-sm text-gray-600 mt-1">{resource.description}</p>}
                      {resource.fileType && resource.fileSize && (
                        <div className="flex items-center text-xs text-gray-500 mt-2">
                          <span className="uppercase mr-2">{resource.fileType}</span>
                          <span>({resource.fileSize})</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center p-4">
                      <Link
                        href={resource.url}
                        className="inline-flex items-center text-sm text-primary hover:text-primary-dark"
                        target={type === "link" ? "_blank" : undefined}
                        rel={type === "link" ? "noopener noreferrer" : undefined}
                        download={type !== "link" && type !== "video"}
                      >
                        {type === "link" ? (
                          <>
                            Truy cập
                            <ExternalLink className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Tải xuống
                            <Download className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
