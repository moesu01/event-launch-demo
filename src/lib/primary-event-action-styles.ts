import type { PrimaryEventActionVariant } from "../types/event"
import { headerActionButtonClass } from "./action-button-classes"
import { cn } from "./cn"

const primaryEventActionBaseClass =
  "flex h-[38px] shrink-0 items-center justify-center gap-1 rounded-[var(--radius-md)] text-sm font-semibold leading-none"

const goToEventActionClass = cn(
  headerActionButtonClass,
  "gap-1 px-3 text-sm font-semibold text-[var(--color-14)]",
)

export const primaryEventActionVariantClass: Record<PrimaryEventActionVariant, string> = {
  go_to_event: goToEventActionClass,
  draft_event: goToEventActionClass,
  pending_approval: cn(
    primaryEventActionBaseClass,
    "border border-[var(--status-pending-action-border)] bg-[var(--status-pending-action-bg)] px-3 text-[var(--status-pending-action-text)]",
  ),
  cancelled_event: cn(
    primaryEventActionBaseClass,
    "border border-[var(--status-cancelled-action-border)] bg-[var(--status-cancelled-action-bg)] px-3 text-[var(--status-cancelled-action-text)]",
  ),
}
