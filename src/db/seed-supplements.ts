import crypto from "crypto";

import { db } from ".";
import { categoryTable, productTable, productVariantTable } from "./schema";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

const categories = [
  {
    name: "Proteínas",
    description: "Suplementos proteicos para ganho de massa muscular",
  },
  {
    name: "Pré-treino",
    description: "Suplementos energéticos para melhorar o desempenho",
  },
  {
    name: "Aminoácidos",
    description: "BCAAs, glutamina e outros aminoácidos essenciais",
  },
  {
    name: "Vitaminas",
    description: "Multivitamínicos e suplementos vitamínicos",
  },
  {
    name: "Ômega 3",
    description: "Suplementos de ácidos graxos essenciais",
  },
  {
    name: "Emagrecedores",
    description: "Termogênicos e queimadores de gordura",
  },
];

const products = [
  // Proteínas
  {
    name: "Whey Protein Concentrado",
    brand: "Growth Supplements",
    categoryName: "Proteínas",
    description:
      "Whey Protein Concentrado de alta qualidade com 80% de proteína por porção. Ideal para ganho de massa muscular e recuperação pós-treino. Fórmula premium com excelente absorção e digestibilidade.",
    rating: 5,
    reviews: 328,
    inStock: true,
    badge: "MAIS VENDIDO",
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
    variants: [
      { name: "900g", color: "Chocolate", price: 8990, oldPrice: 12990 },
    ],
  },
  {
    name: "Whey Protein Isolado",
    brand: "Max Titanium",
    categoryName: "Proteínas",
    description:
      "Whey Protein Isolado com 90% de proteína pura. Zero lactose e baixíssimo teor de gordura. Absorção ultra rápida e máxima pureza.",
    rating: 5,
    reviews: 245,
    inStock: true,
    badge: "PREMIUM",
    benefits: [
      "90% de proteína pura",
      "Zero lactose",
      "Absorção ultra rápida",
      "Máxima pureza",
      "Ideal para intolerantes à lactose",
      "Baixíssimo teor de gordura",
    ],
    specifications: {
      Sabor: "Baunilha, Chocolate, Morango",
      Peso: "900g",
      Porções: "30 doses",
      "Proteína por dose": "27g",
      Validade: "24 meses",
    },
    howToUse:
      "Misture 1 scoop (30g) em 200ml de água. Consumir imediatamente após o treino para melhor aproveitamento.",
    variants: [
      { name: "900g", color: "Baunilha", price: 12990, oldPrice: 18990 },
    ],
  },
  {
    name: "Whey Protein Hidrolisado",
    brand: "Integralmédica",
    categoryName: "Proteínas",
    description:
      "Whey Protein Hidrolisado com proteína pré-digerida para absorção imediata. A forma mais rápida e eficaz de proteína disponível.",
    rating: 5,
    reviews: 156,
    inStock: true,
    benefits: [
      "Absorção imediata",
      "Proteína pré-digerida",
      "Recuperação muscular acelerada",
      "Alto valor biológico",
      "Fácil digestão",
      "Máxima eficácia",
    ],
    specifications: {
      Sabor: "Chocolate",
      Peso: "900g",
      Porções: "30 doses",
      "Proteína por dose": "28g",
      Validade: "24 meses",
    },
    howToUse:
      "Misture 1 scoop (30g) em 200ml de água. Consumir imediatamente após o treino.",
    variants: [{ name: "900g", color: "Chocolate", price: 15990 }],
  },

  // Pré-treino
  {
    name: "Creatina Monohidratada",
    brand: "Max Titanium",
    categoryName: "Pré-treino",
    description:
      "Creatina Monohidratada 100% pura e micronizada. Aumenta a força, potência e performance nos treinos. Auxilia no ganho de massa muscular magra.",
    rating: 5,
    reviews: 412,
    inStock: true,
    badge: "LANÇAMENTO",
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
    variants: [
      { name: "300g", color: "Sem sabor", price: 5990, oldPrice: 8990 },
    ],
  },
  {
    name: "Pré-Treino Hardcore",
    brand: "Darkness",
    categoryName: "Pré-treino",
    description:
      "Pré-treino com alta dosagem de cafeína e ingredientes estimulantes. Energia explosiva, foco intenso e bomba muscular.",
    rating: 5,
    reviews: 289,
    inStock: true,
    badge: "MAIS VENDIDO",
    benefits: [
      "Energia explosiva",
      "Foco e concentração intensos",
      "Bomba muscular extrema",
      "Aumenta força e resistência",
      "Retarda a fadiga muscular",
      "Sabor incrível",
    ],
    specifications: {
      Sabor: "Frutas Vermelhas, Limão",
      Peso: "300g",
      Porções: "30 doses",
      Cafeína: "300mg por dose",
      Validade: "24 meses",
    },
    howToUse:
      "Misture 1 scoop (10g) em 250ml de água gelada. Consumir 20-30 minutos antes do treino.",
    variants: [
      {
        name: "300g",
        color: "Frutas Vermelhas",
        price: 7990,
        oldPrice: 11990,
      },
    ],
  },
  {
    name: "Beta-Alanina",
    brand: "Growth Supplements",
    categoryName: "Pré-treino",
    description:
      "Beta-Alanina pura para aumento de resistência muscular e redução da fadiga. Ideal para treinos intensos e de longa duração.",
    rating: 4,
    reviews: 134,
    inStock: true,
    benefits: [
      "Aumenta resistência muscular",
      "Reduz fadiga",
      "Melhora performance",
      "Treinos mais intensos",
      "100% pura",
      "Sem aditivos",
    ],
    specifications: {
      Tipo: "Pura",
      Peso: "150g",
      Porções: "50 doses",
      "Beta-Alanina por dose": "3g",
      Validade: "24 meses",
    },
    howToUse:
      "Consumir 3g (1 scoop) antes do treino, misturado em água ou junto com seu pré-treino.",
    variants: [{ name: "150g", color: "Sem sabor", price: 4990 }],
  },

  // Aminoácidos
  {
    name: "BCAA 2:1:1",
    brand: "Growth Supplements",
    categoryName: "Aminoácidos",
    description:
      "BCAA na proporção 2:1:1 para recuperação muscular e prevenção do catabolismo. Aminoácidos essenciais de alta qualidade.",
    rating: 4,
    reviews: 267,
    inStock: true,
    benefits: [
      "Previne catabolismo muscular",
      "Acelera recuperação",
      "Reduz dor muscular",
      "Aumenta síntese proteica",
      "Melhora resistência",
      "Fácil dissolução",
    ],
    specifications: {
      Sabor: "Limão, Laranja, Uva",
      Peso: "200g",
      Porções: "40 doses",
      "BCAAs por dose": "5g",
      Validade: "24 meses",
    },
    howToUse:
      "Misture 1 scoop (5g) em 250ml de água. Consumir durante ou após o treino.",
    variants: [{ name: "200g", color: "Limão", price: 4990, oldPrice: 7990 }],
  },
  {
    name: "Glutamina",
    brand: "Max Titanium",
    categoryName: "Aminoácidos",
    description:
      "Glutamina pura para recuperação muscular, fortalecimento do sistema imunológico e saúde intestinal.",
    rating: 5,
    reviews: 198,
    inStock: true,
    benefits: [
      "Recuperação muscular acelerada",
      "Fortalece sistema imunológico",
      "Melhora saúde intestinal",
      "Previne overtraining",
      "100% pura",
      "Rápida absorção",
    ],
    specifications: {
      Tipo: "L-Glutamina Pura",
      Peso: "300g",
      Porções: "60 doses",
      "Glutamina por dose": "5g",
      Validade: "36 meses",
    },
    howToUse:
      "Consumir 5g (1 scoop) após o treino ou antes de dormir, misturado em água.",
    variants: [{ name: "300g", color: "Sem sabor", price: 3990 }],
  },
  {
    name: "EAA Aminoácidos Essenciais",
    brand: "Integralmédica",
    categoryName: "Aminoácidos",
    description:
      "Aminoácidos essenciais completos para máxima síntese proteica e recuperação muscular. Superior ao BCAA isolado.",
    rating: 5,
    reviews: 145,
    inStock: true,
    badge: "NOVO",
    benefits: [
      "9 aminoácidos essenciais",
      "Máxima síntese proteica",
      "Recuperação completa",
      "Superior ao BCAA",
      "Sem calorias",
      "Sabor agradável",
    ],
    specifications: {
      Sabor: "Limão",
      Peso: "300g",
      Porções: "30 doses",
      "EAAs por dose": "10g",
      Validade: "24 meses",
    },
    howToUse:
      "Misture 1 scoop (10g) em 300ml de água. Consumir durante ou após o treino.",
    variants: [{ name: "300g", color: "Limão", price: 6990 }],
  },

  // Vitaminas
  {
    name: "Multivitamínico",
    brand: "Universal Nutrition",
    categoryName: "Vitaminas",
    description:
      "Multivitamínico completo com vitaminas, minerais e antioxidantes. Suporte completo para saúde e performance.",
    rating: 5,
    reviews: 523,
    inStock: true,
    badge: "BEST SELLER",
    benefits: [
      "Vitaminas e minerais completos",
      "Suporte ao sistema imunológico",
      "Mais energia e disposição",
      "Melhora recuperação",
      "Antioxidantes poderosos",
      "Saúde geral",
    ],
    specifications: {
      Tipo: "Cápsulas",
      Quantidade: "60 cápsulas",
      Porções: "30 doses",
      "Dosagem por dia": "2 cápsulas",
      Validade: "24 meses",
    },
    howToUse:
      "Consumir 2 cápsulas por dia, preferencialmente com as refeições.",
    variants: [{ name: "60 caps", color: "Padrão", price: 6990 }],
  },
  {
    name: "Vitamina D3",
    brand: "Growth Supplements",
    categoryName: "Vitaminas",
    description:
      "Vitamina D3 em alta dosagem para saúde óssea, imunidade e bem-estar geral.",
    rating: 5,
    reviews: 234,
    inStock: true,
    benefits: [
      "Fortalece ossos e dentes",
      "Aumenta imunidade",
      "Melhora humor",
      "Auxilia absorção de cálcio",
      "Saúde cardiovascular",
      "Alta dosagem",
    ],
    specifications: {
      Tipo: "Cápsulas",
      Quantidade: "60 cápsulas",
      Porções: "60 doses",
      "Dosagem por cápsula": "2000 UI",
      Validade: "24 meses",
    },
    howToUse: "Consumir 1 cápsula por dia, com uma refeição.",
    variants: [{ name: "60 caps", color: "Padrão", price: 2990 }],
  },
  {
    name: "Vitamina C 1000mg",
    brand: "Max Titanium",
    categoryName: "Vitaminas",
    description:
      "Vitamina C em alta dosagem para fortalecer o sistema imunológico e ação antioxidante poderosa.",
    rating: 4,
    reviews: 312,
    inStock: true,
    benefits: [
      "Fortalece imunidade",
      "Potente antioxidante",
      "Melhora absorção de ferro",
      "Saúde da pele",
      "Combate radicais livres",
      "Alta dosagem",
    ],
    specifications: {
      Tipo: "Cápsulas",
      Quantidade: "60 cápsulas",
      Porções: "60 doses",
      "Dosagem por cápsula": "1000mg",
      Validade: "24 meses",
    },
    howToUse: "Consumir 1 cápsula por dia, preferencialmente pela manhã.",
    variants: [{ name: "60 caps", color: "Padrão", price: 3490 }],
  },

  // Ômega 3
  {
    name: "Ômega 3",
    brand: "Now Foods",
    categoryName: "Ômega 3",
    description:
      "Ômega 3 de alta concentração com EPA e DHA para saúde cardiovascular, cerebral e articular.",
    rating: 4,
    reviews: 456,
    inStock: false,
    benefits: [
      "Saúde cardiovascular",
      "Função cerebral otimizada",
      "Reduz inflamação",
      "Saúde das articulações",
      "Melhora humor",
      "Alta concentração de EPA/DHA",
    ],
    specifications: {
      Tipo: "Softgel",
      Quantidade: "100 cápsulas",
      Porções: "100 doses",
      "EPA + DHA": "600mg por cápsula",
      Validade: "24 meses",
    },
    howToUse: "Consumir 1-2 cápsulas por dia com refeições.",
    variants: [
      { name: "100 caps", color: "Padrão", price: 5490, oldPrice: 7990 },
    ],
  },
  {
    name: "Ômega 3 Super Concentrado",
    brand: "Essential Nutrition",
    categoryName: "Ômega 3",
    description:
      "Ômega 3 super concentrado com 1000mg de EPA+DHA por cápsula. Máxima pureza e eficácia.",
    rating: 5,
    reviews: 178,
    inStock: true,
    badge: "PREMIUM",
    benefits: [
      "Super concentrado",
      "1000mg EPA+DHA",
      "Máxima pureza",
      "Sem contaminantes",
      "Saúde completa",
      "Certificado internacional",
    ],
    specifications: {
      Tipo: "Softgel",
      Quantidade: "60 cápsulas",
      Porções: "60 doses",
      "EPA + DHA": "1000mg por cápsula",
      Validade: "24 meses",
    },
    howToUse: "Consumir 1 cápsula por dia com refeição.",
    variants: [{ name: "60 caps", color: "Padrão", price: 8990 }],
  },

  // Emagrecedores
  {
    name: "Termogênico Black",
    brand: "Darkness",
    categoryName: "Emagrecedores",
    description:
      "Termogênico potente para acelerar o metabolismo, queimar gordura e fornecer energia. Fórmula avançada com múltiplos ingredientes.",
    rating: 5,
    reviews: 389,
    inStock: true,
    badge: "HOT",
    benefits: [
      "Acelera metabolismo",
      "Queima gordura",
      "Aumenta energia",
      "Suprime apetite",
      "Foco e concentração",
      "Fórmula potente",
    ],
    specifications: {
      Tipo: "Cápsulas",
      Quantidade: "60 cápsulas",
      Porções: "30 doses",
      Cafeína: "200mg por dose",
      Validade: "24 meses",
    },
    howToUse:
      "Consumir 2 cápsulas pela manhã, antes do café da manhã. Não consumir após 18h.",
    variants: [{ name: "60 caps", color: "Padrão", price: 6990 }],
  },
  {
    name: "CLA Ácido Linoleico",
    brand: "Max Titanium",
    categoryName: "Emagrecedores",
    description:
      "CLA para redução de gordura corporal e definição muscular. Auxilia na queima de gordura e preservação de massa magra.",
    rating: 4,
    reviews: 201,
    inStock: true,
    benefits: [
      "Reduz gordura corporal",
      "Preserva massa magra",
      "Melhora definição muscular",
      "Sem estimulantes",
      "Uso diurno e noturno",
      "Alta concentração",
    ],
    specifications: {
      Tipo: "Softgel",
      Quantidade: "120 cápsulas",
      Porções: "60 doses",
      "CLA por dose": "2000mg",
      Validade: "24 meses",
    },
    howToUse:
      "Consumir 2 cápsulas 2x ao dia, com refeições (total 4 cápsulas/dia).",
    variants: [{ name: "120 caps", color: "Padrão", price: 5990 }],
  },
  {
    name: "L-Carnitina Líquida",
    brand: "Integralmédica",
    categoryName: "Emagrecedores",
    description:
      "L-Carnitina líquida para transporte de gordura e energia. Absorção rápida e sabor agradável.",
    rating: 4,
    reviews: 267,
    inStock: true,
    benefits: [
      "Transporte de gordura",
      "Mais energia",
      "Absorção rápida",
      "Sabor agradável",
      "Sem estimulantes",
      "Uso antes do treino",
    ],
    specifications: {
      Sabor: "Limão",
      Volume: "480ml",
      Porções: "16 doses",
      "L-Carnitina por dose": "2000mg",
      Validade: "12 meses",
    },
    howToUse:
      "Consumir 30ml antes do treino ou atividade física. Agitar antes de usar.",
    variants: [{ name: "480ml", color: "Limão", price: 4990 }],
  },
];

async function main() {
  console.log("🌱 Iniciando o seeding de suplementos...");

  try {
    // Limpar dados existentes
    console.log("🧹 Limpando dados existentes...");
    await db.delete(productVariantTable);
    await db.delete(productTable);
    await db.delete(categoryTable);
    console.log("✅ Dados limpos com sucesso!");

    // Inserir categorias primeiro
    const categoryMap = new Map<string, string>();

    console.log("📂 Criando categorias...");
    for (const categoryData of categories) {
      const categoryId = crypto.randomUUID();
      const categorySlug = generateSlug(categoryData.name);

      console.log(`  📁 Criando categoria: ${categoryData.name}`);

      await db.insert(categoryTable).values({
        id: categoryId,
        name: categoryData.name,
        slug: categorySlug,
      });

      categoryMap.set(categoryData.name, categoryId);
    }

    // Inserir produtos
    for (const productData of products) {
      const productId = crypto.randomUUID();
      const productSlug = generateSlug(productData.name);
      const categoryId = categoryMap.get(productData.categoryName);

      if (!categoryId) {
        throw new Error(
          `Categoria "${productData.categoryName}" não encontrada`,
        );
      }

      console.log(`📦 Criando produto: ${productData.name}`);

      await db.insert(productTable).values({
        id: productId,
        name: productData.name,
        slug: productSlug,
        brand: productData.brand,
        description: productData.description,
        categoryId: categoryId,
        rating: productData.rating,
        reviews: productData.reviews,
        inStock: productData.inStock,
        badge: productData.badge,
        benefits: productData.benefits,
        specifications: JSON.stringify(productData.specifications),
        howToUse: productData.howToUse,
      });

      // Inserir variantes do produto
      for (const variantData of productData.variants) {
        const variantId = crypto.randomUUID();

        console.log(`  🎨 Criando variante: ${variantData.name}`);

        await db.insert(productVariantTable).values({
          id: variantId,
          name: variantData.name,
          productId: productId,
          color: variantData.color,
          imageUrl:
            "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500",
          priceInCents: variantData.price,
          oldPriceInCents:
            "oldPrice" in variantData ? variantData.oldPrice : undefined,
          slug: generateSlug(`${productData.name}-${variantData.name}`),
        });
      }
    }

    console.log("✅ Seeding de suplementos concluído com sucesso!");
    console.log(
      `📊 Foram criadas ${categories.length} categorias, ${
        products.length
      } produtos com ${products.reduce(
        (acc, p) => acc + p.variants.length,
        0,
      )} variantes.`,
    );
  } catch (error) {
    console.error("❌ Erro durante o seeding:", error);
    throw error;
  }
}

main().catch(console.error);
