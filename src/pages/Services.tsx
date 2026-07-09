import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { SERVICES, getServiceTranslation } from "../lib/services"
import { useLanguage } from "../i18n/LanguageContext"

export function Services() {
  const { dict } = useLanguage()
  const t = dict.services

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const item = getServiceTranslation(dict, service.slug)
            return (
              <Link key={service.slug} to={`/servicos/${service.slug}`}>
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                    <service.icon />
                  </div>
                  <h2 className="mt-4 font-serif text-lg font-semibold text-heading">{item.name}</h2>
                  <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                  {!service.url && (
                    <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                      {t.comingSoon}
                    </span>
                  )}
                </Card>
              </Link>
            )
          })}
        </div>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
