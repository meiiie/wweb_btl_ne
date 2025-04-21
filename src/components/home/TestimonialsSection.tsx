"use client"
import Image from "next/image"
import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { QuoteIcon } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import { useSpring, animated } from "react-spring"
import { useDrag } from "react-use-gesture"

const testimonials = [
  {
    id: 1,
    content:
      "Khoa CNTT - ĐH Hàng hải Việt Nam đã trang bị cho tôi nền tảng kiến thức vững chắc và tư duy giải quyết vấn đề. Những kỹ năng này đã giúp tôi thành công trong sự nghiệp tại FPT Software.",
    author: "Nguyễn Văn A",
    position: "Senior Developer, FPT Software",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Chương trình đào tạo của Khoa CNTT rất thực tiễn và cập nhật với xu hướng công nghệ. Các giảng viên nhiệt tình và có kinh nghiệm thực tế đã giúp tôi rất nhiều trong quá trình học tập và nghiên cứu.",
    author: "Trần Thị B",
    position: "Product Manager, Viettel",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "Tôi đánh giá cao chất lượng đào tạo của Khoa CNTT - ĐH Hàng hải. Sinh viên tốt nghiệp từ đây có kiến thức chuyên môn tốt và khả năng thích ứng nhanh với môi trường làm việc thực tế.",
    author: "Lê Văn C",
    position: "Giám đốc CNTT, CMC Corporation",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    content:
      "Khoa CNTT - ĐH Hàng hải là đối tác đào tạo tin cậy của chúng tôi. Sinh viên từ đây luôn thể hiện năng lực chuyên môn tốt và tinh thần làm việc nhóm hiệu quả.",
    author: "Phạm Thị D",
    position: "Trưởng phòng Nhân sự, VNPT Technology",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const bind = useDrag(({ down }) => {
    setIsDragging(down)
  })

  const props = useSpring({
    cursor: isDragging ? "grabbing" : "grab",
  })

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nói về FIT</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những đánh giá từ cựu sinh viên, đối tác và các tổ chức về chất lượng đào tạo của Khoa Công nghệ Thông tin -
            Đại học Hàng hải Việt Nam
          </p>
        </div>

        <animated.div style={props}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass:
                "inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 cursor-pointer transition-all duration-300",
              bulletActiveClass: "!bg-primary !w-4",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="testimonials-swiper pb-12"
            {...bind()}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4 text-primary">
                    <QuoteIcon className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </animated.div>
      </Container>
    </Section>
  )
}
