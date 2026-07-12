import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { ABOUT_SECTIONS } from "../lib/aboutSections"
import { useHashScroll } from "../hooks/useHashScroll"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

const PHOTO_PLACEHOLDERS = Array.from({ length: 6 }, (_, i) => i + 1)

const MAP_ADDRESS =
  "Instituto Federal de Rondônia — Campus Porto Velho Zona Norte, Av. Gov. Jorge Teixeira, 3146, Setor Industrial, Porto Velho - RO, 76821-002"

export function About() {
  useHashScroll()
  const { dict } = useLanguage()
  const t = dict.about
  useDocumentTitle(t.title)
  const datacenterItems = [
    dict.about.datacenterItems.proxmox,
    dict.about.datacenterItems.aiWorkstation,
    dict.about.datacenterItems.backup,
  ]
  const researchLines = [
    dict.about.researchLines.governanceCommunication,
    dict.about.researchLines.networkSecurity,
  ]
  const [cnpqBefore, cnpqAfter] = t.researchLinesCnpqNote.split("{link}")

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <nav className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-x-6 gap-y-2 px-6 py-4 text-sm">
          {ABOUT_SECTIONS.map((section) => (
            <Link
              key={section.id}
              to={`#${section.id}`}
              className="text-ink-soft transition-colors hover:text-heading"
            >
              {dict.aboutSections[section.key]}
            </Link>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 id="linhas-pesquisa" className="scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          {t.researchLinesTitle}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {researchLines.map((line) => (
            <Card key={line.title}>
              <h3 className="font-semibold text-heading">{line.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{line.description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          {cnpqBefore}
          <a
            href="https://dgp.cnpq.br/dgp/espelhogrupo/6251751741657254"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-heading underline transition-colors hover:text-navy-700 dark:hover:text-white"
          >
            {t.researchLinesCnpqLink}
          </a>
          {cnpqAfter}
        </p>

        <h2 id="datacenter" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          {t.datacenterTitle}
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.datacenterIntro}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {datacenterItems.map((item) => (
            <Card key={item.title}>
              <h3 className="font-semibold text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>

        <h2 id="fotos" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          {t.photosTitle}
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {PHOTO_PLACEHOLDERS.map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-lg border border-border bg-surface text-xs text-ink-soft"
            >
              {t.photoLabel} {n}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-soft">{t.photosNote}</p>

        <h2 id="tour-virtual" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          {t.tourTitle}
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.tourText}</p>
        <div className="mt-6 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-surface text-sm text-ink-soft">
          {t.tourPlaceholder}
        </div>

        <h2 id="localizacao" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          {t.locationTitle}
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          {t.locationText}
          <br />
          <span className="text-ink">{t.locationAddress}</span>
        </p>
        <div className="mt-6 overflow-hidden rounded-lg border border-border">
          <iframe
            title={t.mapTitle}
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`}
            width="100%"
            height="360"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <h2 id="contato" className="mt-12 scroll-mt-24 font-serif text-2xl font-semibold text-heading">
          {t.contactTitle}
        </h2>
        <Card className="mt-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-heading">{t.contactEmailLabel}</dt>
              <dd className="mt-1 text-ink-soft">contato@laboratoriozero.example</dd>
            </div>
            <div>
              <dt className="font-semibold text-heading">{t.contactAddressLabel}</dt>
              <dd className="mt-1 text-ink-soft">{t.contactAddress}</dd>
            </div>
          </dl>
          <a
            href="mailto:contato@laboratoriozero.example"
            className="mt-6 inline-block rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {t.sendEmail}
          </a>
        </Card>
        <p className="mt-6 text-xs text-ink-soft">{t.emailNote}</p>
      </section>
    </>
  )
}
