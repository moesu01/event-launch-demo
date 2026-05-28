/** Green/pending inner-shadow WAAPI + live content reveal */
export const LAUNCH_LIVE_REVEAL_MS = 550

export const LAUNCH_LIVE_REVEAL_STAGGER_MS = 80

/** DialKit approx (visualDuration 0.15, bounce 0.25) — shared spring curve */
export const LAUNCH_SPRING_EASE = "cubic-bezier(0.34, 1.28, 0.64, 1)"

/** Footer button morph */
export const LAUNCH_SPRING_DURATION_MS = 250

/** Ms after entering draft before publish-ready UI (shadow + launch footer) */
export const DRAFT_PUBLISH_READY_DELAY_MS = 500

/** Launch sequence (App.tsx) */
export const LAUNCH_LOADING_MS = 3500

/** Success hold before toast/footer exit (+1s vs original 5500ms) */
export const LAUNCH_SUCCESS_MS = 6500

/** Toast/footer fade duration after success hold */
export const LAUNCH_EXIT_MS = 1400

/** Ms after success begins when live inner shadow release starts */
export const LAUNCH_INNER_SHADOW_RELEASE_AT_MS = 2500

/** Live green inner shadow starts exiting this long before toast exit */
export const LAUNCH_INNER_SHADOW_EXIT_LEAD_MS =
  LAUNCH_SUCCESS_MS - LAUNCH_INNER_SHADOW_RELEASE_AT_MS
