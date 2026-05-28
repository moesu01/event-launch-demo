import type { ReactNode } from "react"

interface ContentPanelProps {
  sidebar: ReactNode
  children: ReactNode
}

export function ContentPanel({ sidebar, children }: ContentPanelProps) {
  return (
    <div className="mx-auto flex h-full min-h-0 w-full max-w-[1195px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-1)] shadow-[var(--shadow-elevation-1)]">
      {sidebar}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-[var(--color-1)]">
        {children}
      </div>
    </div>
  )
}
