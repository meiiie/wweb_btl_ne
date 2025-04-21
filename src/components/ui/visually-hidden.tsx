import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0", className)}
      {...props}
    />
  )
})
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }
