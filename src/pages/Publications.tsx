import { PageHero } from "../components/ui/PageHero"

const PUBLICATIONS = [
  {
    title: "Governança de dados em redes comunitárias: um estudo de caso",
    authors: "Silva, A.; Souza, B.",
    venue: "Revista Brasileira de Tecnologia e Sociedade",
    year: 2024,
  },
  {
    title: "Simulação de protocolos de rede para o ensino de graduação",
    authors: "Pereira, C.; Lima, D.",
    venue: "Anais do Congresso Nacional de Redes de Computadores",
    year: 2023,
  },
  {
    title: "Comunicação pública e infraestrutura digital: desafios de governança",
    authors: "Costa, E.",
    venue: "Cadernos de Comunicação e Governança",
    year: 2022,
  },
]

export function Publications() {
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Produção acadêmica"
        description="Artigos, capítulos e relatórios técnicos produzidos pelo laboratório e seus pesquisadores."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="divide-y divide-border">
          {PUBLICATIONS.map((pub) => (
            <li key={pub.title} className="py-6 first:pt-0">
              <p className="font-serif text-lg font-semibold text-heading">
                {pub.title}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{pub.authors}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {pub.venue} · {pub.year}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ink-soft">
          Lista ilustrativa — substitua pelas publicações reais do grupo.
        </p>
      </section>
    </>
  )
}
