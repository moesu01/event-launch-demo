export const contentPanelInnerShadowOverlayClass =
  "pointer-events-none absolute inset-0 z-[1]"

export const contentPanelInnerShadowTransitionClass =
  "content-panel-inner-shadow-transition"

export const contentPanelInnerShadowPulseClass =
  "content-panel-inner-shadow-pulse"

export function getContentPanelInnerShadowValue(
  shadowVar: string | null,
): string {
  if (!shadowVar) return "var(--content-panel-inner-shadow-none)"
  return `var(${shadowVar})`
}
