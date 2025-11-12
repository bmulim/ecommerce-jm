"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  description: string;
  benefits: string[];
  specifications: Record<string, string>;
  howToUse: string;
}

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "howToUse"
  >("description");

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      {/* Product Section */}
      <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Badge */}
          {product.badge && (
            <div className="mb-4">
              <span className="bg-primary inline-block rounded-full px-4 py-2 text-sm font-bold text-black">
                {product.badge}
              </span>
            </div>
          )}

          {/* Main Image */}
          <div className="group relative mb-4 aspect-square overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm">
            <div className="from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingCart className="text-primary/30 h-48 w-48" />
            </div>
            {discount > 0 && (
              <div className="absolute top-4 right-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                -{discount}%
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 bg-zinc-900/50 backdrop-blur-sm transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "hover:border-primary/50 border-zinc-800/50"
                }`}
              >
                <div className="flex h-full items-center justify-center">
                  <ShoppingCart className="text-primary/30 h-12 w-12" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            {product.name}
          </h1>
          <p className="text-primary mb-4 text-lg">{product.brand}</p>

          {/* Rating */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating
                      ? "fill-primary text-primary"
                      : "fill-zinc-700 text-zinc-700"
                  }`}
                />
              ))}
            </div>
            <span className="text-zinc-400">
              ({product.reviews} avaliações)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6 rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm">
            {product.oldPrice && (
              <p className="mb-1 text-lg text-zinc-500 line-through">
                R$ {product.oldPrice.toFixed(2)}
              </p>
            )}
            <div className="mb-2 flex items-baseline gap-2">
              <p className="text-primary text-4xl font-bold">
                R$ {product.price.toFixed(2)}
              </p>
              {discount > 0 && (
                <span className="text-lg font-semibold text-green-500">
                  {discount}% OFF
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-400">
              ou 3x de R$ {(product.price / 3).toFixed(2)} sem juros
            </p>
          </div>

          {/* Stock */}
          <div className="mb-6 flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
            />
            <span
              className={product.inStock ? "text-green-500" : "text-red-500"}
            >
              {product.inStock ? "Em estoque" : "Indisponível"}
            </span>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="mb-3 block font-semibold text-white">
              Quantidade
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-lg border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-3 transition-colors hover:bg-zinc-800"
                >
                  <Minus className="h-5 w-5 text-white" />
                </motion.button>
                <span className="px-6 font-bold text-white">{quantity}</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange("increase")}
                  className="p-3 transition-colors hover:bg-zinc-800"
                >
                  <Plus className="h-5 w-5 text-white" />
                </motion.button>
              </div>
              <span className="text-zinc-400">
                Total: R$ {(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 rounded-lg py-4 font-bold text-black transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Adicionar ao Carrinho
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-primary text-primary hover:bg-primary/10 rounded-lg border bg-zinc-900/50 py-4 font-bold transition-colors"
            >
              Comprar Agora
            </motion.button>
          </div>

          {/* Secondary Actions */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-primary flex items-center gap-2 text-zinc-400 transition-colors"
            >
              <Heart className="h-5 w-5" />
              Favoritar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-primary flex items-center gap-2 text-zinc-400 transition-colors"
            >
              <Share2 className="h-5 w-5" />
              Compartilhar
            </motion.button>
          </div>

          {/* Shipping */}
          <div className="mt-8 rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <Truck className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-1 font-semibold text-white">Frete Grátis</h3>
                <p className="text-sm text-zinc-400">
                  Entrega em todo o Brasil. Receba em até 24h em capitais
                  selecionadas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Details Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <div className="overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm">
          {/* Tabs */}
          <div className="flex border-b border-zinc-800/50">
            <button
              onClick={() => setActiveTab("description")}
              className={`flex-1 py-4 font-semibold transition-colors ${
                activeTab === "description"
                  ? "text-primary border-primary border-b-2"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Descrição
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={`flex-1 py-4 font-semibold transition-colors ${
                activeTab === "specifications"
                  ? "text-primary border-primary border-b-2"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Especificações
            </button>
            <button
              onClick={() => setActiveTab("howToUse")}
              className={`flex-1 py-4 font-semibold transition-colors ${
                activeTab === "howToUse"
                  ? "text-primary border-primary border-b-2"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Como Usar
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "description" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 leading-relaxed text-zinc-300">
                  {product.description}
                </p>
                <h3 className="mb-4 text-xl font-bold text-white">
                  Benefícios
                </h3>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-zinc-300"
                    >
                      <span className="text-primary mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "specifications" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between rounded-lg bg-black/30 p-4"
                      >
                        <span className="text-zinc-400">{key}</span>
                        <span className="font-semibold text-white">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === "howToUse" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="leading-relaxed text-zinc-300">
                  {product.howToUse}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
