"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio de e-mail (substituir por lógica real)
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 pt-24 pb-10 text-white sm:pt-28">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/login"
            className="hover:text-primary inline-flex items-center gap-2 text-zinc-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para login
          </Link>
        </motion.div>

        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-primary mb-2 text-4xl font-bold">JM Store</h1>
          <p className="text-zinc-400">Recuperar senha</p>
        </motion.div>

        {/* Form or Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 backdrop-blur-sm"
        >
          {isSent ? (
            // Success Message
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              >
                <Mail className="text-primary h-8 w-8" />
              </motion.div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                E-mail enviado!
              </h2>
              <p className="mb-6 text-zinc-400">
                Enviamos um link de recuperação para <strong>{email}</strong>.
                Verifique sua caixa de entrada e spam.
              </p>
              <Link
                href="/login"
                className="bg-primary hover:bg-primary/90 inline-block w-full rounded-lg py-3 text-center font-bold text-black transition-colors"
              >
                Voltar para login
              </Link>
            </div>
          ) : (
            // Form
            <>
              <p className="mb-6 text-center text-zinc-400">
                Digite seu e-mail cadastrado e enviaremos um link para redefinir
                sua senha.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="focus:border-primary w-full rounded-lg border border-zinc-800/50 bg-black/50 py-3 pr-4 pl-12 text-white placeholder-zinc-500 transition-colors focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-bold text-black transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Enviar link de recuperação
                    </>
                  )}
                </motion.button>
              </form>

              {/* Help Text */}
              <p className="mt-6 text-center text-sm text-zinc-500">
                Lembrou sua senha?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Entrar
                </Link>
              </p>
            </>
          )}
        </motion.div>

        {/* Additional Help */}
        {!isSent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-zinc-500">
              Não recebeu o e-mail?{" "}
              <Link
                href="/contato"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Entre em contato
              </Link>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
