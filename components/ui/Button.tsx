"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  target?: string;
};

export default function Button({ href, children, variant = "primary", className = "", target }: Props) {
  const base =
    "group inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 text-[15px] font-medium transition-all duration-200 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.98] sm:w-auto";

  const styles = {
    primary: "brand-gradient text-ink shadow-[0_16px_32px_-12px_rgba(200,165,92,0.45)]",
    outline: "border border-champagne/25 text-white hover:border-champagne/50",
    dark: "bg-ink text-white",
  };

  const iconWrap = {
    primary: "bg-ink text-gold-light",
    outline: "bg-champagne/10 text-champagne",
    dark: "brand-gradient text-ink",
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:rotate-45 ${iconWrap[variant]}`}
      >
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
    </motion.a>
  );
}
