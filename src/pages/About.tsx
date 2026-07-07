import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

export function About() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="O laboratório"
        description="O Laboratório Zero integra o Grupo de Pesquisa em Tecnologia, Comunicação e Governança, reunindo infraestrutura de rede, projetos aplicados e formação de pesquisadores."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">Missão</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Produzir pesquisa aplicada e formação em rede de computadores,
          comunicação e governança digital, articulando infraestrutura
          própria, parcerias institucionais e a participação ativa de alunos
          e pesquisadores em projetos de impacto acadêmico e social.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-navy-900">
          Linhas de pesquisa
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy-900">Infraestrutura de rede</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Simulação, experimentação e desenvolvimento de soluções de rede
              para ensino e pesquisa.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy-900">Governança digital</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Estudo de políticas, regulação e governança de tecnologias de
              comunicação e dados.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy-900">Comunicação e tecnologia</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Interseção entre tecnologia, comunicação pública e produção de
              conhecimento aberto.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy-900">Formação</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Cursos, oficinas e orientação de alunos de graduação e
              pós-graduação envolvidos nos projetos do laboratório.
            </p>
          </Card>
        </div>
      </section>
    </>
  )
}
