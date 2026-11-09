"use client";

import { motion } from "framer-motion";
import ResponsiveCarousel from "@/components/ui/ResponsiveCarousel";
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
    <section id="atuacao" aria-labelledby="atuacao-title" className="relative bg-[#0c0b09] section-space">
      <div className="page-container">
        <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={viewport}
          className="grid gap-6 lg:grid-cols-[1.65fr_1fr] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>Áreas de atuação</SectionLabel>
            <h2 id="atuacao-title" className="section-title text-white">
              Perícia em cada <span className="text-gold-light">detalhe.</span>
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-[1.75] text-muted lg:pb-1">
            Perícia contábil judicial e extrajudicial, com rigor técnico e fundamentação sólida para esclarecer o seu caso.
          </p>
        </motion.div>
        <ResponsiveCarousel label="Áreas de atuação" className="areas-carousel mt-7 sm:mt-10">
          {areas.map(({ title, text }, i) => (
            <article key={title}
              className="area-card">
              <span className="text-[12px] font-medium leading-none tracking-[0.14em] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-[1.15rem] font-semibold leading-snug tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-6 text-muted">{text}</p>
            </article>
          ))}
        </ResponsiveCarousel>
      </div>
    </section>
  );
}
