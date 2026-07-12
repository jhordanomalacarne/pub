import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { getPartnerBySlug } from "../lib/partnershipCategories"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

export function PartnerDetail() {
  const { categorySlug, partnerSlug } = useParams()
  const result = getPartnerBySlug(categorySlug, partnerSlug)
  const { dict, language } = useLanguage()
  const t = dict.partnerships
  useDocumentTitle(result?.partner.name[language])

  if (!result) {
    return <Navigate to="/parcerias" replace />
  }

  const { category, partner } = result

  return (
    <>
      <PageHero
        eyebrow={`${t.eyebrow} · ${category.label[language]}`}
        title={partner.name[language]}
        description={partner.type[language]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to={`/parcerias/${category.slug}`}
          className="text-sm text-ink-soft transition-colors hover:text-heading"
        >
          {t.backTo} {category.label[language]}
        </Link>

        <Card className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-xs text-ink-soft">
            {partner.logo ? (
              <img src={partner.logo} alt="" className="h-full w-full rounded-full object-contain" />
            ) : (
              t.logo
            )}
          </div>
          <p className="text-ink-soft leading-relaxed">{partner.details[language]}</p>
        </Card>

        <div className="mt-8">
          <h2 className="font-serif text-xl font-semibold text-heading">{t.detailsTitle}</h2>
          <dl className="mt-4 divide-y divide-border rounded-lg border border-border">
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.objectiveLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">{partner.objective[language]}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.startDateLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">{partner.startDate[language]}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.expectedEndDateLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">{partner.expectedEndDate[language]}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.statusLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">
                <span className="inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                  {partner.status[language]}
                </span>
              </dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.expectedResultsLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">{partner.expectedResults[language]}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.achievedResultsLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">{partner.achievedResults[language]}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.referenceDocumentLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">{partner.referenceDocument}</dd>
            </div>
            <div className="grid gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-heading">{t.responsiblePartiesLabel}</dt>
              <dd className="text-sm text-ink-soft sm:col-span-2">
                <ul className="space-y-1">
                  {partner.responsibleParties[language].map((person) => (
                    <li key={person}>{person}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <p className="mt-6 text-xs text-ink-soft">{t.illustrativeNote}</p>
      </section>
    </>
  )
}
