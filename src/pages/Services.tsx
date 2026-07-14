import { useState } from "react"
import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import {
  SERVICES,
  getAudiencesForService,
  getServiceTranslation,
  type ServiceAudience,
  type ServiceCategory,
} from "../lib/services"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

const CATEGORIES: ServiceCategory[] = ["infrastructure", "development", "data-ai", "security", "utilities"]

const CHIP_ACTIVE = "border-heading bg-heading text-paper"
const CHIP_INACTIVE = "border-border text-ink-soft hover:border-heading hover:text-heading"

const AUDIENCE_BADGE_TONE: Record<ServiceAudience, string> = {
  public: "bg-medal-bronze-100 text-medal-bronze-700",
  partners: "bg-medal-silver-100 text-medal-silver-700",
  academic: "bg-medal-gold-100 text-medal-gold-700",
}

export function Services() {
  const { dict } = useLanguage()
  const t = dict.services
  useDocumentTitle(t.title)
  const [category, setCategory] = useState<ServiceCategory | "all">("all")
  const [search, setSearch] = useState("")

  const audienceBadgeLabel: Record<ServiceAudience, string> = {
    public: t.audiencePublicBadge,
    partners: t.audiencePartnersBadge,
    academic: t.audienceAcademicBadge,
  }

  const query = search.trim().toLowerCase()
  const services = SERVICES.filter((service) => category === "all" || service.category === category).filter(
    (service) => {
      if (!query) return true
      const item = getServiceTranslation(dict, service.slug)
      return item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    },
  )

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t.searchPlaceholder}
          aria-label={t.searchPlaceholder}
          className="w-full max-w-md rounded-md border border-border bg-paper px-4 py-2 text-sm text-ink placeholder:text-ink-soft focus:border-heading focus:outline-none"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === "all" ? CHIP_ACTIVE : CHIP_INACTIVE
            }`}
          >
            {t.categoryAllLabel}
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === c ? CHIP_ACTIVE : CHIP_INACTIVE
              }`}
            >
              {t.categories[c]}
            </button>
          ))}
        </div>

        {services.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const item = getServiceTranslation(dict, service.slug)
              const audiences = getAudiencesForService(service)
              return (
                <Link key={service.slug} to={`/servicos/${service.slug}`}>
                  <Card className="h-full">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                        <service.icon />
                      </div>
                      <div className="flex flex-1 flex-wrap justify-end gap-1">
                        {audiences.map((a) => (
                          <span
                            key={a}
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${AUDIENCE_BADGE_TONE[a]}`}
                          >
                            {audienceBadgeLabel[a]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="mt-4 font-serif text-lg font-semibold text-heading">{item.name}</h2>
                    <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                        {t.categories[service.category]}
                      </span>
                      {service.audience === "academic" && (
                        <span className="inline-block rounded-full bg-paper px-3 py-1 text-xs font-medium text-medal-gold-700">
                          {t.academicBadge}
                        </span>
                      )}
                      {!service.url && (
                        <span className="inline-block rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink-soft">
                          {t.comingSoon}
                        </span>
                      )}
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="mt-8 rounded-lg border border-border bg-surface p-6 text-sm text-ink-soft">
            {t.noResults}
          </p>
        )}

        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
