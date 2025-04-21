import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"

export default function AboutLoading() {
  return (
    <div className="min-h-screen" aria-busy="true" aria-label="Đang tải nội dung">
      {/* Hero section skeleton */}
      <div className="relative h-[300px] md:h-[400px] bg-gray-200 animate-pulse" aria-hidden="true"></div>

      {/* Main content skeleton */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar skeleton */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" aria-hidden="true"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" aria-hidden="true"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-6 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Main content skeleton */}
            <div className="lg:col-span-3">
              <Card className="p-6">
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-6 animate-pulse" aria-hidden="true"></div>
                <div className="h-[300px] bg-gray-200 rounded mb-6 animate-pulse" aria-hidden="true"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
