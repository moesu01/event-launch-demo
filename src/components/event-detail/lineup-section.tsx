import { Plus } from "lucide-react"
import { primaryAddButtonClass } from "../../lib/action-button-classes"
import { cn } from "../../lib/cn"
import type { Performer } from "../../types/event"
import { LineupPerformerRow } from "./lineup-performer-row"

interface LineupSectionProps {
  performers: Performer[]
  actionsDisabled: boolean
}

export function LineupSection({ performers, actionsDisabled }: LineupSectionProps) {
  return (
    <section className="mt-8 flex flex-col gap-6" aria-label="Line-up">
      <div className="flex items-center justify-between">
        <h2 className="section-heading">Line-up</h2>
        <button
          type="button"
          disabled={actionsDisabled}
          className={cn(
            primaryAddButtonClass,
            actionsDisabled && "cursor-not-allowed opacity-40",
          )}
          aria-label="Add performer"
        >
          <span>Add Performer</span>
          <Plus className="h-[18px] w-[18px] shrink-0" aria-hidden />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {performers.map((performer) => (
          <LineupPerformerRow
            key={performer.name}
            performer={performer}
            actionsDisabled={actionsDisabled}
          />
        ))}
      </div>
    </section>
  )
}
