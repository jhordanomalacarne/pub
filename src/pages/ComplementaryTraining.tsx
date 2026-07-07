import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const SUGGESTIONS = [
  {
    title: "Fundamentos de redes de computadores",
    provider: "Plataforma de ensino aberto",
    area: "Redes",
    format: "Online",
  },
  {
    title: "Introdução à governança de dados",
    provider: "Curso de extensão universitária",
    area: "Governança",
    format: "Online",
  },
  {
    title: "Comunicação científica e divulgação da pesquisa",
    provider: "Programa de pós-graduação parceiro",
    area: "Comunicação",
    format: "Presencial",
  },
  {
    title: "Segurança e privacidade em infraestrutura de rede",
    provider: "Plataforma de ensino aberto",
    area: "Redes",
    format: "Online",
  },
]

export function ComplementaryTraining() {
  return (
    <>
      <PageHero
        eyebrow="Formação Complementar"
        title="Sugestões de formação"
        description="Cursos e materiais externos recomendados pelo laboratório para aprofundar temas de redes, governança e comunicação, complementando os cursos oferecidos diretamente pelo grupo."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {SUGGESTIONS.map((item) => (
            <Card key={item.title}>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                {item.area}
              </span>
              <h2 className="mt-2 font-serif text-lg font-semibold text-navy-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{item.provider}</p>
              <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                {item.format}
              </span>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Lista ilustrativa — substitua pelas sugestões reais de formação e
          respectivos links.
        </p>
      </section>
    </>
  )
}
