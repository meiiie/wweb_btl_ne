import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSlideProps {
  title: string
  description: string
  imageSrc: string
  isActive: boolean
  link?: string
  buttonText?: string
}

export function HeroSlide({ title, description, imageSrc, isActive, link, buttonText }: HeroSlideProps) {
  return (
    <div className="relative h-full w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">{title}</h1>
            <p className="mb-6 text-base text-white md:text-lg">{description}</p>
            {link && buttonText && (
              <Button asChild size="lg" className="font-medium bg-primary hover:bg-primary/90">
                <Link href={link}>{buttonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
