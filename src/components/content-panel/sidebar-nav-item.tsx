import type { Icon } from "@phosphor-icons/react"
import { cn } from "../../lib/cn"

interface SidebarNavItemProps {
  label: string
  icon: Icon
  isActive?: boolean
  isExpanded?: boolean
}

export function SidebarNavItem({
  label,
  icon: IconComponent,
  isActive,
  isExpanded = true,
}: SidebarNavItemProps) {
  return (
    <div
      className={cn(
        "flex h-12 w-full cursor-pointer items-center py-3 transition-[background-color,opacity,padding] duration-150",
        isExpanded
          ? "gap-[var(--spacing-md)] pr-3 pl-6"
          : "justify-center px-3",
        isActive
          ? "bg-[var(--color-2)] hover:bg-[var(--color-17)]"
          : "opacity-70 hover:bg-[var(--color-8)] hover:opacity-100",
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
          "overflow-hidden text-sm font-medium whitespace-nowrap transition-[opacity,width] duration-150",
          isExpanded ? "w-auto opacity-100" : "w-0 opacity-0",
          isActive ? "font-bold text-white" : "text-[var(--color-2)]",
        )}
        aria-hidden={!isExpanded}
      >
        {label}
      </span>
    </div>
  )
}
