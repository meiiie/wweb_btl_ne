"use client"

import { NavigationItem } from "./navigation-item"
import { navigation } from "./navigation-data"

interface DesktopNavigationProps {
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
}

export function DesktopNavigation({ activeDropdown, toggleDropdown }: DesktopNavigationProps) {
  return (
    <nav className="hidden lg:flex space-x-1">
      {navigation.map((item) => (
        <NavigationItem key={item.name} item={item} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
      ))}
    </nav>
  )
}
