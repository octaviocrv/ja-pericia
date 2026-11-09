"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, viewport } from "@/lib/motion";
import imgApresentacao from "@/app/assets/etapas/apresentacao.jpg";
import imgAnalise from "@/app/assets/etapas/analise.jpg";
import imgProposta from "@/app/assets/etapas/proposta.jpg";
import imgEntrega from "@/app/assets/etapas/entrega.jpg";

const etapas = [
  {
    title: "Apresentação do caso",
    image: imgApresentacao,
    alt: "Reunião de apresentação de um caso",
    text: "Você envia o contexto e os documentos disponíveis pelo WhatsApp ou e-mail.",
  },
  {
    title: "Análise inicial",
    image: imgAnalise,
    alt: "Análise de documentos e gráficos financeiros",
    text: "Avaliação técnica da viabilidade e do escopo antes de qualquer proposta.",
  },
  {
    title: "Proposta e execução",
    image: imgProposta,
    alt: "Reunião para alinhar proposta e execução",
    text: "Honorários e prazos definidos com transparência; início dos trabalhos.",
  },
  {
    title: "Entrega do laudo",
    image: imgEntrega,
    alt: "Relatório com gráficos aberto no notebook",
    text: "Documento fundamentado, com suporte para esclarecimentos posteriores.",
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
          className="max-w-[900px]"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-deep">Como funciona</p>
          <h2 className="font-serif text-[38px] font-normal leading-[1.12] tracking-[-0.025em] text-olive-deep sm:text-[48px]">
            Do primeiro contato ao <em className="font-normal text-gold-deep">laudo.</em>
          </h2>
        </motion.div>

        <ol className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
          {etapas.map((etapa, i) => (
            <motion.li
              key={etapa.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="group relative flex flex-col"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_36px_-20px_rgba(33,30,26,0.55)]">
                <Image
                  src={etapa.image}
                  alt={etapa.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out [filter:saturate(0.8)_sepia(0.12)] group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-olive-deep/35 via-transparent to-transparent" />
              </div>
              <div className={`border-t pt-6 ${i === 0 ? "border-gold-deep" : "border-gold-deep/40"}`}>
              <span className="font-serif text-[36px] font-normal leading-none text-gold-deep">
                {i + 1}
              </span>
              <h3 className="mt-3 text-[16px] font-semibold leading-snug tracking-tight text-olive-deep">{etapa.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-taupe">{etapa.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
