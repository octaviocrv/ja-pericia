"use client";

import { motion } from "framer-motion";
import { FileText, MapPin, Scale } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";

const destaques = [
  { icon: Scale, title: "Perícia judicial e extrajudicial" },
  { icon: FileText, title: "Laudos e pareceres técnicos" },
  { icon: MapPin, title: "Atendimento em todo o Brasil" },
];

export default function Highlights() {
  return (
    <section className="relative bg-bg">
      <div className="mx-auto w-full max-w-page px-6 md:px-12">
        <ul className="grid grid-cols-1 border-y border-line sm:grid-cols-3">
          {destaques.map(({ icon: Icon, title }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex items-center gap-4 border-line py-6 [&:not(:first-child)]:border-t sm:flex-col sm:items-start sm:gap-5 sm:px-8 sm:py-10 sm:[&:first-child]:pl-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-t-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.05]">
                <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.6} />
              </span>
              <span className="text-[15px] font-medium leading-snug text-white sm:text-[16px]">{title}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
