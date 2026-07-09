import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { PartnerNetwork } from "../components/ui/PartnerNetwork"
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
        <p className="mt-2 text-sm text-ink-soft">
          A rede abaixo representa as conexões entre o laboratório e seus parceiros — passe o mouse
          ou toque em um parceiro para ver os detalhes da parceria.
        </p>
        <div className="mt-6">
          <PartnerNetwork categorySlug={category.slug} partners={category.partners} />
        </div>
        <p className="mt-6 text-xs text-ink-soft">
          Rede ilustrativa — a organização muda a cada visita à página; substitua pelos parceiros e
          logos reais.
        </p>
      </section>
    </>
  )
}
