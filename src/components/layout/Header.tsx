import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { NAV_ITEMS } from "../../lib/nav"
import { ABOUT_SECTIONS } from "../../lib/aboutSections"
import { PARTNERSHIP_CATEGORIES } from "../../lib/partnershipCategories"
import { OPPORTUNITIES_SECTIONS } from "../../lib/opportunitiesSections"
import { useHideOnScroll } from "../../hooks/useHideOnScroll"
import { useLanguage } from "../../i18n/LanguageContext"
import { LANGUAGES } from "../../i18n/languages"
import { USER_AREA_URL } from "../../lib/externalLinks"
import gtecLogo from "../../assets/gtec-logo.png"
import lab0LogoNavy from "../../assets/lab0-logo-navy.svg"
import lab0LogoLight from "../../assets/lab0-logo-light.svg"
import { ThemeToggle } from "../ui/ThemeToggle"
import { LanguageSwitcher } from "../ui/LanguageSwitcher"

type SubmenuSection = { id: string; label: string }

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "text-sm transition-colors",
    isActive
      ? "text-heading font-semibold"
      : "text-ink-soft hover:text-heading",
  ].join(" ")
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M3 4.5l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DesktopSubmenu({
  basePath,
  label,
  sections,
}: {
  basePath: string
  label: string
  sections: readonly SubmenuSection[]
}) {
  const { dict } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div ref={ref} className="relative flex items-center gap-0.5">
      <NavLink to={basePath} end className={navLinkClass} onClick={() => setOpen(false)}>
        {label}
      </NavLink>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${open ? dict.header.collapseSubmenu : dict.header.expandSubmenu} ${label}`}
        className="rounded p-0.5 text-ink-soft transition-colors hover:text-heading"
      >
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-md border border-border bg-paper py-2 shadow-lg">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`${basePath}#${section.id}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-heading"
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileSubmenu({
  basePath,
  label,
  sections,
  onNavigate,
}: {
  basePath: string
  label: string
  sections: readonly SubmenuSection[]
  onNavigate: () => void
}) {
  const { dict } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <li>
      <div className="flex items-center justify-between gap-2">
        <NavLink to={basePath} end className={navLinkClass} onClick={onNavigate}>
          {label}
        </NavLink>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${open ? dict.header.collapseSubmenu : dict.header.expandSubmenu} ${label}`}
          className="rounded p-1 text-ink-soft transition-colors hover:text-heading"
        >
          <ChevronIcon open={open} />
        </button>
      </div>

      {open && (
        <ul className="mt-2 flex flex-col gap-2 border-l border-border pl-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={`${basePath}#${section.id}`}
                onClick={onNavigate}
                className="block text-sm text-ink-soft transition-colors hover:text-heading"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export function Header() {
  const { language, setLanguage, dict } = useLanguage()
  const [open, setOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const scrollVisible = useHideOnScroll()
  const visible = open || scrollVisible

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const aboutSections: SubmenuSection[] = ABOUT_SECTIONS.map((section) => ({
    id: section.id,
    label: dict.aboutSections[section.key],
  }))
  const partnershipSections: SubmenuSection[] = PARTNERSHIP_CATEGORIES.map((category) => ({
    id: category.id,
    label: category.label[language],
  }))
  const opportunitiesSections: SubmenuSection[] = OPPORTUNITIES_SECTIONS.map((section) => ({
    id: section.id,
    label: dict.opportunitiesSections[section.key],
  }))
  const submenus: Record<string, SubmenuSection[]> = {
    "/sobre": aboutSections,
    "/parcerias": partnershipSections,
    "/oportunidades": opportunitiesSections,
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border bg-paper/95 backdrop-blur transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={gtecLogo} alt="GTEC" className="h-9 w-auto" />
          <img src={lab0LogoNavy} alt="Laboratório Zero" className="h-8 w-auto dark:hidden" />
          <img src={lab0LogoLight} alt="Laboratório Zero" className="hidden h-8 w-auto dark:block" />
        </NavLink>

        <nav className="hidden flex-wrap items-center justify-end gap-x-3 gap-y-1 xl:flex">
          {NAV_ITEMS.map((item) => {
            const sections = submenus[item.path]
            const label = dict.nav[item.key]
            return sections ? (
              <DesktopSubmenu key={item.path} basePath={item.path} label={label} sections={sections} />
            ) : (
              <NavLink key={item.path} to={item.path} end={item.path === "/"} className={navLinkClass}>
                {label}
              </NavLink>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div ref={mobileMenuRef} className="relative flex shrink-0 items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border p-2"
            aria-label={dict.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {open && (
            <nav className="absolute right-0 top-full z-50 mt-2 w-max max-w-xs max-h-[calc(100vh-5rem)] overflow-y-auto rounded-md border border-border bg-paper p-4 shadow-lg">
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => {
                  const sections = submenus[item.path]
                  const label = dict.nav[item.key]
                  return sections ? (
                    <MobileSubmenu
                      key={item.path}
                      basePath={item.path}
                      label={label}
                      sections={sections}
                      onNavigate={() => setOpen(false)}
                    />
                  ) : (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        className={navLinkClass}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-4 border-t border-border pt-4">
                <span className="text-sm text-ink-soft">{dict.header.changeLanguage}</span>
                <div className="mt-2 flex items-center gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code)
                        setOpen(false)
                      }}
                      aria-label={lang.label}
                      aria-pressed={lang.code === language}
                      className={`inline-flex items-center justify-center rounded-md border p-2 text-base leading-none transition-colors ${
                        lang.code === language
                          ? "border-heading"
                          : "border-border hover:border-heading"
                      }`}
                    >
                      <span aria-hidden="true">{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>

      <div className="border-t border-border bg-gtec-green-100">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3 px-6 py-2">
          <Link
            to="/status"
            onClick={() => setOpen(false)}
            className="inline-flex items-center rounded-full bg-gtec-green-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gtec-green-700"
          >
            {dict.header.serviceStatusCta}
          </Link>
          {USER_AREA_URL ? (
            <a
              href={USER_AREA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gtec-green-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-gtec-green-700"
            >
              {dict.header.userAreaCta}
            </a>
          ) : (
            <span
              title={dict.header.userAreaComingSoon}
              className="inline-flex cursor-not-allowed items-center rounded-full bg-gtec-green-600/60 px-4 py-1.5 text-xs font-semibold text-white opacity-80"
            >
              {dict.header.userAreaCta}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
