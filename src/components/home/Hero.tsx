"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { HeroSlide } from "./hero/hero-slide"
import { HERO_IMAGES } from "@/lib/image-paths"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  {
    id: 1,
    title: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
    description: "Đào tạo nguồn nhân lực CNTT chất lượng cao",
    imageSrc: HERO_IMAGES.MAIN_BUILDING,
    link: "/gioi-thieu",
    buttonText: "Tìm hiểu thêm",
  },
  {
    id: 2,
    title: "Môi trường học tập hiện đại",
    description: "Trang bị đầy đủ cơ sở vật chất, phòng thí nghiệm tiên tiến",
    imageSrc: HERO_IMAGES.CAMPUS_VIEW,
    link: "/co-so-vat-chat",
    buttonText: "Xem chi tiết",
  },
  {
    id: 3,
    title: "Đội ngũ sinh viên tài năng",
    description: "Cơ hội học tập, nghiên cứu và phát triển toàn diện",
    imageSrc: HERO_IMAGES.STUDENTS_GROUP,
    link: "/dao-tao",
    buttonText: "Khám phá ngay",
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass: "inline-block w-2 h-2 rounded-full bg-white/50 mx-1 cursor-pointer transition-all duration-300",
          bulletActiveClass: "!bg-white !w-4",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        grabCursor={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="h-full">
            <HeroSlide
              title={slide.title}
              description={slide.description}
              imageSrc={slide.imageSrc}
              isActive={true}
              link={slide.link}
              buttonText={slide.buttonText}
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="absolute left-0 right-0 bottom-0 z-20 flex justify-between items-center px-4 md:px-10 py-6">
          <button
            ref={prevRef}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-primary transition-colors duration-300 focus:outline-none"
            aria-label="Slide trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="hero-pagination flex items-center justify-center"></div>

          <button
            ref={nextRef}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-primary transition-colors duration-300 focus:outline-none"
            aria-label="Slide sau"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Swiper>
    </section>
  )
}
