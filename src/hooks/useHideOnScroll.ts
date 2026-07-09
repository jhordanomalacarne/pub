import { useEffect, useRef, useState } from "react"

const TOP_THRESHOLD = 64
const SCROLL_DELTA = 8

export function useHideOnScroll() {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    function handleScroll() {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        if (currentY <= TOP_THRESHOLD) {
          setVisible(true)
        } else if (currentY - lastY.current > SCROLL_DELTA) {
          setVisible(false)
        } else if (lastY.current - currentY > SCROLL_DELTA) {
          setVisible(true)
        }
        lastY.current = currentY
        ticking.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return visible
}
