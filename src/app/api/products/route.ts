import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db } from "@/db";
import { categoryTable, productTable, productVariantTable } from "@/db/schema";

export async function GET() {
  try {
    const products = await db
      .select({
        id: productTable.id,
        name: productTable.name,
        slug: productTable.slug,
        brand: productTable.brand,
        category: categoryTable.name,
        rating: productTable.rating,
        inStock: productTable.inStock,
        badge: productTable.badge,
        variantPrice: productVariantTable.priceInCents,
        variantOldPrice: productVariantTable.oldPriceInCents,
      })
      .from(productTable)
      .innerJoin(categoryTable, eq(productTable.categoryId, categoryTable.id))
      .innerJoin(
        productVariantTable,
        eq(productTable.id, productVariantTable.productId),
      );

    // Agrupar produtos por ID e pegar a primeira variante
    const groupedProducts = products.reduce(
      (acc, product) => {
        if (!acc[product.id]) {
          acc[product.id] = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            category: product.category,
            price: product.variantPrice / 100,
            oldPrice: product.variantOldPrice
              ? product.variantOldPrice / 100
              : undefined,
            rating: product.rating,
            badge: product.badge || undefined,
            inStock: product.inStock,
          };
        }
        return acc;
      },
      {} as Record<
        string,
        {
          id: string;
          name: string;
          brand: string;
          category: string;
          price: number;
          oldPrice?: number;
          rating: number;
          badge?: string;
          inStock: boolean;
        }
      >,
    );

    return NextResponse.json(Object.values(groupedProducts));
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar produtos" },
      { status: 500 },
    );
  }
}
