interface GenresSectionProps {
  genres: string[]
}

export function GenresSection({ genres }: GenresSectionProps) {
  return (
    <section className="mt-8" aria-label="Genres">
      <h2 className="section-heading mb-4">Genres</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span
            key={genre}
            className="rounded-full border border-[var(--color-15)] bg-[var(--color-1)] px-4 py-1.5 text-sm font-medium text-[var(--color-14)]"
          >
            {genre}
          </span>
        ))}
      </div>
    </section>
  )
}
