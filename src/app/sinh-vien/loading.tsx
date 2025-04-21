import { Card, CardContent } from "@/components/ui/card"

export default function StudentLoading() {
  return (
    <div className="w-full">
      <div className="h-[300px] bg-gray-200 animate-pulse rounded-lg mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-40 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
