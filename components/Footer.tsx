"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTerminal, FaGamepad, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-[#050508] text-zinc-400 overflow-hidden pt-16 pb-24 mt-24 z-20">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none font-serif text-[13vw] font-black leading-none text-white/[0.02] whitespace-nowrap">
        VEDANG KANADE
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[600px] rounded-full bg-[#3f7fd0]/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Row */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-[#07070a]/90 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
              Let&apos;s Build Together
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mt-1">
              Have an engineering challenge or full-stack opportunity?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Open to Software Engineering roles, backend microservice architecture, and high-impact software systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:kanadevedang2003@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3f7fd0] text-white hover:bg-[#8fc4ff] hover:text-black px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(63,127,208,0.25)]"
            >
              <FaEnvelope size={12} />
              <span>Send Email</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] text-zinc-200 hover:text-white hover:border-[#8fc4ff] px-5 py-2.5 font-mono text-xs transition-all"
            >
              <span>Booking & Form →</span>
            </Link>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-xs">
          {/* Brand & Geographic Identity */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#3f7fd0]/50 bg-[#0a0f1d] font-mono text-xs font-bold text-[#8fc4ff]">
                VK
              </div>
              <span className="text-base font-bold text-white font-serif tracking-tight">
                Vedang Kanade
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-xs font-sans">
              Software Engineer (Java Full Stack / BFSI) specializing in core banking reconciliation, Java Spring Boot, scalable backend services, and AI research.
            </p>

            <div className="space-y-1.5 font-mono text-[11px] text-zinc-400 pt-1">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#8fc4ff]" size={11} />
                <span>Parel, Mumbai, MH, India [400012]</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#8fc4ff]" size={11} />
                <span className="text-white font-semibold">{time || "MUMBAI TIME"}</span>
                <span className="text-zinc-500">(IST • UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Directory */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8fc4ff]">
              Directory
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white transition-colors">
                  Skills & Stacks
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Work Timeline
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Selected Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Labs */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8fc4ff]">
              Interactive Labs
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link
                  href="/terminal"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FaTerminal size={10} className="text-[#8fc4ff]" />
                  <span>Engineering Terminal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FaGamepad size={11} className="text-[#8fc4ff]" />
                  <span>Systems Playground</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Inquiries & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8fc4ff]">
              Connect
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href="https://in.linkedin.com/in/vedang-kanade-598a05276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#8fc4ff] transition-colors"
                >
                  <FaLinkedin size={12} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vedangkanade20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FaGithub size={12} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/VedangKanade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#8fc4ff] transition-colors"
                >
                  <FaTwitter size={12} />
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kanadevedang2003@gmail.com"
                  className="flex items-center gap-1.5 hover:text-[#8fc4ff] transition-colors"
                >
                  <FaEnvelope size={12} />
                  <span>Direct Mail</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Vedang Kanade. All rights reserved.</p>
          <p>
            Engineered in <span className="text-zinc-300">Parel, Mumbai</span> • Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
