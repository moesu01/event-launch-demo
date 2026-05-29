import { Box, Flex, Heading, Text } from "@chakra-ui/react"

interface GenresSectionProps {
  genres: string[]
}

export function GenresSection({ genres }: GenresSectionProps) {
  return (
    <Box as="section" mt="8" aria-label="Genres">
      <Heading as="h2" className="section-heading" mb="4">
        Genres
      </Heading>
      <Flex flexWrap="wrap" gap="2">
        {genres.map((genre) => (
          <Text
            as="span"
            key={genre}
            borderRadius="full"
            borderWidth="1px"
            borderColor="color.15"
            bg="color.1"
            px="4"
            py="1.5"
            fontSize="sm"
            fontWeight="medium"
            color="color.14"
          >
            {genre}
          </Text>
        ))}
      </Flex>
    </Box>
  )
}
