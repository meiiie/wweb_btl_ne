import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "primary" | "secondary" | "muted"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ className, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "bg-white",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    muted: "bg-gray-50",
  }

  return <section ref={ref} className={cn("py-16", variantStyles[variant], className)} {...props} />
})

Section.displayName = "Section"

export { Section }
