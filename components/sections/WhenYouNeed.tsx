"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, viewport } from "@/lib/motion";

const areas = [
  { title: "Revisão de contratos bancários", text: "Análise de juros, encargos e capitalização em financiamentos e empréstimos." },
  { title: "Cálculos trabalhistas", text: "Liquidação de sentença, verbas rescisórias, horas extras e reflexos." },
  { title: "Apuração de haveres", text: "Dissolução societária, retirada de sócios e avaliação de participações." },
  { title: "Lucros cessantes e danos", text: "Quantificação de prejuízos financeiros com base documental." },
  { title: "Pareceres técnicos", text: "Exame criterioso de laudos e elaboração de pareceres com fundamentação contábil." },
  { title: "Perícia extrajudicial", text: "Análises contábeis para negociações, auditorias e prevenção de litígios." },
];

export default function WhenYouNeed() {
  return (
    <section id="atuacao" aria-labelledby="atuacao-title" className="relative bg-[#0c0b09] py-16 md:pb-14 md:pt-[88px]">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={viewport}
          className="grid gap-6 lg:grid-cols-[1.65fr_1fr] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>Áreas de atuação</SectionLabel>
            <h2 id="atuacao-title" className="font-serif font-normal text-[2rem] leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.6rem]">
              Perícia em cada <span className="text-gold-light">detalhe.</span>
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.75] text-muted lg:pb-1">
            Perícia contábil judicial e extrajudicial, com rigor técnico e fundamentação sólida para esclarecer o seu caso.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={viewport}
          className="mt-10 grid overflow-hidden rounded-[11px] border border-gold/30 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ title, text }, i) => (
            <article key={title}
              className="border-gold/15 px-7 py-8 [&:not(:last-child)]:border-b sm:min-h-[195px] sm:[&:not(:last-child)]:border-b-0 sm:[&:nth-child(-n+4)]:border-b sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(-n+4)]:border-b-0 lg:[&:nth-child(odd)]:border-r-0 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r">
              <span className="text-[12px] font-medium leading-none tracking-[0.14em] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-[1.15rem] font-semibold leading-snug tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-6 text-muted">{text}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
