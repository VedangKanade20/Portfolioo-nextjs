"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of titles to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContainerTextFlip({
  words = [
    "Software Engineer",
    "Java Full Stack Engineer",
    "Fintech Systems Engineer",
    "Backend Architecture Engineer",
  ],
  interval = 3200,
  className,
  textClassName,
}: ContainerTextFlipProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-white/10 px-5 py-2 font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#8fc4ff]",
        "bg-gradient-to-b from-[#0a1426] via-[#070d18] to-[#04070d]",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_20px_rgba(63,127,208,0.2)]",
        className
      )}
    >
      {/* Subtle glowing pill background pulse */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-[#3f7fd0]/10 via-transparent to-[#8fc4ff]/10" />

      {/* Height anchor to prevent layout shifts */}
      <div className="invisible h-8 sm:h-9 select-none aria-hidden">
        {words.reduce((longest, current) =>
          current.length > longest.length ? current : longest
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: EASE }}
          className={cn(
            "absolute inset-0 flex items-center justify-center text-center whitespace-nowrap px-4",
            textClassName
          )}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
