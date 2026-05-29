import { Flex, Text } from "@chakra-ui/react"
import type { Icon } from "@phosphor-icons/react"

interface SidebarNavItemProps {
  label: string
  icon: Icon
  isActive?: boolean
  isExpanded?: boolean
  staggerIndex?: number
}

const LABEL_STAGGER_MS = 30

export function SidebarNavItem({
  label,
  icon: IconComponent,
  isActive,
  isExpanded = true,
  staggerIndex = 0,
}: SidebarNavItemProps) {
  const labelDelayMs = isExpanded ? staggerIndex * LABEL_STAGGER_MS : 0

  return (
    <Flex
      className="sidebar-nav-item"
      role="group"
      position="relative"
      h="12"
      w="full"
      cursor="pointer"
      align="center"
      py="3"
      gap={isExpanded ? "md" : "0"}
      pr={isExpanded ? "3" : "0"}
      pl={isExpanded ? "6" : "5"}
      bg={isActive ? "color.2" : undefined}
      _hover={{ bg: isActive ? "color.17" : "color.8" }}
    >
      <Flex className="sidebar-icon-slot" align="center">
        <IconComponent
          size={24}
          weight="regular"
          color={isActive ? "white" : "var(--color-2)"}
          style={{
            flexShrink: 0,
            opacity: isActive ? 1 : 0.5,
          }}
          className={isActive ? undefined : "sidebar-nav-icon"}
          aria-hidden
        />
      </Flex>
      <Text
        className="sidebar-label-transition"
        minW="0"
        overflow="hidden"
        fontSize="sm"
        whiteSpace="nowrap"
        position={isExpanded ? undefined : "absolute"}
        w={isExpanded ? undefined : "0"}
        transform={isExpanded ? "translateX(0)" : "translateX(-4px)"}
        opacity={isExpanded ? (isActive ? 1 : 0.7) : 0}
        pointerEvents={isExpanded ? undefined : "none"}
        fontWeight={isActive ? "bold" : "520"}
        color={isActive ? "white" : "color.2"}
        _groupHover={{ opacity: isActive ? 1 : isExpanded ? 1 : 0 }}
        style={{ transitionDelay: `${labelDelayMs}ms` }}
        aria-hidden={!isExpanded}
      >
        {label}
      </Text>
    </Flex>
  )
}
