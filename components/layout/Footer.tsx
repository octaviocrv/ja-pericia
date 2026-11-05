import Image from "next/image";
import logo from "@/app/assets/logo-ja.jpg";
import { SITE } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-[#050505]">
      <div className="mx-auto w-full max-w-page px-6 py-6 sm:py-10 md:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gold/40 sm:h-10 sm:w-10">
              <Image src={logo} alt="Logo JA" fill sizes="40px" className="object-cover" />
            </span>
            <div>
              <p className="text-[13px] font-semibold tracking-tight text-white sm:text-[15px]">
                {SITE.perito}
              </p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-champagne sm:text-[10px] sm:tracking-[0.16em]">
                {SITE.cargo} · {SITE.crc}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 text-[10.5px] text-white/40 sm:items-end sm:text-[12px] sm:gap-1">
            <span>© 2026 {SITE.empresa}. Todos os direitos reservados.</span>
            <span>CNPJ {SITE.cnpj}</span>
          </div>
        </div>
        <p className="mt-4 border-t border-line pt-4 text-[10px] leading-[1.5] text-white/30 sm:mt-6 sm:pt-5 sm:text-[11.5px] sm:leading-5">
          O trabalho pericial é técnico e imparcial: nenhum resultado é garantido ou encomendado.
          Este site tem finalidade informativa e não constitui proposta de honorários.
        </p>
      </div>
    </footer>
  );
}
