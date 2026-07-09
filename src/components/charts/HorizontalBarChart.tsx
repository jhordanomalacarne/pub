export type BarDatum = { label: string; value: number }

type HorizontalBarChartProps = {
  data: BarDatum[]
  formatValue?: (value: number) => string
}

export function HorizontalBarChart({ data, formatValue = String }: HorizontalBarChartProps) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="w-40 shrink-0 text-xs text-ink-soft">{d.label}</span>
          <div className="h-4 flex-1">
            <div
              className="h-4 rounded-r bg-navy-700 transition-colors hover:bg-navy-600"
              style={{ width: `${(d.value / max) * 100}%` }}
              role="img"
              aria-label={`${d.label}: ${formatValue(d.value)}`}
            />
          </div>
          <span className="w-20 shrink-0 text-right text-xs font-medium text-ink">
            {formatValue(d.value)}
          </span>
        </div>
      ))}
    </div>
  )
}
