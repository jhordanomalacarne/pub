import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { useLanguage } from "../i18n/LanguageContext"
import type { ServiceAudience } from "../lib/services"

const AUDIENCES: ServiceAudience[] = ["public", "partners", "academic"]

export function ServiceAudienceRequirements() {
  const { audience } = useParams()
  const { dict } = useLanguage()
  const t = dict.services

  if (!audience || !AUDIENCES.includes(audience as ServiceAudience)) {
    return <Navigate to="/servicos" replace />
  }
  const a = audience as ServiceAudience

  const label: Record<ServiceAudience, string> = {
    public: t.audiencePublicLabel,
    partners: t.audiencePartnersLabel,
    academic: t.audienceAcademicLabel,
  }
  const requirement: Record<ServiceAudience, string> = {
    public: t.audiencePublicRequirement,
    partners: t.audiencePartnersRequirement,
    academic: t.audienceAcademicRequirement,
  }

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={label[a]} description={requirement[a]} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/servicos" className="text-sm text-ink-soft transition-colors hover:text-heading">
          {t.backToServices}
        </Link>

        <h2 className="mt-8 font-serif text-xl font-semibold text-heading">
          {t.audienceRequirementsTitle}
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.audienceRequirementsComingSoon}</p>
      </section>
    </>
  )
}
