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
        "cursor-pointer transition-[background-color,color] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-10)]",
        isExpanded
          ? "flex w-[131px] flex-col gap-[var(--spacing-6)] rounded-[var(--radius-md)] border border-[var(--color-3)] bg-[var(--color-1)] p-[var(--spacing-md)] text-left shadow-[var(--shadow-elevation-3)] hover:bg-[var(--color-8)]"
          : "flex items-center justify-center p-1 hover:opacity-80",
      )}
      aria-label={`Event status: ${badge.label}. Click to cycle prototype status.`}
    >
      {isExpanded && (
        <span className="text-[11px] font-medium tracking-[0.05em] text-[var(--chakra-gray-500)] uppercase">
          Status
        </span>
      )}
      <div className={cn("flex items-center", isExpanded && "gap-[var(--spacing-xs)]")}>
        <span
          className="h-2 w-2 shrink-0 rounded-full transition-[background-color] duration-500 ease-out"
          style={{ backgroundColor: badge.dotColor }}
          aria-hidden
        />
        {isExpanded && (
          <span
            className="text-[13px] font-semibold leading-none transition-[color] duration-500 ease-out"
            style={{ color: badge.textColor }}
          >
            {badge.label}
          </span>
        )}
      </div>
    </button>
  )
}
