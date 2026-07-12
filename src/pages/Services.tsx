import { useState } from "react"
import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { getServicesForAudience, getServiceTranslation, type ServiceAudience } from "../lib/services"
import { useLanguage } from "../i18n/LanguageContext"

const AUDIENCES: ServiceAudience[] = ["public", "partners", "academic"]

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
                  ? "border-navy-900 bg-navy-900 text-white dark:border-white dark:bg-white dark:text-navy-950"
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
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                    <service.icon />
                  </div>
                  <h2 className="mt-4 font-serif text-lg font-semibold text-heading">{item.name}</h2>
                  <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.audience === "academic" && (
                      <span className="inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-600">
                        {t.academicBadge}
                      </span>
                    )}
                    {!service.url && (
                      <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
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
