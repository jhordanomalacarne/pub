import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const PARTNERS = [
  { name: "Instituição Parceira A", type: "Universidade" },
  { name: "Instituição Parceira B", type: "Órgão público" },
  { name: "Instituição Parceira C", type: "Centro de pesquisa" },
  { name: "Instituição Parceira D", type: "Organização da sociedade civil" },
]

export function Partnerships() {
  return (
    <>
      <PageHero
        eyebrow="Parcerias"
        title="Instituições parceiras"
        description="O Laboratório Zero desenvolve projetos e pesquisas em cooperação com instituições acadêmicas e públicas."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((partner) => (
            <Card key={partner.name} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-xs text-ink-soft">
                logo
              </div>
              <p className="mt-4 font-medium text-navy-900">{partner.name}</p>
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
