"use client";

import { motion } from "framer-motion";
import { Beef, Dumbbell, Flame, Droplets, Zap, Heart } from "lucide-react";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  productCount: number;
  color: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Proteínas",
    description: "Whey, Caseína, Albumina",
    icon: Beef,
    productCount: 45,
    color: "from-[#C2A537] to-[#D4B547]",
  },
  {
    id: 2,
    name: "Creatinas",
    description: "Monohidratada, HCL, Micronizada",
    icon: Zap,
    productCount: 28,
    color: "from-[#D4B547] to-[#FFE17D]",
  },
  {
    id: 3,
    name: "Pré-Treinos",
    description: "Energia e foco máximos",
    icon: Flame,
    productCount: 32,
    color: "from-[#B8941F] to-[#C2A537]",
  },
  {
    id: 4,
    name: "Aminoácidos",
    description: "BCAA, Glutamina, Beta-Alanina",
    icon: Droplets,
    productCount: 38,
    color: "from-[#FFD700] to-[#C2A537]",
  },
  {
    id: 5,
    name: "Hipertrofia",
    description: "Ganho de massa muscular",
    icon: Dumbbell,
    productCount: 52,
    color: "from-[#C2A537] to-[#FFE17D]",
  },
  {
    id: 6,
    name: "Saúde",
    description: "Vitaminas, Minerais, Ômegas",
    icon: Heart,
    productCount: 41,
    color: "from-[#D4B547] to-[#B8941F]",
  },
];

export function CategorySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-black py-20"
    >
      {/* Background com gradiente */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>

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
            Categorias de{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-transparent">
              Produtos
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Encontre exatamente o que você precisa para seus objetivos
          </p>
        </motion.div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/category/${category.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#C2A537]/30 bg-gradient-to-br from-black/80 to-[#0a0a0a] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C2A537] hover:shadow-xl hover:shadow-[#C2A537]/20"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10">
                    <div
                      className={`h-full w-full bg-gradient-to-br ${category.color}`}
                    ></div>
                  </div>

                  {/* Ícone */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-black" />
                    </motion.div>
                  </div>

                  {/* Conteúdo */}
                  <div className="relative">
                    <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-[#C2A537]">
                      {category.name}
                    </h3>
                    <p className="mb-4 text-gray-400 transition-colors group-hover:text-gray-300">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#C2A537]">
                        {category.productCount} produtos
                      </span>
                      <motion.div
                        className="text-[#C2A537] transition-transform"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Brilho decorativo */}
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#C2A537]/10 blur-3xl transition-all duration-500 group-hover:bg-[#C2A537]/20"></div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-gray-400">Não encontrou o que procura?</p>
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-gradient-to-r from-[#C2A537] to-[#D4B547] px-8 py-3 font-semibold text-black transition-all duration-300 hover:from-[#D4B547] hover:to-[#E6C658] hover:shadow-lg hover:shadow-[#C2A537]/30"
            >
              Ver Todos os Produtos
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
