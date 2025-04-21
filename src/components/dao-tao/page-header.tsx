import Image from "next/image"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: {
    name: string
    href: string
  }[]
  backgroundImage?: string
}

export function PageHeader({
  title,
  description,
  breadcrumbs = [],
  backgroundImage = "/placeholder.svg?height=400&width=1200",
}: PageHeaderProps) {
  return (
    <div className="relative h-[250px] md:h-[300px] overflow-hidden rounded-lg mb-8">
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        {description && <p className="text-sm md:text-base max-w-2xl mx-auto mb-4">{description}</p>}

        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:underline">
                  Trang chủ
                </Link>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mx-2">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span aria-current="page">{item.name}</span>
                  ) : (
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  )
}
