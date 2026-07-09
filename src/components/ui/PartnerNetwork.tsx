import { useMemo } from "react"
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
  const edges: NetworkEdge[] = partners.map((partner) => ({ source: LAB_ID, target: partner.slug }))

  if (partners.length > 1) {
    const extraCount = Math.max(1, Math.ceil(partners.length / 2))
    const used = new Set<string>()
    let attempts = 0
    while (used.size < extraCount && attempts < extraCount * 12) {
      attempts++
      const a = partners[Math.floor(Math.random() * partners.length)]
      const b = partners[Math.floor(Math.random() * partners.length)]
      if (a.slug === b.slug) continue
      const key = [a.slug, b.slug].sort().join("|")
      if (used.has(key)) continue
      used.add(key)
      edges.push({ source: a.slug, target: b.slug })
    }
  }

  return edges
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
          const isHubEdge = edge.source === LAB_ID || edge.target === LAB_ID
          return (
            <line
              key={index}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--color-ink-soft)"
              strokeWidth={isHubEdge ? 2.5 : 1.5}
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
          <Link
            key={partner.slug}
            to={`/parcerias/${categorySlug}/${partner.slug}`}
            title={partner.name}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-center"
            style={{ left: `${(pos.x / WIDTH) * 100}%`, top: `${(pos.y / HEIGHT) * 100}%` }}
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt=""
                className="h-10 w-10 rounded-full border border-border bg-paper object-contain shadow-md transition-transform hover:scale-110 sm:h-14 sm:w-14"
              />
            ) : (
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full font-serif text-xs font-semibold text-white shadow-md transition-transform hover:scale-110 sm:h-14 sm:w-14 sm:text-sm ${accentFor(partner.name)}`}
              >
                {initials(partner.name)}
              </span>
            )}
            <span className="max-w-[4.5rem] text-[10px] text-ink-soft sm:max-w-[6rem] sm:text-xs">
              {partner.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
