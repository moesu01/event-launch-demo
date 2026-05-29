import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

interface DescriptionSectionProps {
  description: string
  actionsDisabled: boolean
}

export function DescriptionSection({
  description,
  actionsDisabled,
}: DescriptionSectionProps) {
  return (
    <Box as="section" mt="8" pb="8" aria-label="Description">
      <Flex mb="4" align="center" justify="space-between">
        <Heading as="h2" className="section-heading">
          Description
        </Heading>
        <Text fontSize="xs" fontWeight="medium" color="gray.chakra500">
          Scheduled Update
        </Text>
      </Flex>
      <Box borderRadius="md" borderWidth="1px" borderColor="color.13" p="4">
        <Text
          mb="4"
          whiteSpace="pre-line"
          fontSize="sm"
          lineHeight="relaxed"
          color="color.16"
        >
          {description}
        </Text>
        <Button
          type="button"
          unstyled
          disabled={actionsDisabled}
          fontSize="sm"
          fontWeight="semibold"
          color="color.10"
          cursor={actionsDisabled ? "not-allowed" : "pointer"}
          opacity={actionsDisabled ? 0.4 : 1}
        >
          Edit Description
        </Button>
      </Box>
    </Box>
  )
}
