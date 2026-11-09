"use client";

import { Children, useId, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResponsiveCarousel({ children, label, className = "" }: {
  children: ReactNode; label: string; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [active, setActive] = useState(0);
  const count = Children.count(children);
  function go(index: number) {
    const track = ref.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (track && slide) track.scrollTo({ left: slide.offsetLeft - (track.children[0] as HTMLElement).offsetLeft, behavior: "smooth" });
  }
  return (
    <div className={`responsive-carousel ${className}`}>
      <div id={id} ref={ref} className="carousel-track" role="region" aria-label={label}
        tabIndex={0} onScroll={() => {
          const track = ref.current;
          if (!track || !track.children.length) return;
          const origin = (track.children[0] as HTMLElement).offsetLeft;
          let nearest = 0;
          Array.from(track.children).forEach((slide, index) => {
            if (Math.abs((slide as HTMLElement).offsetLeft - origin - track.scrollLeft) < Math.abs((track.children[nearest] as HTMLElement).offsetLeft - origin - track.scrollLeft)) nearest = index;
          });
          setActive(nearest);
        }} onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            go(Math.max(0, Math.min(count - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
          }
        }}>{children}</div>
      <div className="mt-4 flex items-center justify-between gap-4 sm:hidden">
        <span className="text-[12px] opacity-75">Arraste para o lado · {active + 1}/{count}</span>
        <div className="flex gap-2">
          <button type="button" aria-label="Anterior" aria-controls={id} disabled={active === 0} onClick={() => go(active - 1)} className="carousel-button"><ChevronLeft size={18} /></button>
          <button type="button" aria-label="Próximo" aria-controls={id} disabled={active === count - 1} onClick={() => go(active + 1)} className="carousel-button"><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}
