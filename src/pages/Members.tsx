import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

export function Members() {
  const { dict } = useLanguage()
  const t = dict.members
  useDocumentTitle(t.title)

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((member) => (
            <Card key={member.name} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-xs text-ink-soft">
                {t.photoLabel}
              </div>
              <div>
                <p className="font-medium text-heading">{member.name}</p>
                <p className="text-xs text-ink-soft">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
