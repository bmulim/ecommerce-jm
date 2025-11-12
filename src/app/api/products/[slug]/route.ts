import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db } from "@/db";
import { categoryTable, productTable, productVariantTable } from "@/db/schema";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    const result = await db
      .select({
        id: productTable.id,
        slug: productTable.slug,
        name: productTable.name,
        brand: productTable.brand,
        category: categoryTable.name,
        description: productTable.description,
        rating: productTable.rating,
        reviews: productTable.reviews,
        inStock: productTable.inStock,
        badge: productTable.badge,
        benefits: productTable.benefits,
        specifications: productTable.specifications,
        howToUse: productTable.howToUse,
        variantPrice: productVariantTable.priceInCents,
        variantOldPrice: productVariantTable.oldPriceInCents,
      })
      .from(productTable)
      .innerJoin(categoryTable, eq(productTable.categoryId, categoryTable.id))
      .innerJoin(
        productVariantTable,
        eq(productTable.id, productVariantTable.productId),
      )
      .where(eq(productTable.slug, slug))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Produto não encontrado" },
        { status: 404 },
      );
    }

    const product = result[0];

    const formattedProduct = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.variantPrice / 100,
      oldPrice: product.variantOldPrice
        ? product.variantOldPrice / 100
        : undefined,
      rating: product.rating,
      reviews: product.reviews,
      inStock: product.inStock,
      badge: product.badge || undefined,
      description: product.description,
      benefits: product.benefits || [],
      specifications: product.specifications
        ? JSON.parse(product.specifications)
        : {},
      howToUse: product.howToUse || "",
    };

    return NextResponse.json(formattedProduct);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return NextResponse.json(
      { error: "Erro ao buscar produto" },
      { status: 500 },
    );
  }
}
