"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ShieldCheck, ShieldOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DEFAULT_CREDENTIALS = {
  email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@jmstore.com",
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123",
  accessCode: process.env.NEXT_PUBLIC_ADMIN_CODE || "000000",
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const isValid =
        email === DEFAULT_CREDENTIALS.email &&
        password === DEFAULT_CREDENTIALS.password &&
        accessCode === DEFAULT_CREDENTIALS.accessCode;

      if (isValid) {
        router.push("/admin");
      } else {
        setError("Credenciais inválidas. Verifique os dados e tente novamente.");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#18181b,_#09090b)] px-4 text-white">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative hidden flex-col justify-between border-r border-white/5 bg-gradient-to-br from-primary/10 to-transparent px-8 py-10 lg:flex">
            <div>
              <p className="text-primary mb-2 text-sm font-semibold uppercase tracking-[0.2em]">
                Painel Mestre
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Controle total do ecossistema JM Store
              </h1>
              <p className="mt-4 text-sm text-zinc-300">
                Gerencie produtos, pedidos, clientes e campanhas de marketing a
                partir de um único painel com insights em tempo real.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Sessão protegida</p>
                  <p className="text-xs text-zinc-400">
                    Dupla autenticação + auditoria em tempo real
                  </p>
                </div>
              </div>
              <div className="grid gap-2 text-sm text-zinc-300">
                <p>• Controle de catálogo e estoque</p>
                <p>• Aprovação de pedidos e logística</p>
                <p>• Gestão de campanhas e cupons</p>
                <p>• Integração com CRM e suporte</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-10">
            <div className="mb-8 text-center lg:text-left">
              <p className="text-primary mb-2 text-xs font-semibold uppercase tracking-[0.3em]">
                Área Restrita
              </p>
              <h2 className="text-3xl font-bold">Login Administrativo</h2>
              <p className="text-sm text-zinc-400">
                Utilize suas credenciais mestres para desbloquear o painel
                estatístico de vendas e gestão do e-commerce.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="admin-email" className="text-sm font-semibold">
                  E-mail corporativo
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                  <input
                    id="admin-email"
                    type="email"
                    placeholder="admin@jmstore.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 py-3 pr-4 pl-12 text-sm text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="admin-password" className="text-sm font-semibold">
                  Chave mestra
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 py-3 pr-12 pl-12 text-sm text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-zinc-400 transition hover:bg-white/10"
                    aria-label="Alternar visibilidade da senha"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="admin-code" className="text-sm font-semibold">
                  Código de autorização (MFA)
                </label>
                <div className="relative">
                  <ShieldOff className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                  <input
                    id="admin-code"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="000000"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 py-3 pr-4 pl-12 text-sm tracking-[0.4em] text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    value={accessCode}
                    onChange={(event) => setAccessCode(event.target.value)}
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Validando acessos
                  </>
                ) : (
                  "Entrar no painel"
                )}
              </motion.button>
            </form>

            <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-400">
              <p className="font-semibold text-white">Precisa de acesso?</p>
              <p>
                Solicite ao time de governança a criação de um usuário mestre ou
                redefina suas credenciais via{" "}
                <Link
                  href="/forgot-password"
                  className="text-primary hover:underline"
                >
                  central de segurança
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

