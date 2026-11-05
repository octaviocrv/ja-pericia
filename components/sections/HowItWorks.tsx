"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, viewport } from "@/lib/motion";

const etapas = [
  {
    title: "Você me apresenta o caso",
    text: "Uma conversa sem custo para entender o processo, os valores e os prazos. Se o caso não precisar de perícia, eu digo.",
  },
  {
    title: "Proposta por escrito",
    text: "Escopo, cronograma e honorários definidos antes de começar. Sem surpresas.",
  },
  {
    title: "Laudo e acompanhamento",
    text: "Exame, cálculos e laudo fundamentado. Respondo às impugnações até o fim da fase pericial.",
  },
];

export default function HowItWorks() {
  return (
    <section id="processo" className="ivory-surface relative py-14 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-[640px]"
        >
          <SectionLabel tone="light">Como funciona</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-olive-deep sm:text-[2.6rem]">
            Três passos, do primeiro contato ao laudo.
          </h2>
        </motion.div>

        <ol className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 md:grid-cols-3 md:gap-5">
          {etapas.map((etapa, i) => (
            <motion.li
              key={etapa.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative rounded-[24px] border border-taupe/15 bg-[#FBF8F2] p-5 shadow-[0_24px_48px_-28px_rgba(48,54,41,0.35)] sm:p-8"
            >
              <span className="text-[2.4rem] font-semibold leading-none text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[1.15rem] font-semibold tracking-tight text-olive-deep">{etapa.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-taupe">{etapa.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
