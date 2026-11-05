"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, MapPin, Scale } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import joaoFoto from "@/app/assets/joao-firmino-apresentacao.jpg";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE } from "@/lib/config";

const destaques = [
  { icon: Scale, title: "Perícia judicial e extrajudicial" },
  { icon: FileText, title: "Laudos e pareceres técnicos" },
  { icon: MapPin, title: "Atendimento em todo o Brasil" },
];

export default function AboutPerito() {
  return (
    <section id="sobre" className="relative bg-bg py-14 sm:py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-8 px-6 md:px-12 lg:grid-cols-12 lg:gap-14">
        {/* Retrato */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative order-2 mx-auto w-full max-w-[420px] lg:order-1 lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-card">
            <Image
              src={joaoFoto}
              alt={`${SITE.perito}, ${SITE.cargo.toLowerCase()}`}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              quality={90}
              className="origin-[40%_80%] scale-[1.15] object-cover object-[50%_30%]"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-bg/95 via-bg/45 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-[17px] font-semibold text-white">{SITE.perito}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-champagne/85">
                  {SITE.cargo} · {SITE.crc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Apresentação */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="order-1 flex flex-col lg:order-2 lg:col-span-7"
        >
          <SectionLabel>Quem sou eu</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.6rem]">
            Olá, eu sou {SITE.perito}.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.8] text-white/80 sm:text-[17px]">
            Há quase 20 anos, construo minha trajetória na perícia contábil com base em
            responsabilidade técnica, precisão e confiança. Ao longo desse caminho, tive a
            oportunidade de participar de trabalhos relevantes, atuar ao lado de grandes
            profissionais e contribuir em casos que exigiam análise criteriosa e fundamentação
            sólida.
          </p>
          <p className="mt-4 text-[16px] leading-[1.8] text-white/80 sm:text-[17px]">
            Hoje, sigo de forma independente, colocando toda essa experiência a serviço de clientes
            em diferentes regiões do Brasil.
          </p>
          <p className="mt-4 text-[16px] leading-[1.8] text-muted sm:text-[17px]">
            Conduzo pessoalmente cada caso, do exame dos autos à assinatura do laudo, com o respaldo
            da estrutura da {SITE.marca}.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 border-t border-line pt-6 sm:mt-9 sm:pt-8 sm:grid-cols-3 sm:gap-5">
            {destaques.map(({ icon: Icon, title }) => (
              <li key={title} className="flex items-center gap-3 sm:flex-col sm:items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.05]">
                  <Icon className="h-[17px] w-[17px] text-gold" strokeWidth={1.6} />
                </span>
                <span className="text-[14.5px] font-medium leading-snug text-white">{title}</span>
              </li>
            ))}
          </ul>

          {/* TODO: confirmar se o número da JA Contabilidade pode aparecer aqui */}
          <p className="mt-6 text-[13.5px] text-white/50">
            <span className="font-semibold text-gold">+60 empresas</span> atendidas pela{" "}
            {SITE.empresa}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
