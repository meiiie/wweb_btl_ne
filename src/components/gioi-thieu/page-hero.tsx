import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

interface PageHeroProps {
  title: string
  breadcrumb?: {
    title: string
    href: string
  }[]
  backgroundImage?: string
  className?: string
}

export function PageHero({
  title,
  breadcrumb = [],
  backgroundImage = "/placeholder.svg?height=400&width=1200",
  className,
}: PageHeroProps) {
  // Chuyển đổi breadcrumb từ định dạng cũ sang định dạng mới cho BreadcrumbSchema
  const breadcrumbItems = breadcrumb.map((item) => ({
    name: item.title,
    url: item.href,
  }))

  return (
    <>
      {/* Thêm BreadcrumbSchema với breadcrumb items từ props */}
      {breadcrumb.length > 0 && <BreadcrumbSchema items={breadcrumbItems} overrideItems={true} />}

      <div className={cn("relative h-[300px] md:h-[400px] overflow-hidden mb-8", className)}>
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="" // Decorative image, empty alt
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/50"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">{title}</h1>
            {breadcrumb.length > 0 && (
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center justify-center text-sm">
                  <li>
                    <Link href="/" className="hover:underline text-white/90 hover:text-white transition-colors">
                      Trang chủ
                    </Link>
                  </li>
                  {breadcrumb.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mx-2" aria-hidden="true">
                        /
                      </span>
                      {index === breadcrumb.length - 1 ? (
                        <span aria-current="page">{item.title}</span>
                      ) : (
                        <Link href={item.href} className="hover:underline">
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
