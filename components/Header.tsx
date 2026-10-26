import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#050506]/80 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#3f7fd0]/40 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#8fc4ff]">
            <Image
              src="/myPhoto.png"
              width={40}
              height={40}
              alt="Vedang Kanade"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm sm:text-base tracking-tight text-white group-hover:text-[#8fc4ff] transition-colors">
              Vedang Kanade
            </span>
            <span className="text-xs font-mono text-[#8fc4ff]/70 tracking-wide">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Status Pill */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3f7fd0] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fc4ff]"></span>
          </span>
          <span>Open to roles</span>
        </div>
      </div>
    </header>
  );
}
