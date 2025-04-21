import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, children, disabled, loading = false, ...props },
    ref,
  ) => {
    const baseStyles =
      "font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"

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

    const isDisabled = disabled || loading
    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      isDisabled && "opacity-50 cursor-not-allowed",
      className,
    )

    if (asChild) {
      // Khi asChild là true, chỉ trả về children mà không bọc trong Fragment
      return React.cloneElement(children as React.ReactElement, {
        className: cn(classes, (children as React.ReactElement).props.className),
        ref,
        "aria-disabled": isDisabled ? true : undefined,
        ...props,
      })
    }

    return (
      <button className={classes} ref={ref} disabled={isDisabled} aria-busy={loading ? "true" : undefined} {...props}>
        {loading ? (
          <>
            <span
              className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"
              aria-hidden="true"
            ></span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
