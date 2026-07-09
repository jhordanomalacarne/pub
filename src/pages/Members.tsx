import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const MEMBERS = [
  { name: "Coordenador(a) do laboratório", role: "Docente / coordenação" },
  { name: "Pesquisador(a) A", role: "Pesquisador(a)" },
  { name: "Pesquisador(a) B", role: "Pesquisador(a)" },
  { name: "Aluno(a) de graduação A", role: "Iniciação científica" },
  { name: "Aluno(a) de pós-graduação A", role: "Mestrando(a)" },
  { name: "Aluno(a) de pós-graduação B", role: "Doutorando(a)" },
]

export function Members() {
  return (
    <>
      <PageHero
        eyebrow="Membros"
        title="Equipe"
        description="Pesquisadores e alunos que integram o Laboratório Zero."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <Card key={member.name} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-xs text-ink-soft">
                foto
              </div>
              <div>
                <p className="font-medium text-heading">{member.name}</p>
                <p className="text-xs text-ink-soft">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Lista ilustrativa — substitua pelos membros reais da equipe.
        </p>
      </section>
    </>
  )
}
