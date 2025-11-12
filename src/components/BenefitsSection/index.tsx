"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  CreditCard,
  HeadphonesIcon,
  Shield,
  Truck,
} from "lucide-react";

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Entrega Rápida",
    description: "Receba em até 24h em todo o Brasil",
    icon: Truck,
  },
  {
    id: 2,
    title: "Produtos Originais",
    description: "100% autênticos e certificados",
    icon: Shield,
  },
  {
    id: 3,
    title: "Melhor Preço",
    description: "Preços competitivos e promoções exclusivas",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Suporte 24/7",
    description: "Atendimento especializado sempre disponível",
    icon: HeadphonesIcon,
  },
  {
    id: 5,
    title: "Qualidade Garantida",
    description: "Produtos testados e aprovados",
    icon: Award,
  },
  {
    id: 6,
    title: "Troca Facilitada",
    description: "Até 30 dias para trocar ou devolver",
    icon: Clock,
  },
];

export function BenefitsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C2A537]/5 via-transparent to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Por que Comprar{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-transparent">
              Conosco?
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Oferecemos a melhor experiência de compra com garantia de qualidade
          </p>

          {/* Linha decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#C2A537] to-[#D4B547]"
          ></motion.div>
        </motion.div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-[#C2A537]/20 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C2A537] hover:shadow-xl hover:shadow-[#C2A537]/10"
              >
                {/* Background glow */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#C2A537]/0 to-[#C2A537]/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-[#C2A537]/10 group-hover:to-[#D4B547]/10 group-hover:opacity-100"></div>

                {/* Conteúdo */}
                <div className="relative">
                  {/* Ícone */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#C2A537] to-[#D4B547] shadow-lg shadow-[#C2A537]/30"
                    >
                      <Icon className="h-8 w-8 text-black" />
                    </motion.div>
                  </div>

                  {/* Texto */}
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#C2A537]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 transition-colors group-hover:text-gray-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Borda animada */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#C2A537] to-[#D4B547] opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 rounded-2xl border border-[#C2A537]/30 bg-gradient-to-r from-black/80 to-[#0a0a0a] p-8 text-center backdrop-blur-sm md:p-12"
        >
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Pronto para Alcançar Seus{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-transparent">
              Objetivos?
            </span>
          </h3>
          <p className="mb-6 text-lg text-gray-300">
            Comece agora mesmo com os melhores suplementos do mercado
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-[#C2A537] to-[#D4B547] px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:from-[#D4B547] hover:to-[#E6C658] hover:shadow-lg hover:shadow-[#C2A537]/30"
          >
            Explorar Produtos
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
