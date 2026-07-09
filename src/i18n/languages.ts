export type LanguageCode = "pt" | "en" | "es"

export type LocalizedText = Record<LanguageCode, string>
export type LocalizedList = Record<LanguageCode, string[]>

export const LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
]

export const DEFAULT_LANGUAGE: LanguageCode = "pt"
