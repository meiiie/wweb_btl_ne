export default function Loading() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-600 font-medium">Đang tải dữ liệu...</p>
      </div>
    </div>
  )
}
