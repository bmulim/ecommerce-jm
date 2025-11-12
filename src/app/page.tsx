"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";

import { BenefitsSection } from "@/components/BenefitsSection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterSection } from "@/components/NewsletterSection";

// Skeleton Loaders
function SectionSkeleton() {
  return (
    <div className="min-h-[300px] w-full animate-pulse overflow-hidden bg-gradient-to-b from-zinc-900/50 to-black/50 md:min-h-[400px]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-12 space-y-4">
          <div className="mx-auto h-8 w-64 rounded-lg bg-zinc-800/50"></div>
          <div className="mx-auto h-4 w-96 rounded-lg bg-zinc-800/30"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-96 rounded-2xl border border-zinc-800/50 bg-zinc-900/30"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <HeroSection />

      <Suspense fallback={<SectionSkeleton />}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CategorySection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <NewsletterSection />
      </Suspense>
    </motion.div>
  );
}
