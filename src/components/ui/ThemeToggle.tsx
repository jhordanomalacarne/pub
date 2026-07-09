import { useTheme } from "../../hooks/useTheme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md border border-border p-2 text-ink-soft transition-colors hover:text-heading"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="4.2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 1.8v2M10 16.2v2M18.2 10h-2M3.8 10h-2M15.6 4.4l-1.4 1.4M5.8 14.2l-1.4 1.4M15.6 15.6l-1.4-1.4M5.8 5.8L4.4 4.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M17.2 12.4A7.5 7.5 0 0 1 7.6 2.8a7.5 7.5 0 1 0 9.6 9.6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
