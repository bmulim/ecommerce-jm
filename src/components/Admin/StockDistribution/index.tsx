interface StockStatus {
  label: string;
  value: number;
  color: string;
}

interface StockDistributionProps {
  data: StockStatus[];
}

export function StockDistribution({ data }: StockDistributionProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-sm text-zinc-400">Status geral</p>
      <h3 className="text-2xl font-semibold text-white">Distribuição</h3>
      <div className="mt-6 space-y-4">
        {data.map((status) => (
          <div key={status.label}>
            <div className="flex items-center justify-between text-sm">
              <p className="text-zinc-300">{status.label}</p>
              <p className="font-semibold text-white">{status.value}%</p>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${status.color}`}
                style={{ width: `${status.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
