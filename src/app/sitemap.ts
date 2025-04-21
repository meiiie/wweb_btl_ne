import type { MetadataRoute } from "next"
import { COURSES, PROGRAMS } from "@/lib/constants/education"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fit.vimaru.edu.vn"

  // Trang chính
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dao-tao`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dao-tao/chuong-trinh`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dao-tao/mon-hoc`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dao-tao/tai-lieu`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dao-tao/he-dao-tao`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Trang chi tiết chương trình đào tạo
  const programPages = (PROGRAMS || []).map((program) => ({
    url: `${baseUrl}/dao-tao/chuong-trinh/${program.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Trang chi tiết môn học
  const coursePages = (COURSES || []).map((course) => ({
    url: `${baseUrl}/dao-tao/mon-hoc/${course.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...mainPages, ...programPages, ...coursePages]
}
