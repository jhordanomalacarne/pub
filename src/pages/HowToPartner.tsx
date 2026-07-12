import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { ELIGIBILITY_FORM_URL } from "../lib/externalLinks"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

export function HowToPartner() {
  const { dict } = useLanguage()
  const t = dict.partnerships
  const h = t.howToPartner
  useDocumentTitle(h.title)

  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} description={h.description} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link to="/parcerias" className="text-sm text-ink-soft transition-colors hover:text-heading">
          {t.backToPartnerships}
        </Link>

        <h2 className="mt-8 font-serif text-2xl font-semibold text-heading">{h.stepsTitle}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {h.steps.map((step, index) => (
            <Card key={step.title}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-gold-500">
                {index + 1}
              </span>
              <h3 className="mt-3 font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
            </Card>
          ))}
        </div>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">{h.counterpartsTitle}</h2>
        <ul className="mt-6 space-y-2">
          {h.counterparts.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-ink-soft">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink-soft">{h.counterpartsNote}</p>

        <div className="mt-12 rounded-lg border-2 border-gold-500 bg-paper p-8">
          <h2 className="font-serif text-xl font-semibold text-heading">{h.eligibilityTitle}</h2>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">{h.eligibilityText}</p>
          <div className="mt-6">
            {ELIGIBILITY_FORM_URL ? (
              <a
                href={ELIGIBILITY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                {h.ctaEligibility}
              </a>
            ) : (
              <span
                title={h.eligibilityComingSoon}
                className="inline-flex cursor-not-allowed items-center rounded-md bg-navy-900/60 px-5 py-3 text-sm font-semibold text-white opacity-70"
              >
                {h.ctaEligibility}
              </span>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
