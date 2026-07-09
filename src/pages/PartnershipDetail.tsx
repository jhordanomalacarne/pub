import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { getPartnershipCategoryBySlug } from "../lib/partnershipCategories"

export function PartnershipDetail() {
  const { slug } = useParams()
  const category = getPartnershipCategoryBySlug(slug)

  if (!category) {
    return <Navigate to="/parcerias" replace />
  }

  return (
    <>
      <PageHero eyebrow="Parcerias" title={category.label} description={category.description} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link to="/parcerias" className="text-sm text-ink-soft transition-colors hover:text-heading">
          ← Voltar para Parcerias
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
            <category.icon />
          </div>
          <p className="text-ink-soft leading-relaxed">{category.details}</p>
        </div>

        <h2 className="mt-10 font-serif text-xl font-semibold text-heading">Quem são</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {category.partners.map((partner) => (
            <Card key={partner.name} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-xs text-ink-soft">
                logo
              </div>
              <p className="mt-4 font-medium text-heading">{partner.name}</p>
              <p className="mt-1 text-xs text-ink-soft">{partner.type}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Lista ilustrativa — substitua pelos parceiros reais e seus logos.
        </p>
      </section>
    </>
  )
}
