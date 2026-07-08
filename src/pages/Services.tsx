import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { SERVICES } from "../lib/services"

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Serviços públicos"
        description="Ferramentas web mantidas pelo Laboratório Zero e disponibilizadas gratuitamente para a comunidade."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link key={service.slug} to={`/servicos/${service.slug}`}>
              <Card className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950 text-gold-500">
                  <service.icon />
                </div>
                <h2 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{service.description}</p>
                {!service.url && (
                  <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                    Em breve
                  </span>
                )}
              </Card>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Serviços em implantação — os links de acesso serão publicados assim
          que cada um estiver disponível.
        </p>
      </section>
    </>
  )
}
