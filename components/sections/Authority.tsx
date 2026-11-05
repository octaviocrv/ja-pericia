"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, CalendarCheck, FileSearch, MessageSquareText } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE, whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

const cardBase = "relative overflow-hidden rounded-[24px] border border-line bg-card";

const metodo = [
  {
    icon: FileSearch,
    title: "Leitura integral dos autos",
    text: "Nenhuma conclusão sem conhecer o processo inteiro.",
  },
  {
    icon: BookOpenCheck,
    title: "Método demonstrado",
    text: "Cada número no laudo pode ser refeito por quem o lê.",
  },
  {
    icon: MessageSquareText,
    title: "Linguagem clara",
    text: "Técnica para sustentar, acessível para ser compreendida.",
  },
  {
    icon: CalendarCheck,
    title: "Prazos cumpridos",
    text: "O cronograma pericial é tratado como compromisso.",
  },
];

const numeros = [
  { value: "[a confirmar]", label: "laudos e pareceres entregues" },
  { value: "[a confirmar]", label: "anos de atuação pericial" },
  { value: "+60", label: "empresas atendidas pela JA" },
];

export default function Authority() {
  return (
    <section id="metodo" className="relative bg-bg py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0 h-[420px]"
        style={{
          background: "radial-gradient(600px 320px at 20% 50%, rgba(216,197,154,0.06), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center"
        >
          <SectionLabel>O método</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.5rem]">
            Um laudo bem feito não opina. Demonstra.
          </h2>
          <p className="text-[16px] leading-7 text-muted sm:text-[17px]">
            Trabalho sempre com a mesma lógica: examino tudo antes de concluir qualquer coisa. É
            assim que levo laudos e pareceres técnicos a processos judiciais, arbitrais e
            extrajudiciais.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-12 lg:grid-rows-[repeat(2,minmax(0,auto))]">
          {/* Retrato — card alto */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={`${cardBase} min-h-[460px] p-0 lg:col-span-5 lg:row-span-2`}
          >
            <ImagePlaceholder
              label="Foto vertical do perito em ambiente de trabalho sóbrio (escritório, biblioteca jurídica, mesa com documentos). Aplicar grayscale como na LP do Rafael"
              aspect="aspect-auto h-full min-h-[460px]"
              rounded="rounded-[24px]"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 z-[4] flex items-center justify-between gap-3 rounded-2xl border border-line bg-bg/90 px-4 py-3.5 backdrop-blur-sm">
              <div>
                <div className="text-[14px] font-semibold text-white">Tem um caso em andamento?</div>
                <div className="text-xs text-muted">Análise preliminar sem compromisso</div>
              </div>
            </div>
          </motion.div>

          {/* Manifesto */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={`${cardBase} p-7 sm:p-9 lg:col-span-7`}
          >
            <span className="watermark-number pointer-events-none absolute -right-2 -top-8 select-none text-[8rem] font-black leading-none">
              01
            </span>

            <p className="relative max-w-[560px] text-[1.3rem] font-semibold leading-[1.35] text-white sm:text-[1.55rem]">
              Grande parte dos processos que envolvem dinheiro é decidida pela qualidade da prova
              técnica. E a prova técnica é tão forte quanto o método que a sustenta.
            </p>
            <p className="relative mt-5 max-w-[560px] text-[15px] leading-7 text-muted sm:text-[16px]">
              Um cálculo pode estar certo e, ainda assim, não convencer. Pode faltar a origem do
              dado, a premissa explicada ou o caminho que leva até o resultado. O trabalho pericial
              existe para fechar essas lacunas: transformar documentos dispersos em uma conclusão
              que o juízo consegue compreender, verificar e utilizar.
            </p>

            <div className="relative mt-8 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5">
              <span className="text-3xl leading-none text-gold" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-1 text-[15px] leading-7 text-white/85 sm:text-[16px]">
                Eu não estou do lado de ninguém. Estou do lado do número correto. É exatamente
                isso que dá valor ao laudo, para quem quer que ele favoreça.
              </p>
              <p className="mt-3 text-[13px] font-medium text-gold">{SITE.perito}</p>
            </div>
          </motion.div>

          {/* Como eu trabalho */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={`${cardBase} p-7 sm:p-8 lg:col-span-4`}
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-white/45">
              Como eu trabalho
            </span>
            <div className="mt-5 flex flex-col gap-2.5">
              {metodo.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white/[0.02] px-3.5 py-3"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-gold/10">
                    <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-medium text-white">{title}</p>
                    <p className="mt-0.5 text-[12.5px] leading-5 text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Números */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className={`${cardBase} olive-surface flex flex-col justify-between p-7 sm:p-8 lg:col-span-3`}
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-champagne/70">
              Números que sustentam
            </span>
            <div className="mt-6 flex flex-col gap-6">
              {numeros.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[1.9rem] font-bold leading-none tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[13px] leading-5 text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="brand-gradient mt-5 flex flex-col items-start justify-between gap-5 rounded-[24px] px-7 py-7 sm:px-9 md:flex-row md:items-center"
        >
          <p className="max-w-[560px] text-[1.1rem] font-semibold leading-snug text-ink sm:text-[1.3rem]">
            Quer entender se o seu caso precisa de uma perícia ou de um assistente técnico?
          </p>
          <Button href={whatsappLink(WHATSAPP_MENSAGENS.padrao)} variant="dark" target="_blank">
            Apresentar um caso
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
