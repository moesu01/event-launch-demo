import { Box, Flex, Text } from "@chakra-ui/react"

interface PerformanceMetricCardProps {
  label: string
  value: string
  showInsightSpacer?: boolean
  size?: "fixed" | "flex"
}

export function PerformanceMetricCard({
  label,
  value,
  showInsightSpacer = true,
  size = "fixed",
}: PerformanceMetricCardProps) {
  return (
    <Flex
      position="relative"
      direction="column"
      align="flex-start"
      gap="sp6"
      overflow="hidden"
      borderRadius="r10"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="color.15"
      p="4"
      boxShadow="performanceCard.drop"
      h="performanceCardHeight"
      w={size === "flex" ? undefined : "performanceCardWidth"}
      minW={size === "flex" ? "210px" : undefined}
      flex={size === "flex" ? "1" : undefined}
      flexShrink={size === "flex" ? undefined : 0}
    >
      <Box
        aria-hidden
        pointerEvents="none"
        position="absolute"
        inset="0"
        borderRadius="r10"
        style={{ background: "var(--performance-card-bg)" }}
      />
      <Box
        aria-hidden
        pointerEvents="none"
        position="absolute"
        inset="0"
        borderRadius="inherit"
        style={{ boxShadow: "var(--performance-card-inset-shadow)" }}
      />

      <Flex position="relative" zIndex="1" w="full" flexShrink={0} align="center" gap="2.5">
        <Text
          m="0"
          fontSize="13"
          fontWeight="medium"
          lineHeight="1"
          letterSpacing="-0.39px"
          whiteSpace="nowrap"
          color="color.16"
        >
          {label}
        </Text>
      </Flex>

      <Flex position="relative" zIndex="1" flexShrink={0} align="flex-end" gap="sp6">
        <Flex direction="column" align="flex-start" justify="center">
          <Text
            m="0"
            fontSize="20px"
            fontWeight="normal"
            lineHeight="1"
            whiteSpace="nowrap"
            color="color.17"
          >
            {value}
          </Text>
        </Flex>
        {showInsightSpacer && (
          <Box h="18px" w="9" flexShrink={0} borderRadius="40px" py="3px" aria-hidden />
        )}
      </Flex>
    </Flex>
  )
}
