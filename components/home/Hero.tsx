"use client"

import { useState, useEffect } from "react"
import { HeroSlide } from "./hero/hero-slide"
import { HeroNavigation } from "./hero/hero-navigation"

// Dữ liệu mẫu cho slider
const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Đào tạo nguồn nhân lực CNTT chất lượng cao",
    description:
      "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam cung cấp môi trường học tập hiện đại, chương trình đào tạo tiên tiến.",
    link: "/dao-tao",
    buttonText: "Tìm hiểu thêm",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Nghiên cứu khoa học và chuyển giao công nghệ",
    description: "Đẩy mạnh hoạt động nghiên cứu khoa học, ứng dụng và chuyển giao công nghệ trong lĩnh vực CNTT.",
    link: "/nghien-cuu",
    buttonText: "Xem chi tiết",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Tuyển sinh năm học 2023-2024",
    description: "Thông tin tuyển sinh các ngành đào tạo thuộc Khoa Công nghệ Thông tin năm học 2023-2024.",
    link: "/tuyen-sinh",
    buttonText: "Đăng ký ngay",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <HeroSlide key={slide.id} slide={slide} isActive={index === currentSlide} />
      ))}

      {/* Navigation */}
      <HeroNavigation
        slidesCount={slides.length}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  )
}
