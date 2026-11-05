"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Scale } from "lucide-react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { fadeUp, viewport } from "@/lib/motion";

const stats = [
  {
    icon: FileText,
    value: null,
    label: "laudos e pareceres elaborados",
    placeholder: "[a confirmar]",
  },
  {
    icon: Scale,
    value: null,
    label: "anos de atuação em perícia contábil",
    placeholder: "[a confirmar]",
  },
  {
    icon: Building2,
    value: 60,
    prefix: "+",
    suffix: "",
    label: "empresas atendidas pela JA Contabilidade e Perícia",
  },
];

export default function StatsBar() {
  return (
    <section className="relative border-y border-line bg-card">
      <div className="mx-auto grid w-full max-w-page grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map(({ icon: Icon, value, prefix, suffix, label, placeholder }, i) => (
          <motion.div
            key={label}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col items-start gap-3 px-6 py-10 md:px-10"
          >
            <Icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
            <div className="text-[2.2rem] font-bold leading-none tracking-tight text-white">
              {value !== null ? (
                <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
              ) : (
                <span className="text-white/25">{placeholder}</span>
              )}
            </div>
            <p className="text-[13px] leading-5 text-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
