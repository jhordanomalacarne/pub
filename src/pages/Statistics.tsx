import { PageHero } from "../components/ui/PageHero"
import { StatTile } from "../components/ui/StatTile"
import { ColumnChart } from "../components/charts/ColumnChart"
import { HorizontalBarChart } from "../components/charts/HorizontalBarChart"

const KPIS = [
  { label: "Máquinas virtuais criadas", value: "1.240+" },
  { label: "Usuários atendidos", value: "3.800+" },
  { label: "Dados gerenciados", value: "18.400 GB" },
  { label: "Análises automatizadas realizadas", value: "52.000+" },
  { label: "Horas de trabalho economizadas", value: "6.500+ h" },
  { label: "Scripts e ferramentas desenvolvidos", value: "140+" },
  { label: "Incidentes de rede resolvidos", value: "320+" },
  { label: "Uptime médio dos serviços", value: "99,7%" },
]

const MACHINES_GROWTH = [
  { label: "Jan", value: 780 },
  { label: "Fev", value: 850 },
  { label: "Mar", value: 920 },
  { label: "Abr", value: 1010 },
  { label: "Mai", value: 1140 },
  { label: "Jun", value: 1240 },
]

const DATA_BY_CATEGORY = [
  { label: "Backups", value: 8200 },
  { label: "Máquinas virtuais", value: 5100 },
  { label: "Repositórios", value: 2800 },
  { label: "Wiki e documentos", value: 1600 },
  { label: "Outros serviços", value: 700 },
]

const formatNumber = (value: number) => value.toLocaleString("pt-BR")
const formatGB = (value: number) => `${value.toLocaleString("pt-BR")} GB`

export function Statistics() {
  return (
    <>
      <PageHero
        eyebrow="Estatísticas"
        title="Estatísticas do laboratório"
        description="Números do dia a dia operacional do Laboratório Zero: infraestrutura mantida, atendimento à comunidade e produtividade gerada pelos projetos."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <StatTile key={kpi.label} label={kpi.label} value={kpi.value} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-paper p-6">
            <h2 className="font-serif text-lg font-semibold text-heading">
              Crescimento de máquinas gerenciadas
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Últimos 6 meses</p>
            <div className="mt-6">
              <ColumnChart data={MACHINES_GROWTH} formatValue={formatNumber} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-paper p-6">
            <h2 className="font-serif text-lg font-semibold text-heading">
              Dados gerenciados por categoria
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Distribuição atual</p>
            <div className="mt-6">
              <HorizontalBarChart data={DATA_BY_CATEGORY} formatValue={formatGB} />
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-soft">
          Números ilustrativos — atualize com os dados reais de operação do
          laboratório.
        </p>
      </section>
    </>
  )
}
