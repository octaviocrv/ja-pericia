import Image from "next/image";
import logo from "@/app/assets/logo-ja.jpg";
import { SITE } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-[#050505]">
      <div className="mx-auto w-full max-w-page px-6 py-8 sm:py-10 md:px-12">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold/40 sm:h-10 sm:w-10">
              <Image src={logo} alt="Logo JA" fill sizes="40px" className="object-cover" />
            </span>
            <div>
              <p className="text-[15px] font-semibold tracking-tight text-white">
                {SITE.perito}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-champagne sm:mt-0.5 sm:tracking-[0.16em]">
                {SITE.cargo} · {SITE.crc}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-1 border-t border-line pt-5 text-[11px] leading-[1.5] text-white/40 sm:w-auto sm:items-end sm:border-t-0 sm:pt-0 sm:text-[12px]">
            <span>© 2026 {SITE.empresa}. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
