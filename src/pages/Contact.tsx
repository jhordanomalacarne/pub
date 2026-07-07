import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com o laboratório"
        description="Para dúvidas, propostas de parceria ou informações sobre projetos e cursos."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Card>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-navy-900">E-mail</dt>
              <dd className="mt-1 text-ink-soft">contato@laboratoriozero.example</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Endereço</dt>
              <dd className="mt-1 text-ink-soft">
                Instituição parceira, Departamento X — Cidade, Estado
              </dd>
            </div>
          </dl>
          <a
            href="mailto:contato@laboratoriozero.example"
            className="mt-6 inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Enviar e-mail
          </a>
        </Card>
        <p className="mt-6 text-xs text-ink-soft">
          Dados ilustrativos — substitua pelo contato real do laboratório.
        </p>
      </section>
    </>
  )
}
