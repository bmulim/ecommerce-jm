import { motion } from "framer-motion";
import { ChevronRight, Package, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

import ProductDetailsClient from "@/components/ProductDetailsClient";

// Mock data - substituir por dados reais do banco
const products: Record<
  string,
  {
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
> = {
  "whey-protein-concentrado": {
    id: "1",
    slug: "whey-protein-concentrado",
    name: "Whey Protein Concentrado",
    brand: "Growth Supplements",
    category: "Proteínas",
    price: 89.9,
    oldPrice: 129.9,
    rating: 5,
    reviews: 328,
    inStock: true,
    badge: "MAIS VENDIDO",
    description:
      "Whey Protein Concentrado de alta qualidade com 80% de proteína por porção. Ideal para ganho de massa muscular e recuperação pós-treino. Fórmula premium com excelente absorção e digestibilidade.",
    benefits: [
      "Alto teor de proteínas (25g por dose)",
      "Estimula o ganho de massa muscular",
      "Recuperação muscular rápida",
      "Rico em aminoácidos essenciais (BCAAs)",
      "Baixo teor de gordura e carboidratos",
      "Fácil digestão e absorção",
    ],
    specifications: {
      Sabor: "Chocolate, Baunilha, Morango",
      Peso: "900g",
      Porções: "30 doses",
      "Proteína por dose": "25g",
      Validade: "24 meses",
    },
    howToUse:
      "Misture 1 scoop (30g) em 200ml de água ou leite. Consumir após o treino ou conforme orientação de nutricionista. Pode ser consumido até 2x ao dia.",
  },
  "creatina-monohidratada": {
    id: "2",
    slug: "creatina-monohidratada",
    name: "Creatina Monohidratada",
    brand: "Max Titanium",
    category: "Pré-treino",
    price: 59.9,
    oldPrice: 89.9,
    rating: 5,
    reviews: 245,
    inStock: true,
    badge: "LANÇAMENTO",
    description:
      "Creatina Monohidratada 100% pura e micronizada. Aumenta a força, potência e performance nos treinos. Auxilia no ganho de massa muscular magra.",
    benefits: [
      "Aumenta força e potência muscular",
      "Melhora performance nos treinos",
      "Auxilia no ganho de massa magra",
      "100% pura e micronizada",
      "Rápida absorção",
      "Sem aditivos ou conservantes",
    ],
    specifications: {
      Tipo: "Monohidratada Pura",
      Peso: "300g",
      Porções: "60 doses",
      "Creatina por dose": "5g",
      Validade: "36 meses",
    },
    howToUse:
      "Consumir 5g (1 scoop) por dia, misturado em água ou suco. Pode ser consumido antes ou após o treino, ou a qualquer momento do dia.",
  },
};

// Related products
const relatedProducts = [
  {
    name: "BCAA 2:1:1",
    brand: "Growth Supplements",
    price: 49.9,
    oldPrice: 79.9,
    rating: 4,
    inStock: true,
  },
  {
    name: "Glutamina",
    brand: "Max Titanium",
    price: 39.9,
    rating: 5,
    inStock: true,
  },
  {
    name: "Multivitamínico",
    brand: "Universal Nutrition",
    price: 69.9,
    rating: 5,
    inStock: true,
    badge: "NOVO",
  },
  {
    name: "Ômega 3",
    brand: "Now Foods",
    price: 54.9,
    oldPrice: 79.9,
    rating: 4,
    inStock: false,
  },
];

async function getProduct(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = (await getProduct(slug)) || products[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Package className="w-24 h-24 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Produto não encontrado</h1>
          <p className="text-zinc-400 mb-6">
            O produto que você procura não existe ou foi removido.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary hover:bg-primary/90 text-black font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm mb-8 flex-wrap"
        >
          <Link
            href="/"
            className="text-zinc-400 hover:text-primary transition-colors"
          >
            Início
          </Link>
          <ChevronRight className="w-4 h-4 text-zinc-600" />
          <Link
            href="/products"
            className="text-zinc-400 hover:text-primary transition-colors"
          >
            Produtos
          </Link>
          <ChevronRight className="w-4 h-4 text-zinc-600" />
          <Link
            href={`/products?category=${product.category}`}
            className="text-zinc-400 hover:text-primary transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-4 h-4 text-zinc-600" />
          <span className="text-white font-semibold">{product.name}</span>
        </motion.div>

        <ProductDetailsClient product={product} />

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800/50 overflow-hidden group"
              >
                <Link
                  href={`/products/${relatedProduct.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                >
                  {/* Badge */}
                  {relatedProduct.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                      {relatedProduct.badge}
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-square bg-zinc-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingCart className="w-24 h-24 text-primary/30 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs text-primary mb-1">
                      {relatedProduct.brand}
                    </p>
                    <h3 className="text-white font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < relatedProduct.rating
                              ? "fill-primary text-primary"
                              : "fill-zinc-700 text-zinc-700"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      {relatedProduct.oldPrice && (
                        <span className="text-sm text-zinc-500 line-through">
                          R$ {relatedProduct.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-lg font-bold text-primary">
                        R$ {relatedProduct.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${relatedProduct.inStock ? "bg-green-500" : "bg-red-500"}`}
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
