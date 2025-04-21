"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface NavigationItemProps {
  item: {
    name: string
    href: string
    children?: {
      name: string
      href: string
    }[]
  }
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
  onMegaMenuOpen: (name: string) => void
  onCloseMegaMenu: () => void
  hasMegaMenu: boolean
  activeMegaMenu: string | null
}

export function NavigationItem({
  item,
  activeDropdown,
  toggleDropdown,
  onMegaMenuOpen,
  onCloseMegaMenu,
  hasMegaMenu,
  activeMegaMenu,
}: NavigationItemProps) {
  const [isHovering, setIsHovering] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
  const isDropdownActive = activeDropdown === item.name
  const isMegaMenuActive = activeMegaMenu === item.name

  // Xử lý click ra ngoài để đóng dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isDropdownActive) {
          toggleDropdown(item.name)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownActive, item.name, toggleDropdown])

  // Xử lý hover
  const handleMouseEnter = () => {
    setIsHovering(true)
    if (hasMegaMenu) {
      onMegaMenuOpen(item.name)
    } else {
      onCloseMegaMenu()
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div ref={dropdownRef} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {item.children ? (
        // Item có dropdown
        <button
          onClick={() => toggleDropdown(item.name)}
          className={cn(
            "flex items-center px-4 py-2 text-white hover:text-white/80 transition-colors whitespace-nowrap",
            (isActive || isDropdownActive || isMegaMenuActive) && "font-medium",
          )}
          aria-expanded={isDropdownActive}
          aria-controls={`dropdown-${item.name}`}
        >
          <span>{item.name}</span>
          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isDropdownActive && "rotate-180")} />
        </button>
      ) : (
        // Item không có dropdown
        <Link
          href={item.href}
          className={cn(
            "flex items-center px-4 py-2 text-white hover:text-white/80 transition-colors whitespace-nowrap",
            isActive && "font-medium",
          )}
        >
          {item.name}
        </Link>
      )}

      {/* Dropdown menu */}
      {item.children && !hasMegaMenu && (
        <div
          id={`dropdown-${item.name}`}
          className={cn(
            "absolute left-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-10",
            isDropdownActive || isHovering
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
          )}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => toggleDropdown(item.name)}
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
