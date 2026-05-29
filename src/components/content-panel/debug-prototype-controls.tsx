import { Flex } from "@chakra-ui/react"
import { DebugCheckboxToggle } from "./debug-checkbox-toggle"

interface DebugPrototypeControlsProps {
  isAutoApproveEnabled: boolean
  onAutoApproveChange: (enabled: boolean) => void
  isCancelInCycleEnabled: boolean
  onCancelInCycleChange: (enabled: boolean) => void
}

export function DebugPrototypeControls({
  isAutoApproveEnabled,
  onAutoApproveChange,
  isCancelInCycleEnabled,
  onCancelInCycleChange,
}: DebugPrototypeControlsProps) {
  return (
    <Flex direction="column" align="center" gap="sp6">
      <DebugCheckboxToggle
        label="Auto approve"
        checked={isAutoApproveEnabled}
        onChange={onAutoApproveChange}
        ariaLabel="Venue auto-approve prototype: launch goes directly to live instead of pending"
      />
      <DebugCheckboxToggle
        label="Cancel"
        checked={isCancelInCycleEnabled}
        onChange={onCancelInCycleChange}
        ariaLabel="Include cancelled status when cycling event status"
      />
    </Flex>
  )
}
