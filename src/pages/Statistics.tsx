import { PageHero } from "../components/ui/PageHero"
import { StatTile } from "../components/ui/StatTile"
import { ColumnChart } from "../components/charts/ColumnChart"
import { HorizontalBarChart } from "../components/charts/HorizontalBarChart"
import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useLanguage } from "../i18n/LanguageContext"

const LOCALES: Record<string, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" }

export function Statistics() {
  const { dict, language } = useLanguage()
  const t = dict.statistics
  useDocumentTitle(t.title)
  const locale = LOCALES[language]

  const formatNumber = (value: number) => value.toLocaleString(locale)
  const formatGB = (value: number) => `${value.toLocaleString(locale)} GB`

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.kpis.map((kpi) => (
            <StatTile key={kpi.label} label={kpi.label} value={kpi.value} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-paper p-6">
            <h2 className="font-serif text-lg font-semibold text-heading">{t.machinesChartTitle}</h2>
            <p className="mt-1 text-sm text-ink-soft">{t.machinesChartSubtitle}</p>
            <div className="mt-6">
              <ColumnChart data={t.machinesGrowth} formatValue={formatNumber} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-paper p-6">
            <h2 className="font-serif text-lg font-semibold text-heading">{t.categoryChartTitle}</h2>
            <p className="mt-1 text-sm text-ink-soft">{t.categoryChartSubtitle}</p>
            <div className="mt-6">
              <HorizontalBarChart data={t.dataByCategory} formatValue={formatGB} />
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-soft">{t.note}</p>
      </section>
    </>
  )
}
