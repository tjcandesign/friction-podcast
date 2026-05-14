"use client";

import { useState, useEffect, useMemo } from "react";

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function RotatingHeadline({ headlines }: { headlines: string[] }) {
  const shuffled = useMemo(() => shuffle(headlines), [headlines]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % shuffled.length);
        setVisible(true);
      }, 600);
    }, 10000);

    return () => clearInterval(interval);
  }, [shuffled.length]);

  return (
    <h1
      className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 max-w-4xl transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {shuffled[index]}
    </h1>
  );
}
