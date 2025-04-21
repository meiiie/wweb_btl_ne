import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatItemProps {
  value: string
  label: string
  icon?: React.ReactNode
  className?: string
}

export function StatItem({ value, label, icon, className }: StatItemProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          {icon && (
            <div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">
              {icon}
            </div>
          )}
          <div>
            <div className="text-3xl font-bold text-primary" aria-label={`${value} ${label}`}>
              {value}
            </div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface StatsProps {
  items: {
    value: string
    label: string
    icon?: React.ReactNode
  }[]
  className?: string
  columns?: 2 | 3 | 4
  title?: string
}

export function Stats({ items, className, columns = 4, title }: StatsProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn(`grid ${gridCols[columns]} gap-4`, className)} role="group" aria-label={title || "Thống kê"}>
      {items.map((item, index) => (
        <StatItem key={index} value={item.value} label={item.label} icon={item.icon} />
      ))}
    </div>
  )
}
