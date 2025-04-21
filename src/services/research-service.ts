import type { ResearchArea, ResearchProject, Publication } from "@/types/research"

// Hàm fetch với xử lý lỗi và timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 8000) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    })

    clearTimeout(id)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    clearTimeout(id)
    if (error.name === "AbortError") {
      throw new Error("Request timeout")
    }
    throw error
  }
}

// Lấy tất cả dữ liệu nghiên cứu
export async function getAllResearchData() {
  try {
    return await fetchWithTimeout("/api/research")
  } catch (error) {
    console.error("Error fetching research data:", error)
    throw error
  }
}

// Lấy danh sách các hướng nghiên cứu
export async function getResearchAreas(): Promise<ResearchArea[]> {
  try {
    return await fetchWithTimeout("/api/research?type=areas")
  } catch (error) {
    console.error("Error fetching research areas:", error)
    throw error
  }
}

// Lấy danh sách các đề tài nghiên cứu
export async function getResearchProjects(): Promise<ResearchProject[]> {
  try {
    return await fetchWithTimeout("/api/research?type=projects")
  } catch (error) {
    console.error("Error fetching research projects:", error)
    throw error
  }
}

// Lấy chi tiết đề tài nghiên cứu theo slug
export async function getResearchProjectBySlug(slug: string): Promise<ResearchProject | null> {
  try {
    return await fetchWithTimeout(`/api/research/${slug}`)
  } catch (error) {
    console.error(`Error fetching research project with slug ${slug}:`, error)
    return null
  }
}

// Lấy danh sách công bố khoa học
export async function getPublications(): Promise<Publication[]> {
  try {
    return await fetchWithTimeout("/api/research?type=publications")
  } catch (error) {
    console.error("Error fetching publications:", error)
    throw error
  }
}

// Lấy chi tiết công bố khoa học theo slug
export async function getPublicationBySlug(slug: string): Promise<Publication | null> {
  try {
    return await fetchWithTimeout(`/api/research/${slug}`)
  } catch (error) {
    console.error(`Error fetching publication with slug ${slug}:`, error)
    return null
  }
}

// Các hàm tương tự cho StudentProject và MaritimeApplication
