import { Card, CardContent } from "@/components/ui/card"

export default function DepartmentsLoading() {
  return (
    <div className="space-y-8">
      {/* Tiêu đề trang */}
      <div className="mb-8">
        <div className="h-10 w-1/3 animate-pulse rounded-md bg-gray-200" />
        <div className="mt-2 h-6 w-2/3 animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Danh sách bộ môn */}
      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 w-full animate-pulse bg-gray-200" />
            <CardContent className="p-4">
              <div className="mb-4 space-y-2">
                <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
                <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
                <div className="h-4 w-2/3 animate-pulse rounded-md bg-gray-200" />
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
                    <div className="h-4 w-20 animate-pulse rounded-md bg-gray-200" />
                  </div>
                ))}
              </div>

              <div className="h-10 w-32 animate-pulse rounded-md bg-gray-200" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Phòng thí nghiệm */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-8 w-1/4 animate-pulse rounded-md bg-gray-200" />
          <div className="h-6 w-24 animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-40 w-full animate-pulse bg-gray-200" />
              <CardContent className="p-4">
                <div className="h-6 w-3/4 animate-pulse rounded-md bg-gray-200" />
                <div className="mt-2 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
                </div>
                <div className="mt-3 h-6 w-28 animate-pulse rounded-md bg-gray-200" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
