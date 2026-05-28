import type { Icon } from "@phosphor-icons/react"
import {
  CalendarCheck,
  ChartBar,
  LineSegments,
  Clipboard,
  GearSix,
  Money,
  ShareNetwork,
  SidebarSimple,
  Timer,
  Users,
} from "@phosphor-icons/react"
import type { StatusBadgeConfig } from "../../types/event"
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
  { label: "Detail", icon: CalendarCheck, active: true },
  { label: "Guestlist", icon: Clipboard },
  { label: "Attendees", icon: Users },
  { label: "Marketing", icon: ShareNetwork },
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
  return (
    <aside
      className="flex h-full w-[155px] shrink-0 flex-col items-center gap-[var(--spacing-xl)] border-r border-[var(--color-3)] bg-[var(--color-1)] pt-6 pb-3 shadow-[var(--shadow-elevation-2)]"
      aria-label="Event navigation"
    >
      <SidebarSimple
        size={24}
        weight="regular"
        className="text-[var(--color-2)]"
        aria-hidden
      />

      <nav className="flex w-full flex-1 flex-col items-end gap-[var(--spacing-6)] border-b border-[var(--color-3)]">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={item.active}
          />
        ))}
      </nav>

      <div className="flex flex-col items-center gap-[var(--spacing-6)]">
        {showDebugControls && (
          <DebugPrototypeControls
            isAutoApproveEnabled={isAutoApproveEnabled}
            onAutoApproveChange={onAutoApproveChange}
            isCancelInCycleEnabled={isCancelInCycleEnabled}
            onCancelInCycleChange={onCancelInCycleChange}
          />
        )}
        <EventStatusBadge badge={statusBadge} onClick={onStatusCycle} />
      </div>
    </aside>
  )
}
