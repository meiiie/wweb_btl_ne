"use client"

import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { Container } from "@/components/ui/container"
import { TopBar } from "./header/top-bar"
import { DesktopNavigation } from "./header/desktop-navigation"
import { MobileMenu } from "./header/mobile-menu"
import { MegaMenu } from "./header/mega-menu"
import { OffCanvasMenu } from "./header/off-canvas-menu"
import { SearchBar } from "./header/search-bar"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [offCanvasOpen, setOffCanvasOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const scrolled = useScroll(10)
  const pathname = usePathname()
  const headerRef = useRef<HTMLDivElement>(null)
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isHoveringMegaMenu, setIsHoveringMegaMenu] = useState(false)

  // Đóng menu khi chuyển trang
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMegaMenu(null)
    setOffCanvasOpen(false)
  }, [pathname])

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest(".mobile-menu-container")) {
        setMobileMenuOpen(false)
      }

      if (
        activeMegaMenu &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".mega-menu-container")
      ) {
        setActiveMegaMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen, activeMegaMenu])

  // Cleanup timeout khi unmount
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current)
      }
    }
  }, [])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleMegaMenuOpen = (name: string) => {
    // Hủy timeout đóng mega menu nếu có
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }

    // Mở mega menu mới nếu item có mega menu, ngược lại đóng mega menu
    const megaMenuItems = ["Giới thiệu", "Đào tạo", "Nghiên cứu", "Đội ngũ", "Sinh viên"]
    if (megaMenuItems.includes(name)) {
      setActiveMegaMenu(name)
    } else {
      setActiveMegaMenu(null)
    }
  }

  // Xử lý đóng mega menu
  const handleCloseMegaMenu = () => {
    if (!isHoveringMegaMenu) {
      megaMenuTimeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(null)
      }, 150)
    }
  }

  // Đóng mega menu ngay lập tức
  const closeAllMegaMenus = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }
    setActiveMegaMenu(null)
  }

  // Hàm xử lý khi hover vào mega menu
  const handleMegaMenuHover = (isHovering: boolean) => {
    setIsHoveringMegaMenu(isHovering)

    if (isHovering && megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current)
      megaMenuTimeoutRef.current = null
    }
  }

  return (
    <header
      ref={headerRef}
      className={cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "shadow-md" : "")}
    >
      {/* Top Bar - Branding & Utilities */}
      <div
        className={cn(
          "bg-white transition-all duration-300 transform",
          scrolled ? "-translate-y-full h-0 opacity-0 overflow-hidden" : "translate-y-0 h-[80px] opacity-100 py-3",
        )}
      >
        <TopBar />
      </div>

      {/* Border phân tách */}
      <div
        className={cn("header-border transition-all duration-300", scrolled ? "opacity-0 h-0" : "opacity-100 h-1 mb-3")}
      ></div>

      {/* Main navigation */}
      <nav className={cn("main-nav bg-primary text-white", scrolled ? "py-2" : "py-3")}>
        <Container>
          <div className="flex justify-center items-center">
            {/* Desktop navigation */}
            <DesktopNavigation
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              onMegaMenuOpen={handleMegaMenuOpen}
              onCloseMegaMenu={closeAllMegaMenus}
              activeMegaMenu={activeMegaMenu}
              scrolled={scrolled}
            />

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center ml-auto">
              <button
                type="button"
                className="text-white p-2 rounded-md hover:bg-secondary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => setOffCanvasOpen(true)}
                aria-expanded={offCanvasOpen}
                aria-controls="off-canvas-menu"
              >
                <span className="sr-only">{offCanvasOpen ? "Đóng menu" : "Mở menu"}</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu-container">
        <MobileMenu isOpen={mobileMenuOpen} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
      </div>

      {/* Off-canvas Menu for Mobile */}
      <OffCanvasMenu isOpen={offCanvasOpen} onClose={() => setOffCanvasOpen(false)} />

      {/* Mega Menu */}
      <MegaMenu
        category={activeMegaMenu || ""}
        isOpen={!!activeMegaMenu}
        onClose={() => setActiveMegaMenu(null)}
        onHoverChange={handleMegaMenuHover}
      />

      {/* Search Bar */}
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
