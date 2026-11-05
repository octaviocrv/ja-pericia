"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
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
    <section id="contato" className="olive-deep-surface relative overflow-hidden py-14 sm:py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(800px 460px at 85% 100%, rgba(200,165,92,0.16), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-page grid-cols-1 gap-8 px-6 md:px-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col items-start lg:col-span-6"
        >
          <SectionLabel>Contato</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.6rem]">
            Ficou com alguma dúvida sobre o seu caso?
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.75] text-muted sm:text-[17px]">
            Explique brevemente a situação e eu avalio se a perícia contábil pode ajudar. A análise
            inicial serve para eu entender o contexto e orientar o próximo passo com clareza.
          </p>
          <div className="mt-7 w-full sm:w-auto">
            <Button
              href={whatsappLink(WHATSAPP_MENSAGENS.padrao)}
              target="_blank"
              className="whitespace-nowrap sm:min-w-[280px]"
            >
              Apresentar um caso
            </Button>
          </div>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col divide-y divide-champagne/[0.12] border-y border-champagne/[0.12] lg:col-span-6"
        >
          {contatos.map(({ icon: Icon, label, value, sub, href }) => {
            const conteudo = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne/25 bg-olive/70">
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
