"use client";

import { motion } from "framer-motion";
import { Briefcase, Calculator, Gavel, Handshake, Landmark, Scale } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { fadeUp, viewport } from "@/lib/motion";
import { whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

const areas = [
  {
    icon: Gavel,
    title: "Perícia contábil judicial",
    text: "Atuação como perito nomeado pelo juízo, com exame dos autos, diligências, resposta aos quesitos e elaboração do laudo pericial dentro do prazo fixado.",
  },
  {
    icon: Scale,
    title: "Assistência técnica às partes",
    text: "Acompanhamento da perícia ao lado do advogado: formulação de quesitos, acompanhamento das diligências e parecer técnico concordante ou divergente do laudo oficial.",
  },
  {
    icon: Calculator,
    title: "Cálculos e liquidação de sentença",
    text: "Apuração de valores em fase de liquidação e cumprimento de sentença, cálculos trabalhistas, atualização monetária e verificação de cálculos apresentados pela outra parte.",
  },
  {
    icon: Landmark,
    title: "Contratos bancários e financeiros",
    text: "Revisão de contratos de financiamento, empréstimos e operações de crédito: análise de encargos, capitalização de juros, tarifas e recomposição de saldos devedores.",
  },
  {
    icon: Handshake,
    title: "Apuração de haveres societários",
    text: "Levantamento do patrimônio e dos haveres de sócios em retirada, exclusão ou dissolução de sociedade, com balanço de determinação e avaliação fundamentada.",
  },
  {
    icon: Briefcase,
    title: "Perícia extrajudicial e arbitral",
    text: "Laudos e pareceres para negociações, mediações, câmaras arbitrais e decisões empresariais em que é preciso um número técnico antes de existir um processo.",
  },
];

export default function Areas() {
  return (
    <section id="atuacao" className="relative bg-bg py-20 md:py-28">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center"
        >
          <SectionLabel>Áreas de atuação</SectionLabel>
          <h2 className="text-[2rem] font-semibold leading-[1.15] text-white sm:text-[2.5rem]">
            Seis frentes em que o número decide o processo.
          </h2>
          <p className="text-[16px] leading-7 text-muted sm:text-[17px]">
            Uma contabilidade cuida dos números de quem está em operação. Uma perícia cuida dos
            números que estão em disputa. João Firmino concentra a atuação nessas seis frentes, todas
            conduzidas por ele pessoalmente, com o respaldo da JA Perícia.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative overflow-hidden rounded-[24px] border border-line bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="watermark-number pointer-events-none absolute -right-1 -top-4 select-none text-[5rem] font-black leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold/10">
                <Icon className="h-5 w-5 text-gold" strokeWidth={2} />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="relative mt-2 text-[14.5px] leading-6 text-muted">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          <div className="rounded-[24px] border border-line bg-card p-7 sm:p-9 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-champagne">Visão estratégica</p>
            <h3 className="mt-3 text-[1.4rem] font-semibold leading-[1.3] text-white sm:text-[1.7rem]">
              Um cálculo isolado responde a um quesito. Uma estratégia técnica sustenta o processo
              inteiro.
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-muted sm:text-[16px]">
              Quando o perito entra cedo, a prova é pensada junto com a tese: quais documentos
              pedir, quais quesitos formular, qual pergunta o laudo precisa responder. Quando entra
              tarde, resta reagir a um laudo pronto. Por isso a conversa começa pelo processo, e
              não pela planilha.
            </p>
            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5">
              <span className="text-3xl leading-none text-gold" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-1 text-[15px] leading-7 text-white/85">
                Não existe laudo favorável. Existe laudo bem fundamentado, e é ele que resiste a
                qualquer impugnação.
              </p>
            </div>
            <Button href={whatsappLink(WHATSAPP_MENSAGENS.advogado)} target="_blank" className="mt-7">
              Falar sobre um processo
            </Button>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-[20px] lg:col-span-5">
            <ImagePlaceholder
              label="Foto do perito em situação de trabalho: analisando documentos, laudo em mãos ou diante do computador com planilhas"
              aspect="aspect-auto h-full min-h-[380px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
