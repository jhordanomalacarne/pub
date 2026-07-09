import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useLanguage } from "../i18n/LanguageContext"

export function Courses() {
  const { dict } = useLanguage()
  const t = dict.courses

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((course) => (
            <Card key={course.title}>
              <h2 className="font-serif text-lg font-semibold text-heading">{course.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{course.description}</p>
              <span className="mt-4 inline-block rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-white">
                {course.modality}
              </span>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
