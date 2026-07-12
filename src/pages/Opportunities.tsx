import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useHashScroll } from "../hooks/useHashScroll"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

function ExternalBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
      ↗ {label}
    </span>
  )
}

export function Opportunities() {
  useHashScroll()
  const { dict } = useLanguage()
  const t = dict.opportunities
  useDocumentTitle(t.title)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section id="formacao" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-heading">{t.training.title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">{t.training.description}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.training.items.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                {item.area}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.provider}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                  {item.format}
                </span>
                <ExternalBadge label={t.externalLabel} />
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-heading transition-colors hover:underline"
                >
                  {t.training.viewCourse} →
                </a>
              )}
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">{t.training.note}</p>
      </section>

      <section id="vagas" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16">
          <h2 className="font-serif text-2xl font-semibold text-heading">{t.jobs.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-soft">{t.jobs.description}</p>

          <ul className="mt-8 space-y-4">
            {t.jobs.items.map((item) => (
              <li key={item.title}>
                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-heading">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-soft">
                        {item.organization} · {item.type}
                      </p>
                    </div>
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                        item.open ? "bg-gold-100 text-gold-600" : "bg-surface text-ink-soft"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-ink-soft">{item.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <ExternalBadge label={t.externalLabel} />
                    {item.open && item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-heading transition-colors hover:underline"
                      >
                        {t.jobs.apply} →
                      </a>
                    )}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-ink-soft">{t.jobs.note}</p>
        </div>
      </section>
    </>
  )
}
