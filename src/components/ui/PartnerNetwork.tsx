import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import type { Partner } from "../../lib/partnershipCategories"
import { computeNetworkLayout } from "../../lib/networkLayout"
import type { NetworkEdge } from "../../lib/networkLayout"

const WIDTH = 1000
const HEIGHT = 560
const LAB_ID = "lab"

const NODE_ACCENTS = ["bg-navy-900", "bg-gold-600", "bg-navy-700", "bg-gold-500", "bg-navy-800"]

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3)
}

function accentFor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  return NODE_ACCENTS[hash % NODE_ACCENTS.length]
}

function buildEdges(partners: Partner[]): NetworkEdge[] {
  return partners.map((partner) => ({ source: LAB_ID, target: partner.slug }))
}

function PartnerLogo({ partner, className = "" }: { partner: Partner; className?: string }) {
  if (partner.logo) {
    return (
      <img
        src={partner.logo}
        alt=""
        className={`rounded-full border border-border bg-paper object-contain ${className}`}
      />
    )
  }
  return (
    <span
      className={`flex items-center justify-center rounded-full font-serif font-semibold text-white ${accentFor(partner.name)} ${className}`}
    >
      {initials(partner.name)}
    </span>
  )
}

function PartnerNode({
  categorySlug,
  partner,
  x,
  y,
}: {
  categorySlug: string
  partner: Partner
  x: number
  y: number
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div
      ref={ref}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label={partner.name}
        className="block"
      >
        <PartnerLogo
          partner={partner}
          className="h-10 w-10 text-xs shadow-md transition-transform hover:scale-110 sm:h-14 sm:w-14 sm:text-sm"
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-lg border border-border bg-paper p-3 text-center shadow-lg">
          <PartnerLogo partner={partner} className="mx-auto h-16 w-16 text-base" />
          <p className="mt-2 text-sm font-semibold text-heading">{partner.name}</p>
          <Link
            to={`/parcerias/${categorySlug}/${partner.slug}`}
            className="mt-2 inline-block text-xs font-semibold text-heading transition-colors hover:underline"
          >
            Ver detalhes da parceria →
          </Link>
        </div>
      )}
    </div>
  )
}

export function PartnerNetwork({
  categorySlug,
  partners,
}: {
  categorySlug: string
  partners: Partner[]
}) {
  const { positions, edges } = useMemo(() => {
    const edges = buildEdges(partners)
    const nodeIds = [LAB_ID, ...partners.map((p) => p.slug)]
    const positions = computeNetworkLayout(nodeIds, edges, { width: WIDTH, height: HEIGHT })
    return { positions, edges }
  }, [partners])

  const labPosition = positions[LAB_ID]

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-3xl sm:h-[480px]">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {edges.map((edge, index) => {
          const a = positions[edge.source]
          const b = positions[edge.target]
          if (!a || !b) return null
          return (
            <line
              key={index}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--color-ink-soft)"
              strokeWidth={2.5}
            />
          )
        })}
      </svg>

      <Link
        to="/sobre"
        title="Laboratório Zero"
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
        style={{
          left: `${(labPosition.x / WIDTH) * 100}%`,
          top: `${(labPosition.y / HEIGHT) * 100}%`,
        }}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 text-[10px] font-semibold text-white shadow-md transition-transform hover:scale-110 sm:h-16 sm:w-16 sm:text-xs">
          Lab
        </span>
        <span className="max-w-[4.5rem] text-center text-[10px] font-semibold text-heading sm:max-w-[6rem] sm:text-xs">
          Laboratório Zero
        </span>
      </Link>

      {partners.map((partner) => {
        const pos = positions[partner.slug]
        if (!pos) return null
        return (
          <PartnerNode
            key={partner.slug}
            categorySlug={categorySlug}
            partner={partner}
            x={(pos.x / WIDTH) * 100}
            y={(pos.y / HEIGHT) * 100}
          />
        )
      })}
    </div>
  )
}
