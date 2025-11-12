"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Simulação de envio - substitua com a API real
    setTimeout(() => {
      setMessage({
        type: "success",
        text: "Inscrição realizada com sucesso! Verifique seu e-mail.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-black py-20"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C2A537]/20 via-transparent to-transparent"></div>

      {/* Padrão de grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C2A537/5_1px,transparent_1px),linear-gradient(to_bottom,#C2A537/5_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] bg-[size:4rem_4rem]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-3xl border border-[#C2A537]/30 bg-gradient-to-br from-black/80 via-[#0a0a0a] to-black backdrop-blur-sm"
        >
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12 lg:gap-12">
            {/* Lado Esquerdo - Conteúdo */}
            <div className="flex flex-col justify-center">
              {/* Ícone */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.3,
                }}
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C2A537] to-[#D4B547] shadow-lg shadow-[#C2A537]/30"
              >
                <Mail className="h-8 w-8 text-black" />
              </motion.div>

              {/* Título */}
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Fique por Dentro das{" "}
                <span className="bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-transparent">
                  Novidades
                </span>
              </h2>

              {/* Descrição */}
              <p className="mb-6 text-lg text-gray-300">
                Receba em primeira mão nossas promoções exclusivas, lançamentos
                de produtos e dicas de suplementação.
              </p>

              {/* Benefícios */}
              <ul className="space-y-3 text-gray-400">
                {[
                  "Descontos exclusivos para assinantes",
                  "Novidades antes de todo mundo",
                  "Dicas de nutrição e treino",
                  "Acesso a promoções relâmpago",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2A537]/20">
                      <div className="h-2 w-2 rounded-full bg-[#C2A537]"></div>
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="flex flex-col justify-center">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Input de Email */}
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu melhor e-mail"
                    required
                    className="w-full rounded-xl border-2 border-[#C2A537]/30 bg-black/50 px-6 py-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all duration-300 focus:border-[#C2A537] focus:ring-2 focus:ring-[#C2A537]/20 focus:outline-none"
                  />
                  <Mail className="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-[#C2A537]/50" />
                </div>

                {/* Botão Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C2A537] to-[#D4B547] px-8 py-4 font-semibold text-black transition-all duration-300 hover:from-[#D4B547] hover:to-[#E6C658] hover:shadow-lg hover:shadow-[#C2A537]/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                      Inscrevendo...
                    </>
                  ) : (
                    <>
                      Inscrever-se Agora
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </motion.button>

                {/* Mensagem de feedback */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-lg p-4 text-center text-sm ${
                      message.type === "success"
                        ? "border border-green-500/30 bg-green-500/10 text-green-400"
                        : "border border-red-500/30 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                )}

                {/* Política de Privacidade */}
                <p className="text-center text-xs text-gray-500">
                  Ao se inscrever, você concorda com nossa{" "}
                  <a
                    href="/privacy"
                    className="text-[#C2A537] hover:text-[#D4B547] hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  . Você pode cancelar a inscrição a qualquer momento.
                </p>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Stats decorativos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-6 text-center"
        >
          {[
            { value: "15k+", label: "Inscritos" },
            { value: "4.9/5", label: "Avaliação" },
            { value: "100%", label: "Confiável" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-lg bg-black/30 p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-[#C2A537]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
