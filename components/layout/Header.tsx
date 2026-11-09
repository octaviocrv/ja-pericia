"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/app/assets/logo-ja.jpg";
import { SITE, whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Como funciona", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hdr-wrap fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`hdr relative mx-auto flex max-w-page items-center justify-between gap-3 rounded-2xl border border-[rgba(244,239,229,0.14)] transition-all duration-300 sm:gap-6 ${
          scrolled
            ? "bg-[rgba(18,17,16,0.92)] px-[clamp(14px,4vw,20px)] py-3"
            : "bg-[rgba(26,25,23,0.82)] px-[clamp(14px,4vw,22px)] py-4"
        }`}
        style={{
          boxShadow: "0 18px 40px -18px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
          backdropFilter: "blur(16px)",
        }}
      >
        <a href="#" className="hdr-brand flex min-w-0 items-center gap-3 leading-none">
          <span className="hdr-logo relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold/60 shadow-[0_0_0_3px_rgba(8,8,8,0.9)]">
            <Image src={logo} alt="Logo JA" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="hdr-name text-[18px] font-semibold tracking-tight text-white">{SITE.perito}</span>
            <span className="hdr-sub mt-1 whitespace-nowrap text-[length:min(2.35vw,10px)] uppercase tracking-[0.12em] text-champagne sm:tracking-[0.18em]">
              {SITE.cargo} - {SITE.marca}
            </span>
          </span>
        </a>

        <nav className="hdr-nav hidden flex-1 items-center justify-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={whatsappLink(WHATSAPP_MENSAGENS.padrao)}
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-cta brand-gradient inline-flex items-center rounded-full px-5 py-2.5 text-[14px] font-medium text-ink transition-transform hover:-translate-y-px"
          >
            Apresentar um caso
          </a>
        </div>

        <button
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-gold md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" strokeWidth={1.8} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-[calc(100%+10px)] w-[min(88vw,300px)] rounded-2xl border border-line bg-card p-3 shadow-card md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={whatsappLink(WHATSAPP_MENSAGENS.padrao)}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-gradient mt-2 flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium text-ink"
              >
                Apresentar um caso
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
