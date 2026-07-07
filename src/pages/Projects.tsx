import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const PROJECTS = [
  {
    title: "Projeto Alpha",
    period: "2023 – atual",
    description:
      "Simulador de redes para ensino, com resultados publicados como software aberto.",
    media: ["Software", "Artigo"],
  },
  {
    title: "Projeto Beta",
    period: "2022 – 2023",
    description:
      "Estudo de governança de dados em parceria com órgão público.",
    media: ["Relatório técnico"],
  },
  {
    title: "Projeto Gama",
    period: "2021 – 2022",
    description:
      "Material de divulgação científica com animações sobre infraestrutura de internet.",
    media: ["Animação", "Vídeo"],
  },
  {
    title: "Projeto Delta",
    period: "2019 – 2021",
    description:
      "Plataforma experimental de comunicação para redes comunitárias.",
    media: ["Software", "Artigo"],
  },
]

export function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Projetos e resultados"
        description="Projetos desenvolvidos pelo laboratório, ativos e encerrados, com seus resultados: artigos, software, animações e outros materiais."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card key={project.title}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-xl font-semibold text-navy-900">
                  {project.title}
                </h2>
                <span className="whitespace-nowrap text-xs text-ink-soft">
                  {project.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-soft">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.media.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Conteúdo ilustrativo — substitua pelos projetos reais do laboratório.
        </p>
      </section>
    </>
  )
}
