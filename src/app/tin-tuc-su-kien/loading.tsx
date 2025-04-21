import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero section skeleton */}
      <div className="relative h-[300px] md:h-[400px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-64 bg-gray-300 rounded-md mx-auto mb-4"></div>
            <div className="h-4 w-40 bg-gray-300 rounded-md mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar skeleton */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Search skeleton */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="h-6 w-32 bg-gray-200 rounded-md mb-4"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md"></div>
              </div>

              {/* Categories skeleton */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="h-6 w-32 bg-gray-200 rounded-md mb-4"></div>
                <div className="space-y-2">
                  {Array(7)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex justify-between items-center py-2 px-3 rounded">
                        <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                        <div className="h-5 w-8 bg-gray-200 rounded-full"></div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Recent posts skeleton */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="h-6 w-40 bg-gray-200 rounded-md mb-4"></div>
                <div className="space-y-4">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-md bg-gray-200"></div>
                        </div>
                        <div className="flex-grow">
                          <div className="h-4 w-full bg-gray-200 rounded-md mb-2"></div>
                          <div className="h-3 w-20 bg-gray-200 rounded-md"></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Tags skeleton */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="h-6 w-20 bg-gray-200 rounded-md mb-4"></div>
                <div className="flex flex-wrap gap-2">
                  {Array(8)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    ))}
                </div>
              </div>
            </div>

            {/* News list skeleton */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-8 w-48 bg-gray-200 rounded-md"></div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                    <div className="h-8 w-32 bg-gray-200 rounded-md"></div>
                  </div>
                </div>

                {/* Events skeleton */}
                <div className="mb-8">
                  <div className="h-6 w-48 bg-gray-200 rounded-md mb-4"></div>
                  <div className="space-y-8">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="border-b pb-8 last:border-b-0">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                              <div className="h-60 md:h-48 rounded-lg bg-gray-200"></div>
                            </div>
                            <div className="md:w-2/3">
                              <div className="flex flex-col gap-2 mb-3">
                                <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
                                <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
                              </div>
                              <div className="h-6 w-full bg-gray-200 rounded-md mb-2"></div>
                              <div className="h-4 w-full bg-gray-200 rounded-md mb-2"></div>
                              <div className="h-4 w-3/4 bg-gray-200 rounded-md mb-4"></div>
                              <div className="h-10 w-24 bg-gray-200 rounded-md"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* News skeleton */}
                <div className="space-y-8">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="border-b pb-8 last:border-b-0">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <div className="h-60 md:h-48 rounded-lg bg-gray-200"></div>
                          </div>
                          <div className="md:w-2/3">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <div className="h-3 w-20 bg-gray-200 rounded-md"></div>
                              <div className="mx-2">•</div>
                              <div className="h-3 w-32 bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="h-6 w-full bg-gray-200 rounded-md mb-2"></div>
                            <div className="h-4 w-full bg-gray-200 rounded-md mb-2"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded-md mb-4"></div>
                            <div className="h-10 w-24 bg-gray-200 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Pagination skeleton */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="h-10 w-10 bg-gray-200 rounded-md"></div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
