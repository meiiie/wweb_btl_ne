import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

interface HeroSlideProps {
  slide: {
    id: number
    image: string
    title: string
    description: string
    link: string
    buttonText: string
  }
  isActive: boolean
}

export function HeroSlide({ slide, isActive }: HeroSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image || "/placeholder.svg"}
          alt={slide.title}
          fill
          priority={slide.id === 1}
          className="object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <Container>
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">{slide.description}</p>
            <Button size="lg" asChild>
              <Link href={slide.link}>{slide.buttonText}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}
