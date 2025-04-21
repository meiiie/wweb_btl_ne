import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-t-2 border-b-2 border-blue-400 animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full border-r-2 border-l-2 border-cyan-400 animate-spin animate-reverse"></div>
        </div>
        <div className="flex items-center justify-center h-40 w-40">
          <Loader2 className="h-12 w-12 text-white animate-spin" />
        </div>
      </div>
      <p className="mt-4 text-lg text-slate-300 animate-pulse">Đang tải không gian khám phá...</p>
    </div>
  )
}
