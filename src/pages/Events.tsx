import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"

const EVENTS = [
  {
    title: "Seminário de Governança Digital",
    date: "Outubro de 2025",
    status: "Realizado",
  },
  {
    title: "Workshop de Redes Comunitárias",
    date: "Março de 2026",
    status: "Próximo",
  },
  {
    title: "Encontro Anual do Grupo de Pesquisa",
    date: "Junho de 2026",
    status: "Próximo",
  },
]

export function Events() {
  return (
    <>
      <PageHero
        eyebrow="Eventos"
        title="Eventos"
        description="Workshops, seminários e encontros promovidos pelo laboratório e pelo grupo de pesquisa."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="space-y-4">
          {EVENTS.map((event) => (
            <li key={event.title}>
              <Card className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-lg font-semibold text-navy-900">
                    {event.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">{event.date}</p>
                </div>
                <span
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                    event.status === "Próximo"
                      ? "bg-gold-100 text-gold-600"
                      : "bg-surface text-ink-soft"
                  }`}
                >
                  {event.status}
                </span>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-ink-soft">
          Lista ilustrativa — substitua pelos eventos reais do laboratório.
        </p>
      </section>
    </>
  )
}
