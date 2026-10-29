"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

interface HelloIntroProps {
  onComplete?: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HelloIntro({ onComplete }: HelloIntroProps = {}) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(false);
  const [timeString, setTimeString] = useState("");

  // Determine time-of-day greetings based on client's local hour
  const greetings = useMemo(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return [
        { text: "Good morning", font: "", sub: "Welcome to my portfolio" },
        { text: "सुप्रभात", font: "font-devanagari", sub: "वेदांग का पोर्टफोलियो" },
        { text: "Buenos días", font: "", sub: "Bienvenido" },
        { text: "Bonjour", font: "", sub: "Bienvenue" },
        { text: "Guten Morgen", font: "", sub: "Willkommen" },
        { text: "Доброе утро", font: "font-cyrillic", sub: "Добро пожаловать" },
        { text: "早上好", font: "font-cjk", sub: "欢迎来到我的作品集" },
        { text: "おはようございます", font: "font-cjk", sub: "ポートフォリオへようこそ" },
      ];
    } else if (hour >= 12 && hour < 17) {
      return [
        { text: "Good afternoon", font: "", sub: "Welcome to my portfolio" },
        { text: "शुभ दोपहर", font: "font-devanagari", sub: "वेदांग का पोर्टफोलियो" },
        { text: "Buenas tardes", font: "", sub: "Bienvenido" },
        { text: "Bon après-midi", font: "", sub: "Bienvenue" },
        { text: "Guten Tag", font: "", sub: "Willkommen" },
        { text: "Добрый день", font: "font-cyrillic", sub: "Добро пожаловать" },
        { text: "下午好", font: "font-cjk", sub: "欢迎来到我的作品集" },
        { text: "こんにちは", font: "font-cjk", sub: "ポートフォリオへようこそ" },
      ];
    } else {
      return [
        { text: "Good evening", font: "", sub: "Welcome to my portfolio" },
        { text: "शुभ संध्या", font: "font-devanagari", sub: "वेदांग का पोर्टफोलियो" },
        { text: "Buenas noches", font: "", sub: "Bienvenido" },
        { text: "Bonsoir", font: "", sub: "Bienvenue" },
        { text: "Guten Abend", font: "", sub: "Willkommen" },
        { text: "Добрый вечер", font: "font-cyrillic", sub: "Добро пожаловать" },
        { text: "晚上好", font: "font-cjk", sub: "欢迎来到我的作品集" },
        { text: "こんばんは", font: "font-cjk", sub: "ポートフォリオへようこそ" },
      ];
    }
  }, []);

  // Self-gated: only show once per browser session
  useEffect(() => {
    const seen = sessionStorage.getItem("intro-shown");
    if (!seen) setVisible(true);

    // Update real-time clock
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Cycle greetings smoothly
  useEffect(() => {
    if (!visible) return;
    const greetingInterval = setInterval(() => {
      setIndex((i) => (i + 1) % greetings.length);
    }, 650);
    return () => clearInterval(greetingInterval);
  }, [visible, greetings.length]);

  // Drive loader progress
  useEffect(() => {
    if (!visible) return;
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        const increment = Math.random() * 8 + 3.5;
        const next = p + increment;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLeaving(true), 400);
          return 100;
        }
        return next;
      });
    }, 180);
    return () => clearInterval(progressInterval);
  }, [visible]);

  if (!visible) return null;

  // Status subtitle based on progress phase
  const statusLabel =
    progress < 35
      ? "BOOTSTRAPPING CORE RUNTIME"
      : progress < 70
      ? "INITIALIZING ARCHITECTURE SERVICES"
      : progress < 100
      ? "CONNECTING ASSETS & TELEMETRY"
      : "SYSTEM READY";

  return (
    <AnimatePresence
      onExitComplete={() => {
        sessionStorage.setItem("intro-shown", "true");
        onComplete?.();
      }}
    >
      {!leaving && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#050506] px-6 py-10 select-none overflow-hidden"
          initial={{ scaleY: 1 }}
          exit={{
            scaleY: 0,
            transition: { duration: 0.85, ease: EASE },
          }}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Ambient Light Blue Glows */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#3f7fd0]/10 blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#8fc4ff]/10 blur-[140px]" />

          {/* Top Telemetry Bar */}
          <div className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-mono text-zinc-400 border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fc4ff] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fc4ff]"></span>
              </span>
              <span className="text-zinc-300">VEDANG KANADE</span>
              <span className="text-zinc-600">/</span>
              <span className="text-[#8fc4ff]">PORTFOLIO_V2</span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span>PAREL, MUMBAI [IN]</span>
              <span>•</span>
              <span className="text-white">{timeString || "12:00:00 AM"}</span>
            </div>
          </div>

          {/* Center Dynamic Greeting */}
          <div className="relative z-10 flex flex-col items-center my-auto">
            {/* Spinning Brand Monogram */}
            <motion.div
              className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3f7fd0]/50 bg-[#070709] font-mono text-base font-bold text-[#8fc4ff] shadow-[0_0_25px_rgba(63,127,208,0.25)]"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                borderRadius: ["16px", "28px", "16px", "28px", "16px"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              VK
            </motion.div>

            {/* Time-Based Greeting Display */}
            <div className="h-[90px] flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex flex-col items-center"
                >
                  <p
                    className={
                      "text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif " +
                      greetings[index].font
                    }
                  >
                    {greetings[index].text}
                  </p>
                  <p className="mt-2 font-mono text-xs text-[#8fc4ff]/80 tracking-wide uppercase">
                    {greetings[index].sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom High-Tech Loader Bar */}
          <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-3 font-mono text-xs">
            <div className="w-full flex items-center justify-between text-[11px] text-zinc-400">
              <span className="tracking-wider text-zinc-300">{statusLabel}</span>
              <span className="text-[#8fc4ff] font-bold">
                {Math.min(100, Math.round(progress))}%
              </span>
            </div>

            {/* Progress Track */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06] border border-white/10 p-0.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#3f7fd0] via-[#6fa8f5] to-[#8fc4ff] shadow-[0_0_12px_rgba(143,196,255,0.6)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </div>

            <div className="flex items-center justify-between w-full text-[10px] text-zinc-500 pt-1">
              <span>LAT: 18.9934° N, 72.8397° E</span>
              <span>ENGINEERING_STACK_LOADED</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
