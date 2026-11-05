"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, viewport } from "@/lib/motion";

const perfis = [
  {
    title: "Advogados e escritórios",
    text: "que precisam de um assistente técnico para sustentar a tese com números verificáveis",
  },
  {
    title: "Empresas em litígio",
    text: "com disputas trabalhistas, bancárias, tributárias ou contratuais que envolvem valores relevantes",
  },
  {
    title: "Sócios em retirada ou dissolução",
    text: "que precisam de uma apuração de haveres técnica e defensável",
  },
  {
    title: "Pessoas físicas",
    text: "que questionam contratos de financiamento, empréstimos ou cálculos de uma sentença",
  },
  {
    title: "Juízos e câmaras arbitrais",
    text: "que necessitam de um perito com método claro e cumprimento rigoroso de prazos",
  },
  {
    title: "Gestores e conselhos",
    text: "que querem um número técnico independente antes de uma negociação ou decisão relevante",
  },
];

export default function ForWho() {
  return (
    <section id="para-quem" className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-stretch gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-0 lg:px-0">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-5 lg:pl-12"
        >
          <ImagePlaceholder
            label="Foto vertical de ambiente jurídico ou corporativo sofisticado: sala de reunião, biblioteca jurídica, detalhe de documentos sobre a mesa"
            aspect="aspect-auto h-full min-h-[360px]"
            rounded="lg:rounded-r-[24px] lg:rounded-l-none rounded-[24px]"
          />
        </motion.div>

        <div className="lg:col-span-7 lg:px-16">
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={viewport}>
            <SectionLabel>Para quem é</SectionLabel>
            <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.4rem]">
              Feito para quem precisa que o número seja prova, não argumento.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-muted sm:text-[17px]">
              A perícia entrega mais valor quando existe uma questão técnica real a ser
              demonstrada. Estes são os perfis que mais se beneficiam desse trabalho.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col divide-y divide-line">
            {perfis.map((perfil, i) => (
              <motion.div
                key={perfil.title}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="flex items-start gap-3 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={2} />
                <p className="text-[15px] leading-6 text-white/85">
                  <span className="font-medium text-white">{perfil.title}</span>{" "}
                  <span className="text-muted">{perfil.text}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
