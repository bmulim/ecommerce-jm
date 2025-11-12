"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image?: string;
  badge?: string;
}

export default function ProductCard({
  name,
  category,
  price,
  oldPrice,
  rating,
  badge,
}: ProductCardProps) {
  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group hover:border-primary/50 relative overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300"
    >
      {/* Badge */}
      {badge && (
        <div className="bg-primary absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold text-black">
          {badge}
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          -{discount}%
        </div>
      )}

      {/* Image */}
      <Link
        href={`/products/${name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")}`}
      >
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-zinc-800/50">
          <div className="from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <ShoppingCart className="text-primary/30 group-hover:text-primary/50 h-24 w-24 transition-colors" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link
          href={`/products/${name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")}`}
        >
          <p className="text-primary mb-2 text-sm">{category}</p>
          <h3 className="group-hover:text-primary mb-3 line-clamp-2 text-lg font-bold text-white transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-zinc-700 text-zinc-700"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-zinc-400">({rating}.0)</span>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-end justify-between">
          <div>
            {oldPrice && (
              <p className="text-sm text-zinc-500 line-through">
                R$ {oldPrice.toFixed(2)}
              </p>
            )}
            <p className="text-primary text-2xl font-bold">
              R$ {price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-bold text-black transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          Adicionar ao Carrinho
        </motion.button>
      </div>
    </motion.div>
  );
}
