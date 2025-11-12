import { Truck } from "lucide-react";

interface PipelineData {
  label: string;
  value: number;
  color: string;
}

interface PipelineStatusProps {
  data: PipelineData[];
}

export function PipelineStatus({ data }: PipelineStatusProps) {
  const maxValue = Math.max(...data.map((stage) => stage.value));

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">Pipeline logístico</p>
          <h3 className="text-2xl font-bold">Status em tempo real</h3>
        </div>
        <Truck className="text-primary h-6 w-6" />
      </div>
      <div className="mt-6 space-y-4">
        {data.map((stage) => (
          <div key={stage.label}>
            <div className="flex items-center justify-between text-sm">
              <p className="text-zinc-300">{stage.label}</p>
              <p className="font-semibold text-white">{stage.value}</p>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${stage.color}`}
                style={{ width: `${(stage.value / maxValue) * 90}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
