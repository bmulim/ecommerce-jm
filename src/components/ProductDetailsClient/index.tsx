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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Badge */}
          {product.badge && (
            <div className="mb-4">
              <span className="inline-block bg-primary text-black px-4 py-2 rounded-full text-sm font-bold">
                {product.badge}
              </span>
            </div>
          )}

          {/* Main Image */}
          <div className="relative aspect-square bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingCart className="w-48 h-48 text-primary/30" />
            </div>
            {discount > 0 && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                className={`aspect-square bg-zinc-900/50 backdrop-blur-sm rounded-lg border-2 overflow-hidden transition-colors ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-zinc-800/50 hover:border-primary/50"
                }`}
              >
                <div className="h-full flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 text-primary/30" />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {product.name}
          </h1>
          <p className="text-primary text-lg mb-4">{product.brand}</p>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
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
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50 p-6 mb-6">
            {product.oldPrice && (
              <p className="text-zinc-500 line-through text-lg mb-1">
                R$ {product.oldPrice.toFixed(2)}
              </p>
            )}
            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-4xl font-bold text-primary">
                R$ {product.price.toFixed(2)}
              </p>
              {discount > 0 && (
                <span className="text-green-500 text-lg font-semibold">
                  {discount}% OFF
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-400">
              ou 3x de R$ {(product.price / 3).toFixed(2)} sem juros
            </p>
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
            />
            <span
              className={product.inStock ? "text-green-500" : "text-red-500"}
            >
              {product.inStock ? "Em estoque" : "Indisponível"}
            </span>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="text-white font-semibold mb-3 block">
              Quantidade
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800/50">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-3 hover:bg-zinc-800 transition-colors"
                >
                  <Minus className="w-5 h-5 text-white" />
                </motion.button>
                <span className="px-6 text-white font-bold">{quantity}</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQuantityChange("increase")}
                  className="p-3 hover:bg-zinc-800 transition-colors"
                >
                  <Plus className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              <span className="text-zinc-400">
                Total: R$ {(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary/90 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Adicionar ao Carrinho
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-zinc-900/50 border border-primary text-primary hover:bg-primary/10 font-bold py-4 rounded-lg transition-colors"
            >
              Comprar Agora
            </motion.button>
          </div>

          {/* Secondary Actions */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors"
            >
              <Heart className="w-5 h-5" />
              Favoritar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Compartilhar
            </motion.button>
          </div>

          {/* Shipping */}
          <div className="mt-8 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50">
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Frete Grátis</h3>
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
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-zinc-800/50">
            <button
              onClick={() => setActiveTab("description")}
              className={`flex-1 py-4 font-semibold transition-colors ${
                activeTab === "description"
                  ? "text-primary border-b-2 border-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Descrição
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={`flex-1 py-4 font-semibold transition-colors ${
                activeTab === "specifications"
                  ? "text-primary border-b-2 border-primary"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Especificações
            </button>
            <button
              onClick={() => setActiveTab("howToUse")}
              className={`flex-1 py-4 font-semibold transition-colors ${
                activeTab === "howToUse"
                  ? "text-primary border-b-2 border-primary"
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
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <h3 className="text-white font-bold text-xl mb-4">
                  Benefícios
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center p-4 bg-black/30 rounded-lg"
                    >
                      <span className="text-zinc-400">{key}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "howToUse" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-zinc-300 leading-relaxed">
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
