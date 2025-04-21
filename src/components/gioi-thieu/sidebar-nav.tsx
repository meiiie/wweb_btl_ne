"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface SidebarNavProps {
  items: {
    title: string
    href: string
  }[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <Card className="sticky top-24 border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4 text-primary border-b border-primary/20 pb-2" id="sidebar-navigation">
          Giới thiệu
        </h2>
        <nav aria-labelledby="sidebar-navigation">
          <ul className="space-y-1" role="list">
            {items.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <li key={item.href} role="listitem">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative block py-2 px-3 rounded-md transition-all duration-200",
                      isActive
                        ? "text-primary font-medium bg-primary/5"
                        : "text-gray-700 hover:bg-primary/5 hover:text-primary hover:pl-4",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      />
                    )}
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </CardContent>
    </Card>
  )
}
