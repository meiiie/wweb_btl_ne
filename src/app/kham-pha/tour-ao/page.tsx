"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Info, Compass, Maximize, Minimize, X } from "lucide-react"

// Định nghĩa kiểu dữ liệu cho các điểm tham quan
type TourLocation = {
  id: string
  name: string
  description: string
  image: string
  panoramaUrl: string
  hotspots: {
    id: string
    position: { x: number; y: number }
    targetId: string
    label: string
  }[]
}

// Dữ liệu mẫu cho các điểm tham quan
const tourLocations: TourLocation[] = [
  {
    id: "main-hall",
    name: "Sảnh chính Khoa CNTT",
    description: "Sảnh chính của Khoa Công nghệ Thông tin, nơi đón tiếp sinh viên và khách tham quan.",
    image: "/images/facilities/main-building.jpg",
    panoramaUrl: "/images/facilities/main-building.jpg", // Thay bằng ảnh 360° thực tế
    hotspots: [
      {
        id: "to-computer-lab",
        position: { x: 35, y: 50 },
        targetId: "computer-lab",
        label: "Đến phòng thực hành máy tính",
      },
      {
        id: "to-lecture-hall",
        position: { x: 65, y: 50 },
        targetId: "lecture-hall",
        label: "Đến giảng đường",
      },
    ],
  },
  {
    id: "computer-lab",
    name: "Phòng thực hành máy tính",
    description:
      "Phòng thực hành với hơn 50 máy tính hiện đại, được trang bị đầy đủ phần mềm phục vụ học tập và nghiên cứu.",
    image: "/images/labs/computer-lab.jpg",
    panoramaUrl: "/images/labs/computer-lab.jpg", // Thay bằng ảnh 360° thực tế
    hotspots: [
      {
        id: "to-main-hall",
        position: { x: 20, y: 50 },
        targetId: "main-hall",
        label: "Quay lại sảnh chính",
      },
      {
        id: "to-network-lab",
        position: { x: 80, y: 50 },
        targetId: "network-lab",
        label: "Đến phòng thí nghiệm mạng",
      },
    ],
  },
  {
    id: "network-lab",
    name: "Phòng thí nghiệm mạng",
    description: "Phòng thí nghiệm chuyên về mạng máy tính và an ninh mạng, được trang bị các thiết bị mạng hiện đại.",
    image: "/images/labs/equipment-lab.jpg",
    panoramaUrl: "/images/labs/equipment-lab.jpg", // Thay bằng ảnh 360° thực tế
    hotspots: [
      {
        id: "to-computer-lab",
        position: { x: 20, y: 50 },
        targetId: "computer-lab",
        label: "Quay lại phòng thực hành máy tính",
      },
      {
        id: "to-library",
        position: { x: 80, y: 50 },
        targetId: "library",
        label: "Đến thư viện",
      },
    ],
  },
  {
    id: "lecture-hall",
    name: "Giảng đường",
    description: "Giảng đường với sức chứa 200 sinh viên, được trang bị hệ thống âm thanh và máy chiếu hiện đại.",
    image: "/images/facilities/classroom.jpg",
    panoramaUrl: "/images/facilities/classroom.jpg", // Thay bằng ảnh 360° thực tế
    hotspots: [
      {
        id: "to-main-hall",
        position: { x: 20, y: 50 },
        targetId: "main-hall",
        label: "Quay lại sảnh chính",
      },
      {
        id: "to-library",
        position: { x: 80, y: 50 },
        targetId: "library",
        label: "Đến thư viện",
      },
    ],
  },
  {
    id: "library",
    name: "Thư viện chuyên ngành",
    description: "Thư viện chuyên ngành CNTT với hàng nghìn đầu sách, tạp chí và tài liệu điện tử.",
    image: "/images/facilities/library.jpg",
    panoramaUrl: "/images/facilities/library.jpg", // Thay bằng ảnh 360° thực tế
    hotspots: [
      {
        id: "to-lecture-hall",
        position: { x: 20, y: 50 },
        targetId: "lecture-hall",
        label: "Quay lại giảng đường",
      },
      {
        id: "to-network-lab",
        position: { x: 80, y: 50 },
        targetId: "network-lab",
        label: "Quay lại phòng thí nghiệm mạng",
      },
    ],
  },
]

export default function TourAoPage() {
  const [currentLocation, setCurrentLocation] = useState<TourLocation>(tourLocations[0])
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showInfo, setShowInfo] = useState(true)
  const [showHotspotInfo, setShowHotspotInfo] = useState<string | null>(null)
  const panoramaRef = useRef<HTMLDivElement>(null)

  // Xử lý chuyển đến địa điểm khác
  const navigateToLocation = (locationId: string) => {
    const location = tourLocations.find((loc) => loc.id === locationId)
    if (location) {
      setCurrentLocation(location)
      setRotation(0)
      setShowHotspotInfo(null)
    }
  }

  // Xử lý kéo để xoay panorama
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - startX
      setRotation((prev) => (prev + deltaX * 0.5) % 360)
      setStartX(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Xử lý touch events cho thiết bị di động
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - startX
      setRotation((prev) => (prev + deltaX * 0.5) % 360)
      setStartX(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Xử lý fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      panoramaRef.current?.requestFullscreen().catch((err) => {
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

  // Xử lý nút điều hướng
  const handlePrevious = () => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation.id)
    const prevIndex = (currentIndex - 1 + tourLocations.length) % tourLocations.length
    setCurrentLocation(tourLocations[prevIndex])
    setRotation(0)
  }

  const handleNext = () => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation.id)
    const nextIndex = (currentIndex + 1) % tourLocations.length
    setCurrentLocation(tourLocations[nextIndex])
    setRotation(0)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour ảo 360°</h2>
        <p className="text-gray-600 mb-6">
          Trải nghiệm không gian học tập và nghiên cứu của Khoa CNTT thông qua tour ảo 360°. Khám phá các phòng học,
          phòng lab và các khu vực chung như thể bạn đang ở đó.
        </p>

        {/* Danh sách địa điểm */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tourLocations.map((location) => (
            <button
              key={location.id}
              onClick={() => navigateToLocation(location.id)}
              className={`relative rounded-lg overflow-hidden group transition ${
                currentLocation.id === location.id
                  ? "ring-2 ring-primary-500 ring-offset-2 ring-offset-white"
                  : "hover:ring-1 hover:ring-primary-400 hover:ring-offset-1 hover:ring-offset-white shadow-sm"
              }`}
            >
              <div className="relative aspect-video">
                <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2">
                  <span className="text-white text-xs font-medium">{location.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Panorama viewer */}
      <div
        ref={panoramaRef}
        className="relative h-[70vh] bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Panorama image */}
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `rotateY(${rotation}deg)`,
            cursor: isDragging ? "grabbing" : "grab",
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src={currentLocation.panoramaUrl || "/placeholder.svg"}
              alt={currentLocation.name}
              fill
              className="object-cover"
            />

            {/* Hotspots */}
            {currentLocation.hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                className="absolute p-1 rounded-full bg-primary-600 hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                style={{
                  left: `${hotspot.position.x}%`,
                  top: `${hotspot.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  navigateToLocation(hotspot.targetId)
                }}
                onMouseEnter={() => setShowHotspotInfo(hotspot.id)}
                onMouseLeave={() => setShowHotspotInfo(null)}
                aria-label={`Đi đến ${hotspot.label}`}
              >
                <Compass className="h-6 w-6 text-white" />
                {showHotspotInfo === hotspot.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-gray-800 text-xs px-2 py-1 rounded shadow-md pointer-events-none">
                    {hotspot.label}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Điều khiển */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-md"
            aria-label="Địa điểm trước"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-md"
            aria-label={isFullscreen ? "Thoát chế độ toàn màn hình" : "Chế độ toàn màn hình"}
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-md"
            aria-label="Địa điểm tiếp theo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Thông tin địa điểm */}
        {showInfo && (
          <div className="absolute top-4 left-4 w-80 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{currentLocation.name}</h3>
              <button
                onClick={() => setShowInfo(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center"
                aria-label="Ẩn thông tin"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{currentLocation.description}</p>
            </div>
          </div>
        )}

        {/* Nút hiện thông tin (khi đã ẩn) */}
        {!showInfo && (
          <button
            onClick={() => setShowInfo(true)}
            className="absolute top-4 left-4 w-10 h-10 bg-white hover:bg-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-md"
            aria-label="Hiện thông tin"
          >
            <Info className="h-5 w-5" />
          </button>
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
                <span>Kéo chuột hoặc vuốt màn hình để xoay góc nhìn 360°</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Click vào các điểm đánh dấu (hotspot) để di chuyển đến địa điểm khác</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Sử dụng nút mũi tên để chuyển qua lại giữa các địa điểm</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0" />
                <span>Nhấn nút toàn màn hình để xem tour ảo ở chế độ toàn màn hình</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
