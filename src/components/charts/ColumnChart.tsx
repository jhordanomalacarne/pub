export type ColumnDatum = { label: string; value: number }

type ColumnChartProps = {
  data: ColumnDatum[]
  formatValue?: (value: number) => string
}

export function ColumnChart({ data, formatValue = String }: ColumnChartProps) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div>
      <div className="flex h-56 gap-4">
        {data.map((d) => (
          <div key={d.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs font-medium text-ink">{formatValue(d.value)}</span>
            <div
              className="w-6 shrink-0 rounded-t bg-navy-700 transition-colors hover:bg-navy-600"
              style={{ height: `${(d.value / max) * 100}%` }}
              role="img"
              aria-label={`${d.label}: ${formatValue(d.value)}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-4 border-t border-border pt-2">
        {data.map((d) => (
          <span key={d.label} className="flex-1 text-center text-xs text-ink-soft">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  )
}
