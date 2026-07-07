import type { ReactNode } from "react"

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-lg border border-border bg-paper p-6 transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
