import { Flex, Text } from "@chakra-ui/react"

interface DebugCheckboxToggleProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  ariaLabel: string
}

export function DebugCheckboxToggle({
  label,
  checked,
  onChange,
  ariaLabel,
}: DebugCheckboxToggleProps) {
  return (
    <Flex
      as="label"
      w="statusBadgeExpanded"
      cursor="pointer"
      align="center"
      gap="2"
      borderRadius="md"
      borderWidth="1px"
      borderColor="color.3"
      bg="color.1"
      px="md"
      py="2"
      boxShadow="elevation.2"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        style={{
          height: "14px",
          width: "14px",
          flexShrink: 0,
          accentColor: "var(--color-10)",
        }}
        aria-label={ariaLabel}
      />
      <Text fontSize="11" fontWeight="medium" lineHeight="snug" color="gray.chakra500">
        {label}
      </Text>
    </Flex>
  )
}
