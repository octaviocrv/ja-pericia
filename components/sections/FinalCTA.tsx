"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE, whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

// Seção final: onde estou + contato + CTA.
export default function FinalCTA() {
  const contatos = [
    {
      icon: MapPin,
      label: "Onde estou",
      value: SITE.endereco
        ? `${SITE.endereco} · ${SITE.cidade}, ${SITE.estado}`
        : `${SITE.cidade}, ${SITE.estado}`,
      sub: "Atendimento em todo o Brasil",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Fale comigo diretamente",
      href: whatsappLink(WHATSAPP_MENSAGENS.padrao),
    },
    { icon: Mail, label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Instagram, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagramUrl },
  ];

  return (
    <section id="contato" className="relative overflow-hidden bg-bg py-14 sm:py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(800px 460px at 85% 100%, rgba(200,165,92,0.16), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-page grid-cols-1 gap-8 px-6 md:px-12 lg:grid-cols-12 lg:gap-14">
        <motion.ul
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col divide-y divide-line border-y border-line lg:col-span-8 lg:col-start-3"
        >
          {contatos.map(({ icon: Icon, label, value, sub, href }) => {
            const conteudo = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.05]">
                  <Icon className="h-[17px] w-[17px] text-gold-light" strokeWidth={1.6} />
                </span>
                <span className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-white/45">{label}</span>
                  <span className="mt-0.5 text-[15px] font-medium text-white">{value}</span>
                  {sub && <span className="mt-0.5 text-[13px] text-muted">{sub}</span>}
                </span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 transition-opacity hover:opacity-80"
                  >
                    {conteudo}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 py-4">{conteudo}</div>
                )}
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
