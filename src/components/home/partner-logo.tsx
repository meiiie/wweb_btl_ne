import { ImageWithFallback } from "@/components/ui/image-with-fallback"

interface PartnerLogoProps {
  name: string
  logoSrc: string
  url: string
}

export function PartnerLogo({ name, logoSrc, url }: PartnerLogoProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      aria-label={`Đối tác ${name}`}
    >
      <ImageWithFallback
        src={logoSrc || "/placeholder.svg"}
        alt={`Logo ${name}`}
        width={150}
        height={80}
        className="object-contain h-16 w-auto"
      />
    </a>
  )
}
