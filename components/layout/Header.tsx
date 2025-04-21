"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { TopBar } from "./header/top-bar"
import { DesktopNavigation } from "./header/desktop-navigation"
import { MobileMenu } from "./header/mobile-menu"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const scrolled = useScroll(50)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className={cn("sticky top-0 z-50 bg-white transition-shadow duration-300", scrolled && "shadow-md")}>
      <TopBar />

      {/* Main navigation */}
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-12 w-12">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Logo Khoa CNTT"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block">
                <div className="text-primary font-bold text-lg leading-tight">KHOA CÔNG NGHỆ THÔNG TIN</div>
                <div className="text-gray-600 text-xs">TRƯỜNG ĐẠI HỌC HÀNG HẢI VIỆT NAM</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <DesktopNavigation activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Mở menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} />
    </header>
  )
}
