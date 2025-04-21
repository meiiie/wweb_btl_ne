"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Calendar } from "lucide-react"

export interface LeadershipCardProps {
  id: string
  name: string
  position: string
  degree?: string
  email?: string
  phone?: string
  image: string
  appointmentDate?: string
  bio?: string
}

export function LeadershipCard({
  id,
  name,
  position,
  degree,
  email,
  phone,
  image,
  appointmentDate,
  bio,
}: LeadershipCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-primary/20 bg-primary/5">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative h-80 w-full">
            <Image
              src={image || "/placeholder.svg?height=400&width=300"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-5">
            <Link href={`/doi-ngu/giang-vien/${id}`} className="group">
              <h3 className="text-xl font-bold text-primary group-hover:text-primary/80">
                {name}
                {degree && <span className="ml-2 text-base font-normal text-muted-foreground">({degree})</span>}
              </h3>
            </Link>
            <p className="mb-3 font-medium text-primary">{position}</p>

            <div className="mt-3 space-y-2">
              {email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${email}`} className="text-sm hover:underline">
                    {email}
                  </a>
                </div>
              )}

              {phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${phone}`} className="text-sm hover:underline">
                    {phone}
                  </a>
                </div>
              )}

              {appointmentDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Bổ nhiệm: {appointmentDate}</span>
                </div>
              )}
            </div>

            {bio && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>
                <Link
                  href={`/doi-ngu/giang-vien/${id}`}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Xem thêm
                </Link>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
