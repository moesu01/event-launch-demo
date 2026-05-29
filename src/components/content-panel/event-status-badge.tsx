import type { StatusBadgeConfig } from "../../types/event"
import { cn } from "../../lib/cn"

interface EventStatusBadgeProps {
  badge: StatusBadgeConfig
  onClick: () => void
  isExpanded?: boolean
}

export function EventStatusBadge({
  badge,
  onClick,
  isExpanded = true,
}: EventStatusBadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "sidebar-status-badge flex cursor-pointer flex-col overflow-hidden border text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-10)] active:scale-[0.96] motion-safe:transition-[transform] active:duration-150",
        isExpanded
          ? "w-[131px] gap-[var(--spacing-6)] rounded-[var(--radius-md)] border-[var(--color-3)] bg-[var(--color-1)] p-[var(--spacing-md)] shadow-[var(--shadow-elevation-3)] hover:bg-[var(--color-8)]"
          : "w-8 gap-0 rounded-[var(--radius-sm)] border-transparent bg-transparent p-1 shadow-none hover:opacity-80",
      )}
      aria-label={`Event status: ${badge.label}. Click to cycle prototype status.`}
    >
      <div
        className={cn(
          "sidebar-reveal-grid w-full",
          isExpanded && "sidebar-reveal-grid--open",
        )}
      >
        <div className="sidebar-reveal-grid__inner">
          <span className="text-[11px] font-medium tracking-[0.05em] text-[var(--chakra-gray-500)] uppercase">
            Status
          </span>
        </div>
      </div>

      <div
        className={cn(
          "sidebar-status-dot-row relative flex w-full min-w-0 items-center",
          isExpanded ? "gap-[var(--spacing-xs)] pl-0" : "gap-0 pl-2",
        )}
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full transition-[background-color] duration-500 ease-out"
          style={{ backgroundColor: badge.dotColor }}
          aria-hidden
        />
        <span
          className={cn(
            "sidebar-label-transition overflow-hidden text-[13px] font-semibold leading-none whitespace-nowrap",
            isExpanded
              ? "translate-x-0 opacity-100"
              : "pointer-events-none absolute w-0 -translate-x-1 opacity-0",
          )}
          style={{ color: badge.textColor }}
          aria-hidden={!isExpanded}
        >
          {badge.label}
        </span>
      </div>
    </button>
  )
}
