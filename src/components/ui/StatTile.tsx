export function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-paper p-6">
      <p className="font-serif text-3xl font-semibold text-navy-900">{value}</p>
      <p className="mt-1 text-sm text-ink-soft">{label}</p>
    </div>
  )
}
