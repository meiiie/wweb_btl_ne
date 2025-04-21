"use client"

import { NavigationItem } from "./navigation-item"
import { navigation } from "./navigation-data"

interface MobileMenuProps {
  isOpen: boolean
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
}

export function MobileMenu({ isOpen, activeDropdown, toggleDropdown }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
        {navigation.map((item) => (
          <div key={item.name}>
            <NavigationItem
              item={item}
              isMobile={true}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              onMegaMenuOpen={() => {}}
              hasMegaMenu={false}
              activeMegaMenu={null}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
