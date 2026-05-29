import type { SystemStyleObject } from "@chakra-ui/react"
import type { PrimaryEventActionVariant } from "../types/event"

export const headerActionButtonStyles: SystemStyleObject = {
  display: "flex",
  h: "headerActionH",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "color.3",
  bg: "color.1",
  boxShadow: "sm",
}

export const primaryAddButtonStyles: SystemStyleObject = {
  display: "flex",
  h: "primaryAddH",
  alignItems: "center",
  justifyContent: "center",
  gap: "2.5",
  borderRadius: "md",
  bg: "color.12",
  pl: "3",
  pr: "1.5",
  py: "2",
  fontSize: "13",
  fontWeight: "semibold",
  lineHeight: "1",
  color: "white",
  boxShadow: "ctaPrimary",
}

const primaryEventActionBaseStyles: SystemStyleObject = {
  display: "flex",
  h: "headerActionH",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  gap: "1",
  borderRadius: "md",
  fontSize: "sm",
  fontWeight: "semibold",
  lineHeight: "1",
}

const goToEventActionStyles: SystemStyleObject = {
  ...headerActionButtonStyles,
  gap: "1",
  px: "3",
  fontSize: "sm",
  fontWeight: "semibold",
  color: "color.14",
}

const pendingApprovalActionStyles: SystemStyleObject = {
  ...primaryEventActionBaseStyles,
  px: "3",
  color: "status.pendingActionText",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "status.pendingActionBorder",
  bg: "status.pendingActionBg",
}

const cancelledEventActionStyles: SystemStyleObject = {
  ...primaryEventActionBaseStyles,
  px: "3",
  color: "status.cancelledActionText",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "status.cancelledActionBorder",
  bg: "status.cancelledActionBg",
}

export function getHeaderActionButtonStyles(
  extra?: SystemStyleObject,
): SystemStyleObject {
  return { ...headerActionButtonStyles, ...extra }
}

export function getPrimaryAddButtonStyles(
  extra?: SystemStyleObject,
): SystemStyleObject {
  return { ...primaryAddButtonStyles, ...extra }
}

export function getPrimaryEventActionStyles(
  variant: PrimaryEventActionVariant,
): SystemStyleObject {
  switch (variant) {
    case "go_to_event":
    case "draft_event":
      return goToEventActionStyles
    case "pending_approval":
      return pendingApprovalActionStyles
    case "cancelled_event":
      return cancelledEventActionStyles
  }
}
