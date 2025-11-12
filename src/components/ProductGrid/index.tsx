"use client";

import ProductCard from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-20">
        <div className="text-center text-zinc-500">
          <p className="mb-2 text-2xl font-bold">Nenhum produto encontrado</p>
          <p className="text-sm">
            Tente ajustar os filtros ou buscar por outros termos
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
