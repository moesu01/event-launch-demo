import { Calendar, MoreVertical, Pencil } from "lucide-react"
import { headerActionButtonClass } from "../../lib/action-button-classes"
import { cn } from "../../lib/cn"
import type { MockEvent, PrimaryEventAction } from "../../types/event"
import { LaunchLiveReveal } from "./launch-live-reveal"
import { EventHeaderPrimaryAction } from "./event-header-primary-action"

interface EventDetailsHeaderProps {
  event: MockEvent
  actionsDisabled: boolean
  primaryEventAction: PrimaryEventAction | null
  primaryActionReveal?: boolean
}

export function EventDetailsHeader({
  event,
  actionsDisabled,
  primaryEventAction,
  primaryActionReveal = false,
}: EventDetailsHeaderProps) {
  return (
    <section className="flex gap-6" aria-label="Event details">
      <div
        className="h-[150px] w-[150px] shrink-0 rounded-[var(--radius-md)] shadow-[var(--shadow-sm)]"
        style={{ background: event.imageGradient }}
        role="img"
        aria-label="Event artwork"
      />

      <div className="flex min-w-0 flex-1 gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-start gap-6">
            <h1 className="min-w-0 flex-1 text-xl font-bold leading-[1.15] text-[var(--tailwind-gray-800)]">
              {event.title}
            </h1>
            <button
              type="button"
              disabled={actionsDisabled}
              className={cn(
                "flex h-9 shrink-0 items-center rounded-[var(--radius-md)] border border-[var(--color-3)] px-3",
                actionsDisabled && "cursor-not-allowed opacity-40",
              )}
              aria-label="Edit event title"
            >
              <Pencil className="h-4 w-4 text-[var(--color-2)]" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[var(--radius-sm)] bg-[var(--color-8)] px-3 py-1 text-xs font-medium text-[var(--color-7)]"
              >
                {tag}
              </span>
            ))}
            <button
              type="button"
              disabled={actionsDisabled}
              className={cn(
                "text-xs font-medium text-[var(--color-10)]",
                actionsDisabled && "cursor-not-allowed opacity-40",
              )}
            >
              Edit Event Tag
            </button>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[13px] font-semibold text-[var(--color-14)]">
                {event.venueName}
              </span>
              <button
                type="button"
                disabled={actionsDisabled}
                className={cn(
                  "text-sm font-medium text-[var(--color-10)]",
                  actionsDisabled && "cursor-not-allowed opacity-40",
                )}
              >
                Change Venue
              </button>
            </div>
            <p className="text-xs font-medium text-[var(--color-16)]">
              {event.venueAddress}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--color-14)]">
            <Calendar className="h-4 w-4 shrink-0 text-[var(--color-16)]" aria-hidden />
            <span>{event.datetime}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-start gap-3">
          {primaryEventAction && (
            <LaunchLiveReveal active={primaryActionReveal}>
              <EventHeaderPrimaryAction action={primaryEventAction} />
            </LaunchLiveReveal>
          )}
          <button
            type="button"
            disabled={actionsDisabled}
            className={cn(
              headerActionButtonClass,
              "w-10",
              actionsDisabled && "cursor-not-allowed opacity-40",
            )}
            aria-label="More actions"
          >
            <MoreVertical className="h-4 w-4 text-[var(--color-14)]" />
          </button>
        </div>
      </div>
    </section>
  )
}
