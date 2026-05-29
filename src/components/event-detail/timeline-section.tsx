import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import type { TimelineItem } from "../../types/event"

interface TimelineSectionProps {
  items: TimelineItem[]
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <Flex
      position="relative"
      direction="column"
      align="center"
      justify="center"
      gap="2.5"
      h="109px"
      w="314px"
      flexShrink={0}
      borderRadius="md"
      borderWidth="1px"
      borderColor="color.15"
      px="6"
    >
      <Text
        position="absolute"
        top="2.5"
        left="19px"
        fontSize="2xl"
        lineHeight="1.2"
        fontWeight="medium"
        color="color.16"
        aria-hidden
      >
        {item.emoji}
      </Text>

      <Flex w="full" align="center" pl="7">
        <Text
          m="0"
          fontSize="sm"
          fontWeight="medium"
          lineHeight="1.2"
          letterSpacing="-0.42px"
          color="color.16"
        >
          {item.title}
        </Text>
      </Flex>

      <Flex w="full" direction="column" align="flex-start" gap="1.5">
        <Text m="0" fontSize="base" fontWeight="bold" lineHeight="19.2px" color="color.2">
          {item.datetime}
        </Text>
        {item.subtitle ? (
          <Text m="0" fontSize="xs" fontWeight="normal" lineHeight="18px" color="color.2">
            {item.subtitle}
          </Text>
        ) : null}
      </Flex>
    </Flex>
  )
}

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <Box as="section" mt="8" display="flex" flexDirection="column" gap="3" aria-label="Event timeline">
      <Heading as="h2" className="section-heading">
        Timeline
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {items.map((item) => (
          <TimelineCard key={item.title} item={item} />
        ))}
      </Grid>
    </Box>
  )
}
