"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, viewport } from "@/lib/motion";

const casos = [
  {
    title: "Para quem procura um laudo com resultado encomendado",
    text: "O trabalho pericial é técnico e imparcial. A conclusão é consequência do exame, nunca o ponto de partida. Nenhum número é ajustado para servir a uma tese.",
  },
  {
    title: "Para quem espera garantia de êxito no processo",
    text: "Quem decide é o juízo. O que a perícia garante é uma prova bem construída, fundamentada e defensável. Nenhuma promessa de resultado será feita.",
  },
  {
    title: "Para quem precisa de um laudo sem documentos",
    text: "Perícia se apoia em documentação. Sem os elementos mínimos, não existe conclusão técnica possível, e isso é dito antes de qualquer contratação.",
  },
  {
    title: "Para prazos que já se tornaram inviáveis",
    text: "Quando o tempo disponível não permite um exame responsável, o mais honesto é dizer isso de imediato, em vez de entregar um trabalho superficial.",
  },
  {
    title: "Para quem busca apenas o menor honorário",
    text: "Comparar propostas é legítimo. Mas o valor deste trabalho está na profundidade do exame, e isso não cabe em uma planilha genérica de preços.",
  },
];

export default function NotForWho() {
  return (
    <section className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-[680px]"
        >
          <SectionLabel>Para quem não é</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.2rem]">
            Existem situações em que este trabalho não é o mais indicado.
          </h2>
          <p className="mt-4 text-[15.5px] leading-7 text-muted">
            Dizer isso com clareza economiza tempo dos dois lados e protege o que dá valor a uma
            perícia: a independência técnica.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.title}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="rounded-2xl border border-line bg-cardsoft p-6"
            >
              <span className="mb-3 block h-px w-8 bg-gold/50" aria-hidden />
              <h3 className="text-[15px] font-medium text-white">{caso.title}</h3>
              <p className="mt-2 text-[13.5px] leading-6 text-muted">{caso.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          custom={casos.length + 1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-10 max-w-[600px] text-center text-[14.5px] leading-6 text-white/45"
        >
          Nada disso é julgamento. É alinhamento de expectativa. Um laudo só tem valor enquanto a
          independência de quem o assina estiver intacta.
        </motion.p>
      </div>
    </section>
  );
}
