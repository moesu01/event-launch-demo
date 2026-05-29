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
  Timer,
  Users,
} from "@phosphor-icons/react"
import type { StatusBadgeConfig } from "../../types/event"
import { cn } from "../../lib/cn"
import { DebugPrototypeControls } from "./debug-prototype-controls"
import { EventStatusBadge } from "./event-status-badge"
import { SidebarNavItem } from "./sidebar-nav-item"
import { SidebarToggleIcon } from "./sidebar-toggle-icon"

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
        "sidebar-transition flex h-full shrink-0 flex-col items-center gap-[var(--spacing-xl)] overflow-hidden border-r border-[var(--color-3)] bg-[var(--color-1)] pt-6 pb-3 shadow-[var(--shadow-elevation-2)]",
        isExpanded ? "w-[155px]" : "w-[64px]",
      )}
      aria-label="Event navigation"
      aria-expanded={isExpanded}
    >
      <button
        type="button"
        onClick={handleToggleSidebar}
        className="flex shrink-0 cursor-pointer items-center justify-center rounded-[var(--radius-sm)] p-1 transition-colors duration-150 ease-out hover:bg-[var(--color-8)] active:scale-[0.96] motion-safe:transition-[background-color,transform] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-10)]"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-pressed={isCollapsed}
      >
        <SidebarToggleIcon isCollapsed={isCollapsed} />
      </button>

      <nav className="flex w-full flex-1 flex-col items-end border-b border-[var(--color-3)]">
        {NAV_ITEMS.map((item, index) => (
          <SidebarNavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={item.active}
            isExpanded={isExpanded}
            staggerIndex={index}
          />
        ))}
      </nav>

      <div className="flex w-full flex-col items-center gap-[var(--spacing-6)]">
        {showDebugControls && (
          <div
            className={cn(
              "sidebar-reveal-grid w-full",
              isExpanded && "sidebar-reveal-grid--open",
            )}
          >
            <div className="sidebar-reveal-grid__inner">
              <DebugPrototypeControls
                isAutoApproveEnabled={isAutoApproveEnabled}
                onAutoApproveChange={onAutoApproveChange}
                isCancelInCycleEnabled={isCancelInCycleEnabled}
                onCancelInCycleChange={onCancelInCycleChange}
              />
            </div>
          </div>
        )}
        <EventStatusBadge
          badge={statusBadge}
          onClick={onStatusCycle}
          isExpanded={isExpanded}
        />
      </div>
    </aside>
  )
}
