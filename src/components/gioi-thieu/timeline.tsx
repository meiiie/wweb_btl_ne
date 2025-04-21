import { cn } from "@/lib/utils"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

export function TimelineItem({ year, title, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Vertical line */}
      {!isLast && <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-primary/20" aria-hidden="true"></div>}

      {/* Circle marker */}
      <div
        className="absolute left-0 top-3 h-6 w-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-2 w-2 rounded-full bg-primary"></div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <div className="text-sm font-semibold text-primary mb-1" aria-label={`Năm ${year}`}>
          {year}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

interface TimelineProps {
  items: {
    year: string
    title: string
    description: string
  }[]
  className?: string
  label?: string
}

export function Timeline({ items, className, label = "Dòng thời gian" }: TimelineProps) {
  return (
    <div className={cn("mt-6", className)} aria-label={label} role="region">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  )
}
