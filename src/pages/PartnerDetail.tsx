import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { getPartnerBySlug } from "../lib/partnershipCategories"
import { useLanguage } from "../i18n/LanguageContext"

export function PartnerDetail() {
  const { categorySlug, partnerSlug } = useParams()
  const result = getPartnerBySlug(categorySlug, partnerSlug)
  const { dict, language } = useLanguage()
  const t = dict.partnerships

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

        <p className="mt-6 text-xs text-ink-soft">{t.illustrativeNote}</p>
      </section>
    </>
  )
}
