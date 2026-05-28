import { useEffect } from "react"

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  )
}

export function useDebugControlsShortcut(onToggle: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isEditableTarget(event.target)) return
      if (!event.altKey || !event.shiftKey || event.key.toLowerCase() !== "d") {
        return
      }

      event.preventDefault()
      onToggle()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onToggle])
}
