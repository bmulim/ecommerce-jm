interface OperationalAlertProps {
  title: string;
  description: string;
  badge: string;
}

export function OperationalAlert({
  title,
  description,
  badge,
}: OperationalAlertProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">{title}</p>
        <span className="rounded-full border border-white/10 px-2 py-1 text-xs text-zinc-400">
          {badge}
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-400">{description}</p>
    </div>
  );
}
