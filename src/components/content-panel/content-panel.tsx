import { Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface ContentPanelProps {
  sidebar: ReactNode
  children: ReactNode
}

export function ContentPanel({ sidebar, children }: ContentPanelProps) {
  return (
    <Flex
      mx="auto"
      h="full"
      minH="0"
      w="full"
      maxW="contentPanelMax"
      overflow="hidden"
      borderRadius="lg"
      bg="color.1"
      boxShadow="elevation.1"
    >
      {sidebar}
      <Flex minH="0" minW="0" flex="1" direction="column" overflow="hidden" bg="color.1">
        {children}
      </Flex>
    </Flex>
  )
}
