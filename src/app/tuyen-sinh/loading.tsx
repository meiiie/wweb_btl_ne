export default function Loading() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-600">Đang tải thông tin...</p>
      </div>
    </div>
  )
}
