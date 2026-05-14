"use client";

import { useState, useEffect } from "react";

export function RotatingHeadline({ headlines }: { headlines: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 600);
    }, 10000);

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <h1
      className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 max-w-4xl transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {headlines[index]}
    </h1>
  );
}
