import { useCallback, useEffect, useState } from "react"
import { hasConsent } from "../lib/cookieConsent"

type Theme = "light" | "dark"

const STORAGE_KEY = "theme"

function getInitialTheme(): Theme {
  if (hasConsent()) {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark") return stored
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    if (hasConsent()) {
      window.localStorage.setItem(STORAGE_KEY, theme)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme }
}
