import { useLayoutEffect, useState } from "react"
import { ExternalLink, Hourglass, Loader2, Rocket } from "lucide-react"
import { cn } from "../../lib/cn"
import { primaryEventActionVariantClass } from "../../lib/primary-event-action-styles"
import type { EventStatus } from "../../types/event"
import type { LaunchPhase, LaunchPostStatus } from "../../types/launch"

interface LaunchEventBarProps {
  status: EventStatus
  launchPhase: LaunchPhase
  launchPostStatus: LaunchPostStatus | null
  onLaunch: () => void
  onGoToEventPage: () => void
}

const LIVE_TOAST_MESSAGE = "Your event is live!"

const LAUNCH_FOOTER_SPRING_MS = 150

const launchFooterButtonBaseClass =
  "launch-footer-button relative flex h-[56px] shrink-0 items-center justify-center text-base font-semibold leading-none"

const launchFooterGradientLayerClass =
  "launch-footer-button__layer pointer-events-none absolute inset-0 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"

const launchFooterPendingLayerClass =
  "launch-footer-button__layer pointer-events-none absolute inset-0 border border-[var(--color-3)] bg-[var(--color-1)] shadow-[var(--shadow-sm)]"

type FooterControlVariant = "launch" | "loading" | "pending"

function getFooterControlVariant({
  status,
  launchPhase,
  launchPostStatus,
}: {
  status: EventStatus
  launchPhase: LaunchPhase
  launchPostStatus: LaunchPostStatus | null
}): FooterControlVariant | null {
  if (launchPostStatus === "live") {
    if (launchPhase === "loading") return "loading"
    return null
  }

  if (launchPhase === "loading") return "loading"

  if (status === "pending_approval") {
    if (
      launchPostStatus === "pending_approval" &&
      (launchPhase === "success" ||
        launchPhase === "releasing" ||
        launchPhase === "exiting")
    ) {
      return "pending"
    }

    if (launchPhase === "idle") return "pending"
  }

  if (status === "draft" && launchPhase === "idle") return "launch"

  return null
}

export function LaunchEventBar({
  status,
  launchPhase,
  launchPostStatus,
  onLaunch,
  onGoToEventPage,
}: LaunchEventBarProps) {
  const [isButtonExitAnimating, setIsButtonExitAnimating] = useState(false)
  const isLivePath = launchPostStatus === "live"
  const isExitingLive = launchPhase === "exiting" && isLivePath
  const showLiveToast =
    isLivePath &&
    (launchPhase === "success" ||
      launchPhase === "releasing" ||
      launchPhase === "exiting")
  const footerVariant = getFooterControlVariant({
    status,
    launchPhase,
    launchPostStatus,
  })
  const isButtonExiting = isLivePath && launchPhase === "success"
  const showFooterButton = footerVariant !== null || isButtonExitAnimating
  const displayVariant: FooterControlVariant | null =
    footerVariant ?? (isButtonExitAnimating ? "loading" : null)
  const isPillShape = displayVariant === "loading"
  const isGradientState =
    displayVariant === "launch" || displayVariant === "loading"

  useLayoutEffect(() => {
    if (!isButtonExiting) {
      setIsButtonExitAnimating(false)
      return
    }

    setIsButtonExitAnimating(true)
    const timeoutId = window.setTimeout(() => {
      setIsButtonExitAnimating(false)
    }, LAUNCH_FOOTER_SPRING_MS)

    return () => clearTimeout(timeoutId)
  }, [isButtonExiting])

  return (
    <div
      className={cn(
        "launch-footer-fade absolute inset-x-0 bottom-0 z-10 flex min-h-[76px] flex-col justify-end px-6 pb-2.5 pt-6",
        isExitingLive && "launch-footer-fade--exit",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--launch-event-bar-bg)" }}
      />
      <div className="relative flex w-full justify-center">
        {showLiveToast && (
          <div
            className={cn(
              "launch-success-toast flex min-h-[56px] w-full max-w-[480px] cursor-default items-center justify-between gap-4 rounded-[var(--radius-md)] px-5 py-4",
              isExitingLive && "launch-success-toast--exit",
            )}
            style={{ backgroundColor: "var(--launch-success-toast-bg)" }}
            role="status"
            aria-live="polite"
          >
            <p className="launch-success-toast__message text-wrap-balance text-base font-semibold leading-snug text-white">
              {LIVE_TOAST_MESSAGE}
            </p>
            <button
              type="button"
              onClick={onGoToEventPage}
              className={cn(
                primaryEventActionVariantClass.go_to_event,
                "launch-success-toast__action cursor-pointer pl-3 pr-2.5 active:scale-[0.96] motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out",
              )}
              aria-label="Go to Event"
            >
              <span>Go to Event</span>
              <ExternalLink
                className="launch-success-toast__action-icon h-3.5 w-3.5 shrink-0"
                aria-hidden
              />
            </button>
          </div>
        )}
        {showFooterButton && displayVariant && (
          <button
            type="button"
            onClick={displayVariant === "launch" ? onLaunch : undefined}
            disabled={displayVariant !== "launch"}
            aria-busy={displayVariant === "loading"}
            aria-hidden={isButtonExitAnimating}
            aria-label={
              displayVariant === "loading"
                ? "Launching event"
                : displayVariant === "pending"
                  ? "Pending approval"
                  : "Launch event"
            }
            className={cn(
              launchFooterButtonBaseClass,
              isPillShape
                ? "launch-footer-button--loading"
                : "launch-footer-button--wide",
              displayVariant === "launch"
                ? "cursor-pointer active:scale-[0.96] motion-safe:transition-[width,border-radius,box-shadow,opacity,transform] motion-safe:active:duration-150"
                : "cursor-not-allowed",
              displayVariant === "launch" && "launch-footer-button--enter",
              isButtonExitAnimating && "launch-footer-button--exit absolute",
              showLiveToast && "z-10",
            )}
          >
            <div
              aria-hidden
              className={cn(
                launchFooterGradientLayerClass,
                isGradientState ? "opacity-100" : "opacity-0",
              )}
              style={{
                background: "var(--launch-event-gradient)",
                borderRadius: "inherit",
              }}
            />
            <div
              aria-hidden
              className={cn(
                launchFooterPendingLayerClass,
                displayVariant === "pending" ? "opacity-100" : "opacity-0",
              )}
              style={{ borderRadius: "inherit" }}
            />

            <div className="relative z-10 h-full w-full">
              <span
                className={cn(
                  "launch-footer-button__label absolute inset-0 flex items-center justify-center gap-3 text-white",
                  displayVariant === "launch"
                    ? "launch-footer-button__label--visible"
                    : "launch-footer-button__label--hidden",
                )}
              >
                <span className="launch-footer-button__launch-text">Launch Event</span>
                <Rocket
                  className="launch-footer-button__launch-icon h-6 w-6 shrink-0"
                  aria-hidden
                />
              </span>

              <span
                className={cn(
                  "launch-footer-button__label absolute inset-0 flex items-center justify-center",
                  displayVariant === "loading"
                    ? "launch-footer-button__label--visible"
                    : "launch-footer-button__label--hidden",
                )}
              >
                <Loader2
                  className="h-6 w-6 shrink-0 animate-spin text-white"
                  aria-hidden
                />
              </span>

              <span
                className={cn(
                  "launch-footer-button__label absolute inset-0 flex items-center justify-center gap-3 text-[var(--color-14)]",
                  displayVariant === "pending"
                    ? "launch-footer-button__label--visible"
                    : "launch-footer-button__label--hidden",
                )}
              >
                <span>Pending approval</span>
                <Hourglass className="h-6 w-6 shrink-0" aria-hidden />
              </span>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
