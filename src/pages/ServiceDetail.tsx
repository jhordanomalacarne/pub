import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { getServiceBySlug, getServiceTranslation } from "../lib/services"
import { useLanguage } from "../i18n/LanguageContext"

export function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const { dict } = useLanguage()
  const t = dict.services

  if (!service) {
    return <Navigate to="/servicos" replace />
  }

  const item = getServiceTranslation(dict, service.slug)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={item.name} description={item.description} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/servicos" className="text-sm text-ink-soft transition-colors hover:text-heading">
          {t.backToServices}
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
            <service.icon />
          </div>
          <div>
            <p className="text-ink-soft leading-relaxed">{item.details}</p>
            {service.audience === "academic" && (
              <span className="mt-3 inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-600">
                {t.academicBadge}
              </span>
            )}
          </div>
        </div>

        <h2 className="mt-10 font-serif text-xl font-semibold text-heading">{t.featuresTitle}</h2>
        <ul className="mt-4 space-y-2">
          {item.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-ink-soft">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          {service.url ? (
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              {t.accessService} {item.name}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md bg-surface px-5 py-3 text-sm font-medium text-ink-soft">
              {t.notPublished}
            </span>
          )}
        </div>
      </section>
    </>
  )
}
