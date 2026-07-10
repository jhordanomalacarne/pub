import { PageHero } from "../components/ui/PageHero"
import { SERVICES, getServiceTranslation } from "../lib/services"
import { SERVICE_STATUS, type ServiceStatusLevel } from "../lib/serviceStatus"
import { useLanguage } from "../i18n/LanguageContext"

const DOT_CLASS: Record<ServiceStatusLevel, string> = {
  operational: "bg-gtec-green-600",
  degraded: "bg-gold-500",
  down: "bg-status-down",
}

const LOCALES: Record<string, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" }

export function ServiceStatus() {
  const { dict, language } = useLanguage()
  const t = dict.serviceStatus
  const locale = LOCALES[language]

  const statusLabel: Record<ServiceStatusLevel, string> = {
    operational: t.statusOperational,
    degraded: t.statusDegraded,
    down: t.statusDown,
  }

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="rounded-lg border border-border bg-surface p-4 text-sm text-ink-soft">
          {t.grafanaNote}
        </p>

        <ul className="mt-8 divide-y divide-border rounded-lg border border-border">
          {SERVICES.map((service) => {
            const item = getServiceTranslation(dict, service.slug)
            const status = SERVICE_STATUS[service.slug]
            return (
              <li key={service.slug} className="flex items-center gap-4 px-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                  <service.icon />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-base font-semibold text-heading">{item.name}</p>
                  <p className="text-xs text-ink-soft">
                    {t.uptimeLabel}: {status.uptime.toLocaleString(locale)}%
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                  <span className={`h-2 w-2 rounded-full ${DOT_CLASS[status.level]}`} aria-hidden="true" />
                  {statusLabel[status.level]}
                </span>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 text-xs text-ink-soft">{t.illustrativeNote}</p>
      </section>
    </>
  )
}
