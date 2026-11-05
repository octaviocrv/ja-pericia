"use client";

import { ImageIcon, PlayCircle } from "lucide-react";

type Props = {
  label: string;
  aspect?: string;
  className?: string;
  variant?: "image" | "video";
  rounded?: string;
};

export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/5]",
  className = "",
  variant = "image",
  rounded = "rounded-[20px]",
}: Props) {
  const Icon = variant === "video" ? PlayCircle : ImageIcon;

  return (
    <div
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-3 border border-dashed border-white/15 bg-white/[0.02] p-6 text-center ${rounded} ${className}`}
      data-placeholder="true"
    >
      <Icon className="h-7 w-7 text-white/25" strokeWidth={1.5} aria-hidden />
      <p className="max-w-[240px] text-[12px] leading-5 text-white/35">{label}</p>
      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-white/25">
        src=&quot;#&quot;
      </span>
    </div>
  );
}
