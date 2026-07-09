import { Link } from "react-router-dom"
import { Card } from "../components/ui/Card"
import { SERVICES, getServiceTranslation } from "../lib/services"
import { ELIGIBILITY_FORM_URL } from "../lib/externalLinks"
import { useLanguage } from "../i18n/LanguageContext"

const HIGHLIGHTS = [
  { key: "projects", to: "/projetos" },
  { key: "publications", to: "/publicacoes" },
  { key: "partnerships", to: "/parcerias" },
  { key: "training", to: "/cursos" },
  { key: "complementaryTraining", to: "/formacao-complementar" },
  { key: "opportunities", to: "/oportunidades" },
] as const

export function Home() {
  const { dict } = useLanguage()
  const t = dict.home

  return (
    <>
      <section className="border-b border-border bg-navy-950">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">{t.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">{t.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projetos"
              className="rounded-md bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-600"
            >
              {t.ctaProjects}
            </Link>
            <Link
              to="/sobre"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400"
            >
              {t.ctaAbout}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-heading">{t.areasTitle}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <Link key={item.to} to={item.to}>
              <Card className="h-full">
                <h3 className="font-serif text-lg font-semibold text-heading">
                  {t.highlights[item.key].title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{t.highlights[item.key].description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-lg border-2 border-gold-500 bg-paper p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
              {t.grants.eyebrow}
            </p>
            <h2 className="mt-2 max-w-3xl font-serif text-2xl font-semibold text-heading sm:text-3xl">
              {t.grants.title}
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <p className="text-ink-soft leading-relaxed">{t.grants.paragraph}</p>
              <div>
                <h3 className="font-serif text-lg font-semibold text-heading">{t.grants.dcaasTitle}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{t.grants.dcaasParagraph}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/sobre#contato"
                className="inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                {t.grants.ctaContact}
              </Link>
              {ELIGIBILITY_FORM_URL ? (
                <a
                  href={ELIGIBILITY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md border border-border px-5 py-3 text-sm font-semibold text-heading transition-colors hover:bg-surface"
                >
                  {t.grants.ctaEligibility}
                </a>
              ) : (
                <span
                  title={t.grants.eligibilityComingSoon}
                  className="inline-flex cursor-not-allowed items-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-ink-soft opacity-70"
                >
                  {t.grants.ctaEligibility}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-navy-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">
                {t.servicesEyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-white">{t.servicesTitle}</h2>
            </div>
            <Link
              to="/servicos"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400"
            >
              {t.servicesCta}
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
                <span className="text-xs">{getServiceTranslation(dict, service.slug).name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl font-semibold text-heading">12+</p>
              <p className="mt-1 text-sm text-ink-soft">{t.stats.projects}</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-heading">20+</p>
              <p className="mt-1 text-sm text-ink-soft">{t.stats.publications}</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-heading">5</p>
              <p className="mt-1 text-sm text-ink-soft">{t.stats.partners}</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-ink-soft">{t.stats.note}</p>
          <Link
            to="/estatisticas"
            className="mt-4 inline-block text-sm font-semibold text-heading transition-colors hover:text-navy-700 dark:hover:text-white"
          >
            {t.stats.cta}
          </Link>
        </div>
      </section>
    </>
  )
}
