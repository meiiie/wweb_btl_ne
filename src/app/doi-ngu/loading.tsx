import { Skeleton } from "@/components/ui/skeleton"
import { Container } from "@/components/ui/container"

export default function DoiNguLoading() {
  return (
    <Container className="py-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
        </div>
      </div>
    </Container>
  )
}
