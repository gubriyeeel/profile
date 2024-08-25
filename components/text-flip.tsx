"use client";

import { useEffect, useMemo, useRef } from "react";

export function TextFlip() {
  const words = useMemo(
    () => ["Integration", "merging", "combining", "blending", "Integration"],
    []
  );

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <span
      ref={tallestRef}
      className="flex flex-col overflow-hidden text-blue-400 max-h-[1.1em]"
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="animate-flip-words text-8xl leading-normal bg-size animate-bg-position bg-gradient-to-r from-yellow-500 from-30% via-yellow-700 via-50% to-pink-500 to-80% bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-yellow-400 text-transparent bg-clip-text bg-300% animate-animated-gradient">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
