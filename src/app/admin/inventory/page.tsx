import {
  AlertTriangle,
  ArchiveRestore,
  Filter,
  Loader,
  Plus,
  RefreshCw,
  Search,
  Tag,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const inventorySummary = [
  {
    label: "SKUs ativos",
    value: "428",
    detail: "36 aguardando reposição",
    accent: "from-emerald-500/40 to-emerald-500/10",
  },
  {
    label: "Cobertura média",
    value: "42 dias",
    detail: "Meta mínima 30 dias",
    accent: "from-sky-500/40 to-sky-500/10",
  },
  {
    label: "Produtos críticos",
    value: "18",
    detail: "Abaixo do estoque de segurança",
    accent: "from-rose-500/40 to-rose-500/10",
  },
];

const stockStatus = [
  { label: "Disponíveis", value: 72, color: "bg-emerald-500" },
  { label: "Reposição", value: 18, color: "bg-amber-400" },
  { label: "Crítico", value: 6, color: "bg-rose-500" },
  { label: "Sem estoque", value: 4, color: "bg-zinc-500" },
];

const inventoryItems = [
  {
    sku: "SNK-JMFLOW-BLK-41",
    name: "Sneaker JM Flow Black 41",
    category: "Sneakers",
    brand: "JM Original",
    stock: 62,
    reserved: 14,
    safety: 40,
    status: "ok",
    price: "R$ 649,90",
  },
  {
    sku: "JKT-CLDGRD-M",
    name: "Jaqueta Cloudguard M",
    category: "Outerwear",
    brand: "JM Original",
    stock: 24,
    reserved: 6,
    safety: 40,
    status: "critical",
    price: "R$ 389,90",
  },
  {
    sku: "LEG-FTRX-38",
    name: "Legging Future X 38",
    category: "Athleisure",
    brand: "JM Studio",
    stock: 98,
    reserved: 22,
    safety: 35,
    status: "ok",
    price: "R$ 229,90",
  },
  {
    sku: "TEE-ESNTL-WHT-P",
    name: "Camiseta Essential Branca P",
    category: "Basics",
    brand: "JM Basics",
    stock: 14,
    reserved: 8,
    safety: 30,
    status: "warning",
    price: "R$ 129,90",
  },
  {
    sku: "BAG-URBN-NVY",
    name: "Bolsa Urban Navy",
    category: "Acessórios",
    brand: "JM Original",
    stock: 0,
    reserved: 0,
    safety: 20,
    status: "out",
    price: "R$ 289,90",
  },
];

export default function InventoryPage() {
  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.5em]">
                Inventory Control
              </p>
              <h1 className="mt-2 text-3xl font-semibold">
                Orquestração completa do estoque
              </h1>
              <p className="mt-2 text-sm text-zinc-400">
                Monitore níveis, sinalize rupturas iminentes e acione reposições em
                tempo real.
              </p>
            </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="rounded-2xl border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-primary/60 hover:text-white"
            >
              Voltar ao dashboard
            </Link>
            <Link
              href="/admin/products/new"
              className="flex items-center gap-2 rounded-2xl bg-primary/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-primary"
            >
              <Plus className="h-4 w-4" />
              Adicionar produto
            </Link>
            <button className="flex items-center gap-2 rounded-2xl bg-primary/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-primary">
              <Plus className="h-4 w-4" />
              Novo SKU
            </button>
          </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {inventorySummary.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl border border-white/10 bg-black/30 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {card.label}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white">{card.value}</h3>
              <p className="text-sm text-zinc-400">{card.detail}</p>
              <div
                className={`mt-6 h-2 rounded-full bg-gradient-to-r ${card.accent}`}
              />
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-zinc-400">Mapa em tempo real</p>
                <h2 className="text-2xl font-semibold text-white">
                  Níveis e reservas por SKU
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-primary/50 hover:text-white">
                  <Filter className="h-4 w-4" />
                  Filtrar
                </button>
                <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-primary/50 hover:text-white">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Sincronizar WMS
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  type="search"
                  placeholder="Buscar por SKU, nome ou categoria..."
                  className="w-full rounded-xl border border-white/10 bg-black/30 py-2 pr-4 pl-10 text-sm text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-300">
                <thead>
                  <tr className="text-xs uppercase tracking-widest text-zinc-500">
                    <th className="py-3">SKU</th>
                    <th>Produto</th>
                    <th>Categoria</th>
                    <th>Marca</th>
                    <th>Disponível</th>
                    <th>Reservado</th>
                    <th>Segurança</th>
                    <th>Status</th>
                    <th className="text-right">Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr key={item.sku} className="border-t border-white/5">
                      <td className="py-4 font-semibold">{item.sku}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.brand}</td>
                      <td>{item.stock} un.</td>
                      <td>{item.reserved} un.</td>
                      <td>{item.safety} un.</td>
                      <td>
                        <StatusPill status={item.status} />
                      </td>
                      <td className="text-right font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Dentro da meta
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> Em atenção
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-500" /> Crítico / ruptura
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-zinc-400">Status geral</p>
              <h3 className="text-2xl font-semibold text-white">Distribuição</h3>
              <div className="mt-6 space-y-4">
                {stockStatus.map((status) => (
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

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">Reposições críticas</p>
                  <h3 className="text-2xl font-semibold text-white">
                    Ações imediatas
                  </h3>
                </div>
                <ArchiveRestore className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 space-y-4">
                <InventoryAlert
                  icon={<AlertTriangle className="h-4 w-4" />}
                  title="Priorizar transferência sneakers Flow"
                  description="Distribuição SP precisa de +120 pares até sexta."
                  tone="critical"
                />
                <InventoryAlert
                  icon={<Loader className="h-4 w-4" />}
                  title="Produção legging Future X"
                  description="Batch 004 aguardando aprovação de custos."
                  tone="warning"
                />
                <InventoryAlert
                  icon={<Tag className="h-4 w-4" />}
                  title="Reavaliar preço de venda da linha Basics"
                  description="Margem atual 18%, abaixo do alvo de 25%."
                  tone="neutral"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: "ok" | "warning" | "critical" | "out" }) {
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

function InventoryAlert({
  icon,
  title,
  description,
  tone,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  tone: "critical" | "warning" | "neutral";
}) {
  const toneStyles: Record<typeof tone, string> = {
    critical: "border-rose-500/20 bg-rose-500/5",
    warning: "border-amber-500/20 bg-amber-500/5",
    neutral: "border-white/10 bg-black/30",
  };

  return (
    <div
      className={`flex gap-3 rounded-2xl border p-4 text-sm text-zinc-300 ${toneStyles[tone]}`}
    >
      <div className="rounded-full bg-black/40 p-2 text-primary">{icon}</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
