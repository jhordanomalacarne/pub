export const CONSENT_KEY = "cookie-consent"

export type ConsentValue = "accepted" | "declined"

export function getConsent(): ConsentValue | null {
  const value = window.localStorage.getItem(CONSENT_KEY)
  return value === "accepted" || value === "declined" ? value : null
}

export function hasConsent(): boolean {
  return getConsent() === "accepted"
}

export function resetConsent() {
  window.localStorage.removeItem(CONSENT_KEY)
  window.location.reload()
}
