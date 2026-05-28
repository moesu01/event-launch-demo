import type { TimelineItem } from "../../types/event"

interface TimelineSectionProps {
  items: TimelineItem[]
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="relative flex h-[109px] w-[314px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-[var(--radius-md)] border border-[var(--color-15)] px-6">
      <span
        className="absolute top-2.5 left-[19px] text-2xl leading-[1.2] font-medium text-[var(--color-16)]"
        aria-hidden
      >
        {item.emoji}
      </span>

      <div className="flex w-full items-center pl-7">
        <p className="m-0 text-sm font-medium leading-[1.2] tracking-[-0.42px] text-[var(--color-16)]">
          {item.title}
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-1.5">
        <p className="m-0 text-base font-bold leading-[19.2px] text-[var(--color-2)]">
          {item.datetime}
        </p>
        {item.subtitle ? (
          <p className="m-0 text-xs font-normal leading-[18px] text-[var(--color-2)]">
            {item.subtitle}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section className="mt-8 flex flex-col gap-3" aria-label="Event timeline">
      <h2 className="section-heading">
        Timeline
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <TimelineCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}
