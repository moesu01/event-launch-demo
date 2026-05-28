import type {
  EventStatus,
  PrimaryEventAction,
  StatusBadgeConfig,
} from "../types/event"

export interface EventStatusConfig {
  showStats: boolean
  showChart: boolean
  actionsDisabled: boolean
  primaryEventAction: PrimaryEventAction | null
  statusBadge: StatusBadgeConfig
  contentPanelInnerShadow: string | null
  showLaunchBar: boolean
}

export const eventStatusConfig: Record<EventStatus, EventStatusConfig> = {
  live: {
    showStats: true,
    showChart: true,
    actionsDisabled: false,
    primaryEventAction: { label: "Go to Event", variant: "go_to_event" },
    statusBadge: {
      label: "LIVE",
      dotColor: "var(--color-5)",
      textColor: "var(--color-6)",
    },
    contentPanelInnerShadow: null,
    showLaunchBar: false,
  },
  draft: {
    showStats: false,
    showChart: false,
    actionsDisabled: false,
    primaryEventAction: { label: "Preview Event", variant: "go_to_event" },
    statusBadge: {
      label: "DRAFT",
      dotColor: "var(--status-draft-dot)",
      textColor: "var(--status-draft-text)",
    },
    contentPanelInnerShadow: "--content-panel-inner-shadow-draft",
    showLaunchBar: true,
  },
  pending_approval: {
    showStats: false,
    showChart: false,
    actionsDisabled: true,
    primaryEventAction: {
      label: "Pending Approval",
      variant: "pending_approval",
    },
    statusBadge: {
      label: "PENDING",
      dotColor: "var(--status-pending)",
      textColor: "var(--status-pending-text)",
    },
    contentPanelInnerShadow: "--content-panel-inner-shadow-pending",
    showLaunchBar: false,
  },
  cancelled: {
    showStats: true,
    showChart: false,
    actionsDisabled: true,
    primaryEventAction: {
      label: "Cancelled Event",
      variant: "cancelled_event",
    },
    statusBadge: {
      label: "CANCELLED",
      dotColor: "var(--status-cancelled)",
      textColor: "var(--status-cancelled-text)",
    },
    contentPanelInnerShadow: null,
    showLaunchBar: false,
  },
}
