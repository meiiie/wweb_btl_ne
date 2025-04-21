import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  imageSrc: string
}

export function PageHeader({ title, description, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
      </div>

      <div className="relative z-10 px-6 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-blue-50 md:text-lg max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  )
}
