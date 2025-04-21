"use client"

import { useState, useEffect } from "react"

/**
 * Hook theo dõi vị trí cuộn trang
 */
export function useScroll(threshold = 100) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return scrolled
}
