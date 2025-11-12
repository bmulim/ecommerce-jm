import type { ReactNode } from "react";

interface AdminHeaderProps {
  badge: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function AdminHeader({
  badge,
  title,
  description,
  actions,
}: AdminHeaderProps) {
  return (
    <header className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.5em] uppercase">
            {badge}
          </p>
          <h1 className="mt-2 text-3xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm text-zinc-400">{description}</p>
        </div>
        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
      </div>
    </header>
  );
}
