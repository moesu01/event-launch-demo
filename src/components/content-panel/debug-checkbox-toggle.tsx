interface DebugCheckboxToggleProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  ariaLabel: string
}

export function DebugCheckboxToggle({
  label,
  checked,
  onChange,
  ariaLabel,
}: DebugCheckboxToggleProps) {
  return (
    <label className="flex w-[131px] cursor-pointer items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-3)] bg-[var(--color-1)] px-[var(--spacing-md)] py-2 shadow-[var(--shadow-elevation-2)]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-3.5 w-3.5 shrink-0 accent-[var(--color-10)]"
        aria-label={ariaLabel}
      />
      <span className="text-[11px] font-medium leading-snug text-[var(--chakra-gray-500)]">
        {label}
      </span>
    </label>
  )
}
