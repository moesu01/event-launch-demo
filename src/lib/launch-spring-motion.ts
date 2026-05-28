import {
  LAUNCH_LIVE_REVEAL_MS,
  LAUNCH_SPRING_DURATION_MS,
  LAUNCH_SPRING_EASE,
} from "./launch-timing"

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function getLaunchSpringAnimationOptions(
  durationMs = LAUNCH_SPRING_DURATION_MS,
): KeyframeAnimationOptions {
  if (prefersReducedMotion()) {
    return { duration: 0, easing: "linear", fill: "forwards" }
  }

  return {
    duration: durationMs,
    easing: LAUNCH_SPRING_EASE,
    fill: "forwards",
  }
}

export function getInnerShadowSpringAnimationOptions(): KeyframeAnimationOptions {
  return getLaunchSpringAnimationOptions(LAUNCH_LIVE_REVEAL_MS)
}
