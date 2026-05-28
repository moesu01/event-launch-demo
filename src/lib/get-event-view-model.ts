import { eventStatusConfig } from "../config/event-status-config"
import { LIVE_METRICS } from "../data/mock-event"
import type { EventMetrics, EventStatus, EventViewModel } from "../types/event"

function getCancelledMetrics(): EventMetrics {
  return {
    sales: "$0.00",
    totalTickets: "0 / 300",
    boxOfficeCash: "$0.00",
    refunds: LIVE_METRICS.sales,
    disputes: "$0.00",
    discounts: "$0.00",
    payoutBalance: "$0.00",
    holdBalance: "$0.00",
    attendanceTotal: "0",
    ticketBuyers: "0",
    guestlist: "0",
  }
}

export function getEventViewModel(status: EventStatus): EventViewModel {
  const config = eventStatusConfig[status]

  let metrics: EventMetrics | null = null
  if (config.showStats) {
    metrics =
      status === "cancelled" ? getCancelledMetrics() : { ...LIVE_METRICS }
  }

  return {
    status,
    showStats: config.showStats,
    showChart: config.showChart,
    actionsDisabled: config.actionsDisabled,
    statusBadge: config.statusBadge,
    metrics,
    primaryEventAction: config.primaryEventAction,
    contentPanelInnerShadow: config.contentPanelInnerShadow,
    showLaunchBar: config.showLaunchBar,
  }
}
