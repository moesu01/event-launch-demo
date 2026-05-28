interface PerformanceMetricCardProps {
  label: string
  value: string
  /** Reserves space for the insight bubble column (Figma Bubble=Yes variant) */
  showInsightSpacer?: boolean
  /** fixed = ticket metrics (~259px); flex = payouts row (equal columns, min 210px) */
  size?: "fixed" | "flex"
}

export function PerformanceMetricCard({
  label,
  value,
  showInsightSpacer = true,
  size = "fixed",
}: PerformanceMetricCardProps) {
  return (
    <div
      className={
        size === "flex"
          ? "relative flex h-[71px] min-w-[210px] flex-1 flex-col items-start gap-[6px] overflow-hidden rounded-[10px] border border-solid border-[var(--color-15)] p-4 shadow-[var(--performance-card-drop-shadow)]"
          : "relative flex h-[71px] w-[258.67px] shrink-0 flex-col items-start gap-[6px] overflow-hidden rounded-[10px] border border-solid border-[var(--color-15)] p-4 shadow-[var(--performance-card-drop-shadow)]"
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[10px]"
        style={{ background: "var(--performance-card-bg)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[var(--performance-card-inset-shadow)]"
      />

      <div className="relative z-[1] flex w-full shrink-0 items-center gap-2.5">
        <p className="m-0 text-[13px] font-medium leading-none tracking-[-0.39px] whitespace-nowrap text-[var(--color-16)]">
          {label}
        </p>
      </div>

      <div className="relative z-[1] flex shrink-0 items-end gap-[6px]">
        <div className="flex flex-col items-start justify-center">
          <p className="m-0 text-[20px] font-normal leading-none whitespace-nowrap text-[var(--color-17)]">
            {value}
          </p>
        </div>
        {showInsightSpacer && (
          <div
            className="h-[18px] w-9 shrink-0 rounded-[40px] py-[3px]"
            aria-hidden
          />
        )}
      </div>
    </div>
  )
}
