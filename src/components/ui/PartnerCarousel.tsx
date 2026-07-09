import { ALL_PARTNERS } from "../../lib/partnershipCategories"

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3)
}

export function PartnerCarousel() {
  if (ALL_PARTNERS.length === 0) return null

  const track = [...ALL_PARTNERS, ...ALL_PARTNERS]

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-6" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-6 hover:[animation-play-state:paused]">
        {track.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            title={partner.name}
            className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-paper px-3"
          >
            {partner.logo ? (
              <img src={partner.logo} alt="" className="max-h-10 max-w-full object-contain" />
            ) : (
              <span className="font-serif text-sm font-semibold text-heading">
                {initials(partner.name)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
