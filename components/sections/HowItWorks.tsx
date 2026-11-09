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
    <section id="processo" className="ivory-surface relative section-space">
      <div className="page-container">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-[900px]"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-deep">Como funciona</p>
          <h2 className="section-title text-olive-deep">
            Do primeiro contato ao <em className="font-normal text-gold-deep">laudo.</em>
          </h2>
        </motion.div>

        {/* Sem carrossel: no mobile cada etapa é um card compacto (foto ao lado do texto) e todas
            cabem na largura da tela sem arrastar; sm = 2 colunas, lg = 4 colunas. */}
        <ol className="mt-7 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {etapas.map((etapa, i) => (
            <motion.li
              key={etapa.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="group grid grid-cols-[minmax(0,38%)_minmax(0,1fr)] items-start gap-4 sm:flex sm:flex-col sm:gap-0"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-[0_18px_36px_-20px_rgba(33,30,26,0.55)] sm:mb-6 sm:aspect-[4/3] sm:rounded-2xl">
                <Image
                  src={etapa.image}
                  alt={etapa.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 38vw"
                  className="object-cover transition-transform duration-700 ease-out [filter:saturate(0.8)_sepia(0.12)] group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-olive-deep/35 via-transparent to-transparent" />
              </div>
              <div className={`min-w-0 border-t pt-3 sm:pt-6 ${i === 0 ? "border-gold-deep" : "border-gold-deep/40"}`}>
                <span className="font-serif text-[28px] font-normal leading-none text-gold-deep sm:text-[36px]">
                  {i + 1}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-olive-deep sm:mt-3 sm:text-[16px]">
                  {etapa.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.55] text-taupe sm:mt-3 sm:text-[14px] sm:leading-[1.6]">
                  {etapa.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
