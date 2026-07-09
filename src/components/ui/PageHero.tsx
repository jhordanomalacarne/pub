type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-serif text-4xl font-semibold text-heading sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{description}</p>
        )}
      </div>
    </section>
  )
}
