import type { ReactNode } from "react";

interface InventoryAlertProps {
  icon: ReactNode;
  title: string;
  description: string;
  tone: "critical" | "warning" | "neutral";
}

export function InventoryAlert({
  icon,
  title,
  description,
  tone,
}: InventoryAlertProps) {
  const toneStyles: Record<typeof tone, string> = {
    critical: "border-rose-500/20 bg-rose-500/5",
    warning: "border-amber-500/20 bg-amber-500/5",
    neutral: "border-white/10 bg-black/30",
  };

  return (
    <div
      className={`flex gap-3 rounded-2xl border p-4 text-sm text-zinc-300 ${toneStyles[tone]}`}
    >
      <div className="text-primary rounded-full bg-black/40 p-2">{icon}</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
