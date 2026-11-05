"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { fadeUp, viewport } from "@/lib/motion";
import { whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

const perguntas = [
  {
    q: "A análise preliminar do caso tem custo?",
    a: "Não. Na primeira conversa eu entendo o caso, avalio se existe uma questão técnica a ser demonstrada e indico o trabalho adequado. A proposta de honorários só vem depois, por escrito.",
  },
  {
    q: "Qual a diferença entre perito do juízo e assistente técnico?",
    a: "O perito do juízo é nomeado pelo juiz e atua de forma imparcial. O assistente técnico é indicado por uma das partes para acompanhar a perícia, formular quesitos e opinar sobre o laudo oficial. Eu atuo nas duas frentes, com o mesmo rigor.",
  },
  {
    q: "Em que momento do processo devo procurar um perito?",
    a: "Quanto antes, melhor: a prova é planejada junto com a tese. Mas também atuo em fases avançadas, como impugnação de laudo ou liquidação de sentença.",
  },
  {
    q: "Atende fora da sua cidade?",
    a: "Sim. Com processos eletrônicos, atendo em todo o Brasil. Diligências presenciais são combinadas conforme cada caso.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="perguntas" className="olive-surface relative py-14 sm:py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 gap-6 px-6 md:px-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-32">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="text-[1.9rem] font-semibold leading-[1.2] text-white sm:text-[2.2rem]">
              Ficou com alguma dúvida sobre o seu caso?
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Se a sua dúvida não estiver aqui, me chame. A conversa resolve mais rápido.
            </p>
            <Button href={whatsappLink(WHATSAPP_MENSAGENS.duvida)} target="_blank" className="mt-6">
              Falar comigo
            </Button>
          </div>
        </motion.div>

        <div className="lg:col-span-8">
          <div className="flex flex-col divide-y divide-champagne/[0.14] border-t border-champagne/[0.14]">
            {perguntas.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15.5px] font-medium text-white">{item.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 pr-8 sm:pb-5 text-[14.5px] leading-7 text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
