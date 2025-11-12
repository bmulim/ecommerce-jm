import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel Administrativo | JM Store",
  description:
    "Área administrativa da JM Store com visão completa de vendas, pedidos e catálogo.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white">
      {children}
    </div>
  );
}
