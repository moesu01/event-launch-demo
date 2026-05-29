const workSans =
  '"Work Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'

export const colorTokens = {
  color: {
    1: { value: "#ffffff" },
    2: { value: "#1a202c" },
    3: { value: "#e2e8f0" },
    5: { value: "#3bba30" },
    6: { value: "#22543d" },
    7: { value: "#2a4365" },
    8: { value: "#e6ecf2" },
    9: { value: "rgba(0, 0, 0, 0.7)" },
    10: { value: "#1d74ff" },
    11: { value: "rgba(42, 67, 101, 0.27)" },
    12: { value: "#000000" },
    13: { value: "rgba(0, 0, 0, 0.08)" },
    14: { value: "#333333" },
    15: { value: "#dddddd" },
    16: { value: "#494949" },
    17: { value: "#222222" },
    18: { value: "rgba(73, 73, 73, 0.6)" },
    19: { value: "#666666" },
    21: { value: "#bee3f8" },
    22: { value: "#e2e2e2" },
  },
  gray: {
    chakra500: { value: "#718096" },
    chakra600: { value: "#4a5568" },
    tailwind800: { value: "#27272a" },
  },
  status: {
    pending: { value: "#d69e2e" },
    pendingText: { value: "#744210" },
    pendingActionBg: { value: "#feebc8" },
    pendingActionText: { value: "#7b341e" },
    pendingActionBorder: { value: "rgba(123, 52, 30, 0.1)" },
    cancelled: { value: "#e53e3e" },
    cancelledText: { value: "#742a2a" },
    cancelledActionBg: { value: "#fed7d7" },
    cancelledActionText: { value: "#822727" },
    cancelledActionBorder: { value: "rgba(130, 39, 39, 0.1)" },
    draftDot: { value: "#a0aec0" },
    draftText: { value: "#4a5568" },
  },
  chart: {
    bar: { value: "#eab308" },
  },
  gradient: {
    launchEvent: {
      value: "linear-gradient(90deg, #38a169 0%, #31539c 100%)",
    },
    launchEventBarBg: {
      value:
        "linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.95) 35%, rgba(255, 255, 255, 0.55) 65%, rgba(255, 255, 255, 0) 100%)",
    },
    performanceCardBg: {
      value:
        "linear-gradient(180deg, rgba(231, 233, 239, 0.25) 0%, #ffffff 100%), #ffffff",
    },
  },
  launch: {
    successToastBg: { value: "rgba(56, 161, 105, 1)" },
  },
  page: {
    bg: { value: "#f7fafc" },
  },
}

export const spacingTokens = {
  /** --spacing-xs */
  xs: { value: "4px" },
  /** --spacing-sm */
  sm: { value: "8px" },
  /** --spacing-6 — NOT the Tailwind/Chakra scale key "6" (24px) */
  sp6: { value: "6px" },
  /** --spacing-10 — NOT the Tailwind/Chakra scale key "10" (40px) */
  sp10: { value: "10px" },
  /** --spacing-md */
  md: { value: "12px" },
  /** --spacing-lg */
  lg: { value: "16px" },
  /** --spacing-xl */
  xl: { value: "24px" },
}

export const sizeTokens = {
  sidebarExpanded: { value: "155px" },
  sidebarCollapsed: { value: "64px" },
  statusBadgeExpanded: { value: "131px" },
  contentPanelMax: { value: "1195px" },
  pageContentMax: { value: "996px" },
  statsContentMax: { value: "800px" },
  statsLabelWidth: { value: "140px" },
  eventImage: { value: "150px" },
  performanceCardWidth: { value: "258.67px" },
  performanceCardHeight: { value: "71px" },
  chartHeight: { value: "280px" },
  launchToastMax: { value: "480px" },
  launchFooterMinH: { value: "76px" },
  launchButtonH: { value: "56px" },
  headerActionH: { value: "38px" },
  primaryAddH: { value: "34px" },
  launchScrollPadding: { value: "88px" },
}

export const radiiTokens = {
  sm: { value: "4px" },
  /** --radius-6 */
  r6: { value: "6px" },
  md: { value: "8px" },
  /** --radius-10 */
  r10: { value: "10px" },
  lg: { value: "12px" },
  full: { value: "9999px" },
}

export const shadowTokens = {
  sm: { value: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" },
  ctaPrimary: { value: "0px 10px 15px 0px rgba(0, 0, 0, 0.05)" },
  elevation: {
    1: { value: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)" },
    2: {
      value:
        "0px 4px 6px -1px rgba(0, 0, 0, 0.15), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)",
    },
    3: { value: "inset 0px 1px 2px 0px rgba(255, 255, 255, 0.75)" },
    5: {
      value:
        "0px 4px 12px -5px rgba(0, 0, 0, 0.035), inset 0px 1px 2px 0px rgba(255, 255, 255, 0.75)",
    },
  },
  contentPanelInner: {
    draft: {
      value: "inset 0px 0px 16px 2px rgba(193, 223, 253, .5)",
    },
    launchSuccess: {
      value: "inset 0px 0px 16px 1px rgba(56, 161, 105, .75)",
    },
    pending: {
      value: "inset 0px 0px 16px 2px #feebc8",
    },
    none: { value: "inset 0px 0px 0px 0px transparent" },
  },
  performanceCard: {
    drop: { value: "0px 4px 6px rgba(0, 0, 0, 0.04)" },
    inset: {
      value: "inset 0px 1px 2px 0px rgba(255, 255, 255, 0.75)",
    },
  },
  launchSuccessToast: {
    value:
      "0px 8px 24px -4px rgba(0, 0, 0, 0.18), 0px 4px 8px -2px rgba(0, 0, 0, 0.1)",
  },
  launchFooterGradient: {
    value: "0px 1px 1px rgba(0,0,0,0.05)",
  },
}

export const fontTokens = {
  heading: { value: workSans },
  body: { value: workSans },
}

export const fontSizeTokens = {
  xs: { value: "12px" },
  sm: { value: "14px" },
  base: { value: "16px" },
  lg: { value: "18px" },
  xl: { value: "20px" },
  "2xl": { value: "24px" },
  "11": { value: "11px" },
  "13": { value: "13px" },
}

export const fontWeightTokens = {
  520: { value: "520" },
}

export const textStyles = {
  bodyMdBold: {
    value: {
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19.2px",
      letterSpacing: "0",
    },
  },
  bodyMdMedium: {
    value: {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "19.2px",
      letterSpacing: "0",
    },
  },
  bodySmSemibold: {
    value: {
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "1",
      letterSpacing: "0",
    },
  },
  bodySmMedium: {
    value: {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "23px",
      letterSpacing: "0",
    },
  },
  captionMedium: {
    value: {
      fontWeight: "500",
      fontSize: "11px",
      lineHeight: "1",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },
  h3Bold: {
    value: {
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "1.15",
      letterSpacing: "0",
    },
  },
  sectionHeading: {
    value: {
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "1.2",
      letterSpacing: "-0.03em",
      color: "{colors.color.2}",
    },
  },
}
