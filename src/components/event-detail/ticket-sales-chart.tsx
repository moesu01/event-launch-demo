import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import type { TicketSalesDataPoint } from "../../types/event"

interface TicketSalesChartProps {
  data: TicketSalesDataPoint[]
}

export function TicketSalesChart({ data }: TicketSalesChartProps) {
  return (
    <section
      className="mt-6 flex flex-col gap-6"
      aria-label="Ticket sales chart"
    >
      <h2 className="section-heading">Ticket Sales</h2>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-13)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: "var(--color-19)" }}
              axisLine={{ stroke: "var(--color-13)" }}
              tickLine={false}
              interval={2}
            />
            <YAxis
              ticks={[0, 50, 100, 150, 200]}
              tick={{ fontSize: 11, fill: "var(--color-19)" }}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="sales"
              fill="var(--chart-bar)"
              radius={[2, 2, 0, 0]}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
