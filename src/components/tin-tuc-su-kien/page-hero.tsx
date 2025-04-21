import Image from "next/image"
import Link from "next/link"

interface PageHeroProps {
  title: string
  breadcrumbs: {
    label: string
    href: string
  }[]
  backgroundImage?: string
}

export function PageHero({
  title,
  breadcrumbs,
  backgroundImage = "/placeholder.svg?height=400&width=1200",
}: PageHeroProps) {
  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="flex items-center justify-center text-sm">
            {breadcrumbs.map((item, index) => (
              <span key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span>{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
