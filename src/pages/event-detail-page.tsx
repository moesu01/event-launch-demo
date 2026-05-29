import { Box, Flex } from "@chakra-ui/react"
import { ContentPanel } from "../components/content-panel/content-panel"
import { ContentPanelInnerShadowOverlay } from "../components/event-detail/content-panel-inner-shadow-overlay"
import { EventSidebar } from "../components/content-panel/event-sidebar"
import { DescriptionSection } from "../components/event-detail/description-section"
import { EventDetailsHeader } from "../components/event-detail/event-details-header"
import { GenresSection } from "../components/event-detail/genres-section"
import { LaunchEventBar } from "../components/event-detail/launch-event-bar"
import { LaunchLiveReveal } from "../components/event-detail/launch-live-reveal"
import { LineupSection } from "../components/event-detail/lineup-section"
import { OverviewStatsGrid } from "../components/event-detail/overview-stats-grid"
import { TicketSalesChart } from "../components/event-detail/ticket-sales-chart"
import { TimelineSection } from "../components/event-detail/timeline-section"
import { mockEvent } from "../data/mock-event"
import { getEventViewModel } from "../lib/get-event-view-model"
import type { EventStatus } from "../types/event"
import type { LaunchPhase, LaunchPostStatus } from "../types/launch"

interface EventDetailPageProps {
  status: EventStatus
  launchPhase: LaunchPhase
  launchPostStatus: LaunchPostStatus | null
  isDraftPublishReady: boolean
  showDebugControls: boolean
  isAutoApproveEnabled: boolean
  isCancelInCycleEnabled: boolean
  onStatusCycle: () => void
  onAutoApproveChange: (enabled: boolean) => void
  onCancelInCycleChange: (enabled: boolean) => void
  onLaunch: () => void
  onGoToEventPage: () => void
}

function isInLaunchSequence(phase: LaunchPhase): boolean {
  return phase !== "idle"
}

export function EventDetailPage({
  status,
  launchPhase,
  launchPostStatus,
  isDraftPublishReady,
  showDebugControls,
  isAutoApproveEnabled,
  isCancelInCycleEnabled,
  onStatusCycle,
  onAutoApproveChange,
  onCancelInCycleChange,
  onLaunch,
  onGoToEventPage,
}: EventDetailPageProps) {
  const viewModel = getEventViewModel(status)
  const effectiveInnerShadow =
    status === "draft" && !isDraftPublishReady
      ? null
      : viewModel.contentPanelInnerShadow
  const showPendingApprovalFooter =
    status === "pending_approval" && launchPhase === "idle"
  const showLaunchFooter =
    (status === "draft" && isDraftPublishReady && viewModel.showLaunchBar) ||
    isInLaunchSequence(launchPhase) ||
    showPendingApprovalFooter
  const isLaunchRevealPhase =
    launchPhase === "success" ||
    launchPhase === "releasing" ||
    launchPhase === "exiting"
  const isLiveLaunchReveal =
    launchPostStatus === "live" && isLaunchRevealPhase
  const isPendingLaunchReveal =
    launchPostStatus === "pending_approval" && isLaunchRevealPhase

  const scrollClassName = [
    "launch-scroll-padding",
    launchPhase === "loading" && "launch-content-pulse",
    (launchPhase === "success" ||
      launchPhase === "releasing" ||
      launchPhase === "exiting") &&
      "launch-scroll-settle",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Flex minH="0" flex="1" direction="column">
      <ContentPanel
        sidebar={
          <EventSidebar
            statusBadge={viewModel.statusBadge}
            showDebugControls={showDebugControls}
            isAutoApproveEnabled={isAutoApproveEnabled}
            isCancelInCycleEnabled={isCancelInCycleEnabled}
            onAutoApproveChange={onAutoApproveChange}
            onCancelInCycleChange={onCancelInCycleChange}
            onStatusCycle={onStatusCycle}
          />
        }
      >
        <Flex position="relative" minH="0" minW="0" flex="1" direction="column">
          <Box position="relative" minH="0" flex="1">
            <Box
              className={scrollClassName}
              h="full"
              minH="0"
              overflowY="auto"
              px="6"
              pt="6"
              pb={showLaunchFooter ? "launchScrollPadding" : "6"}
            >
              <Flex
                mx="auto"
                maxW="pageContentMax"
                direction="column"
                gap="6"
              >
                <EventDetailsHeader
                  event={mockEvent}
                  actionsDisabled={viewModel.actionsDisabled}
                  primaryEventAction={viewModel.primaryEventAction}
                  primaryActionReveal={
                    isLiveLaunchReveal || isPendingLaunchReveal
                  }
                />

                {viewModel.showStats && viewModel.metrics && (
                  <LaunchLiveReveal active={isLiveLaunchReveal} expand>
                    <OverviewStatsGrid metrics={viewModel.metrics} />
                  </LaunchLiveReveal>
                )}

                {viewModel.showChart && (
                  <LaunchLiveReveal active={isLiveLaunchReveal} expand stagger>
                    <TicketSalesChart data={mockEvent.ticketSales} />
                  </LaunchLiveReveal>
                )}

                <TimelineSection items={mockEvent.timeline} />
                <LineupSection
                  performers={mockEvent.performers}
                  actionsDisabled={viewModel.actionsDisabled}
                />
                <GenresSection genres={mockEvent.genres} />
                <DescriptionSection
                  description={mockEvent.description}
                  actionsDisabled={viewModel.actionsDisabled}
                />
              </Flex>
            </Box>

            <ContentPanelInnerShadowOverlay
              launchPhase={launchPhase}
              launchPostStatus={launchPostStatus}
              contentPanelInnerShadow={effectiveInnerShadow}
            />
          </Box>

          {showLaunchFooter && (
            <LaunchEventBar
              status={status}
              launchPhase={launchPhase}
              launchPostStatus={launchPostStatus}
              onLaunch={onLaunch}
              onGoToEventPage={onGoToEventPage}
            />
          )}
        </Flex>
      </ContentPanel>
    </Flex>
  )
}
