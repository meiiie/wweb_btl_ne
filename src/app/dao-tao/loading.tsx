import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <h3 className="text-lg font-medium text-gray-700">Đang tải...</h3>
      <p className="text-sm text-gray-500">Vui lòng đợi trong giây lát</p>
    </div>
  )
}
