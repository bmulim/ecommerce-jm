"use client";

import { motion } from "framer-motion";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

import ProductDetailsClient from "@/components/ProductDetailsClient";

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

interface RelatedProduct {
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  inStock: boolean;
  badge?: string;
}

interface ProductPageClientProps {
  product: Product;
  relatedProducts: RelatedProduct[];
}

export default function ProductPageClient({
  product,
  relatedProducts,
}: ProductPageClientProps) {
  return (
    <div className="min-h-screen bg-black pt-24 pb-10 text-white sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            href="/"
            className="hover:text-primary text-zinc-400 transition-colors"
          >
            Início
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <Link
            href="/products"
            className="hover:text-primary text-zinc-400 transition-colors"
          >
            Produtos
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-primary text-zinc-400 transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 text-zinc-600" />
          <span className="font-semibold text-white">{product.name}</span>
        </motion.div>

        <ProductDetailsClient product={product} />

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="mb-8 text-2xl font-bold text-white">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm"
              >
                <Link
                  href={`/products/${relatedProduct.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "")}`}
                >
                  {/* Badge */}
                  {relatedProduct.badge && (
                    <div className="bg-primary absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold text-black">
                      {relatedProduct.badge}
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-zinc-900/50">
                    <div className="from-primary/20 absolute inset-0 bg-gradient-to-br to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingCart className="text-primary/30 h-24 w-24 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-primary mb-1 text-xs">
                      {relatedProduct.brand}
                    </p>
                    <h3 className="group-hover:text-primary mb-2 line-clamp-2 font-bold text-white transition-colors">
                      {relatedProduct.name}
                    </h3>

                    {/* Rating */}
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < relatedProduct.rating
                              ? "fill-primary text-primary"
                              : "fill-zinc-700 text-zinc-700"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-3 flex items-baseline gap-2">
                      {relatedProduct.oldPrice && (
                        <span className="text-sm text-zinc-500 line-through">
                          R$ {relatedProduct.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-primary text-lg font-bold">
                        R$ {relatedProduct.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${relatedProduct.inStock ? "bg-green-500" : "bg-red-500"}`}
                      />
                      <span
                        className={`text-xs ${relatedProduct.inStock ? "text-green-500" : "text-red-500"}`}
                      >
                        {relatedProduct.inStock ? "Em estoque" : "Indisponível"}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
