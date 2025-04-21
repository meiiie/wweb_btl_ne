import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg max-w-3xl opacity-90">{description}</p>
      </div>
    </div>
  )
}
