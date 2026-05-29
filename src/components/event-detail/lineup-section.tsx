import { Button, Flex, Heading } from "@chakra-ui/react"
import { Plus } from "lucide-react"
import { getPrimaryAddButtonStyles } from "../../lib/primary-event-action-styles"
import type { Performer } from "../../types/event"
import { LineupPerformerRow } from "./lineup-performer-row"

interface LineupSectionProps {
  performers: Performer[]
  actionsDisabled: boolean
}

export function LineupSection({ performers, actionsDisabled }: LineupSectionProps) {
  return (
    <Flex as="section" mt="8" direction="column" gap="6" aria-label="Line-up">
      <Flex align="center" justify="space-between">
        <Heading as="h2" className="section-heading">
          Line-up
        </Heading>
        <Button
          type="button"
          unstyled
          css={getPrimaryAddButtonStyles()}
          disabled={actionsDisabled}
          cursor={actionsDisabled ? "not-allowed" : "pointer"}
          opacity={actionsDisabled ? 0.4 : 1}
          aria-label="Add performer"
        >
          <span>Add Performer</span>
          <Plus size={18} style={{ flexShrink: 0 }} aria-hidden />
        </Button>
      </Flex>

      <Flex direction="column" gap="3">
        {performers.map((performer) => (
          <LineupPerformerRow
            key={performer.name}
            performer={performer}
            actionsDisabled={actionsDisabled}
          />
        ))}
      </Flex>
    </Flex>
  )
}
