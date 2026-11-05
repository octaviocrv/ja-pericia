"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { EditorialRule, PortraitArch } from "@/components/ui/HeroAccents";
import joaoFoto from "@/app/assets/joao-firmino-frente.svg";
import fundoPericia from "@/app/assets/fundo-pericia.jpg";
import { whatsappLink, WHATSAPP_MENSAGENS } from "@/lib/config";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

// Usa o próprio recorte do João como máscara, para que luz/sombra só toquem a silhueta
function silhueta(src: string): React.CSSProperties {
  const url = `url("${src}")`;
  return {
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: "cover",
    maskSize: "cover",
    WebkitMaskPosition: "top center",
    maskPosition: "top center",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
}

/*
 * Mobile (< 640px): composição travada na largura da tela (unidades vw),
 * espelhando a referência "Perícia Contábil com Clareza e Rigor.png".
 * Assim o desenho é o mesmo em qualquer aparelho entre 360px e 430px.
 * A partir de sm/lg volta ao layout fluido.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden sm:min-h-[100svh] lg:min-h-[min(100svh,920px)]">
      {/* Camada 1 — fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={fundoPericia}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-95 blur-[1px]"
        />
        {/* overlay escuro: o fundo vira só atmosfera */}
        <div className="absolute inset-0 bg-bg/30" />
        {/* névoa suave atrás do João, para assentá-lo no cenário */}
        <div
          className="absolute left-[30vw] top-[22vw] h-[120vw] w-[90vw] sm:left-auto sm:right-0 sm:top-[80px] sm:h-[80%] sm:w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(120,95,55,0.22), rgba(20,16,12,0.35) 55%, transparent 75%)",
            filter: "blur(24px)",
          }}
        />
      </div>

      {/* Desktop: arco arquitetônico atrás do João, preenchendo o fundo do retrato */}
      <PortraitArch />

      {/* Camada 2 — João (de frente, braços cruzados), à direita */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease }}
        className="pointer-events-none absolute left-[18vw] top-[19vw] -z-[5] aspect-[3/4] w-[112vw] sm:left-auto sm:right-[-6%] sm:top-[108px] sm:w-[64vw] sm:max-w-[520px] lg:bottom-0 lg:right-[max(1.5rem,calc((100vw-1200px)/2))] lg:top-auto lg:w-[min(44%,600px,calc((100svh-130px)*0.75))] lg:max-w-none"
        // feather: elipse em volta do corpo ∩ dissolução da base (valores em globals.css;
        // no desktop a dissolução é mais curta para a foto não "sumir")
        data-hero-portrait
      >
        {/* sombra projetada no fundo (luz vem do alto à direita) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 42% 48% at 38% 58%, rgba(0,0,0,0.6), transparent 70%), radial-gradient(ellipse 30% 20% at 50% 24%, rgba(0,0,0,0.35), transparent 75%)",
            filter: "blur(18px)",
            transform: "translate(-5%, 3%)",
          }}
        />

        <Image
          src={joaoFoto}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 44vw, 100vw"
          // temperatura levemente quente; fio escuro amacia a borda do recorte (filtro em globals.css)
          className="hero-portrait-img object-cover object-top"
        />

        {/* camadas aplicadas só sobre a silhueta do João */}
        {/* bordas e base da roupa escurecem; o rosto (centro alto) fica intacto */}
        <div className="hero-portrait-shade absolute inset-0" style={silhueta(joaoFoto.src)} />
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            ...silhueta(joaoFoto.src),
            // luz quente das estantes batendo no ombro/contorno direito
            background:
              "radial-gradient(ellipse 45% 40% at 96% 22%, rgba(221,194,127,0.75), transparent 70%), radial-gradient(ellipse 30% 35% at 8% 40%, rgba(200,165,92,0.3), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Camada 3 — véus de leitura */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[6]">
        <div className="absolute inset-0 bg-gradient-to-r from-bg/65 via-bg/15 to-transparent sm:from-bg/70 sm:via-bg/20" />
        <div className="absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-bg via-bg/60 to-transparent sm:h-[55%] sm:via-bg/90 lg:h-[35%] lg:via-bg/40" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg/60 to-transparent" />
        {/* vinheta única para pessoa + cenário */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 90% at 60% 35%, transparent 60%, rgba(8,8,8,0.35) 100%)",
          }}
        />
      </div>


      {/* Desktop largo: fio editorial no vão entre texto e retrato */}
      <EditorialRule />

      {/* Conteúdo */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-page flex-1 flex-col px-[5.3vw] pb-[12vw] pt-[52vw] sm:px-6 sm:pb-14 sm:pt-32 md:px-12 lg:justify-center lg:pb-24 lg:pt-36"
      >
        <motion.span
          variants={item}
          className="absolute left-[5.3vw] top-[132px] flex items-start gap-[3vw] text-[2.75vw] font-medium uppercase leading-[1.25] tracking-[0.18em] text-white/90 sm:static sm:gap-3 sm:text-[11px] sm:leading-[1.6] sm:text-champagne"
        >
          <span className="mt-[1.35vw] h-px w-[7vw] shrink-0 bg-gold sm:mt-[0.55rem] sm:w-7" aria-hidden />
          <span>
            Perícia contábil <br className="sm:hidden" />
            judicial e extrajudicial
          </span>
        </motion.span>

        {/* empurra o bloco principal para baixo entre sm e lg */}
        <div className="hidden min-h-8 flex-1 sm:block lg:hidden" aria-hidden />

        <div className="flex flex-col items-start lg:mt-10 lg:max-w-[560px]">
          <motion.h1
            variants={item}
            className="mt-0 text-[7.6vw] font-semibold leading-[1.12] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:mt-0 sm:max-w-[11ch] sm:text-[3.6rem] sm:leading-[1.06] lg:text-[4.1rem]"
          >
            Rigor técnico <br className="sm:hidden" />
            para casos <br className="sm:hidden" />
            que <span className="brand-gradient-text">exigem <br className="sm:hidden" />
            clareza.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-[5.5vw] text-[3.75vw] leading-[1.3] text-white/80 sm:mt-6 sm:max-w-[34ch] sm:text-[17px] sm:leading-[1.7]"
          >
            Laudos, pareceres e cálculos <br className="sm:hidden" />
            conduzidos pessoalmente <br className="sm:hidden" />
            por mim.
          </motion.p>

          <motion.div variants={item} className="mt-[16vw] w-[68vw] max-w-[300px] sm:mt-10 sm:w-auto sm:max-w-none">
            <Button
              href={whatsappLink(WHATSAPP_MENSAGENS.padrao)}
              target="_blank"
              className="!min-h-[12.4vw] whitespace-nowrap border border-gold-light/60 !pl-[6.5vw] !text-[3.85vw] font-semibold shadow-[0_0_28px_-4px_rgba(200,165,92,0.55)] sm:!min-h-[58px] sm:min-w-[280px] sm:!pl-7 sm:!text-[16px]"
            >
              Apresentar um caso
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
