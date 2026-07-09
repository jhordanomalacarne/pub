import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CONSENT_KEY, getConsent } from "../../lib/cookieConsent"
import type { ConsentValue } from "../../lib/cookieConsent"
import { useLanguage } from "../../i18n/LanguageContext"

export function CookieConsent({
  onVisibleChange,
}: {
  onVisibleChange?: (visible: boolean) => void
}) {
  const { dict } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const pending = getConsent() === null
    setVisible(pending)
    onVisibleChange?.(pending)
  }, [])

  function respond(value: ConsentValue) {
    window.localStorage.setItem(CONSENT_KEY, value)
    setVisible(false)
    onVisibleChange?.(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-paper px-6 py-4 shadow-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          {dict.cookieConsent.message}{" "}
          <Link to="/privacidade" className="font-semibold text-heading hover:underline">
            {dict.cookieConsent.learnMore}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-heading"
          >
            {dict.cookieConsent.decline}
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {dict.cookieConsent.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
