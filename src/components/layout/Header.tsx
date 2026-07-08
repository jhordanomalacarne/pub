import { useState } from "react"
import { NavLink } from "react-router-dom"
import { NAV_ITEMS } from "../../lib/nav"
import gtecLogo from "../../assets/gtec-logo.jpg"

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "text-sm transition-colors",
    isActive
      ? "text-navy-900 font-semibold"
      : "text-ink-soft hover:text-navy-900",
  ].join(" ")
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={gtecLogo} alt="GTEC" className="h-9 w-auto" />
          <span className="font-serif text-xl font-semibold text-navy-900">
            Laboratório Zero
          </span>
        </NavLink>

        <nav className="hidden flex-wrap items-center justify-end gap-x-3 gap-y-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === "/"} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 xl:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-paper px-6 py-4 xl:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
