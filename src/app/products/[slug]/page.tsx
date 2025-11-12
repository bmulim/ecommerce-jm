import { Package } from "lucide-react";
import Link from "next/link";

import ProductPageClient from "@/components/ProductPageClient";

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
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <Package className="text-primary mx-auto mb-4 h-24 w-24" />
          <h1 className="mb-2 text-2xl font-bold">Produto não encontrado</h1>
          <p className="mb-6 text-zinc-400">
            O produto que você procura não existe ou foi removido.
          </p>
          <Link
            href="/products"
            className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-6 py-3 font-bold text-black transition-colors"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ProductPageClient product={product} relatedProducts={relatedProducts} />
  );
}
