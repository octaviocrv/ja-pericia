"use client";

import { motion } from "framer-motion";
import { Circle, CircleDot } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, viewport } from "@/lib/motion";

const contestar = [
  "O cálculo da outra parte é atacado sem um cálculo alternativo demonstrado",
  "Os quesitos são formulados de forma genérica e não direcionam o exame",
  "Documentos relevantes ficam fora dos autos ou chegam tarde demais",
  "O laudo do perito do juízo é impugnado sem base técnica",
  "A divergência vira opinião contra opinião, e o juízo fica sem referência",
];

const provar = [
  "Cada valor tem origem documental identificada e premissa explicada",
  "Os quesitos são construídos para levar o exame ao ponto que importa",
  "A documentação é mapeada antes, com lacunas apontadas a tempo",
  "Impugnações e pareceres respondem tecnicamente, item por item",
  "O juízo recebe uma conclusão verificável, não apenas uma afirmação",
];

export default function Problem() {
  return (
    <section className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-[720px]"
        >
          <SectionLabel>O ponto cego</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.4rem]">
            Discordar de um número e provar o número correto são duas coisas diferentes.
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-muted sm:text-[17px]">
            Em processos que envolvem valores, as duas posturas começam parecidas: uma planilha,
            uma tese, uma divergência. A diferença aparece quando o juízo precisa decidir. Uma
            delas pede confiança. A outra entrega demonstração.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-[24px] border border-line bg-card p-7 sm:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">Sem prova técnica</p>
            <p className="mt-2 text-lg font-semibold text-white">A discussão começa pela tese</p>
            <div className="mt-6 flex flex-col gap-4">
              {contestar.map((linha) => (
                <div key={linha} className="flex items-start gap-3">
                  <Circle className="mt-0.5 h-4 w-4 shrink-0 text-white/25" strokeWidth={2} />
                  <span className="text-[14.5px] leading-6 text-muted">{linha}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative overflow-hidden rounded-[24px] border border-gold/25 bg-card p-7 sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(400px 240px at 90% 0%, rgba(200,165,92,0.10), transparent 60%)",
              }}
            />
            <p className="relative text-[11px] uppercase tracking-[0.14em] text-champagne">
              Com perícia estruturada
            </p>
            <p className="relative mt-2 text-lg font-semibold text-white">
              A discussão começa pelos documentos
            </p>
            <div className="relative mt-6 flex flex-col gap-4">
              {provar.map((linha) => (
                <div key={linha} className="flex items-start gap-3">
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                  <span className="text-[14.5px] leading-6 text-white/85">{linha}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative mt-6"
        >
          <ImagePlaceholder
            label="Foto panorâmica sóbria: mesa com autos, documentos e calculadora, ou fachada/interior de fórum. Aplicar brightness reduzida como na LP do Rafael"
            aspect="aspect-[21/9]"
          />
          <p className="mt-4 text-center text-[15px] leading-6 text-champagne sm:text-base">
            A diferença entre as duas colunas raramente aparece na petição. Ela aparece na
            sentença.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
