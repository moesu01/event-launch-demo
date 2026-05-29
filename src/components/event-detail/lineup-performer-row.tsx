import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { GripVertical, Star, Trash2 } from "lucide-react"
import { getHeaderActionButtonStyles } from "../../lib/primary-event-action-styles"
import type { Performer } from "../../types/event"
import { SocialStat } from "./social-stat"

interface LineupPerformerRowProps {
  performer: Performer
  actionsDisabled: boolean
}

const socialPlatforms = [
  { key: "instagram" as const, field: "instagram" as const },
  { key: "spotify" as const, field: "spotify" as const },
  { key: "tiktok" as const, field: "tiktok" as const },
]

export function LineupPerformerRow({ performer, actionsDisabled }: LineupPerformerRowProps) {
  return (
    <Flex align="center" gap="6" borderBottomWidth="1px" borderColor="color.15" pb="3">
      <GripVertical size={16} style={{ flexShrink: 0, color: "var(--color-16)" }} aria-hidden />

      <Flex minW="0" flex="1" align="flex-end" gap="6">
        <Box
          h="12"
          w="12"
          flexShrink={0}
          borderRadius="full"
          style={{
            background:
              performer.avatarGradient ??
              "linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)",
          }}
          role="img"
          aria-label={`${performer.name} avatar`}
        />

        <Flex minW="0" direction="column" justify="space-between" gap="0.5" alignSelf="stretch" py="0.5">
          <Text m="0" fontSize="base" fontWeight="bold" lineHeight="24px" color="color.2">
            {performer.name}
          </Text>
          <Flex flexWrap="wrap" align="center" gap="3">
            {socialPlatforms.map(({ key, field }) => {
              const value = performer[field]
              if (value == null) return null
              return <SocialStat key={key} platform={key} value={value} />
            })}
          </Flex>
        </Flex>
      </Flex>

      <Flex flexShrink={0} align="center" gap="3">
        <Button
          type="button"
          unstyled
          css={getHeaderActionButtonStyles({
            px: "3",
            fontSize: "13",
            fontWeight: "medium",
            color: "color.2",
          })}
          disabled={actionsDisabled}
          cursor={actionsDisabled ? "not-allowed" : "pointer"}
          opacity={actionsDisabled ? 0.4 : 1}
          aria-label={`Edit ${performer.name}`}
        >
          Edit
        </Button>

        <Box h="7" w="px" flexShrink={0} bg="color.15" aria-hidden />

        <Button
          type="button"
          unstyled
          css={getHeaderActionButtonStyles({ w: "10" })}
          disabled={actionsDisabled}
          cursor={actionsDisabled ? "not-allowed" : "pointer"}
          opacity={actionsDisabled ? 0.4 : 1}
          aria-label={
            performer.isHeadliner
              ? `Remove ${performer.name} as headliner`
              : `Mark ${performer.name} as headliner`
          }
        >
          <Star
            size={16}
            style={{
              color: "var(--color-2)",
              fill: performer.isHeadliner ? "var(--color-2)" : "none",
            }}
            aria-hidden
          />
        </Button>

        <Button
          type="button"
          unstyled
          css={getHeaderActionButtonStyles({ w: "10" })}
          disabled={actionsDisabled}
          cursor={actionsDisabled ? "not-allowed" : "pointer"}
          opacity={actionsDisabled ? 0.4 : 1}
          aria-label={`Delete ${performer.name}`}
        >
          <Trash2 size={16} style={{ color: "var(--color-2)" }} aria-hidden />
        </Button>
      </Flex>
    </Flex>
  )
}
