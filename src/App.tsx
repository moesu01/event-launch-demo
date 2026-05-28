import { useCallback, useEffect, useRef, useState } from "react"
import { getNextEventStatus } from "./lib/cycle-event-status"
import { useDebugControlsShortcut } from "./lib/use-debug-controls-shortcut"
import {
  DRAFT_PUBLISH_READY_DELAY_MS,
  LAUNCH_EXIT_MS,
  LAUNCH_INNER_SHADOW_RELEASE_AT_MS,
  LAUNCH_LOADING_MS,
  LAUNCH_SUCCESS_MS,
} from "./lib/launch-timing"
import { EventDetailPage } from "./pages/event-detail-page"
import type { EventStatus } from "./types/event"
import type { LaunchPhase, LaunchPostStatus } from "./types/launch"

export function App() {
  const [status, setStatus] = useState<EventStatus>("draft")
  const [isDraftPublishReady, setIsDraftPublishReady] = useState(false)
  const [launchPhase, setLaunchPhase] = useState<LaunchPhase>("idle")
  const [showDebugControls, setShowDebugControls] = useState(false)
  const [isAutoApproveEnabled, setIsAutoApproveEnabled] = useState(true)
  const [isCancelInCycleEnabled, setIsCancelInCycleEnabled] = useState(false)
  const [launchPostStatus, setLaunchPostStatus] =
    useState<LaunchPostStatus | null>(null)
  const launchPostStatusRef = useRef<LaunchPostStatus | null>(null)
  const loadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const shadowReleaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  )
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
      if (shadowReleaseTimeoutRef.current) {
        clearTimeout(shadowReleaseTimeoutRef.current)
      }
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current)
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current)
    }
  }, [])

  const clearLaunchSequence = useCallback(() => {
    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
    if (shadowReleaseTimeoutRef.current) {
      clearTimeout(shadowReleaseTimeoutRef.current)
    }
    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current)
    if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current)
    loadingTimeoutRef.current = null
    shadowReleaseTimeoutRef.current = null
    successTimeoutRef.current = null
    exitTimeoutRef.current = null
    launchPostStatusRef.current = null
    setLaunchPostStatus(null)
    setLaunchPhase("idle")
  }, [])

  const handleToggleDebugControls = useCallback(() => {
    setShowDebugControls((current) => !current)
  }, [])

  useDebugControlsShortcut(handleToggleDebugControls)

  useEffect(() => {
    if (status !== "draft") {
      setIsDraftPublishReady(false)
      return
    }

    setIsDraftPublishReady(false)
    const timeoutId = window.setTimeout(() => {
      setIsDraftPublishReady(true)
    }, DRAFT_PUBLISH_READY_DELAY_MS)

    return () => clearTimeout(timeoutId)
  }, [status])

  const handleStatusCycle = useCallback(() => {
    clearLaunchSequence()
    setStatus((current) =>
      getNextEventStatus(current, {
        includePendingApproval: !isAutoApproveEnabled,
        includeCancelled: isCancelInCycleEnabled,
      }),
    )
  }, [clearLaunchSequence, isAutoApproveEnabled, isCancelInCycleEnabled])

  const handleAutoApproveChange = useCallback((enabled: boolean) => {
    setIsAutoApproveEnabled(enabled)
  }, [])

  const handleCancelInCycleChange = useCallback((enabled: boolean) => {
    setIsCancelInCycleEnabled(enabled)
  }, [])

  const handleLaunch = useCallback(() => {
    if (launchPhase !== "idle") return

    const postStatus: LaunchPostStatus = isAutoApproveEnabled
      ? "live"
      : "pending_approval"
    launchPostStatusRef.current = postStatus
    setLaunchPostStatus(postStatus)
    setLaunchPhase("loading")

    loadingTimeoutRef.current = window.setTimeout(() => {
      const resolvedPostStatus = launchPostStatusRef.current
      if (resolvedPostStatus === "live") setStatus("live")
      if (resolvedPostStatus === "pending_approval") {
        setStatus("pending_approval")
      }
      setLaunchPhase("success")
      loadingTimeoutRef.current = null

      if (resolvedPostStatus === "live") {
        shadowReleaseTimeoutRef.current = window.setTimeout(() => {
          setLaunchPhase("releasing")
          shadowReleaseTimeoutRef.current = null
        }, LAUNCH_INNER_SHADOW_RELEASE_AT_MS)
      }

      successTimeoutRef.current = window.setTimeout(() => {
        if (shadowReleaseTimeoutRef.current) {
          clearTimeout(shadowReleaseTimeoutRef.current)
          shadowReleaseTimeoutRef.current = null
        }
        setLaunchPhase("exiting")
        successTimeoutRef.current = null

        exitTimeoutRef.current = window.setTimeout(() => {
          setLaunchPhase("idle")
          launchPostStatusRef.current = null
          setLaunchPostStatus(null)
          exitTimeoutRef.current = null
        }, LAUNCH_EXIT_MS)
      }, LAUNCH_SUCCESS_MS)
    }, LAUNCH_LOADING_MS)
  }, [launchPhase, isAutoApproveEnabled])

  const handleGoToEventPage = useCallback(() => {
    console.info("Navigate to event page")
  }, [])

  return (
    <main className="flex h-screen flex-col px-4 py-6">
      <EventDetailPage
        status={status}
        launchPhase={launchPhase}
        launchPostStatus={launchPostStatus}
        isDraftPublishReady={isDraftPublishReady}
        showDebugControls={showDebugControls}
        isAutoApproveEnabled={isAutoApproveEnabled}
        isCancelInCycleEnabled={isCancelInCycleEnabled}
        onStatusCycle={handleStatusCycle}
        onAutoApproveChange={handleAutoApproveChange}
        onCancelInCycleChange={handleCancelInCycleChange}
        onLaunch={handleLaunch}
        onGoToEventPage={handleGoToEventPage}
      />
    </main>
  )
}
