import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const OPPORTUNITIES = [
  {
    title: "Estágio em pesquisa — infraestrutura de rede",
    organization: "Laboratório Zero",
    type: "Estágio",
    status: "Aberta",
    description:
      "Apoio a projetos de simulação e experimentação de rede, para alunos de graduação.",
  },
  {
    title: "Bolsa de iniciação científica — governança de dados",
    organization: "Laboratório Zero",
    type: "Bolsa",
    status: "Aberta",
    description:
      "Pesquisa sobre políticas de dados em parceria com órgão público.",
  },
  {
    title: "Vaga de desenvolvedor(a) — instituição parceira",
    organization: "Instituição Parceira A",
    type: "Emprego",
    status: "Encerrada",
    description: "Vaga divulgada por instituição parceira do laboratório.",
  },
]

export function Opportunities() {
  return (
    <>
      <PageHero
        eyebrow="Oportunidades"
        title="Estágio e emprego"
        description="Oportunidades de estágio, bolsas e emprego divulgadas pelo laboratório e por instituições parceiras."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="space-y-4">
          {OPPORTUNITIES.map((item) => (
            <li key={item.title}>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-heading">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-ink-soft">
                      {item.organization} · {item.type}
                    </p>
                  </div>
                  <span
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "Aberta"
                        ? "bg-gold-100 text-gold-600"
                        : "bg-surface text-ink-soft"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-soft">{item.description}</p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ink-soft">
          Lista ilustrativa — substitua pelas oportunidades reais e respectivos
          contatos/links de candidatura.
        </p>
      </section>
    </>
  )
}
