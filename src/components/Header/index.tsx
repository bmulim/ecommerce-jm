"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import banner from "./logo_bl.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isProductsPage = pathname?.startsWith("/products");
  const isContactPage = pathname?.startsWith("/contact");

  const buttonClasses =
    "px-5 md:px-6 lg:px-7 py-2.5 md:py-3 font-medium tracking-wide transition-all duration-300 ease-out transform-gpu relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C2A537]/50";

  const primaryButton = `${buttonClasses} rounded-xl bg-gradient-to-br from-[#FFE17D] via-[#D4B547] to-[#B8941F] text-black/90 border border-[#C2A537]/20 shadow-[0_8px_16px_-2px_rgba(194,165,55,0.2),inset_0_-4px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.1)] hover:shadow-[0_16px_32px_-4px_rgba(194,165,55,0.3),inset_0_-4px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm ring-offset-2`;

  const secondaryButton = `${buttonClasses} rounded-lg bg-gradient-to-br from-black/5 via-black/10 to-black/20 text-[#E6D9A7] hover:text-[#FFE17D] border border-[#C2A537]/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(194,165,55,0.15),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.01] active:scale-[0.99] hover:bg-gradient-to-br hover:from-black/10 hover:via-black/15 hover:to-black/25 backdrop-blur-md`;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#C2A537]/10 bg-linear-to-br from-black/95 via-black/85 to-black/75 px-4 py-3 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.1)] backdrop-blur-xl backdrop-saturate-150 sm:h-20 sm:px-6 sm:py-4"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: [0, -2, 2, 0],
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="cursor-pointer"
      >
        <Link href="/">
          <motion.div className="relative flex items-center justify-center px-2">
            <div className="relative z-10">
              <Image
                src={banner}
                alt="Logo JM Store"
                width={120}
                height={80}
                priority
              />
            </div>
          </motion.div>
        </Link>
      </motion.div>

      <nav className="relative">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border border-[#C2A537]/20 p-3 md:hidden"
          aria-label="Menu"
        >
          <div className="relative flex h-6 w-6 flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -6 }}
              className="absolute h-0.5 w-full bg-[#C2A537]"
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="absolute h-0.5 w-full bg-[#C2A537]"
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 6 }}
              className="absolute h-0.5 w-full bg-[#C2A537]"
            />
          </div>
        </motion.button>

        <ul className="hidden items-center space-x-3 md:flex">
          {!isHomePage && (
            <li>
              <Link
                href="/"
                className={isHomePage ? primaryButton : secondaryButton}
              >
                Início
              </Link>
            </li>
          )}
          <li>
            <Link
              href="/products"
              className={isProductsPage ? primaryButton : secondaryButton}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={isContactPage ? primaryButton : secondaryButton}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link href="/login" className={primaryButton}>
              Entrar
            </Link>
          </li>
        </ul>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="absolute top-16 right-0 min-w-[220px] rounded-2xl border-2 border-[#C2A537]/40 bg-black/98 p-6 md:hidden"
            >
              <ul className="space-y-4">
                {!isHomePage && (
                  <li>
                    <Link
                      href="/"
                      className={`${isHomePage ? primaryButton : secondaryButton} block w-full text-center`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Início
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/products"
                    className={`${isProductsPage ? primaryButton : secondaryButton} block w-full text-center`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${isContactPage ? primaryButton : secondaryButton} block w-full text-center`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className={`${primaryButton} block w-full text-center`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
