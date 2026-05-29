import { Box } from "@chakra-ui/react"
import { useLayoutEffect, useRef, useState, type ReactNode } from "react"
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
      <Box
        className={
          active
            ? stagger
              ? "launch-live-reveal launch-live-reveal--stagger"
              : "launch-live-reveal"
            : undefined
        }
        style={active || hasRevealedRef.current ? revealStyle : undefined}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box
      className={
        [
          "launch-reveal-expand",
          isExpanded && "launch-reveal-expand--open",
          stagger && "launch-reveal-expand--stagger",
        ]
          .filter(Boolean)
          .join(" ") || undefined
      }
      style={revealStyle}
    >
      <Box className="launch-reveal-expand__inner">
        <Box
          className={
            [
              "launch-reveal-expand__content",
              isExpanded && "launch-reveal-expand__content--visible",
              stagger && "launch-reveal-expand__content--stagger",
            ]
              .filter(Boolean)
              .join(" ") || undefined
          }
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}
