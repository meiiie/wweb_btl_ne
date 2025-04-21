"use client"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItemProps {
  item: {
    name: string
    href: string
    children?: Array<{
      name: string
      href: string
    }>
  }
  isMobile?: boolean
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
}

export function NavigationItem({ item, isMobile = false, activeDropdown, toggleDropdown }: NavigationItemProps) {
  if (item.children) {
    return (
      <div className={cn("relative", !isMobile && "group")}>
        <button
          className={cn(
            isMobile
              ? "w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary flex justify-between items-center"
              : "px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary flex items-center",
          )}
          onClick={() => toggleDropdown(item.name)}
        >
          {item.name}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isMobile ? "ml-auto" : "ml-1",
              isMobile && activeDropdown === item.name && "rotate-180",
            )}
          />
        </button>

        {isMobile ? (
          activeDropdown === item.name && (
            <div className="pl-4 space-y-1 mt-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-primary text-sm"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )
        ) : (
          <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="py-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={cn(
        isMobile
          ? "block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary"
          : "px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary",
      )}
    >
      {item.name}
    </Link>
  )
}
