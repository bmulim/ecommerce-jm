"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black md:min-h-[700px] lg:min-h-[800px]"
    >
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C2A537]/20 via-transparent to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#D4B547]/10 via-transparent to-transparent"></div>

      {/* Efeito de partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#C2A537]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C2A537]/30 bg-[#C2A537]/10 px-4 py-2 backdrop-blur-sm"
        >
          <Zap className="h-4 w-4 text-[#C2A537]" />
          <span className="text-sm font-medium text-[#C2A537]">
            Loja Oficial JM Store
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-transparent">
            Suplementos
          </span>
          <span className="block text-white">de Alta Performance</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl"
        >
          Os melhores produtos para potencializar seus resultados. Qualidade
          garantida e entrega rápida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#C2A537] to-[#D4B547] px-8 py-4 font-semibold text-black transition-all duration-300 hover:from-[#D4B547] hover:to-[#E6C658] hover:shadow-lg hover:shadow-[#C2A537]/30"
            >
              <ShoppingBag className="h-5 w-5" />
              Ver Produtos
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border-2 border-[#C2A537]/50 px-8 py-4 font-semibold text-[#C2A537] backdrop-blur-sm transition-all duration-300 hover:border-[#C2A537] hover:bg-[#C2A537]/10"
            >
              Sobre Nós
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: "500+", label: "Produtos" },
            { value: "10k+", label: "Clientes" },
            { value: "98%", label: "Satisfação" },
            { value: "24h", label: "Entrega" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-[#C2A537]/30 bg-black/50 p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-[#C2A537] sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Brilho decorativo inferior */}
      <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C2A537]/50 to-transparent"></div>
    </motion.section>
  );
}
