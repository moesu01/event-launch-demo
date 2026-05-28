import { GripVertical, Star, Trash2 } from "lucide-react"
import { headerActionButtonClass } from "../../lib/action-button-classes"
import { cn } from "../../lib/cn"
import type { Performer } from "../../types/event"
import { SocialStat } from "./social-stat"

interface LineupPerformerRowProps {
  performer: Performer
  actionsDisabled: boolean
}

const socialPlatforms = [
  { key: "instagram" as const, field: "instagram" as const },
  { key: "spotify" as const, field: "spotify" as const },
  { key: "tiktok" as const, field: "tiktok" as const },
]

export function LineupPerformerRow({ performer, actionsDisabled }: LineupPerformerRowProps) {
  return (
    <div className="flex items-center gap-6 border-b border-[var(--color-15)] pb-3">
      <GripVertical
        className="h-4 w-4 shrink-0 text-[var(--color-16)]"
        aria-hidden
      />

      <div className="flex min-w-0 flex-1 items-end gap-6">
        <div
          className="h-12 w-12 shrink-0 rounded-full"
          style={{
            background:
              performer.avatarGradient ??
              "linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)",
          }}
          role="img"
          aria-label={`${performer.name} avatar`}
        />

        <div className="flex min-w-0 flex-col justify-between gap-0.5 self-stretch py-0.5">
          <p className="m-0 text-base font-bold leading-6 text-[var(--color-2)]">
            {performer.name}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socialPlatforms.map(({ key, field }) => {
              const value = performer[field]
              if (value == null) return null
              return <SocialStat key={key} platform={key} value={value} />
            })}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          disabled={actionsDisabled}
          className={cn(
            headerActionButtonClass,
            "px-3 text-[13px] font-medium text-[var(--color-2)]",
            actionsDisabled && "cursor-not-allowed opacity-40",
          )}
          aria-label={`Edit ${performer.name}`}
        >
          Edit
        </button>

        <span
          className="h-7 w-px shrink-0 bg-[var(--color-15)]"
          aria-hidden
        />

        <button
          type="button"
          disabled={actionsDisabled}
          className={cn(
            headerActionButtonClass,
            "w-10",
            actionsDisabled && "cursor-not-allowed opacity-40",
          )}
          aria-label={
            performer.isHeadliner
              ? `Remove ${performer.name} as headliner`
              : `Mark ${performer.name} as headliner`
          }
        >
          <Star
            className={cn(
              "h-4 w-4 text-[var(--color-2)]",
              performer.isHeadliner && "fill-[var(--color-2)]",
            )}
            aria-hidden
          />
        </button>

        <button
          type="button"
          disabled={actionsDisabled}
          className={cn(
            headerActionButtonClass,
            "w-10",
            actionsDisabled && "cursor-not-allowed opacity-40",
          )}
          aria-label={`Delete ${performer.name}`}
        >
          <Trash2 className="h-4 w-4 text-[var(--color-2)]" aria-hidden />
        </button>
      </div>
    </div>
  )
}
