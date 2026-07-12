import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

export function Events() {
  const { dict } = useLanguage()
  const t = dict.events
  useDocumentTitle(t.title)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="space-y-4">
          {t.items.map((event) => (
            <li key={event.title}>
              <Card className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-semibold text-heading">{event.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{event.date}</p>
                </div>
                <span
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                    event.upcoming ? "bg-gold-100 text-gold-600" : "bg-surface text-ink-soft"
                  }`}
                >
                  {event.status}
                </span>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
