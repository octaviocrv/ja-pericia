"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE } from "@/lib/config";

const videos = [
  "Perito do juízo e assistente técnico: qual a diferença",
  "Como formular quesitos que realmente direcionam a perícia",
  "Os erros mais comuns ao impugnar um laudo pericial",
  "Liquidação de sentença: onde os cálculos costumam errar",
  "Revisão de contrato bancário: o que a perícia examina",
  "Apuração de haveres: como se chega ao valor do sócio",
  "Quando vale contratar um parecer técnico antes do processo",
  "O que torna um laudo difícil de contestar",
];

export default function VideoContent() {
  return (
    <section id="conteudo" className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-[560px]">
            <SectionLabel>Conteúdo</SectionLabel>
            <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.4rem]">
              O raciocínio pericial, explicado antes da conversa.
            </h2>
            <p className="mt-3 text-[15.5px] leading-7 text-muted">
              Se você prefere entender como a perícia funciona antes de apresentar o seu caso,
              comece por aqui.
            </p>
          </div>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[14px] font-medium text-gold underline decoration-gold/30 underline-offset-4 transition-colors hover:text-white"
          >
            Acompanhar no Instagram
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mt-10"
        >
          <ImagePlaceholder
            label="Vídeo principal do João Firmino se apresentando e explicando o método de trabalho, entre 2 e 4 minutos"
            variant="video"
            aspect="aspect-video"
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
            <p className="text-[15px] font-medium text-white">
              O que eu examino antes de assinar qualquer laudo
            </p>
          </div>
        </motion.div>

        <div className="mt-6 -mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0">
          {videos.map((titulo, i) => (
            <motion.div
              key={titulo}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="w-[240px] shrink-0 snap-start md:w-auto"
            >
              <ImagePlaceholder label={`Vídeo ${i + 1} e miniatura correspondente`} variant="video" aspect="aspect-video" />
              <p className="mt-3 text-[13.5px] font-medium leading-5 text-white/85">{titulo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
