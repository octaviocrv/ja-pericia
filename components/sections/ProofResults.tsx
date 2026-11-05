"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import { fadeUp, viewport } from "@/lib/motion";
import { whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

function TestimonialCard({ index }: { index: number }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <span className="text-2xl leading-none text-gold" aria-hidden>
        &ldquo;
      </span>
      <div className="mt-3">
        <ImagePlaceholder
          label={`Depoimento real ${index} (advogado, empresa ou cliente), com nome e autorização de uso`}
          aspect="aspect-[3/1]"
          rounded="rounded-xl"
        />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="h-10 w-10 shrink-0 rounded-full border border-dashed border-white/15 bg-white/[0.02]" />
        <div>
          <p className="text-[13.5px] font-medium text-white/70">Nome do cliente</p>
          <p className="text-[12px] text-white/35">Perfil · tipo de perícia</p>
        </div>
      </div>
    </div>
  );
}

export default function ProofResults() {
  return (
    <section className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center"
        >
          <SectionLabel>Provas e reconhecimento</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.4rem]">
            Quem já contou com a prova técnica de João Firmino.
          </h2>
          <p className="text-[16px] leading-7 text-muted sm:text-[17px]">
            Cada caso partiu de uma disputa diferente. O que se repete é o método, não o
            resultado. Detalhes de processos são preservados por sigilo profissional.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7"
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-white/45">
              Depoimento em vídeo
            </p>
            <ImagePlaceholder
              label="Vídeo de depoimento de advogado parceiro ou cliente, com autorização de uso de imagem"
              variant="video"
              aspect="aspect-video"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            <TestimonialCard index={1} />
            <TestimonialCard index={2} />
          </motion.div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[3, 4].map((n) => (
            <motion.div
              key={n}
              variants={fadeUp}
              custom={n}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <TestimonialCard index={n} />
            </motion.div>
          ))}
          <motion.div variants={fadeUp} custom={5} initial="hidden" whileInView="show" viewport={viewport}>
            <ImagePlaceholder
              label="Print de mensagem de agradecimento, com dados pessoais e do processo ocultados"
              aspect="aspect-square"
            />
          </motion.div>
          <motion.div variants={fadeUp} custom={6} initial="hidden" whileInView="show" viewport={viewport}>
            <ImagePlaceholder
              label="Foto de certificado, credencial CRC/CNPC ou participação em evento técnico"
              aspect="aspect-square"
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
            Escritórios e empresas que já confiaram no trabalho
          </p>
          <div className="mx-auto mt-5 grid max-w-[720px] grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex h-14 items-center justify-center rounded-xl border border-dashed border-white/10 text-[11px] text-white/25"
              >
                logo {n}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={8}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="brand-gradient mt-10 flex flex-col items-center gap-6 rounded-[24px] px-7 py-9 text-center md:flex-row md:justify-between md:text-left"
        >
          <p className="text-[1.2rem] font-semibold leading-snug text-ink sm:text-[1.4rem]">
            O próximo caso analisado pode ser o seu.
          </p>
          <Button href={whatsappLink(WHATSAPP_MENSAGENS.padrao)} variant="dark" target="_blank">
            Apresentar um caso
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
