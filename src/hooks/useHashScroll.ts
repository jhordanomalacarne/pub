import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [location.hash])
}
