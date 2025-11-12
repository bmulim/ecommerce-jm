import { ArrowUpRight } from "lucide-react";

interface SalesChartProps {
  data: Array<{ day: string; value: number }>;
  currentValue: string;
  delta: string;
}

export function SalesChart({ data, currentValue, delta }: SalesChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">Volume diário</p>
          <h3 className="text-2xl font-bold">{currentValue}</h3>
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold text-emerald-400">
          <ArrowUpRight className="h-4 w-4" />
          {delta}
        </span>
      </div>
      <div className="mt-8 flex h-56 items-end gap-3">
        {data.map((item) => (
          <div
            key={item.day}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div
              className="from-primary/10 via-primary/30 to-primary w-full rounded-full bg-gradient-to-t"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            />
            <span className="text-xs text-zinc-400">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
