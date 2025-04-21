import { PageHero } from "@/components/gioi-thieu/page-hero"
import { Card } from "@/components/ui/card"

export default function HistoryLoading() {
  return (
    <>
      <PageHero
        title="Lịch sử phát triển"
        breadcrumb={[
          { title: "Giới thiệu", href: "/gioi-thieu" },
          { title: "Lịch sử phát triển", href: "/gioi-thieu/lich-su" },
        ]}
      />

      <Card className="p-6">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-6 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-8"></div>

        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="pl-8 relative">
              <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="h-4 bg-gray-200 rounded w-1/6 mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
