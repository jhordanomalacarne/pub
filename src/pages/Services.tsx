import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card, type CardTone } from "../components/ui/Card"
import {
  getServicesForAudience,
  getServiceTranslation,
  type ServiceAudience,
  type ServiceCategory,
} from "../lib/services"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

const AUDIENCES: ServiceAudience[] = ["public", "partners", "academic"]
const CATEGORIES: ServiceCategory[] = ["infrastructure", "development", "data-ai", "security", "utilities"]

const AUDIENCE_TONE: Record<ServiceAudience, CardTone> = {
  public: "bronze",
  partners: "silver",
  academic: "gold",
}

const TAB_TONE_ACTIVE: Record<ServiceAudience, string> = {
  public: "border-medal-bronze-500 bg-medal-bronze-100 text-medal-bronze-700",
  partners: "border-medal-silver-500 bg-medal-silver-100 text-medal-silver-700",
  academic: "border-medal-gold-500 bg-medal-gold-100 text-medal-gold-700",
}

const CHIP_ACTIVE = "border-heading bg-heading text-paper"
const CHIP_INACTIVE = "border-border text-ink-soft hover:border-heading hover:text-heading"

export function Services() {
  const { dict } = useLanguage()
  const t = dict.services
  useDocumentTitle(t.title)
  const [searchParams] = useSearchParams()
  const [audience, setAudience] = useState<ServiceAudience>("public")
  const [category, setCategory] = useState<ServiceCategory | "all">("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const param = searchParams.get("audiencia")
    if (AUDIENCES.includes(param as ServiceAudience)) {
      setAudience(param as ServiceAudience)
    }
  }, [searchParams])

  const audienceLabel: Record<ServiceAudience, string> = {
    public: t.audiencePublicLabel,
    partners: t.audiencePartnersLabel,
    academic: t.audienceAcademicLabel,
  }
  const audienceDescription: Record<ServiceAudience, string> = {
    public: t.audiencePublicDescription,
    partners: t.audiencePartnersDescription,
    academic: t.audienceAcademicDescription,
  }
  const audienceRequirement: Record<ServiceAudience, string> = {
    public: t.audiencePublicRequirement,
    partners: t.audiencePartnersRequirement,
    academic: t.audienceAcademicRequirement,
  }

  const query = search.trim().toLowerCase()
  const services = getServicesForAudience(audience)
    .filter((service) => category === "all" || service.category === category)
    .filter((service) => {
      if (!query) return true
      const item = getServiceTranslation(dict, service.slug)
      return item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    })

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap gap-2">
          {AUDIENCES.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAudience(a)}
              aria-pressed={audience === a}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                audience === a
                  ? TAB_TONE_ACTIVE[a]
                  : "border-border text-ink-soft hover:border-heading hover:text-heading"
              }`}
            >
              {audienceLabel[a]}
            </button>
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-sm text-ink-soft">{audienceDescription[audience]}</p>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">{audienceRequirement[audience]}</p>
        <Link
          to={`/servicos/requisitos/${audience}`}
          className="mt-2 inline-block text-sm font-semibold text-heading transition-colors hover:text-navy-700 dark:hover:text-white"
        >
          {t.audienceLearnMore}
        </Link>

        <div className="mt-8 border-t border-border pt-8">
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
        </div>

        {services.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const item = getServiceTranslation(dict, service.slug)
              return (
                <Link key={service.slug} to={`/servicos/${service.slug}`}>
                  <Card className="h-full" tone={AUDIENCE_TONE[service.audience]}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                      <service.icon />
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

        {audience === "academic" && (
          <p className="mt-8 rounded-lg border border-border bg-surface p-4 text-sm text-ink-soft">
            {t.pipelineNote}
          </p>
        )}

        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
