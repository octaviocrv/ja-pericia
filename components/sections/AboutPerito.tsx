"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, MapPin, Scale } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import joaoFoto from "@/app/assets/joao-firmino-sombra.jpg";
import { fadeUp, viewport } from "@/lib/motion";
import { SITE } from "@/lib/config";

const destaques = [
  { icon: Scale, title: "Perícia judicial e extrajudicial" },
  { icon: FileText, title: "Laudos e pareceres técnicos" },
  { icon: MapPin, title: "Atendimento em todo o Brasil" },
];

export default function AboutPerito() {
  return (
    <section id="sobre" className="relative bg-bg section-space">
      <div className="page-container grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Retrato */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative order-2 mx-auto w-full max-w-[320px] lg:max-w-[400px] lg:order-1 lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-card">
            <Image
              src={joaoFoto}
              alt={`${SITE.perito}, ${SITE.cargo.toLowerCase()}`}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              quality={90}
              className="object-cover object-center"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-bg/95 via-bg/45 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-[17px] font-semibold text-white">{SITE.perito}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-champagne/85">
                  {SITE.cargo} · {SITE.crc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Apresentação */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="order-1 flex flex-col lg:order-2 lg:col-span-7"
        >
          <SectionLabel>SOBRE</SectionLabel>
          <h2 className="section-title text-white">
            Números que sustentam <em className="font-normal text-gold-light">decisões.</em>
          </h2>
          <div className="mt-5 space-y-3 text-[15px] leading-[1.75] text-white/80 sm:hidden">
            <p>
              Sou {SITE.perito}. Há quase 20 anos, transformo a complexidade dos números
              em clareza para decisões judiciais e extrajudiciais.
            </p>
            <p>
              À frente da {SITE.marca}, conduzo pessoalmente cada caso, do primeiro contato
              ao laudo. Experiência, rigor técnico e conclusões fundamentadas orientam cada entrega.
            </p>
          </div>
          <p className="mt-6 hidden text-[15px] leading-[1.75] text-white/80 sm:block sm:text-[16px]">
            Sou {SITE.perito}, perito contábil à frente da {SITE.marca}. Há quase 20 anos,
            desenvolvo minha trajetória com responsabilidade técnica, precisão e rigor analítico,
            contribuindo para a solução de questões que exigem exame criterioso e fundamentação sólida.
          </p>
          <p className="mt-4 hidden text-[15px] leading-[1.75] text-white/80 sm:block sm:text-[16px]">
            Atuo como perito contábil em demandas
            judiciais e extrajudiciais em todo o Brasil. Transformo documentos e informações
            financeiras complexas em laudos e pareceres objetivos, tecnicamente fundamentados e
            aptos a subsidiar decisões.
          </p>
          <p className="mt-4 hidden text-[15px] leading-[1.75] text-muted sm:block sm:text-[16px]">
            Conduzo pessoalmente cada trabalho, do primeiro contato à entrega do laudo, com atuação
            independente e o respaldo da estrutura da {SITE.marca}. Aliando clareza na comunicação
            e consistência técnica, apresento conclusões compreensíveis a advogados, magistrados e
            clientes, preservando o rigor que cada caso exige.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 border-t border-line pt-6 sm:mt-9 sm:pt-8 sm:grid-cols-3 sm:gap-5">
            {destaques.map(({ icon: Icon, title }) => (
              <li key={title} className="flex items-center gap-3 sm:flex-col sm:items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.05]">
                  <Icon className="h-[17px] w-[17px] text-gold" strokeWidth={1.6} />
                </span>
                <span className="text-[14.5px] font-medium leading-snug text-white">{title}</span>
              </li>
            ))}
          </ul>

          {/* TODO: confirmar se o número da JA Contabilidade pode aparecer aqui */}
          <p className="mt-6 text-[13.5px] text-white/50">
            <span className="font-semibold text-gold">+60 empresas</span> atendidas pela{" "}
            {SITE.empresa}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
