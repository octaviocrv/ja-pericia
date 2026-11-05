"use client";

import { motion, useReducedMotion } from "framer-motion";

// Acentos do hero no desktop, em linguagem "quiet luxury": linhas finas,
// geometria arquitetônica e movimento só na entrada. Nada gira, nada pisca.

const ease = [0.22, 1, 0.36, 1] as const;

// Mesma caixa do retrato do João (ver Hero.tsx), para o arco acompanhar a foto.
// A largura também é limitada pela altura da tela (notebook 1366x768): a foto
// nunca passa da área abaixo do header, então cabeça e arco não são cortados.
const PORTRAIT_BOX =
  "absolute bottom-0 right-[max(1.5rem,calc((100vw-1200px)/2))] aspect-[3/4] w-[min(44%,600px,calc((100svh-130px)*0.75))]";

/* ------------------------------------------------------------------ */
/* Arco — moldura arquitetônica atrás do retrato                       */
/* ------------------------------------------------------------------ */

// viewBox 300x400 = proporção 3/4 da caixa, então o arco não distorce.
const ARCO_EXTERNO = "M 14 400 L 14 168 A 136 136 0 0 1 286 168 L 286 400";
const ARCO_INTERNO = "M 32 400 L 32 172 A 118 118 0 0 1 268 172 L 268 400";

export function PortraitArch() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className={`pointer-events-none -z-[7] hidden lg:block ${PORTRAIT_BOX}`}>
      {/* luz quente contida no arco, respirando devagar */}
      <motion.div
        className="absolute inset-x-[8%] bottom-[18%] top-[6%] rounded-t-full"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(200,165,92,0.22), rgba(48,54,41,0.16) 55%, transparent 80%)",
        }}
        initial={{ opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { opacity: [0.85, 1, 0.85] }}
        transition={
          reduce
            ? { duration: 1.6, delay: 0.6 }
            : { duration: 9, delay: 0.6, ease: "easeInOut", repeat: Infinity }
        }
      />

      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 h-full w-full"
        style={{
          // linhas somem antes de chegar à base, atrás do corpo
          WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent 90%)",
          maskImage: "linear-gradient(to bottom, #000 55%, transparent 90%)",
        }}
      >
        <defs>
          <linearGradient id="arco-traco" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DDC27F" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#C8A55C" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#C8A55C" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d={ARCO_EXTERNO}
          fill="none"
          stroke="url(#arco-traco)"
          strokeWidth="0.6"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, delay: 0.5, ease }}
        />
        <motion.path
          d={ARCO_INTERNO}
          fill="none"
          stroke="url(#arco-traco)"
          strokeOpacity="0.65"
          strokeWidth="0.6"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, delay: 0.85, ease }}
        />

        {/* pequeno remate no ápice do arco */}
        <motion.rect
          x="147"
          y="29"
          width="6"
          height="6"
          fill="#0B0A09"
          stroke="#DDC27F"
          strokeOpacity="0.7"
          strokeWidth="1"
          transform="rotate(45 150 32)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Fio editorial — linha vertical no vão entre texto e retrato         */
/* ------------------------------------------------------------------ */

export function EditorialRule() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[calc(50%-64px)] top-[24%] hidden h-[52%] w-px xl:block"
    >
      <motion.span
        className="absolute inset-0 origin-top bg-gradient-to-b from-transparent via-champagne/60 to-transparent"
        initial={{ scaleY: reduce ? 1 : 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1, ease }}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold-light/70 bg-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      />
    </div>
  );
}
