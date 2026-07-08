import type { SVGProps } from "react"

function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

export function WikiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 4.5c2-1 5-1 7 0v15c-2-1-5-1-7 0v-15Z" />
      <path d="M20 4.5c-2-1-5-1-7 0v15c2-1 5-1 7 0v-15Z" />
    </Base>
  )
}

export function PdfPrivacyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M6 3h8l4 4v6" />
      <path d="M14 3v4h4" />
      <rect x="4" y="14" width="8" height="7" rx="1.5" />
      <path d="M6 14v-1.5a2 2 0 1 1 4 0V14" />
    </Base>
  )
}

export function DiagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="6" height="4" rx="1" />
      <rect x="15" y="4" width="6" height="4" rx="1" />
      <rect x="9" y="16" width="6" height="4" rx="1" />
      <path d="M6 8v4h12V8" />
      <path d="M12 12v4" />
    </Base>
  )
}

export function SketchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 20c3-1 4-3 5-6l7-7 3 3-7 7c-3 1-5 2-6 5l-2-2Z" />
      <path d="M14 5.5 18.5 10" />
    </Base>
  )
}

export function SurveyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M9 8h6M9 12h6M9 16h3" />
      <path d="M7.5 8h.01M7.5 12h.01M7.5 16h.01" />
    </Base>
  )
}

export function PackageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4" />
      <path d="M12 11v10" />
    </Base>
  )
}

export function NetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="4.5" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path d="M12 6.3 5.9 16.4M12 6.3l6.1 10.1M6.7 18h10.6" />
    </Base>
  )
}

export function SpeedGaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15 16 9" />
      <path d="M12 15h.01" />
    </Base>
  )
}

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 13 4.5a3.5 3.5 0 0 1 5 5l-2 2" />
      <path d="M13 17.5 11 19.5a3.5 3.5 0 0 1-5-5l2-2" />
    </Base>
  )
}
