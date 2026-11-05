type Tone = "dark" | "light";

// "light" é para seções de fundo marfim (texto e fio em dourado profundo).
export default function SectionLabel({ children, tone = "dark" }: { children: React.ReactNode; tone?: Tone }) {
  const color = tone === "light" ? "text-gold-deep" : "text-champagne";
  const line = tone === "light" ? "bg-gold-deep" : "bg-champagne";
  return (
    <span className={`mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] ${color}`}>
      <span className={`h-px w-6 ${line}`} aria-hidden />
      {children}
    </span>
  );
}
