"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Whey Protein Premium",
    category: "Proteína",
    price: 129.9,
    oldPrice: 159.9,
    rating: 4.8,
    image: "/products/whey.jpg",
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Creatina Monohidratada",
    category: "Creatina",
    price: 89.9,
    rating: 4.9,
    image: "/products/creatina.jpg",
    badge: "Destaque",
  },
  {
    id: 3,
    name: "BCAA 2:1:1",
    category: "Aminoácidos",
    price: 79.9,
    oldPrice: 99.9,
    rating: 4.7,
    image: "/products/bcaa.jpg",
  },
  {
    id: 4,
    name: "Pré-Treino Extreme",
    category: "Pré-Treino",
    price: 99.9,
    rating: 4.9,
    image: "/products/pre-treino.jpg",
    badge: "Novo",
  },
];

export function FeaturedProducts() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20"
    >
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C2A537]/10 via-transparent to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-transparent">
              Produtos
            </span>{" "}
            em Destaque
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Os suplementos mais vendidos e recomendados pelos nossos clientes
          </p>

          {/* Linha decorativa */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-transparent via-[#C2A537] to-transparent"
          ></motion.div>
        </motion.div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-[#C2A537]/30 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-[#C2A537] hover:shadow-xl hover:shadow-[#C2A537]/20"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 rounded-full bg-[#C2A537] px-3 py-1 text-xs font-semibold text-black">
                  {product.badge}
                </div>
              )}

              {/* Imagem do Produto */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="relative h-48 w-48">
                    {/* Placeholder - substitua com imagem real */}
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#C2A537]/20 to-[#D4B547]/10">
                      <ShoppingCart className="h-24 w-24 text-[#C2A537]/40" />
                    </div>
                  </div>
                </div>

                {/* Overlay no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Informações do Produto */}
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-[#C2A537]">
                  {product.category}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white group-hover:text-[#C2A537]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#C2A537] text-[#C2A537]"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    {product.rating}
                  </span>
                </div>

                {/* Preço */}
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#C2A537]">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      R$ {product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Botão Comprar */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#C2A537] to-[#D4B547] py-3 font-semibold text-black transition-all duration-300 hover:from-[#D4B547] hover:to-[#E6C658] hover:shadow-lg hover:shadow-[#C2A537]/30"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Adicionar ao Carrinho
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver Todos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg border-2 border-[#C2A537]/50 px-8 py-3 font-semibold text-[#C2A537] transition-all duration-300 hover:border-[#C2A537] hover:bg-[#C2A537]/10"
          >
            Ver Todos os Produtos
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
