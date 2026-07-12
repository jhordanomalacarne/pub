import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

export function ComplementaryTraining() {
  const { dict } = useLanguage()
  const t = dict.complementaryTraining
  useDocumentTitle(t.title)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {t.items.map((item) => (
            <Card key={item.title}>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                {item.area}
              </span>
              <h2 className="mt-2 font-serif text-lg font-semibold text-heading">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{item.provider}</p>
              <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                {item.format}
              </span>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
