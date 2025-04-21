import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "font-medium rounded-md transition-colors focus:outline-none"

    const variantStyles = {
      primary: "bg-primary hover:bg-primary-light text-white",
      secondary: "bg-secondary hover:bg-opacity-90 text-white",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-primary hover:bg-gray-100",
    }

    const sizeStyles = {
      sm: "py-1 px-3 text-sm",
      md: "py-2 px-4",
      lg: "py-3 px-6 text-lg",
    }

    return (
      <button className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} ref={ref} {...props} />
    )
  },
)

Button.displayName = "Button"

export { Button }
