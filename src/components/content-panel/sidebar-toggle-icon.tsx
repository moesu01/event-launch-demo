import { Box, Flex } from "@chakra-ui/react"
import { Sidebar, SidebarSimple } from "@phosphor-icons/react"

interface SidebarToggleIconProps {
  isCollapsed: boolean
}

export function SidebarToggleIcon({ isCollapsed }: SidebarToggleIconProps) {
  return (
    <Box position="relative" display="block" boxSize="6" aria-hidden>
      <Flex
        className="sidebar-icon-layer"
        position="absolute"
        inset="0"
        align="center"
        justify="center"
        transform={isCollapsed ? "scale(1)" : "scale(0.25)"}
        opacity={isCollapsed ? 1 : 0}
        filter={isCollapsed ? "blur(0)" : "blur(4px)"}
      >
        <Sidebar size={24} weight="fill" color="var(--chakra-gray-600)" />
      </Flex>
      <Flex
        className="sidebar-icon-layer"
        align="center"
        justify="center"
        transform={isCollapsed ? "scale(0.25)" : "scale(1)"}
        opacity={isCollapsed ? 0 : 1}
        filter={isCollapsed ? "blur(4px)" : "blur(0)"}
      >
        <SidebarSimple size={24} weight="fill" color="var(--chakra-gray-600)" />
      </Flex>
    </Box>
  )
}
