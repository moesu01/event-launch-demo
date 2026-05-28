import type { ReactNode } from "react"
import type { EventMetrics } from "../../types/event"
import { PerformanceMetricCard } from "./performance-metric-card"

interface OverviewStatsGridProps {
  metrics: EventMetrics
}

type MetricsRowVariant = "default" | "payouts"

function MetricsRow({
  title,
  subtitle,
  variant = "default",
  children,
}: {
  title: string
  subtitle?: string
  variant?: MetricsRowVariant
  children: ReactNode
}) {
  if (variant === "payouts") {
    return (
      <div className="flex items-start justify-between gap-3 border-t border-[var(--color-13)] p-[var(--spacing-md)]">
        <h2 className="shrink-0 pt-1 text-base font-semibold leading-none text-[var(--color-14)]">
          {title}
        </h2>
        <div className="flex min-w-0 max-w-[800px] flex-1 items-start gap-3">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="flex border-t border-[var(--color-13)] px-[var(--spacing-md)] py-4">
      <div className="w-[140px] shrink-0 pt-1">
        <h2 className="text-base font-semibold text-[var(--color-14)]">{title}</h2>
        {subtitle && (
          <p className="mt-0.5 text-xs text-[var(--color-18)]">{subtitle}</p>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-3">
        {children}
      </div>
    </div>
  )
}

export function OverviewStatsGrid({ metrics }: OverviewStatsGridProps) {
  return (
    <section className="overflow-hidden rounded-[var(--radius-10)]" aria-label="Overview statistics">
      <MetricsRow title="Ticket Metrics">
        <PerformanceMetricCard label="Sales" value={metrics.sales} />
        <PerformanceMetricCard label="Total Tickets" value={metrics.totalTickets} />
        <PerformanceMetricCard label="Box Office Cash" value={metrics.boxOfficeCash} />
        <PerformanceMetricCard label="Refunds" value={metrics.refunds} />
        <PerformanceMetricCard label="Disputes" value={metrics.disputes} />
        <PerformanceMetricCard label="Discounts" value={metrics.discounts} />
      </MetricsRow>

      <MetricsRow title="Payouts" variant="payouts">
        <PerformanceMetricCard
          label="Payout Balance"
          value={metrics.payoutBalance}
          size="flex"
        />
        <PerformanceMetricCard
          label="Hold Balance"
          value={metrics.holdBalance}
          size="flex"
        />
      </MetricsRow>

      {/* <MetricsRow title="Attendance" subtitle="People who checked in">
        <PerformanceMetricCard label="Total" value={metrics.attendanceTotal} />
        <PerformanceMetricCard label="Ticket Buyers" value={metrics.ticketBuyers} />
        <PerformanceMetricCard label="Guestlist" value={metrics.guestlist} />
      </MetricsRow> */}
    </section>
  )
}
