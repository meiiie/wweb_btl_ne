import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export default function ResearchLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero section skeleton */}
      <div className="relative h-[300px] md:h-[400px] bg-gray-200 animate-pulse"></div>

      {/* Main content skeleton */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-10 bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content skeleton */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-6 animate-pulse"></div>
                <div className="h-[300px] bg-gray-200 rounded mb-6 animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-[200px] bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
