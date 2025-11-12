"use client";

import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  rating: number;
  inStock: boolean;
}

const categories: FilterOption[] = [
  { id: "proteinas", label: "Proteínas", count: 45 },
  { id: "creatinas", label: "Creatinas", count: 28 },
  { id: "pre-treinos", label: "Pré-Treinos", count: 32 },
  { id: "aminoacidos", label: "Aminoácidos", count: 38 },
  { id: "hipertrofia", label: "Hipertrofia", count: 52 },
  { id: "saude", label: "Saúde", count: 41 },
];

const brands: FilterOption[] = [
  { id: "max-titanium", label: "Max Titanium", count: 68 },
  { id: "integralmedica", label: "IntegralMédica", count: 54 },
  { id: "growth", label: "Growth", count: 43 },
  { id: "probiotica", label: "Probiótica", count: 39 },
  { id: "darkness", label: "Darkness", count: 35 },
  { id: "universal", label: "Universal", count: 28 },
];

export default function ProductFilters({
  onFilterChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 500],
    brands: [],
    rating: 0,
    inStock: false,
  });

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];

    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBrandToggle = (brandId: string) => {
    const newBrands = filters.brands.includes(brandId)
      ? filters.brands.filter((b) => b !== brandId)
      : [...filters.brands, brandId];

    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (index: 0 | 1, value: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange];
    newPriceRange[index] = value;
    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStockToggle = () => {
    const newFilters = { ...filters, inStock: !filters.inStock };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const newFilters: FilterState = {
      categories: [],
      priceRange: [0, 500],
      brands: [],
      rating: 0,
      inStock: false,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const activeFiltersCount =
    filters.categories.length +
    filters.brands.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.inStock ? 1 : 0);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="mb-6 lg:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-lg border border-zinc-800/50 bg-zinc-900/50 px-4 py-3 text-white backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            <span className="font-semibold">Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="bg-primary rounded-full px-2 py-1 text-xs font-bold text-black">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <X
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-0" : "rotate-45"
            }`}
          />
        </motion.button>
      </div>

      {/* Filters Panel */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : undefined,
          opacity: isOpen ? 1 : undefined,
        }}
        className={`${
          isOpen ? "block" : "hidden lg:block"
        } space-y-6 rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-xl font-bold text-white">
            <Filter className="text-primary h-5 w-5" />
            Filtros
          </h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-primary hover:text-primary/80 text-sm transition-colors"
            >
              Limpar tudo
            </button>
          )}
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Categorias</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category.id}
                className="group flex cursor-pointer items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="text-primary focus:ring-primary h-4 w-4 rounded border-zinc-700 focus:ring-offset-0"
                />
                <span className="flex-1 text-zinc-300 transition-colors group-hover:text-white">
                  {category.label}
                </span>
                <span className="text-xs text-zinc-500">
                  ({category.count})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Faixa de Preço</h4>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-1 block text-xs text-zinc-400">
                  Mínimo
                </label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                  className="focus:border-primary w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-white focus:outline-none"
                  placeholder="R$ 0"
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-xs text-zinc-400">
                  Máximo
                </label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                  className="focus:border-primary w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-white focus:outline-none"
                  placeholder="R$ 500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Marcas</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label
                key={brand.id}
                className="group flex cursor-pointer items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand.id)}
                  onChange={() => handleBrandToggle(brand.id)}
                  className="text-primary focus:ring-primary h-4 w-4 rounded border-zinc-700 focus:ring-offset-0"
                />
                <span className="flex-1 text-zinc-300 transition-colors group-hover:text-white">
                  {brand.label}
                </span>
                <span className="text-xs text-zinc-500">({brand.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 className="mb-3 font-semibold text-white">Avaliação Mínima</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="group flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="text-primary focus:ring-primary h-4 w-4 border-zinc-700 focus:ring-offset-0"
                />
                <div className="flex items-center gap-1">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <span key={i} className="text-zinc-600">
                      ★
                    </span>
                  ))}
                  <span className="ml-1 text-sm text-zinc-400">ou mais</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="group flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={handleStockToggle}
              className="text-primary focus:ring-primary h-4 w-4 rounded border-zinc-700 focus:ring-offset-0"
            />
            <span className="text-zinc-300 transition-colors group-hover:text-white">
              Apenas produtos em estoque
            </span>
          </label>
        </div>
      </motion.div>
    </>
  );
}
