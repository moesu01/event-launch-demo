import type { EventStatus } from "../types/event"

export const STATUS_CYCLE_ORDER: EventStatus[] = [
  "draft",
  "pending_approval",
  "live",
  "cancelled",
]

export interface StatusCycleOptions {
  /** When false (auto-approve on), pending_approval is omitted from the cycle */
  includePendingApproval?: boolean
  includeCancelled?: boolean
}

export function getStatusCycleOrder({
  includePendingApproval = false,
  includeCancelled = false,
}: StatusCycleOptions = {}): EventStatus[] {
  return STATUS_CYCLE_ORDER.filter((status) => {
    if (status === "pending_approval" && !includePendingApproval) return false
    if (status === "cancelled" && !includeCancelled) return false
    return true
  })
}

export function getNextEventStatus(
  current: EventStatus,
  options: StatusCycleOptions = {},
): EventStatus {
  const order = getStatusCycleOrder(options)
  const index = order.indexOf(current)
  const nextIndex = index === -1 ? 0 : (index + 1) % order.length
  return order[nextIndex]
}
