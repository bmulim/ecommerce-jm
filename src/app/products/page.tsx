"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

import ProductFilters, { FilterState } from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";

interface Product {
  id: string;
  name: string;
  brand?: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
  inStock?: boolean;
}

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    brands: [],
    rating: 0,
    inStock: false,
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [loading, setLoading] = useState(true);

  // Buscar produtos da API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let products = [...allProducts];

    // Filtro de busca
    if (searchTerm) {
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase())),
      );
    }

    // Filtro de categorias
    if (filters.categories.length > 0) {
      products = products.filter((p) =>
        filters.categories.includes(p.category),
      );
    }

    // Filtro de preço
    products = products.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
    );

    // Filtro de marcas
    if (filters.brands.length > 0 && filters.brands[0] !== "") {
      products = products.filter(
        (p) => p.brand && filters.brands.includes(p.brand),
      );
    }

    // Filtro de avaliação
    if (filters.rating > 0) {
      products = products.filter((p) => p.rating >= filters.rating);
    }

    // Filtro de estoque
    if (filters.inStock) {
      products = products.filter((p) => p.inStock);
    }

    // Ordenação
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(products);
    setCurrentPage(1);
  }, [searchTerm, filters, sortBy, allProducts]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black pt-24 pb-10 text-white sm:pt-28">
        <div className="text-center">
          <div className="border-primary mb-4 inline-block h-16 w-16 animate-spin rounded-full border-4 border-t-transparent" />
          <p className="text-zinc-400">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-10 text-white sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-2 text-4xl font-bold text-white">
            Nossos Produtos
          </h1>
          <p className="text-zinc-400">
            Encontre os melhores suplementos para seus objetivos
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:border-primary w-full rounded-lg border border-zinc-800/50 bg-zinc-900/50 py-3 pr-4 pl-12 text-white placeholder-zinc-500 backdrop-blur-sm transition-colors focus:outline-none"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProductFilters onFilterChange={handleFilterChange} />
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Sort and Count */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-zinc-400">
                {filteredProducts.length} produto
                {filteredProducts.length !== 1 ? "s" : ""} encontrado
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="focus:border-primary rounded-lg border border-zinc-800/50 bg-zinc-900/50 px-4 py-2 text-white backdrop-blur-sm transition-colors focus:outline-none"
              >
                <option value="relevance">Mais Relevantes</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name-asc">A-Z</option>
                <option value="rating">Melhor Avaliação</option>
              </select>
            </div>

            {/* Products */}
            <ProductGrid products={paginatedProducts} />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="hover:border-primary/50 rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-2 text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>

                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <motion.button
                        key={page}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handlePageChange(page)}
                        className={`h-10 w-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? "bg-primary text-black"
                            : "hover:border-primary/50 border border-zinc-800/50 bg-zinc-900/50 text-white"
                        }`}
                      >
                        {page}
                      </motion.button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="text-zinc-600">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="hover:border-primary/50 rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-2 text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
