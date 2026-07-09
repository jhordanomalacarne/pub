import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { useLanguage } from "../i18n/LanguageContext"

export function Projects() {
  const { dict } = useLanguage()
  const t = dict.projects

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {t.items.map((project) => (
            <Card key={project.title}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-xl font-semibold text-heading">{project.title}</h2>
                <span className="whitespace-nowrap text-xs text-ink-soft">{project.period}</span>
              </div>
              <p className="mt-3 text-sm text-ink-soft">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.media.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
