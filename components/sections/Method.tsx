"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, CalendarCheck, FileSearch, MessageSquareText } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE } from "@/lib/config";

const pilares = [
  { icon: FileSearch, title: "Análise integral dos autos", text: "Avalio o processo, documentos, cálculos e elementos relevantes antes de qualquer conclusão." },
  { icon: BookOpenCheck, title: "Metodologia demonstrável", text: "Cada cálculo e conclusão parte de critérios técnicos que podem ser conferidos e reproduzidos." },
  { icon: MessageSquareText, title: "Fundamentação clara", text: "O conteúdo é técnico o suficiente para sustentar a análise e claro o suficiente para ser compreendido por juiz, advogados e partes." },
  { icon: CalendarCheck, title: "Compromisso com o processo", text: "Prazos, quesitos, documentos e etapas periciais são tratados com rigor e responsabilidade técnica." },
];

export default function Method() {
  return (
    <section id="metodo" className="olive-surface relative overflow-hidden py-14 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-[680px]"
        >
          <SectionLabel>Como eu trabalho</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.6rem]">
            Um laudo técnico precisa ser claro, verificável e bem fundamentado.
          </h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:mt-12 sm:gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex items-start gap-4 sm:flex-col"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-olive-deep/60">
                <Icon className="h-[18px] w-[18px] text-gold-light" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-white">{title}</p>
                <p className="mt-1.5 text-[14.5px] leading-6 text-white/65">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 rounded-r-[20px] border-l-2 border-gold bg-olive-deep/50 py-5 pl-5 pr-5 sm:mt-14 sm:py-8 sm:pl-8 sm:pr-10"
        >
          <p className="max-w-[760px] text-[1.3rem] font-medium leading-[1.45] text-white sm:text-[1.6rem]">
            &ldquo;O valor de um laudo está na consistência da análise, na clareza da metodologia e na força da fundamentação.&rdquo;
          </p>
          <footer className="mt-4 text-[13px] font-medium text-gold-light">{SITE.perito}</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
