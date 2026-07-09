import { useEffect, useRef, useState } from "react"
import { useLanguage } from "../../i18n/LanguageContext"
import { LANGUAGES } from "../../i18n/languages"

export function LanguageSwitcher() {
  const { language, setLanguage, dict } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={dict.header.changeLanguage}
        className="inline-flex items-center justify-center rounded-md border border-border p-2 text-base leading-none"
      >
        <span aria-hidden="true">{current.flag}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-36 rounded-md border border-border bg-paper py-2 shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLanguage(lang.code)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-surface ${
                lang.code === language ? "font-semibold text-heading" : "text-ink-soft"
              }`}
            >
              <span aria-hidden="true">{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
