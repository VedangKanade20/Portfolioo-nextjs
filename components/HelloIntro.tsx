

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cycle of greetings — each has its own font-family override for scripts
// that need a different typeface (Devanagari, Cyrillic, CJK) to render correctly.
const GREETINGS = [
  { text: "Vedang says hi", font: "" },
  { text: "वेदांग कहता है नमस्ते", font: "font-devanagari" },
  { text: "Vedang dice hola", font: "" },
  { text: "Vedang dit salut", font: "" },
  { text: "Vedang sagt hallo", font: "" },
  { text: "Веданг говорит привет", font: "font-cyrillic" },
  { text: "维丹说你好", font: "font-cjk" },
  { text: "ヴェダンがこんにちはと言っています", font: "font-cjk text-2xl" },
];

// Easing curve used everywhere in this component — a fast-out, slow-settle
// curve (close to Apple/Linear's default), so every motion in the sequence
// feels like it belongs to the same hand.
const EASE = [0.16, 1, 0.3, 1] as const;

export default function HelloIntro() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inverted, setInverted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(false);

  // Self-gated: only show once per browser session. Runs once on mount,
  // before anything else, so there is no dependency on a parent component.
  useEffect(() => {
    const seen = sessionStorage.getItem("intro-shown");
    if (!seen) setVisible(true);
  }, []);

  // Cycle greetings on a fixed interval, flipping the invert flag each time.
  useEffect(() => {
    if (!visible) return;
    const greetingInterval = setInterval(() => {
      setIndex((i) => (i + 1) % GREETINGS.length);
      setInverted((v) => !v);
    }, 680);
    return () => clearInterval(greetingInterval);
  }, [visible]);

  // Drive the progress bar independently of the greeting cycle so the two
  // don't have to land on exactly the same duration to feel synced.
  useEffect(() => {
    if (!visible) return;
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6 + 2.5;
        if (next >= 100) {
          clearInterval(progressInterval);
          // Small pause at 100% before the wipe starts, so "READY" registers
          // instead of the wipe feeling like it cut the loader off early.
          setTimeout(() => setLeaving(true), 350);
          return 100;
        }
        return next;
      });
    }, 260);
    return () => clearInterval(progressInterval);
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence
      onExitComplete={() => sessionStorage.setItem("intro-shown", "true")}
    >
      {!leaving && (
        <motion.div
          className={
            "fixed inset-0 z-[100] flex items-center justify-center transition-colors duration-300 " +
            (inverted ? "bg-[#cfe4ff]" : "bg-[#050506]")
          }
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 0, transition: { duration: 0.9, ease: EASE } }}
          style={{ transformOrigin: "bottom" }}
        >
          {/* ambient glow — purely decorative, pointer-events disabled so it
              never interferes with anything rendered after the intro */}
          <motion.div
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* brand mark — swap the "VK" text for an <Image> of Vedang once
                the photo asset is ready; keeping it text-based for now so this
                component has zero image dependencies to wire up */}
            <motion.div
              className={
                "mb-8 flex h-11 w-11 items-center justify-center rounded-[10px] border font-mono text-sm transition-colors duration-300 " +
                (inverted
                  ? "border-[#0a3a6b] text-[#0a3a6b]"
                  : "border-[#3f7fd0] text-[#8fc4ff]")
              }
              animate={{
                rotate: [0, 180, 360],
                borderRadius: ["10px", "50%", "10px"],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: EASE }}
            >
              VK
            </motion.div>

            {/* greeting text — AnimatePresence with mode="wait" ensures the
                outgoing word fully exits before the next one enters, which is
                what keeps this from feeling like a jump-cut */}
            <div className="flex h-[70px] items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  className={
                    "text-center text-4xl font-medium tracking-tight transition-colors duration-300 " +
                    GREETINGS[index].font +
                    " " +
                    (inverted ? "text-[#0a3a6b]" : "text-[#f5f7fa]")
                  }
                  initial={{
                    opacity: 0,
                    y: 16,
                    scale: 0.92,
                    filter: "blur(6px)",
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    y: -16,
                    scale: 0.92,
                    filter: "blur(6px)",
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {GREETINGS[index].text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* status row — progress bar animates width via Framer's `animate`
                prop rather than a CSS transition loop, so it stays in sync
                with the same `progress` state driving the percentage label */}
            <div
              className={
                "mt-9 flex items-center gap-3 font-mono text-[11px] tracking-wide transition-colors duration-300 " +
                (inverted ? "text-[#2c5c8f]" : "text-[#5c6066]")
              }
            >
              <span>{progress >= 100 ? "READY" : "LOADING"}</span>
              <div
                className={
                  "h-[2px] w-[180px] overflow-hidden rounded-full transition-colors duration-300 " +
                  (inverted ? "bg-[#0a1423]/20" : "bg-[#181c22]")
                }
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#3f7fd0] to-[#8fc4ff]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              </div>
              <span
                className={
                  "w-8 text-right " +
                  (inverted ? "text-[#0a3a6b]" : "text-[#8fc4ff]")
                }
              >
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/*
  USAGE — drop it in as one line, anywhere inside <body>. It renders nothing
  (`return null`) if it's already been shown this session, and nothing (a
  fixed-position overlay) does not affect layout, so it's safe next to
  Header/NavbarDock/Footer with no wrapping required:

  <HelloIntro />

  NOTE ON FONTS — font-devanagari / font-cyrillic / font-cjk are placeholder
  utility classes. Add the actual font-family declarations to your
  tailwind.config (or globals.css) pointing at Noto Sans Devanagari, Noto
  Sans, and Noto Sans SC respectively — otherwise those three greetings will
  fall back to your default font and may not render the script correctly.

  NOTE ON SESSION — this currently replays every time the component mounts.
  Gate it with sessionStorage (e.g. only render HelloIntro if
  `!sessionStorage.getItem("intro-shown")`, then set that flag in
  onComplete) so returning visitors within the same session don't see it
  twice.
*/
