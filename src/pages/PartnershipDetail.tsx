import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { PartnerNetwork } from "../components/ui/PartnerNetwork"
import { getPartnershipCategoryBySlug } from "../lib/partnershipCategories"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

export function PartnershipDetail() {
  const { slug } = useParams()
  const category = getPartnershipCategoryBySlug(slug)
  const { dict, language } = useLanguage()
  const t = dict.partnerships
  useDocumentTitle(category?.label[language])

  if (!category) {
    return <Navigate to="/parcerias" replace />
  }

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={category.label[language]}
        description={category.description[language]}
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link to="/parcerias" className="text-sm text-ink-soft transition-colors hover:text-heading">
          {t.backToPartnerships}
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
            <category.icon />
          </div>
          <p className="text-ink-soft leading-relaxed">{category.details[language]}</p>
        </div>

        <h2 className="mt-10 font-serif text-xl font-semibold text-heading">{t.whoAreThey}</h2>
        <p className="mt-2 text-sm text-ink-soft">{t.networkIntro}</p>
        <div className="mt-6">
          <PartnerNetwork categorySlug={category.slug} partners={category.partners} />
        </div>
        <p className="mt-6 text-xs text-ink-soft">{t.networkNote}</p>
      </section>
    </>
  )
}
