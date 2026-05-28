import { useState } from "react"
import type { Icon } from "@phosphor-icons/react"
import {
  CalendarDot,
  ChartBar,
  LineSegments,
  ClipboardText,
  GearSix,
  Money,
  Megaphone,
  Sidebar,
  SidebarSimple,
  Timer,
  Users,
} from "@phosphor-icons/react"
import type { StatusBadgeConfig } from "../../types/event"
import { cn } from "../../lib/cn"
import { DebugPrototypeControls } from "./debug-prototype-controls"
import { EventStatusBadge } from "./event-status-badge"
import { SidebarNavItem } from "./sidebar-nav-item"

interface EventSidebarProps {
  statusBadge: StatusBadgeConfig
  showDebugControls: boolean
  isAutoApproveEnabled: boolean
  onAutoApproveChange: (enabled: boolean) => void
  isCancelInCycleEnabled: boolean
  onCancelInCycleChange: (enabled: boolean) => void
  onStatusCycle: () => void
}

const NAV_ITEMS: { label: string; icon: Icon; active?: boolean }[] = [
  { label: "Detail", icon: CalendarDot, active: true },
  { label: "Guestlist", icon: ClipboardText },
  { label: "Attendees", icon: Users },
  { label: "Marketing", icon: Megaphone },
  { label: "Waitlist", icon: Timer },
  { label: "Analytics", icon: LineSegments },
  { label: "Reporting", icon: ChartBar },
  { label: "Payouts", icon: Money },
  { label: "Settings", icon: GearSix },
]

export function EventSidebar({
  statusBadge,
  showDebugControls,
  isAutoApproveEnabled,
  onAutoApproveChange,
  isCancelInCycleEnabled,
  onCancelInCycleChange,
  onStatusCycle,
}: EventSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const isExpanded = !isCollapsed

  const handleToggleSidebar = () => {
    setIsCollapsed((current) => !current)
  }

  return (
    <aside
      className={cn(
        "flex h-full shrink-0 flex-col items-center gap-[var(--spacing-xl)] overflow-hidden border-r border-[var(--color-3)] bg-[var(--color-1)] pt-6 pb-3 shadow-[var(--shadow-elevation-2)] transition-[width] duration-200 ease-out",
        isExpanded ? "w-[155px]" : "w-[64px]",
      )}
      aria-label="Event navigation"
      aria-expanded={isExpanded}
    >
      <button
        type="button"
        onClick={handleToggleSidebar}
        className="flex shrink-0 cursor-pointer items-center justify-center rounded-[var(--radius-sm)] p-1 transition-colors duration-150 hover:bg-[var(--color-8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-10)]"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <Sidebar
            size={24}
            weight="fill"
            className="text-[var(--chakra-gray-600)]"
            aria-hidden
          />
        ) : (
          <SidebarSimple
            size={24}
            weight="fill"
            className="text-[var(--chakra-gray-600)]"
            aria-hidden
          />
        )}
      </button>

      <nav className="flex w-full flex-1 flex-col items-end border-b border-[var(--color-3)]">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={item.active}
            isExpanded={isExpanded}
          />
        ))}
      </nav>

      <div className="flex w-full flex-col items-center gap-[var(--spacing-6)]">
        {isExpanded && showDebugControls && (
          <DebugPrototypeControls
            isAutoApproveEnabled={isAutoApproveEnabled}
            onAutoApproveChange={onAutoApproveChange}
            isCancelInCycleEnabled={isCancelInCycleEnabled}
            onCancelInCycleChange={onCancelInCycleChange}
          />
        )}
        {isExpanded && (
          <EventStatusBadge badge={statusBadge} onClick={onStatusCycle} />
        )}
      </div>
    </aside>
  )
}
