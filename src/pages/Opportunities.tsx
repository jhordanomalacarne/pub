import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useLanguage } from "../i18n/LanguageContext"

export function Opportunities() {
  const { dict } = useLanguage()
  const t = dict.opportunities

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="space-y-4">
          {t.items.map((item) => (
            <li key={item.title}>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-heading">{item.title}</h2>
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
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
