import { Ban, ExternalLink, Hourglass } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { primaryEventActionVariantClass } from "../../lib/primary-event-action-styles"
import type { PrimaryEventAction } from "../../types/event"

interface EventHeaderPrimaryActionProps {
  action: PrimaryEventAction
}

const actionIcons: Record<PrimaryEventAction["variant"], LucideIcon> = {
  go_to_event: ExternalLink,
  draft_event: ExternalLink,
  pending_approval: Hourglass,
  cancelled_event: Ban,
}

export function EventHeaderPrimaryAction({ action }: EventHeaderPrimaryActionProps) {
  const Icon = actionIcons[action.variant]

  return (
    <button
      type="button"
      className={primaryEventActionVariantClass[action.variant]}
      aria-label={action.label}
    >
      <span>{action.label}</span>
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
    </button>
  )
}
