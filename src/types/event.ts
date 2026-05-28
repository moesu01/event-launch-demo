export type EventStatus = "draft" | "pending_approval" | "live" | "cancelled"

export interface EventMetrics {
  sales: string
  totalTickets: string
  boxOfficeCash: string
  refunds: string
  disputes: string
  discounts: string
  payoutBalance: string
  holdBalance: string
  attendanceTotal: string
  ticketBuyers: string
  guestlist: string
}

export interface StatusBadgeConfig {
  label: string
  dotColor: string
  textColor: string
}

export type PrimaryEventActionVariant =
  | "go_to_event"
  | "draft_event"
  | "pending_approval"
  | "cancelled_event"

export interface PrimaryEventAction {
  label: string
  variant: PrimaryEventActionVariant
}

export interface EventViewModel {
  status: EventStatus
  showStats: boolean
  showChart: boolean
  actionsDisabled: boolean
  statusBadge: StatusBadgeConfig
  metrics: EventMetrics | null
  primaryEventAction: PrimaryEventAction | null
  contentPanelInnerShadow: string | null
  showLaunchBar: boolean
}

export interface TicketSalesDataPoint {
  date: string
  sales: number
}

export interface Performer {
  name: string
  instagram?: string
  spotify?: string
  tiktok?: string
  avatarGradient?: string
  isHeadliner?: boolean
}

export interface TimelineItem {
  emoji: string
  title: string
  datetime: string
  subtitle?: string
}

export interface MockEvent {
  title: string
  tags: string[]
  venueName: string
  venueAddress: string
  datetime: string
  imageGradient: string
  metrics: EventMetrics
  ticketSales: TicketSalesDataPoint[]
  timeline: TimelineItem[]
  performers: Performer[]
  genres: string[]
  description: string
}
