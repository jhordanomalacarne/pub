import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const COURSES = [
  {
    title: "Introdução a redes de computadores",
    description: "Curso de extensão voltado a alunos de graduação.",
    modality: "Presencial",
  },
  {
    title: "Governança de dados e tecnologia",
    description: "Curso de curta duração sobre políticas de dados e regulação digital.",
    modality: "Online",
  },
  {
    title: "Oficina de simulação de redes",
    description: "Oficina prática com as ferramentas desenvolvidas pelo laboratório.",
    modality: "Presencial",
  },
]

export function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Cursos"
        title="Formação"
        description="Cursos e oficinas oferecidos pelo laboratório para alunos, pesquisadores e a comunidade."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <Card key={course.title}>
              <h2 className="font-serif text-lg font-semibold text-navy-900">
                {course.title}
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{course.description}</p>
              <span className="mt-4 inline-block rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-white">
                {course.modality}
              </span>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Conteúdo ilustrativo — substitua pelos cursos reais oferecidos.
        </p>
      </section>
    </>
  )
}
