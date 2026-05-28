import type { Icon } from "@phosphor-icons/react"
import { cn } from "../../lib/cn"

interface SidebarNavItemProps {
  label: string
  icon: Icon
  isActive?: boolean
}

export function SidebarNavItem({ label, icon: IconComponent, isActive }: SidebarNavItemProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-[155px] items-center gap-[var(--spacing-md)] py-2.5 pr-3 pl-6",
        isActive
          ? "bg-[var(--color-2)]"
          : "rounded-[var(--radius-6)] opacity-70",
      )}
      role="presentation"
    >
      <IconComponent
        size={24}
        weight="regular"
        className={cn("shrink-0", isActive ? "text-white" : "text-[var(--color-2)]")}
        aria-hidden
      />
      <span
        className={cn(
          "text-sm font-medium",
          isActive ? "font-bold text-white" : "text-[var(--color-2)]",
        )}
      >
        {label}
      </span>
    </div>
  )
}
