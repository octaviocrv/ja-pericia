export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: Math.min(i, 5) * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const viewport = { once: true, margin: "-80px" };
