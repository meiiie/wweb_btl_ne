// Định nghĩa các interface cho dữ liệu nghiên cứu

export interface ResearchArea {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export interface ResearchProject {
  id: number
  title: string
  type: string
  period: string
  leader: string
  members: string[]
  status: "Đang thực hiện" | "Đã hoàn thành"
  description: string
  image: string
  slug: string
  field?: string
  code?: string
  objectives?: string[]
  results?: string[]
  publications?: Publication[]
  images?: string[]
}

export interface Publication {
  id: number
  title: string
  authors: string
  journal?: string
  conference?: string
  volume?: string
  issue?: string
  pages?: string
  year: number
  doi?: string
  abstract?: string
  keywords?: string[]
  type: "Journal" | "Conference"
  slug: string
  link?: string
}

export interface StudentProject {
  id: number
  title: string
  students: string[]
  supervisor: string
  year: number
  field: string
  description: string
  image: string
  awards: string[]
  slug: string
}

export interface MaritimeApplication {
  id: number
  title: string
  category: string
  description: string
  features: string[]
  benefits: string[]
  image: string
  technologies: string[]
  partners: string[]
  slug: string
}
