"use client";

import { motion } from "framer-motion";
import { Calculator, FileSearch, Handshake, Landmark } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, viewport } from "@/lib/motion";

// Junta "Problema", "Áreas de atuação" e "Para quem é" em uma seção só.
const casos = [
  {
    icon: Landmark,
    title: "Revisão de contratos bancários",
    text: "Juros, encargos e tarifas recalculados para mostrar quanto realmente é devido.",
    para: "Empresas e pessoas físicas",
  },
  {
    icon: Handshake,
    title: "Saída de sócio e apuração de haveres",
    text: "Quanto vale a parte de cada sócio, com balanço de determinação fundamentado.",
    para: "Sócios e empresas",
  },
  {
    icon: Calculator,
    title: "Cálculos de sentença",
    text: "Liquidação, atualização de valores e conferência dos cálculos da outra parte.",
    para: "Advogados e partes",
  },
  {
    icon: FileSearch,
    title: "Contestar ou acompanhar um laudo",
    text: "Assistência técnica: quesitos, acompanhamento da perícia e parecer sobre o laudo oficial.",
    para: "Advogados e escritórios",
  },
];

export default function WhenYouNeed() {
  return (
    <section id="atuacao" className="taupe-surface relative py-14 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-[680px]"
        >
          <SectionLabel>Quando você precisa de mim</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.6rem]">
            <span className="block">Discordar de um número não basta.</span>
            <span className="block">É preciso provar o número correto.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-muted sm:text-[17px]">
            Em situações que exigem precisão, ofereço uma análise técnica, imparcial e
            fundamentada para esclarecer os fatos e sustentar decisões com segurança.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {casos.map(({ icon: Icon, title, text, para }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex flex-col rounded-[24px] border border-champagne/[0.12] bg-bg/40 p-5 transition-colors duration-300 hover:border-gold/30 sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive ring-1 ring-gold/20">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-[1.15rem] font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-muted">{text}</p>
              <p className="mt-5 border-t border-champagne/[0.12] pt-4 text-[11px] uppercase tracking-[0.14em] text-champagne/80">
                Para: {para}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-6 text-[14px] leading-6 text-white/50"
        >
          Também elaboro laudos e pareceres extrajudiciais e arbitrais, para negociações e decisões
          antes que exista um processo.
        </motion.p>
      </div>
    </section>
  );
}
