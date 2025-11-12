import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  subLabel: string;
  icon: LucideIcon;
}

export function KpiCard({
  label,
  value,
  delta,
  trend,
  subLabel,
  icon: Icon,
}: KpiCardProps) {
  const isPositive = trend === "up";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
            {label}
          </p>
          <h3 className="mt-4 text-3xl font-semibold">{value}</h3>
          <p className="mt-2 text-xs text-zinc-400">{subLabel}</p>
        </div>
        <div className="text-primary rounded-2xl border border-white/10 bg-black/40 p-3">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div
        className={`mt-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
          isPositive
            ? "bg-emerald-500/10 text-emerald-300"
            : "bg-rose-500/10 text-rose-300"
        }`}
      >
        {isPositive ? (
          <ArrowUpRight className="h-4 w-4" />
        ) : (
          <ArrowDownRight className="h-4 w-4" />
        )}
        {delta}
      </div>
    </div>
  );
}
