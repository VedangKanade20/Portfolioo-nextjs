
"use client";

import React, { useState, useEffect, useId } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Software Engineer", "Software Developer", "Full Stack Engineer"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) setWidth(textRef.current.scrollWidth + 20);
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentWordIndex(i => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "inline-block rounded-lg px-3 py-1 text-center text-xl font-bold font-mono text-black md:text-3xl dark:text-[#8fc4ff]",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_2px_4px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#0c1a30,#070e1b)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_rgba(143,196,255,0.3),_0_2px_12px_rgba(63,127,208,0.25)]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        {words[currentWordIndex].split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: i * 0.015 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.p>
  );
}
