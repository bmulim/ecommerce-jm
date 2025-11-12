import {
  Activity,
  Box,
  CreditCard,
  Layers3,
  LineChart,
  Percent,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

import { AdminHeader } from "@/components/Admin/AdminHeader";
import { ChannelDistribution } from "@/components/Admin/ChannelDistribution";
import { KpiCard } from "@/components/Admin/KpiCard";
import { OperationalAlert } from "@/components/Admin/OperationalAlert";
import { PipelineStatus } from "@/components/Admin/PipelineStatus";
import { SalesChart } from "@/components/Admin/SalesChart";

const kpis = [
  {
    label: "Receita total (30d)",
    value: "R$ 428.900",
    delta: "+18,4%",
    trend: "up" as const,
    subLabel: "vs. último mês",
    icon: LineChart,
  },
  {
    label: "Pedidos aprovados",
    value: "3.912",
    delta: "+6,2%",
    trend: "up" as const,
    subLabel: "taxa de conversão 3,1%",
    icon: ShoppingBag,
  },
  {
    label: "Ticket médio",
    value: "R$ 326,47",
    delta: "-1,8%",
    trend: "down" as const,
    subLabel: "meta mínima R$ 320",
    icon: CreditCard,
  },
  {
    label: "Clientes ativos",
    value: "18.042",
    delta: "+9,1%",
    trend: "up" as const,
    subLabel: "7,3% recorrentes",
    icon: Users,
  },
];

const pipelineData = [
  {
    label: "Em separação",
    value: 184,
    color: "from-emerald-500 to-emerald-400",
  },
  { label: "Despachados", value: 132, color: "from-sky-500 to-sky-400" },
  { label: "Em transporte", value: 98, color: "from-amber-500 to-amber-400" },
  { label: "Pendentes", value: 26, color: "from-rose-500 to-rose-400" },
];

const salesTrend = [
  { day: "Seg", value: 18_400 },
  { day: "Ter", value: 21_300 },
  { day: "Qua", value: 24_100 },
  { day: "Qui", value: 28_600 },
  { day: "Sex", value: 37_800 },
  { day: "Sáb", value: 31_900 },
  { day: "Dom", value: 22_400 },
];

const channelSplit = [
  { label: "Orgânico", value: 42, accent: "bg-emerald-400" },
  { label: "Mídia paga", value: 33, accent: "bg-sky-400" },
  { label: "Indicações", value: 15, accent: "bg-violet-400" },
  { label: "Marketplaces", value: 10, accent: "bg-amber-400" },
];

const quickLinks = [
  {
    title: "Pedidos & Logística",
    description: "Roteirize coletas, acompanhe SLA e devoluções.",
    icon: Truck,
    href: "/admin/pedidos",
  },
  {
    title: "Catálogo & Estoque",
    description: "Atualize variantes, preços e saldo em tempo real.",
    icon: Warehouse,
    href: "/admin/inventory",
  },
  {
    title: "Campanhas & Cupons",
    description: "Ative bundles, upsell e notificações segmentadas.",
    icon: Percent,
    href: "/admin/marketing",
  },
  {
    title: "Fluxos Financeiros",
    description: "Repasse adquirente, conciliação e split.",
    icon: Activity,
    href: "/admin/financeiro",
  },
];

const recentOrders = [
  {
    id: "#JM-9230",
    customer: "Vitória Carvalho",
    value: "R$ 689,90",
    items: 4,
    status: "Despachado",
    channel: "Orgânico",
  },
  {
    id: "#JM-9229",
    customer: "Lucas Almeida",
    value: "R$ 428,40",
    items: 3,
    status: "Em separação",
    channel: "Ads Meta",
  },
  {
    id: "#JM-9228",
    customer: "Carla Rodrigues",
    value: "R$ 289,90",
    items: 2,
    status: "Aguardando pagamento",
    channel: "Marketplace",
  },
  {
    id: "#JM-9227",
    customer: "Guilherme Souza",
    value: "R$ 1.204,10",
    items: 6,
    status: "Entregue",
    channel: "CRM",
  },
];

const bestSellers = [
  {
    name: "Conjunto Performance Black",
    sku: "CONJ-PRF-BLK",
    inventory: 142,
    revenue: "R$ 92.800",
    growth: "+14%",
  },
  {
    name: "Sneaker JM Flow",
    sku: "SNK-JMFLOW",
    inventory: 64,
    revenue: "R$ 54.310",
    growth: "+9%",
  },
  {
    name: "Jaqueta Cloudguard",
    sku: "JKT-CLD-GRD",
    inventory: 198,
    revenue: "R$ 38.270",
    growth: "+22%",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen px-4 pt-24 pb-10 sm:px-6 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.5em] uppercase">
              Admin Console
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              Operações e inteligência do e-commerce
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-300">
              Monitore indicadores críticos, distribua tarefas para os times e
              ajuste rapidamente o catálogo, logística e marketing da JM Store.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="hover:border-primary/60 rounded-2xl border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:text-white"
            >
              Ver loja
            </Link>
            <Link
              href="/admin/login"
              className="bg-primary/90 hover:bg-primary rounded-2xl px-4 py-2 text-sm font-semibold text-black transition"
            >
              Alternar usuário
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((stat) => (
            <KpiCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <SalesChart
            data={salesTrend}
            currentValue="R$ 184.410"
            delta="+12,3%"
          />

          <PipelineStatus data={pipelineData} />

          <ChannelDistribution
            data={channelSplit}
            note="Meta: reduzir dependência de mídia paga < 30% em 60 dias."
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Últimas movimentações</p>
                <h3 className="text-2xl font-bold text-white">
                  Pedidos recentes
                </h3>
              </div>
              <Link
                href="/admin/pedidos"
                className="text-primary text-sm transition hover:text-white"
              >
                Ver todos
              </Link>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-300">
                <thead>
                  <tr className="text-xs tracking-widest text-zinc-500 uppercase">
                    <th className="py-3">Pedido</th>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>Itens</th>
                    <th>Status</th>
                    <th>Canal</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-t border-white/5">
                      <td className="py-4 font-semibold">{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.value}</td>
                      <td>{order.items}</td>
                      <td>
                        <span className="rounded-full border border-white/10 px-2 py-1 text-xs">
                          {order.status}
                        </span>
                      </td>
                      <td>{order.channel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Produtos em destaque</p>
                <h3 className="text-2xl font-bold">Top sellers</h3>
              </div>
              <Sparkles className="text-primary h-6 w-6" />
            </div>
            <div className="mt-6 space-y-4">
              {bestSellers.map((item) => (
                <div
                  key={item.sku}
                  className="rounded-2xl border border-white/5 bg-black/30 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-zinc-500">{item.sku}</p>
                    </div>
                    <span className="text-xs text-emerald-400">
                      {item.growth}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="text-zinc-500">Estoque</p>
                      <p className="font-semibold">{item.inventory} un.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-500">Receita</p>
                      <p className="font-semibold">{item.revenue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Centros de comando</p>
                <h3 className="text-2xl font-bold">Acesso rápido</h3>
              </div>
              <Layers3 className="text-primary h-6 w-6" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:border-primary/60 flex h-full flex-col rounded-2xl border border-white/5 bg-black/40 p-4 transition hover:bg-black/60"
                >
                  <link.icon className="text-primary mb-3 h-6 w-6" />
                  <p className="text-lg font-semibold text-white">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Saúde operacional</p>
                <h3 className="text-2xl font-bold">Alertas e tarefas</h3>
              </div>
              <Box className="text-primary h-6 w-6" />
            </div>
            <div className="mt-6 space-y-4">
              <OperationalAlert
                title="Rever SLA de transporte Sudeste"
                description="Tempo médio subiu para 4,1 dias. Avaliar mudança de rota."
                badge="Logística"
              />
              <OperationalAlert
                title="Atualizar estoque mínimo de sneakers"
                description="Quatro SKUs críticos abaixo de 20 unidades."
                badge="Produtos"
              />
              <OperationalAlert
                title="Campanha de fim de semana"
                description="Definir clusters e enviar notificações push até 18h."
                badge="Marketing"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
