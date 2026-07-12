import type { ReactNode } from "react"

export type CardTone = "bronze" | "silver" | "gold"

const TONE_CLASSES: Record<CardTone, string> = {
  bronze: "border-medal-bronze-500/30 bg-medal-bronze-100",
  silver: "border-medal-silver-500/30 bg-medal-silver-100",
  gold: "border-medal-gold-500/30 bg-medal-gold-100",
}

export function Card({
  children,
  className = "",
  tone,
}: {
  children: ReactNode
  className?: string
  tone?: CardTone
}) {
  const toneClasses = tone ? TONE_CLASSES[tone] : "border-border bg-paper"
  return (
    <div className={`rounded-lg border ${toneClasses} p-6 transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  )
}
