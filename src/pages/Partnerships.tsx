import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { PartnerCarousel } from "../components/ui/PartnerCarousel"
import { PARTNERSHIP_CATEGORIES } from "../lib/partnershipCategories"
import { useHashScroll } from "../hooks/useHashScroll"
import { useLanguage } from "../i18n/LanguageContext"

export function Partnerships() {
  useHashScroll()
  const { dict, language } = useLanguage()
  const t = dict.partnerships

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <PartnerCarousel />

      <nav className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-x-6 gap-y-2 px-6 py-4 text-sm">
          {PARTNERSHIP_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`#${category.id}`}
              className="text-ink-soft transition-colors hover:text-heading"
            >
              {category.label[language]}
            </Link>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6">
          {PARTNERSHIP_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <Link to={`/parcerias/${category.slug}`}>
                <Card className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                    <category.icon />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-semibold text-heading">
                      {category.label[language]}
                    </h2>
                    <p className="mt-2 text-sm text-ink-soft">{category.description[language]}</p>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
