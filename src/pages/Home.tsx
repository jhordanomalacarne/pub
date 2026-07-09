import { Link } from "react-router-dom"
import { Card } from "../components/ui/Card"
import { SERVICES } from "../lib/services"

const HIGHLIGHTS = [
  {
    title: "Projetos",
    description:
      "Pesquisa aplicada em infraestrutura de rede, governança digital e comunicação, com resultados abertos.",
    to: "/projetos",
  },
  {
    title: "Publicações",
    description:
      "Produção acadêmica do grupo: artigos, capítulos e relatórios técnicos.",
    to: "/publicacoes",
  },
  {
    title: "Parcerias",
    description:
      "Cooperação com instituições de ensino, pesquisa e órgãos públicos.",
    to: "/parcerias",
  },
  {
    title: "Formação",
    description:
      "Cursos e eventos voltados a alunos, pesquisadores e à comunidade.",
    to: "/cursos",
  },
  {
    title: "Formação Complementar",
    description:
      "Sugestões de cursos e materiais externos para aprofundar temas do laboratório.",
    to: "/formacao-complementar",
  },
  {
    title: "Oportunidades",
    description:
      "Estágios, bolsas e vagas de emprego divulgadas pelo laboratório e parceiros.",
    to: "/oportunidades",
  },
]

export function Home() {
  return (
    <>
      <section className="border-b border-border bg-navy-950">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">
            Grupo de Pesquisa em Tecnologia, Comunicação e Governança
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl">
            Laboratório Zero
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Um laboratório de pesquisa dedicado a infraestrutura de rede,
            projetos aplicados, publicações e formação de pesquisadores e
            alunos, em parceria com instituições acadêmicas e públicas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projetos"
              className="rounded-md bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
            >
              Conhecer os projetos
            </Link>
            <Link
              to="/sobre"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400"
            >
              Sobre o laboratório
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">
          Áreas de atuação
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <Link key={item.to} to={item.to}>
              <Card className="h-full">
                <h3 className="font-serif text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  {item.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-navy-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">
                Serviços públicos
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-white">
                Ferramentas web abertas à comunidade
              </h2>
            </div>
            <Link
              to="/servicos"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400"
            >
              Ver todos os serviços
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/servicos/${service.slug}`}
                className="flex flex-col items-center gap-2 text-center text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-gold-500">
                  <service.icon />
                </span>
                <span className="text-xs">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl font-semibold text-navy-900">12+</p>
              <p className="mt-1 text-sm text-ink-soft">projetos desenvolvidos</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-navy-900">20+</p>
              <p className="mt-1 text-sm text-ink-soft">publicações do grupo</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-navy-900">5</p>
              <p className="mt-1 text-sm text-ink-soft">instituições parceiras</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            Números ilustrativos — atualize com os dados reais do laboratório.
          </p>
          <Link
            to="/estatisticas"
            className="mt-4 inline-block text-sm font-semibold text-navy-900 transition-colors hover:text-navy-700"
          >
            Veja as estatísticas completas →
          </Link>
        </div>
      </section>
    </>
  )
}
