import type { Icon } from "@phosphor-icons/react"
import { cn } from "../../lib/cn"

interface SidebarNavItemProps {
  label: string
  icon: Icon
  isActive?: boolean
  isExpanded?: boolean
  staggerIndex?: number
}

const LABEL_STAGGER_MS = 30

export function SidebarNavItem({
  label,
  icon: IconComponent,
  isActive,
  isExpanded = true,
  staggerIndex = 0,
}: SidebarNavItemProps) {
  const labelDelayMs = isExpanded ? staggerIndex * LABEL_STAGGER_MS : 0

  return (
    <div
      className={cn(
        "sidebar-nav-item relative flex h-12 w-full cursor-pointer items-center py-3",
        isExpanded
          ? "gap-[var(--spacing-md)] pr-3 pl-6"
          : "gap-0 pr-0 pl-5",
        isActive
          ? "bg-[var(--color-2)] hover:bg-[var(--color-17)]"
          : "opacity-70 hover:bg-[var(--color-8)] hover:opacity-100",
      )}
      role="presentation"
    >
      <div className="sidebar-icon-slot flex items-center">
        <IconComponent
          size={24}
          weight="regular"
          className={cn("shrink-0", isActive ? "text-white" : "text-[var(--color-2)]")}
          aria-hidden
        />
      </div>
      <span
        className={cn(
          "sidebar-label-transition min-w-0 overflow-hidden text-sm font-medium whitespace-nowrap",
          isExpanded
            ? "translate-x-0 opacity-100"
            : "pointer-events-none absolute w-0 -translate-x-1 opacity-0",
          isActive ? "font-bold text-white" : "text-[var(--color-2)]",
        )}
        style={{ transitionDelay: `${labelDelayMs}ms` }}
        aria-hidden={!isExpanded}
      >
        {label}
      </span>
    </div>
  )
}
