import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "../../lib/cn"
import {
  LAUNCH_LIVE_REVEAL_MS,
  LAUNCH_LIVE_REVEAL_STAGGER_MS,
} from "../../lib/launch-timing"

interface LaunchLiveRevealProps {
  active: boolean
  expand?: boolean
  stagger?: boolean
  children: ReactNode
}

export function LaunchLiveReveal({
  active,
  expand = false,
  stagger = false,
  children,
}: LaunchLiveRevealProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasRevealedRef = useRef(false)

  useLayoutEffect(() => {
    if (active) {
      hasRevealedRef.current = true
      const frameId = requestAnimationFrame(() => setIsExpanded(true))
      return () => cancelAnimationFrame(frameId)
    }

    if (!hasRevealedRef.current) setIsExpanded(false)
  }, [active])

  const revealStyle = {
    "--launch-reveal-duration": `${LAUNCH_LIVE_REVEAL_MS}ms`,
    "--launch-reveal-stagger": `${LAUNCH_LIVE_REVEAL_STAGGER_MS}ms`,
  } as React.CSSProperties

  if (!expand) {
    return (
      <div
        className={cn(
          active && "launch-live-reveal",
          active && stagger && "launch-live-reveal--stagger",
        )}
        style={active || hasRevealedRef.current ? revealStyle : undefined}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "launch-reveal-expand",
        isExpanded && "launch-reveal-expand--open",
        stagger && "launch-reveal-expand--stagger",
      )}
      style={revealStyle}
    >
      <div className="launch-reveal-expand__inner">
        <div
          className={cn(
            "launch-reveal-expand__content",
            isExpanded && "launch-reveal-expand__content--visible",
            stagger && "launch-reveal-expand__content--stagger",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
