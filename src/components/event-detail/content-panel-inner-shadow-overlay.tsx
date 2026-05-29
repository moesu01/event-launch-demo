import { Box } from "@chakra-ui/react"
import { useLayoutEffect, useRef } from "react"
import {
  contentPanelInnerShadowPulseClass,
  contentPanelInnerShadowTransitionClass,
  getContentPanelInnerShadowValue,
} from "../../lib/content-panel-inner-shadow-classes"
import { getInnerShadowSpringAnimationOptions } from "../../lib/launch-spring-motion"
import {
  LAUNCH_INNER_SHADOW_BLUE_FALLBACK,
  LAUNCH_INNER_SHADOW_GREEN,
  LAUNCH_INNER_SHADOW_NONE,
  LAUNCH_INNER_SHADOW_PENDING,
} from "../../lib/launch-inner-shadow-values"
import type { LaunchPhase, LaunchPostStatus } from "../../types/launch"

interface ContentPanelInnerShadowOverlayProps {
  launchPhase: LaunchPhase
  launchPostStatus: LaunchPostStatus | null
  contentPanelInnerShadow: string | null
}

export function ContentPanelInnerShadowOverlay({
  launchPhase,
  launchPostStatus,
  contentPanelInnerShadow,
}: ContentPanelInnerShadowOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const lastPulseShadowRef = useRef(LAUNCH_INNER_SHADOW_BLUE_FALLBACK)
  const shadowAnimationRef = useRef<Animation | null>(null)
  const settledShadowRef = useRef(LAUNCH_INNER_SHADOW_GREEN)

  useLayoutEffect(() => {
    if (launchPhase !== "loading") return

    const element = overlayRef.current
    if (!element) return

    let frameId = 0

    const samplePulseShadow = () => {
      const boxShadow = getComputedStyle(element).boxShadow
      if (boxShadow && boxShadow !== "none") {
        lastPulseShadowRef.current = boxShadow
      }
      frameId = requestAnimationFrame(samplePulseShadow)
    }

    frameId = requestAnimationFrame(samplePulseShadow)

    return () => cancelAnimationFrame(frameId)
  }, [launchPhase])

  useLayoutEffect(() => {
    const element = overlayRef.current
    if (!element) return

    shadowAnimationRef.current?.cancel()
    shadowAnimationRef.current = null

    if (launchPhase === "loading") {
      element.style.boxShadow = ""
      return
    }

    if (launchPhase === "success") {
      const startShadow = lastPulseShadowRef.current
      const isLivePath = launchPostStatus === "live"
      const endShadow = isLivePath
        ? LAUNCH_INNER_SHADOW_GREEN
        : LAUNCH_INNER_SHADOW_PENDING

      element.style.boxShadow = startShadow
      const animation = element.animate(
        [{ boxShadow: startShadow }, { boxShadow: endShadow }],
        getInnerShadowSpringAnimationOptions(),
      )

      shadowAnimationRef.current = animation
      animation.onfinish = () => {
        settledShadowRef.current = endShadow
        element.style.boxShadow = endShadow
      }

      return
    }

    if (launchPhase === "releasing" || launchPhase === "exiting") {
      if (launchPostStatus === "pending_approval") {
        if (launchPhase === "exiting") {
          element.style.boxShadow = LAUNCH_INNER_SHADOW_PENDING
          settledShadowRef.current = LAUNCH_INNER_SHADOW_PENDING
        }
        return
      }

      if (settledShadowRef.current === LAUNCH_INNER_SHADOW_NONE) return

      const startShadow =
        element.style.boxShadow ||
        settledShadowRef.current ||
        LAUNCH_INNER_SHADOW_GREEN

      element.style.boxShadow = startShadow
      const animation = element.animate(
        [{ boxShadow: startShadow }, { boxShadow: LAUNCH_INNER_SHADOW_NONE }],
        getInnerShadowSpringAnimationOptions(),
      )

      shadowAnimationRef.current = animation
      animation.onfinish = () => {
        settledShadowRef.current = LAUNCH_INNER_SHADOW_NONE
        element.style.boxShadow = LAUNCH_INNER_SHADOW_NONE
      }

      return
    }
  }, [launchPhase, launchPostStatus])

  useLayoutEffect(() => {
    if (launchPhase !== "idle") return

    const element = overlayRef.current
    if (!element) return

    shadowAnimationRef.current?.cancel()
    shadowAnimationRef.current = null
    element.style.boxShadow = getContentPanelInnerShadowValue(
      contentPanelInnerShadow,
    )
  }, [launchPhase, contentPanelInnerShadow])

  useLayoutEffect(() => {
    return () => shadowAnimationRef.current?.cancel()
  }, [])

  const overlayClassName = [
    launchPhase === "idle" && contentPanelInnerShadowTransitionClass,
    launchPhase === "loading" && contentPanelInnerShadowPulseClass,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Box
      ref={overlayRef}
      aria-hidden
      className={overlayClassName}
      pointerEvents="none"
      position="absolute"
      inset="0"
      zIndex="1"
    />
  )
}
