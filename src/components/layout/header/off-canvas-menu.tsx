"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  X,
  ChevronRight,
  Home,
  Info,
  BookOpen,
  Users,
  Briefcase,
  Bell,
  GraduationCapIcon as Graduation,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "./navigation-data"

interface OffCanvasMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function OffCanvasMenu({ isOpen, onClose }: OffCanvasMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  // Đóng menu khi nhấn ESC
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  // Map icons to menu items
  const getIcon = (name: string) => {
    switch (name) {
      case "Trang chủ":
        return <Home className="h-5 w-5" />
      case "Giới thiệu":
        return <Info className="h-5 w-5" />
      case "Đào tạo":
        return <Graduation className="h-5 w-5" />
      case "Nghiên cứu":
        return <BookOpen className="h-5 w-5" />
      case "Đội ngũ":
        return <Users className="h-5 w-5" />
      case "Sinh viên":
        return <Users className="h-5 w-5" />
      case "Hợp tác":
        return <Briefcase className="h-5 w-5" />
      case "Tin tức & Sự kiện":
        return <Bell className="h-5 w-5" />
      case "Tuyển sinh":
        return <Graduation className="h-5 w-5" />
      default:
        return <ChevronRight className="h-5 w-5" />
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Menu chính"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center" onClick={onClose}>
            <Image src="/images/vmu-logo.png" alt="VMU Logo" width={40} height={40} className="rounded-md" />
            <span className="ml-2 font-bold text-primary text-lg">VMU-FIT</span>
          </Link>
          <button
            type="button"
            className="text-gray-500 hover:text-primary p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={onClose}
            aria-label="Đóng menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu items */}
        <div className="py-2 px-2 overflow-y-auto max-h-[calc(100vh-64px)]">
          {navigation.map((item) => (
            <div key={item.name} className="mb-1">
              {item.children ? (
                <div>
                  <button
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-md text-left transition-colors",
                      activeSubmenu === item.name ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100",
                    )}
                    onClick={() => toggleSubmenu(item.name)}
                    aria-expanded={activeSubmenu === item.name}
                  >
                    <div className="flex items-center">
                      {getIcon(item.name)}
                      <span className="ml-3 font-medium">{item.name}</span>
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        activeSubmenu === item.name ? "rotate-90" : "",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out pl-4 pr-2",
                      activeSubmenu === item.name ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="py-1 pl-4 border-l-2 border-primary/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-2 text-gray-600 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
                          onClick={onClose}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                >
                  {getIcon(item.name)}
                  <span className="ml-3 font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col space-y-2">
            <Link
              href="/lien-he"
              className="text-primary hover:text-primary-dark text-sm flex items-center"
              onClick={onClose}
            >
              <span>Liên hệ</span>
            </Link>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm">
                VI
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-primary text-primary text-sm">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
