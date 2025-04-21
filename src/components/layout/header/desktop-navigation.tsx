"use client"

import { NavigationItem } from "./navigation-item"
import { navigation } from "./navigation-data"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface DesktopNavigationProps {
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
  onMegaMenuOpen: (name: string) => void
  onCloseMegaMenu: () => void
  activeMegaMenu: string | null
  scrolled: boolean
}

export function DesktopNavigation({
  activeDropdown,
  toggleDropdown,
  onMegaMenuOpen,
  onCloseMegaMenu,
  activeMegaMenu,
  scrolled,
}: DesktopNavigationProps) {
  // Các mục có mega menu - đảm bảo tên chính xác khớp với navigation-data.ts
  const megaMenuItems = ["Giới thiệu", "Đào tạo", "Nghiên cứu", "Đội ngũ", "Sinh viên"]
  const navRef = useRef(null)

  return (
    <nav className="hidden lg:block w-full">
      <div className="flex items-center justify-center" ref={navRef}>
        <ul className={cn("nav-list flex justify-center space-x-1", scrolled ? "text-sm" : "")}>
          {navigation.map((item) => (
            <li key={item.name} className="nav-item">
              <NavigationItem
                item={item}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                onMegaMenuOpen={onMegaMenuOpen}
                onCloseMegaMenu={onCloseMegaMenu}
                hasMegaMenu={megaMenuItems.includes(item.name)}
                activeMegaMenu={activeMegaMenu}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
