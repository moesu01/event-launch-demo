import { cn } from "../../lib/cn"

interface DescriptionSectionProps {
  description: string
  actionsDisabled: boolean
}

export function DescriptionSection({
  description,
  actionsDisabled,
}: DescriptionSectionProps) {
  return (
    <section className="mt-8 pb-8" aria-label="Description">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-heading">Description</h2>
        <span className="text-xs font-medium text-[var(--chakra-gray-500)]">
          Scheduled Update
        </span>
      </div>
      <div className="rounded-[var(--radius-md)] border border-[var(--color-13)] p-4">
        <p className="mb-4 whitespace-pre-line text-sm leading-relaxed text-[var(--color-16)]">
          {description}
        </p>
        <button
          type="button"
          disabled={actionsDisabled}
          className={cn(
            "text-sm font-semibold text-[var(--color-10)]",
            actionsDisabled && "cursor-not-allowed opacity-40",
          )}
        >
          Edit Description
        </button>
      </div>
    </section>
  )
}
