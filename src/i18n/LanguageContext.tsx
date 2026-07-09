import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { hasConsent } from "../lib/cookieConsent"
import { DEFAULT_LANGUAGE } from "./languages"
import type { LanguageCode } from "./languages"
import { translations } from "./translations"
import type { Dictionary } from "./translations"

const STORAGE_KEY = "language"

function isLanguageCode(value: string | null): value is LanguageCode {
  return value === "pt" || value === "en" || value === "es"
}

function getInitialLanguage(): LanguageCode {
  if (hasConsent()) {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguageCode(stored)) return stored
  }
  return DEFAULT_LANGUAGE
}

function resolvePath(dict: Dictionary, path: string): unknown {
  return path.split(".").reduce<unknown>((node, key) => {
    if (node && typeof node === "object" && key in node) {
      return (node as Record<string, unknown>)[key]
    }
    return undefined
  }, dict)
}

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  dict: Dictionary
  t: (path: string, vars?: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage)

  useEffect(() => {
    if (hasConsent()) {
      window.localStorage.setItem(STORAGE_KEY, language)
    }
  }, [language])

  const dict = translations[language]

  function t(path: string, vars?: Record<string, string>) {
    const value = resolvePath(dict, path)
    let text = typeof value === "string" ? value : path
    if (vars) {
      for (const [key, replacement] of Object.entries(vars)) {
        text = text.replace(`{${key}}`, replacement)
      }
    }
    return text
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
