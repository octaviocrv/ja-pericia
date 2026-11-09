"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE, whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

// Ícone oficial do WhatsApp (o lucide não tem marcas)
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
    </svg>
  );
}

// Seção final: CTA (esquerda) + onde estou / contatos (direita).
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
    <section id="contato" className="relative overflow-hidden bg-bg section-space">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(800px 460px at 85% 100%, rgba(200,165,92,0.16), transparent 60%)",
        }}
      />

      <div className="relative page-container grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">Contato</span>

          <h2 className="section-title text-white">
            Seu caso merece <br className="hidden sm:block" />
            uma análise <em className="font-normal italic text-[#DCC28A]">precisa</em>.
          </h2>

          <p className="mt-5 max-w-[30rem] text-[15px] leading-[1.75] text-white/80 sm:text-[16px]">
            Envie as informações iniciais e receba uma avaliação técnica antes de qualquer proposta.
          </p>

          <a
            href={whatsappLink(WHATSAPP_MENSAGENS.padrao)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center gap-3 rounded-lg bg-[linear-gradient(100deg,#E3C789_0%,#D2B274_50%,#B9965C_100%)] px-4 text-[14px] sm:text-[15px] font-semibold text-ink shadow-[0_14px_40px_-10px_rgba(200,165,92,0.55)] transition-transform duration-200 hover:-translate-y-px sm:px-8"
          >
            <WhatsAppIcon className="h-[17px] w-[17px]" />
            Apresentar um caso pelo WhatsApp
          </a>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col divide-y divide-line border-y border-line lg:col-span-5"
        >
          {contatos.map(({ icon: Icon, label, value, sub, href }) => {
            const conteudo = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.05]">
                  <Icon className="h-[17px] w-[17px] text-gold-light" strokeWidth={1.6} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-white/60">{label}</span>
                  <span className="mt-0.5 break-words [overflow-wrap:anywhere] text-[14px] font-medium sm:text-[15px] text-white">{value}</span>
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
