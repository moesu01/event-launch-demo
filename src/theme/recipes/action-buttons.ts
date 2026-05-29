import { defineRecipe } from "@chakra-ui/react"

export const headerActionButtonRecipe = defineRecipe({
  className: "header-action-button",
  base: {
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
  },
})

export const primaryAddButtonRecipe = defineRecipe({
  className: "primary-add-button",
  base: {
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
  },
})

export const primaryEventActionRecipe = defineRecipe({
  className: "primary-event-action",
  base: {
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
  },
  variants: {
    variant: {
      goToEvent: {
        gap: "1",
        px: "3",
        fontSize: "sm",
        fontWeight: "semibold",
        color: "color.14",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "color.3",
        bg: "color.1",
        boxShadow: "sm",
      },
      draftEvent: {
        gap: "1",
        px: "3",
        fontSize: "sm",
        fontWeight: "semibold",
        color: "color.14",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "color.3",
        bg: "color.1",
        boxShadow: "sm",
      },
      pendingApproval: {
        px: "3",
        color: "status.pendingActionText",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "status.pendingActionBorder",
        bg: "status.pendingActionBg",
      },
      cancelledEvent: {
        px: "3",
        color: "status.cancelledActionText",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "status.cancelledActionBorder",
        bg: "status.cancelledActionBg",
      },
    },
  },
})
