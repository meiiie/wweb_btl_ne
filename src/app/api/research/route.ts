import { NextResponse } from "next/server"
import type { ResearchArea, ResearchProject, Publication } from "@/types/research"

// Dữ liệu mẫu - trong thực tế sẽ lấy từ database
const researchAreas: ResearchArea[] = [
  // ... (dữ liệu mẫu)
]

const projects: ResearchProject[] = [
  // ... (dữ liệu mẫu)
]

const publications: Publication[] = [
  // ... (dữ liệu mẫu)
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")

  // Thêm delay giả lập để test loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (type === null) {
    return NextResponse.json({
      areas: researchAreas,
      projects: projects,
      publications: publications,
    })
  }

  switch (type) {
    case "areas":
      return NextResponse.json(researchAreas)
    case "projects":
      return NextResponse.json(projects)
    case "publications":
      return NextResponse.json(publications)
    default:
      return NextResponse.json({ error: "Invalid type" }, { status: 400 })
  }
}

export async function GET_SLUG(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params

  // Thêm delay giả lập để test loading state
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Tìm dữ liệu theo slug
  const project = projects.find((p) => p.slug === slug)
  if (project) {
    return NextResponse.json(project)
  }

  const publication = publications.find((p) => p.slug === slug)
  if (publication) {
    return NextResponse.json(publication)
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 })
}
