import { pt } from "./dictionaries/pt"
import { en } from "./dictionaries/en"
import { es } from "./dictionaries/es"
import type { LanguageCode } from "./languages"

export const translations: Record<LanguageCode, typeof pt> = { pt, en, es }

export type Dictionary = typeof pt
