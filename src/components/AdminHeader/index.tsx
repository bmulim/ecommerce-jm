"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import logo from "./logo_bl.svg";

export function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/inventory", label: "Inventário", icon: Package },
    { href: "/admin/products/new", label: "Novo Produto", icon: ShoppingBag },
    { href: "/admin/reports", label: "Relatórios", icon: BarChart3 },
  ];

  const handleLogout = () => {
    // Implementar lógica de logout
    router.push("/admin/login");
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-white/10 bg-black/80 backdrop-blur-xl sm:h-20"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/admin" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Image
              src={logo}
              alt="JM Store Admin"
              width={100}
              height={60}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </motion.div>
          <div className="hidden border-l border-white/20 pl-3 md:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Admin
            </p>
            <p className="text-sm font-light text-zinc-400">Painel</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </motion.button>

          {/* User Menu */}
          <div className="relative hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="hidden font-medium text-white md:block">
                Admin
              </span>
              <ChevronDown
                className={`h-4 w-4 text-zinc-400 transition-transform ${
                  isUserMenuOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 bg-black/95 shadow-xl backdrop-blur-xl"
                >
                  <div className="border-b border-white/10 px-4 py-3">
                    <p className="text-sm font-medium text-white">Admin User</p>
                    <p className="text-xs text-zinc-400">admin@jmstore.com</p>
                  </div>
                  <div className="p-2">
                    <Link href="/admin/settings">
                      <motion.div
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Configurações</span>
                      </motion.div>
                    </Link>
                    <motion.button
                      whileHover={{ backgroundColor: "rgba(239,68,68,0.1)" }}
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:text-red-300"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sair</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="space-y-1 px-4 py-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}

              <div className="border-t border-white/10 pt-4">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sair</span>
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
