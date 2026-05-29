import { Button } from "@chakra-ui/react"
import { Ban, ExternalLink, Hourglass } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getPrimaryEventActionStyles } from "../../lib/primary-event-action-styles"
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
    <Button
      type="button"
      unstyled
      css={getPrimaryEventActionStyles(action.variant)}
      aria-label={action.label}
    >
      <span>{action.label}</span>
      <Icon size={14} style={{ flexShrink: 0 }} aria-hidden />
    </Button>
  )
}
