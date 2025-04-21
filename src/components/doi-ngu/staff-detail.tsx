"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Award, BookOpen, Calendar, FileText, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface Publication {
  title: string
  journal?: string
  year: number
  authors: string
  url?: string
}

export interface StaffDetailProps {
  name: string
  position: string
  department?: string
  degree?: string
  email?: string
  phone?: string
  office?: string
  image: string
  bio?: string
  education?: string[]
  researchAreas?: string[]
  courses?: string[]
  publications?: Publication[]
  projects?: { title: string; year: string; role: string }[]
  awards?: { title: string; year: string }[]
  website?: string
  joinDate?: string
}

export function StaffDetail({
  name,
  position,
  department,
  degree,
  email,
  phone,
  office,
  image,
  bio,
  education,
  researchAreas,
  courses,
  publications,
  projects,
  awards,
  website,
  joinDate,
}: StaffDetailProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-0">
            <div className="relative h-80 w-full">
              <Image
                src={image || "/placeholder.svg?height=400&width=300"}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5 space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-primary">{name}</h1>
                <p className="text-lg font-medium text-primary">{position}</p>
                {degree && <p className="text-muted-foreground">{degree}</p>}
                {department && <p className="text-muted-foreground">{department}</p>}
              </div>

              <div className="space-y-2 pt-2">
                {email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${email}`} className="hover:underline">
                      {email}
                    </a>
                  </div>
                )}

                {phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${phone}`} className="hover:underline">
                      {phone}
                    </a>
                  </div>
                )}

                {office && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{office}</span>
                  </div>
                )}

                {website && (
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Website cá nhân
                    </a>
                  </div>
                )}

                {joinDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Tham gia từ: {joinDate}</span>
                  </div>
                )}
              </div>

              {researchAreas && researchAreas.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-medium">Hướng nghiên cứu:</span>
                  </div>
                  <ul className="mt-1 list-inside list-disc space-y-1 text-muted-foreground">
                    {researchAreas.map((area, index) => (
                      <li key={index}>{area}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8 md:col-span-2">
        {bio && (
          <Card>
            <CardHeader>
              <CardTitle>Giới thiệu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>{bio}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {education && education.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Học vấn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                {education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {courses && courses.length > 0 && (
          <Card>
            <CardHeader className="flex flex-row items-center">
              <BookOpen className="mr-2 h-5 w-5 text-primary" />
              <CardTitle>Môn học giảng dạy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {publications && publications.length > 0 && (
          <Card>
            <CardHeader className="flex flex-row items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              <CardTitle>Công bố khoa học</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {publications.map((pub, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">{pub.authors}</p>
                    <p className="text-sm text-muted-foreground">
                      {pub.journal && <span>{pub.journal}, </span>}
                      <span>{pub.year}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {projects && projects.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Dự án nghiên cứu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {projects.map((project, index) => (
                  <li key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium">{project.title}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Vai trò:</span> {project.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Thời gian:</span> {project.year}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {awards && awards.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Giải thưởng & Thành tựu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      {award.title} ({award.year})
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
