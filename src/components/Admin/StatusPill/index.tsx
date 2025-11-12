interface StatusPillProps {
  status: "ok" | "warning" | "critical" | "out";
}

export function StatusPill({ status }: StatusPillProps) {
  const map = {
    ok: { label: "OK", styles: "bg-emerald-500/10 text-emerald-300" },
    warning: { label: "Atenção", styles: "bg-amber-500/10 text-amber-300" },
    critical: { label: "Crítico", styles: "bg-rose-500/10 text-rose-300" },
    out: { label: "Sem estoque", styles: "bg-zinc-500/10 text-zinc-300" },
  } as const;

  const { label, styles } = map[status];

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}
