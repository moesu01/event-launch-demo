import { Box, Button, Flex, Text } from "@chakra-ui/react"
import type { StatusBadgeConfig } from "../../types/event"

interface EventStatusBadgeProps {
  badge: StatusBadgeConfig
  onClick: () => void
  isExpanded?: boolean
}

export function EventStatusBadge({
  badge,
  onClick,
  isExpanded = true,
}: EventStatusBadgeProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className="sidebar-status-badge"
      unstyled
      display="flex"
      cursor="pointer"
      flexDirection="column"
      overflow="hidden"
      borderWidth="1px"
      borderStyle="solid"
      textAlign="left"
      w={isExpanded ? "statusBadgeExpanded" : "8"}
      gap={isExpanded ? "sp6" : "0"}
      borderRadius={isExpanded ? "md" : "sm"}
      borderColor={isExpanded ? "color.3" : "transparent"}
      bg={isExpanded ? "color.1" : "transparent"}
      p={isExpanded ? "md" : "1"}
      boxShadow={isExpanded ? "elevation.3" : "none"}
      _hover={{ bg: isExpanded ? "color.8" : undefined, opacity: isExpanded ? 1 : 0.8 }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: "color.10",
        outlineOffset: "2px",
      }}
      _active={{ transform: "scale(0.96)" }}
      transition="transform 150ms"
      aria-label={`Event status: ${badge.label}. Click to cycle prototype status.`}
    >
      <Box
        className={isExpanded ? "sidebar-reveal-grid sidebar-reveal-grid--open" : "sidebar-reveal-grid"}
        w="full"
      >
        <Box className="sidebar-reveal-grid__inner">
          <Text textStyle="captionMedium" color="gray.chakra500">
            Status
          </Text>
        </Box>
      </Box>

      <Flex
        className="sidebar-status-dot-row"
        position="relative"
        w="full"
        minW="0"
        align="center"
        gap={isExpanded ? "xs" : "0"}
        pl={isExpanded ? "0" : "2"}
      >
        <Box
          h="2"
          w="2"
          flexShrink={0}
          borderRadius="full"
          transition="background-color 500ms ease-out"
          style={{ backgroundColor: badge.dotColor }}
          aria-hidden
        />
        <Text
          className="sidebar-label-transition"
          overflow="hidden"
          textStyle="bodySmSemibold"
          whiteSpace="nowrap"
          position={isExpanded ? undefined : "absolute"}
          w={isExpanded ? undefined : "0"}
          transform={isExpanded ? "translateX(0)" : "translateX(-4px)"}
          opacity={isExpanded ? 1 : 0}
          pointerEvents={isExpanded ? undefined : "none"}
          style={{ color: badge.textColor }}
          aria-hidden={!isExpanded}
        >
          {badge.label}
        </Text>
      </Flex>
    </Button>
  )
}
