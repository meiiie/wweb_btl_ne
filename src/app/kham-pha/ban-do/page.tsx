"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MapPin, Info, X, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize } from "lucide-react"

// Định nghĩa kiểu dữ liệu cho các điểm đánh dấu trên bản đồ
type MapMarker = {
  id: string
  name: string
  description: string
  position: { x: number; y: number }
  image: string
  category: "building" | "lab" | "classroom" | "facility"
}

// Dữ liệu mẫu cho các điểm đánh dấu
const mapMarkers: MapMarker[] = [
  {
    id: "main-building",
    name: "Tòa nhà chính Khoa CNTT",
    description: "Tòa nhà chính của Khoa Công nghệ Thông tin, nơi đặt văn phòng khoa và các phòng học lý thuyết.",
    position: { x: 35, y: 30 },
    image: "/images/facilities/main-building.jpg",
    category: "building",
  },
  {
    id: "computer-lab",
    name: "Phòng thực hành máy tính",
    description:
      "Phòng thực hành với hơn 50 máy tính hiện đại, được trang bị đầy đủ phần mềm phục vụ học tập và nghiên cứu.",
    position: { x: 55, y: 40 },
    image: "/images/labs/computer-lab.jpg",
    category: "lab",
  },
  {
    id: "network-lab",
    name: "Phòng thí nghiệm mạng",
    description: "Phòng thí nghiệm chuyên về mạng máy tính và an ninh mạng, được trang bị các thiết bị mạng hiện đại.",
    position: { x: 65, y: 60 },
    image: "/images/labs/equipment-lab.jpg",
    category: "lab",
  },
  {
    id: "lecture-hall",
    name: "Giảng đường lớn",
    description: "Giảng đường với sức chứa 200 sinh viên, được trang bị hệ thống âm thanh và máy chiếu hiện đại.",
    position: { x: 25, y: 65 },
    image: "/images/facilities/classroom.jpg",
    category: "classroom",
  },
  {
    id: "library",
    name: "Thư viện chuyên ngành",
    description: "Thư viện chuyên ngành CNTT với hàng nghìn đầu sách, tạp chí và tài liệu điện tử.",
    position: { x: 45, y: 75 },
    image: "/images/facilities/library.jpg",
    category: "facility",
  },
]

export default function BanDoTuongTacPage() {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showMobileInfo, setShowMobileInfo] = useState(false)

  // Xử lý zoom
  const handleZoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel((prev) => prev + 0.2)
    }
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0.6) {
      setZoomLevel((prev) => prev - 0.2)
    }
  }

  // Xử lý fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapContainerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Không thể chuyển sang chế độ toàn màn hình: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Theo dõi trạng thái fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Xử lý kéo thả bản đồ
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Xử lý touch events cho thiết bị di động
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartPosition({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setPosition({
        x: e.touches[0].clientX - startPosition.x,
        y: e.touches[0].clientY - startPosition.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Lọc markers theo danh mục
  const filteredMarkers = activeCategory
    ? mapMarkers.filter((marker) => marker.category === activeCategory)
    : mapMarkers

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bản đồ tương tác</h2>
        <p className="text-gray-600 mb-6">
          Khám phá khuôn viên và cơ sở vật chất của Khoa CNTT thông qua bản đồ tương tác. Click vào các điểm đánh dấu để
          xem thông tin chi tiết về các tòa nhà, phòng học, phòng lab và các tiện ích.
        </p>

        {/* Bộ lọc danh mục */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${!activeCategory ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setActiveCategory("building")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeCategory === "building" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Tòa nhà
          </button>
          <button
            onClick={() => setActiveCategory("lab")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeCategory === "lab" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Phòng thí nghiệm
          </button>
          <button
            onClick={() => setActiveCategory("classroom")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeCategory === "classroom" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Phòng học
          </button>
          <button
            onClick={() => setActiveCategory("facility")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeCategory === "facility" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Tiện ích
          </button>
        </div>
      </div>

      {/* Container bản đồ */}
      <div
        ref={mapContainerRef}
        className="relative h-[70vh] bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Bản đồ */}
        <div
          className="absolute transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <div className="relative">
            <Image
              src="/images/campus/aerial-view.jpg"
              alt="Bản đồ khuôn viên trường"
              width={1200}
              height={800}
              className="rounded-lg"
            />

            {/* Các điểm đánh dấu */}
            {filteredMarkers.map((marker) => (
              <button
                key={marker.id}
                className={`absolute p-1 rounded-full transition-all duration-300 ${
                  selectedMarker?.id === marker.id
                    ? "bg-primary-500 scale-125"
                    : "bg-primary-600 hover:bg-primary-500 hover:scale-110"
                }`}
                style={{
                  left: `${marker.position.x}%`,
                  top: `${marker.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedMarker(marker)
                  setShowMobileInfo(true)
                }}
                aria-label={`Xem thông tin về ${marker.name}`}
              >
                <MapPin className="h-6 w-6 text-white" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white text-gray-800 text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none">
                  {marker.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Điều khiển bản đồ */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center shadow-md"
            aria-label="Phóng to"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center shadow-md"
            aria-label="Thu nhỏ"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center shadow-md"
            aria-label={isFullscreen ? "Thoát chế độ toàn màn hình" : "Chế độ toàn màn hình"}
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </button>
        </div>

        {/* Thông tin chi tiết - Desktop */}
        {selectedMarker && (
          <div className="absolute top-4 left-4 w-80 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden hidden md:block">
            <div className="relative h-40">
              <Image
                src={selectedMarker.image || "/placeholder.svg"}
                alt={selectedMarker.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedMarker(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-white/80 hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-md"
                aria-label="Đóng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedMarker.name}</h3>
              <p className="text-gray-600 text-sm">{selectedMarker.description}</p>
            </div>
          </div>
        )}

        {/* Thông tin chi tiết - Mobile */}
        {selectedMarker && showMobileInfo && (
          <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-xl border-t border-gray-200 shadow-xl z-50 md:hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{selectedMarker.name}</h3>
              <button
                onClick={() => setShowMobileInfo(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center"
                aria-label="Đóng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={selectedMarker.image || "/placeholder.svg"}
                  alt={selectedMarker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600">{selectedMarker.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Hướng dẫn sử dụng */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-primary-50 rounded-lg p-3">
            <Info className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hướng dẫn sử dụng</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Click vào các điểm đánh dấu để xem thông tin chi tiết</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Kéo để di chuyển bản đồ</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Sử dụng nút + và - để phóng to/thu nhỏ</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Nhấn nút toàn màn hình để xem bản đồ ở chế độ toàn màn hình</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
