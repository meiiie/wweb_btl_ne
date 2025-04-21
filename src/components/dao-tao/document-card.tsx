import Link from "next/link"
import { FileText, Download, Calendar } from "lucide-react"

interface DocumentCardProps {
  title: string
  description: string
  fileUrl: string
  fileType: string
  fileSize: string
  uploadDate: string
}

export function DocumentCard({ title, description, fileUrl, fileType, fileSize, uploadDate }: DocumentCardProps) {
  // Xác định icon dựa trên loại file
  const getFileIcon = () => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return "text-red-500"
      case "doc":
      case "docx":
        return "text-blue-500"
      case "xls":
      case "xlsx":
        return "text-green-500"
      case "ppt":
      case "pptx":
        return "text-orange-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all">
      <div className="flex items-start">
        <div className={`mr-4 ${getFileIcon()}`}>
          <FileText className="h-10 w-10" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

          <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3 gap-x-4">
            <div className="flex items-center">
              <span className="font-medium mr-1">Loại file:</span>
              <span className="uppercase">{fileType}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-1">Kích thước:</span>
              <span>{fileSize}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{uploadDate}</span>
            </div>
          </div>

          <Link
            href={fileUrl}
            className="inline-flex items-center text-sm bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary-600 transition-colors"
            download
          >
            <Download className="mr-1 h-4 w-4" />
            Tải xuống
          </Link>
        </div>
      </div>
    </div>
  )
}
