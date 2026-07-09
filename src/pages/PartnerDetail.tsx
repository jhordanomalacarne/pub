import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { getPartnerBySlug } from "../lib/partnershipCategories"

export function PartnerDetail() {
  const { categorySlug, partnerSlug } = useParams()
  const result = getPartnerBySlug(categorySlug, partnerSlug)

  if (!result) {
    return <Navigate to="/parcerias" replace />
  }

  const { category, partner } = result

  return (
    <>
      <PageHero eyebrow={`Parcerias · ${category.label}`} title={partner.name} description={partner.type} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to={`/parcerias/${category.slug}`}
          className="text-sm text-ink-soft transition-colors hover:text-heading"
        >
          ← Voltar para {category.label}
        </Link>

        <Card className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-xs text-ink-soft">
            {partner.logo ? (
              <img src={partner.logo} alt="" className="h-full w-full rounded-full object-contain" />
            ) : (
              "logo"
            )}
          </div>
          <p className="text-ink-soft leading-relaxed">{partner.details}</p>
        </Card>

        <p className="mt-6 text-xs text-ink-soft">
          Conteúdo ilustrativo — substitua pelos dados reais desta parceria.
        </p>
      </section>
    </>
  )
}
