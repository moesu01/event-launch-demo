import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Calendar, MoreVertical, Pencil } from "lucide-react"
import { getHeaderActionButtonStyles } from "../../lib/primary-event-action-styles"
import type { MockEvent, PrimaryEventAction } from "../../types/event"
import { LaunchLiveReveal } from "./launch-live-reveal"
import { EventHeaderPrimaryAction } from "./event-header-primary-action"

interface EventDetailsHeaderProps {
  event: MockEvent
  actionsDisabled: boolean
  primaryEventAction: PrimaryEventAction | null
  primaryActionReveal?: boolean
}

export function EventDetailsHeader({
  event,
  actionsDisabled,
  primaryEventAction,
  primaryActionReveal = false,
}: EventDetailsHeaderProps) {
  return (
    <Flex as="section" gap="6" aria-label="Event details">
      <Box
        h="eventImage"
        w="eventImage"
        flexShrink={0}
        borderRadius="md"
        boxShadow="sm"
        style={{ background: event.imageGradient }}
        role="img"
        aria-label="Event artwork"
      />

      <Flex minW="0" flex="1" gap="6">
        <Flex minW="0" flex="1" direction="column" gap="2">
          <Flex align="flex-start" gap="6">
            <Heading
              as="h1"
              minW="0"
              flex="1"
              fontSize="xl"
              fontWeight="bold"
              lineHeight="1.15"
              color="gray.tailwind800"
            >
              {event.title}
            </Heading>
            <Button
              type="button"
              unstyled
              display="flex"
              h="9"
              flexShrink={0}
              alignItems="center"
              borderRadius="md"
              borderWidth="1px"
              borderColor="color.3"
              px="3"
              disabled={actionsDisabled}
              cursor={actionsDisabled ? "not-allowed" : "pointer"}
              opacity={actionsDisabled ? 0.4 : 1}
              aria-label="Edit event title"
            >
              <Pencil size={16} color="var(--color-2)" />
            </Button>
          </Flex>

          <Flex flexWrap="wrap" align="center" gap="2">
            {event.tags.map((tag) => (
              <Text
                as="span"
                key={tag}
                borderRadius="sm"
                bg="color.8"
                px="3"
                py="1"
                fontSize="xs"
                fontWeight="medium"
                color="color.7"
              >
                {tag}
              </Text>
            ))}
            <Button
              type="button"
              unstyled
              fontSize="xs"
              fontWeight="medium"
              color="color.10"
              disabled={actionsDisabled}
              cursor={actionsDisabled ? "not-allowed" : "pointer"}
              opacity={actionsDisabled ? 0.4 : 1}
            >
              Edit Event Tag
            </Button>
          </Flex>

          <Flex direction="column" gap="0.5">
            <Flex flexWrap="wrap" align="center" gap="2">
              <Text textStyle="bodySmSemibold" color="color.14">
                {event.venueName}
              </Text>
              <Button
                type="button"
                unstyled
                fontSize="xs"
                fontWeight="medium"
                color="color.10"
                disabled={actionsDisabled}
                cursor={actionsDisabled ? "not-allowed" : "pointer"}
                opacity={actionsDisabled ? 0.4 : 1}
              >
                Change Venue
              </Button>
            </Flex>
            <Text fontSize="xs" fontWeight="medium" color="color.16">
              {event.venueAddress}
            </Text>
          </Flex>

          <Flex align="center" gap="2" textStyle="bodySmSemibold" color="color.14">
            <Calendar size={16} style={{ flexShrink: 0, color: "var(--color-16)" }} aria-hidden />
            <Text as="span">{event.datetime}</Text>
          </Flex>
        </Flex>

        <Flex flexShrink={0} align="flex-start" gap="3">
          {primaryEventAction && (
            <LaunchLiveReveal active={primaryActionReveal}>
              <EventHeaderPrimaryAction action={primaryEventAction} />
            </LaunchLiveReveal>
          )}
          <Button
            type="button"
            unstyled
            css={getHeaderActionButtonStyles({ w: "10" })}
            disabled={actionsDisabled}
            cursor={actionsDisabled ? "not-allowed" : "pointer"}
            opacity={actionsDisabled ? 0.4 : 1}
            aria-label="More actions"
          >
            <MoreVertical size={16} color="var(--color-14)" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
