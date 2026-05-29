import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import type { ReactNode } from "react"
import type { EventMetrics } from "../../types/event"
import { PerformanceMetricCard } from "./performance-metric-card"

interface OverviewStatsGridProps {
  metrics: EventMetrics
}

type MetricsRowVariant = "default" | "payouts"

function MetricsRow({
  title,
  subtitle,
  variant = "default",
  children,
}: {
  title: string
  subtitle?: string
  variant?: MetricsRowVariant
  children: ReactNode
}) {
  if (variant === "payouts") {
    return (
      <Flex
        align="flex-start"
        justify="space-between"
        gap="3"
        borderTopWidth="1px"
        borderColor="color.13"
        p="md"
      >
        <Heading
          as="h2"
          flexShrink={0}
          pt="1"
          fontSize="base"
          fontWeight="semibold"
          lineHeight="1"
          color="color.14"
        >
          {title}
        </Heading>
        <Flex minW="0" maxW="statsContentMax" flex="1" align="flex-start" gap="3">
          {children}
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex borderTopWidth="1px" borderColor="color.13" px="md" py="4">
      <Box w="statsLabelWidth" flexShrink={0} pt="1">
        <Heading as="h2" fontSize="base" fontWeight="semibold" color="color.14">
          {title}
        </Heading>
        {subtitle && (
          <Text mt="0.5" fontSize="xs" color="color.18">
            {subtitle}
          </Text>
        )}
      </Box>
      <Flex
        minW="0"
        flex="1"
        flexWrap="wrap"
        align="center"
        justify="flex-end"
        gap="3"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export function OverviewStatsGrid({ metrics }: OverviewStatsGridProps) {
  return (
    <Box as="section" overflow="hidden" borderRadius="r10" aria-label="Overview statistics">
      <MetricsRow title="Ticket Metrics">
        <PerformanceMetricCard label="Sales" value={metrics.sales} />
        <PerformanceMetricCard label="Total Tickets" value={metrics.totalTickets} />
        <PerformanceMetricCard label="Box Office Cash" value={metrics.boxOfficeCash} />
        <PerformanceMetricCard label="Refunds" value={metrics.refunds} />
        <PerformanceMetricCard label="Disputes" value={metrics.disputes} />
        <PerformanceMetricCard label="Discounts" value={metrics.discounts} />
      </MetricsRow>

      <MetricsRow title="Payouts" variant="payouts">
        <PerformanceMetricCard
          label="Payout Balance"
          value={metrics.payoutBalance}
          size="flex"
        />
        <PerformanceMetricCard
          label="Hold Balance"
          value={metrics.holdBalance}
          size="flex"
        />
      </MetricsRow>
    </Box>
  )
}
