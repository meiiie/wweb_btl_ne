"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface TeamCardProps {
  name: string
  position: string
  department?: string
  email?: string
  phone?: string
  image?: string
  link?: string
  className?: string
}

export function TeamCard({
  name,
  position,
  department,
  email,
  phone,
  image = "/placeholder.svg?height=300&width=300",
  link,
  className,
}: TeamCardProps) {
  // Tạo phần nội dung chính của card
  const cardContent = (
    <>
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Ảnh của ${name}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1 text-primary">{name}</h3>
        <p className="text-gray-600 mb-2">{position}</p>
        {department && <div className="text-sm text-gray-500 mb-3">{department}</div>}
      </div>
    </>
  )

  // Tạo phần thông tin liên hệ
  const contactInfo = (
    <>
      {(email || phone) && (
        <div className="space-y-2 text-sm p-6 pt-0">
          {email && (
            <div className="flex items-start">
              <Mail className="w-4 h-4 mr-2 text-primary mt-0.5" aria-hidden="true" />
              {link ? (
                <span className="text-gray-600">{email}</span>
              ) : (
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={`Email: ${email}`}
                >
                  {email}
                </a>
              )}
            </div>
          )}
          {phone && (
            <div className="flex items-start">
              <Phone className="w-4 h-4 mr-2 text-primary mt-0.5" aria-hidden="true" />
              {link ? (
                <span className="text-gray-600">{phone}</span>
              ) : (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={`Điện thoại: ${phone}`}
                >
                  {phone}
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )

  // Render card với hoặc không có link
  if (link) {
    return (
      <div className={cn("bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}>
        <Link href={link} aria-label={`Xem thông tin chi tiết về ${name}`}>
          {cardContent}
        </Link>
        {contactInfo}
      </div>
    )
  }

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}>
      {cardContent}
      {contactInfo}
    </div>
  )
}
