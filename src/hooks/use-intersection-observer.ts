"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver<T extends HTMLElement>({
  threshold = 0,
  rootMargin = "0px",
}: UseIntersectionObserverProps = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin])

  return [ref, isIntersecting]
}
