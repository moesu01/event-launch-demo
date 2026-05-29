import { Box, Button, Flex } from "@chakra-ui/react"
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
    <Flex
      as="aside"
      className="sidebar-transition"
      h="full"
      flexShrink={0}
      direction="column"
      align="center"
      gap="xl"
      overflow="hidden"
      borderRightWidth="1px"
      borderColor="color.3"
      bg="color.1"
      pt="6"
      pb="3"
      boxShadow="elevation.2"
      w={isExpanded ? "sidebarExpanded" : "sidebarCollapsed"}
      aria-label="Event navigation"
      aria-expanded={isExpanded}
    >
      <Button
        type="button"
        onClick={handleToggleSidebar}
        unstyled
        display="flex"
        flexShrink={0}
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        borderRadius="sm"
        p="1"
        transition="background-color 150ms ease-out, transform 150ms"
        _hover={{ bg: "color.8" }}
        _active={{ transform: "scale(0.96)" }}
        _focusVisible={{
          outline: "2px solid",
          outlineColor: "color.10",
          outlineOffset: "2px",
        }}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-pressed={isCollapsed}
      >
        <SidebarToggleIcon isCollapsed={isCollapsed} />
      </Button>

      <Flex
        as="nav"
        w="full"
        flex="1"
        direction="column"
        align="flex-end"
        borderBottomWidth="1px"
        borderColor="color.3"
      >
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
      </Flex>

      <Flex w="full" direction="column" align="center" gap="sp6">
        {showDebugControls && (
          <Box
            className={isExpanded ? "sidebar-reveal-grid sidebar-reveal-grid--open" : "sidebar-reveal-grid"}
            w="full"
          >
            <Box className="sidebar-reveal-grid__inner">
              <DebugPrototypeControls
                isAutoApproveEnabled={isAutoApproveEnabled}
                onAutoApproveChange={onAutoApproveChange}
                isCancelInCycleEnabled={isCancelInCycleEnabled}
                onCancelInCycleChange={onCancelInCycleChange}
              />
            </Box>
          </Box>
        )}
        <EventStatusBadge
          badge={statusBadge}
          onClick={onStatusCycle}
          isExpanded={isExpanded}
        />
      </Flex>
    </Flex>
  )
}
