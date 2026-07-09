import { Link, Navigate, useParams } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { getServiceBySlug } from "../lib/services"

export function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/servicos" replace />
  }

  return (
    <>
      <PageHero eyebrow="Serviços" title={service.name} description={service.description} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/servicos" className="text-sm text-ink-soft transition-colors hover:text-heading">
          ← Voltar para Serviços
        </Link>

        <div className="mt-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
            <service.icon />
          </div>
          <p className="text-ink-soft leading-relaxed">{service.details}</p>
        </div>

        <h2 className="mt-10 font-serif text-xl font-semibold text-heading">Recursos</h2>
        <ul className="mt-4 space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-ink-soft">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          {service.url ? (
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Acessar {service.name}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-md bg-surface px-5 py-3 text-sm font-medium text-ink-soft">
              Em breve — serviço ainda não publicado
            </span>
          )}
        </div>
      </section>
    </>
  )
}
