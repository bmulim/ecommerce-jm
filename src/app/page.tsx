"use client";

import { motion } from "framer-motion";

import { BenefitsSection } from "@/components/BenefitsSection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col overflow-hidden"
    >
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <BenefitsSection />
      <NewsletterSection />
    </motion.div>
  );
}
