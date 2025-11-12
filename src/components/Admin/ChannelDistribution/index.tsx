import { BarChart3 } from "lucide-react";

interface ChannelData {
  label: string;
  value: number;
  accent: string;
}

interface ChannelDistributionProps {
  data: ChannelData[];
  note?: string;
}

export function ChannelDistribution({ data, note }: ChannelDistributionProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">Canais de venda</p>
          <h3 className="text-2xl font-bold">Distribuição %</h3>
        </div>
        <BarChart3 className="text-primary h-6 w-6" />
      </div>
      <div className="mt-8 space-y-4">
        {data.map((channel) => (
          <div
            key={channel.label}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${channel.accent}`} />
              <p className="text-sm text-zinc-300">{channel.label}</p>
            </div>
            <p className="text-lg font-semibold">{channel.value}%</p>
          </div>
        ))}
      </div>
      {note && <p className="mt-6 text-xs text-zinc-400">{note}</p>}
    </div>
  );
}
