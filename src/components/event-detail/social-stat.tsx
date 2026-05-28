import { cn } from "../../lib/cn"

interface SocialStatProps {
  platform: "instagram" | "spotify" | "tiktok"
  value: string
}

function InstagramIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="#1A202C" strokeWidth="1.2" />
      <circle cx="7" cy="7" r="2.5" stroke="#1A202C" strokeWidth="1.2" />
      <circle cx="10.25" cy="3.75" r="0.75" fill="#1A202C" />
    </svg>
  )
}

function SpotifyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="7" cy="7" r="6" stroke="#1A202C" strokeWidth="1.2" />
      <path
        d="M4.5 6.2c2-.6 4.2-.6 6.2 0M5 8c1.5-.4 3.1-.4 4.6 0M5.5 9.6c1-.3 2.1-.3 3.1 0"
        stroke="#1A202C"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 2.5v3.2a2.3 2.3 0 1 1-1.6-2.2V7.5a3.5 3.5 0 1 0 3.5-3.5"
        stroke="#1A202C"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const platformIcons = {
  instagram: InstagramIcon,
  spotify: SpotifyIcon,
  tiktok: TikTokIcon,
} as const

export function SocialStat({ platform, value }: SocialStatProps) {
  const Icon = platformIcons[platform]
  const iconSize = platform === "tiktok" ? "h-3 w-3" : "h-3.5 w-3.5"

  return (
    <span className="flex items-center gap-0.5 px-px">
      <span className={cn("flex shrink-0 items-center justify-center", iconSize)}>
        <Icon />
      </span>
      <span className="text-xs leading-[18px] text-[var(--color-2)]">{value}</span>
    </span>
  )
}
