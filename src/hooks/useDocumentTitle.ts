import { useEffect } from "react"

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Laboratório Zero` : "Laboratório Zero — GTEC"
  }, [title])
}
