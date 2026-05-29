import { Box, Flex, Text, chakra } from "@chakra-ui/react"
import { useLayoutEffect, useState } from "react"
import { ExternalLink, Hourglass, Loader2, Rocket } from "lucide-react"
import type { EventStatus } from "../../types/event"
import type { LaunchPhase, LaunchPostStatus } from "../../types/launch"

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ")
}

interface LaunchEventBarProps {
  status: EventStatus
  launchPhase: LaunchPhase
  launchPostStatus: LaunchPostStatus | null
  onLaunch: () => void
  onGoToEventPage: () => void
}

const LIVE_TOAST_MESSAGE = "Your event is live!"

const LAUNCH_FOOTER_SPRING_MS = 150

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
    <Flex
      className={cx(
        "launch-footer-fade",
        isExitingLive && "launch-footer-fade--exit",
      )}
      position="absolute"
      insetX="0"
      bottom="0"
      zIndex="10"
      direction="column"
      justify="flex-end"
      minH="launchFooterMinH"
      px="6"
      pb="2.5"
      pt="6"
    >
      <Box
        aria-hidden
        pointerEvents="none"
        position="absolute"
        inset="0"
        style={{ background: "var(--launch-event-bar-bg)" }}
      />
      <Flex position="relative" w="full" justify="center">
        {showLiveToast && (
          <Flex
            className={cx(
              "launch-success-toast",
              isExitingLive && "launch-success-toast--exit",
            )}
            minH="launchButtonH"
            w="full"
            maxW="launchToastMax"
            cursor="default"
            align="center"
            justify="space-between"
            gap="4"
            borderRadius="md"
            px="5"
            py="4"
            style={{ backgroundColor: "var(--launch-success-toast-bg)" }}
            role="status"
            aria-live="polite"
          >
            <Text
              className="launch-success-toast__message"
              textWrap="balance"
              fontSize="base"
              fontWeight="semibold"
              lineHeight="snug"
              color="white"
            >
              {LIVE_TOAST_MESSAGE}
            </Text>
            <chakra.button
              type="button"
              onClick={onGoToEventPage}
              className="launch-success-toast__action"
              display="flex"
              h="headerActionH"
              flexShrink={0}
              alignItems="center"
              justifyContent="center"
              gap="1"
              borderRadius="md"
              borderWidth="1px"
              borderColor="color.3"
              bg="color.1"
              pl="3"
              pr="2.5"
              fontSize="sm"
              fontWeight="semibold"
              color="color.14"
              boxShadow="sm"
              cursor="pointer"
              transition="transform 150ms ease-out"
              _active={{ transform: "scale(0.96)" }}
              aria-label="Go to Event"
            >
              <chakra.span>Go to Event</chakra.span>
              <ExternalLink
                className="launch-success-toast__action-icon"
                size={14}
                style={{ flexShrink: 0 }}
                aria-hidden
              />
            </chakra.button>
          </Flex>
        )}
        {showFooterButton && displayVariant && (
          <chakra.button
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
            // Semantic animation classes own the spring (width, border-radius,
            // padding, gap) — do NOT set those via Chakra props or the spring breaks.
            className={cx(
              "launch-footer-button",
              isPillShape
                ? "launch-footer-button--loading"
                : "launch-footer-button--wide",
              displayVariant === "launch" && "launch-footer-button--enter",
              isButtonExitAnimating && "launch-footer-button--exit",
            )}
            position={isButtonExitAnimating ? "absolute" : "relative"}
            zIndex={showLiveToast ? "10" : undefined}
            display="flex"
            h="launchButtonH"
            flexShrink={0}
            alignItems="center"
            justifyContent="center"
            fontSize="base"
            fontWeight="semibold"
            lineHeight="1"
            cursor={displayVariant === "launch" ? "pointer" : "not-allowed"}
            transitionProperty={
              displayVariant === "launch"
                ? "width, border-radius, box-shadow, opacity, transform"
                : undefined
            }
            _active={
              displayVariant === "launch" ? { transform: "scale(0.96)" } : undefined
            }
          >
            <Box
              aria-hidden
              className="launch-footer-button__layer"
              pointerEvents="none"
              position="absolute"
              inset="0"
              boxShadow="launchFooterGradient"
              opacity={isGradientState ? 1 : 0}
              style={{
                background: "var(--launch-event-gradient)",
                borderRadius: "inherit",
              }}
            />
            <Box
              aria-hidden
              className="launch-footer-button__layer"
              pointerEvents="none"
              position="absolute"
              inset="0"
              borderWidth="1px"
              borderColor="color.3"
              bg="color.1"
              boxShadow="sm"
              opacity={displayVariant === "pending" ? 1 : 0}
              style={{ borderRadius: "inherit" }}
            />

            <Box position="relative" zIndex="10" h="full" w="full">
              <Flex
                className={cx(
                  "launch-footer-button__label",
                  displayVariant === "launch"
                    ? "launch-footer-button__label--visible"
                    : "launch-footer-button__label--hidden",
                )}
                position="absolute"
                inset="0"
                align="center"
                justify="center"
                gap="3"
                color="white"
              >
                <Text as="span" className="launch-footer-button__launch-text">
                  Launch Event
                </Text>
                <Rocket
                  className="launch-footer-button__launch-icon"
                  size={24}
                  style={{ flexShrink: 0 }}
                  aria-hidden
                />
              </Flex>

              <Flex
                className={cx(
                  "launch-footer-button__label",
                  displayVariant === "loading"
                    ? "launch-footer-button__label--visible"
                    : "launch-footer-button__label--hidden",
                )}
                position="absolute"
                inset="0"
                align="center"
                justify="center"
              >
                <Loader2
                  size={24}
                  style={{
                    flexShrink: 0,
                    color: "white",
                    animation: "spin 1s linear infinite",
                  }}
                  aria-hidden
                />
              </Flex>

              <Flex
                className={cx(
                  "launch-footer-button__label",
                  displayVariant === "pending"
                    ? "launch-footer-button__label--visible"
                    : "launch-footer-button__label--hidden",
                )}
                position="absolute"
                inset="0"
                align="center"
                justify="center"
                gap="3"
                color="color.14"
              >
                <Text as="span">Pending approval</Text>
                <Hourglass size={24} style={{ flexShrink: 0 }} aria-hidden />
              </Flex>
            </Box>
          </chakra.button>
        )}
      </Flex>
    </Flex>
  )
}
