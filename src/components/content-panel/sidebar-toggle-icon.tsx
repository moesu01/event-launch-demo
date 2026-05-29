import { Sidebar, SidebarSimple } from "@phosphor-icons/react"
import { cn } from "../../lib/cn"

interface SidebarToggleIconProps {
  isCollapsed: boolean
}

export function SidebarToggleIcon({ isCollapsed }: SidebarToggleIconProps) {
  const iconClassName = "text-[var(--chakra-gray-600)]"

  return (
    <span className="relative block size-6" aria-hidden>
      <span
        className={cn(
          "sidebar-icon-layer absolute inset-0 flex items-center justify-center",
          isCollapsed
            ? "scale-100 opacity-100 blur-0"
            : "scale-[0.25] opacity-0 blur-[4px]",
        )}
      >
        <Sidebar size={24} weight="fill" className={iconClassName} />
      </span>
      <span
        className={cn(
          "sidebar-icon-layer flex items-center justify-center",
          isCollapsed
            ? "scale-[0.25] opacity-0 blur-[4px]"
            : "scale-100 opacity-100 blur-0",
        )}
      >
        <SidebarSimple size={24} weight="fill" className={iconClassName} />
      </span>
    </span>
  )
}
