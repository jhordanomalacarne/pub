import { PageHero } from "../components/ui/PageHero"
import { useLanguage } from "../i18n/LanguageContext"

export function Publications() {
  const { dict } = useLanguage()
  const t = dict.publications

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="divide-y divide-border">
          {t.items.map((pub) => (
            <li key={pub.title} className="py-6 first:pt-0">
              <p className="font-serif text-lg font-semibold text-heading">{pub.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{pub.authors}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {pub.venue} · {pub.year}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
