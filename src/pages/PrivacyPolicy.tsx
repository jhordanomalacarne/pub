import { Link } from "react-router-dom"
import { PageHero } from "../components/ui/PageHero"
import { Card } from "../components/ui/Card"
import { resetConsent } from "../lib/cookieConsent"
import { useLanguage } from "../i18n/LanguageContext"

export function PrivacyPolicy() {
  const { dict } = useLanguage()
  const t = dict.privacyPolicy
  const [rightsBefore, rightsAfter] = t.rightsText.split("{link}")

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl font-semibold text-heading">{t.dataTitle}</h2>
        <div className="mt-6 space-y-4">
          <Card>
            <h3 className="font-semibold text-heading">{t.themeCardTitle}</h3>
            <p className="mt-2 text-sm text-ink-soft">{t.themeCardText}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">{t.assistantCardTitle}</h3>
            <p className="mt-2 text-sm text-ink-soft">{t.assistantCardText}</p>
          </Card>
          <Card>
            <h3 className="font-semibold text-heading">{t.trackingCardTitle}</h3>
            <p className="mt-2 text-sm text-ink-soft">{t.trackingCardText}</p>
          </Card>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">{t.legalBasisTitle}</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.legalBasisText}</p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">{t.retentionTitle}</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.retentionText}</p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">{t.sharingTitle}</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.sharingText}</p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">{t.rightsTitle}</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          {rightsBefore}
          <Link to="/sobre#contato" className="font-semibold text-heading hover:underline">
            {t.contactPageLink}
          </Link>
          {rightsAfter}
        </p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-heading">{t.manageTitle}</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{t.manageText}</p>
        <button
          type="button"
          onClick={resetConsent}
          className="mt-4 rounded-md border border-border px-5 py-3 text-sm font-semibold text-heading transition-colors hover:bg-surface"
        >
          {t.manageButton}
        </button>

        <p className="mt-12 text-xs text-ink-soft">{t.lastUpdated}</p>
      </section>
    </>
  )
}
