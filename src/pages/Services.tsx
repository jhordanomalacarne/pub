import { useState } from "react"
import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card, type CardTone } from "../components/ui/Card"
import { getServicesForAudience, getServiceTranslation, type ServiceAudience } from "../lib/services"
import { useLanguage } from "../i18n/LanguageContext"

const AUDIENCES: ServiceAudience[] = ["public", "partners", "academic"]

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

export function Services() {
  const { dict } = useLanguage()
  const t = dict.services
  const [audience, setAudience] = useState<ServiceAudience>("public")

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

  const services = getServicesForAudience(audience)

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
