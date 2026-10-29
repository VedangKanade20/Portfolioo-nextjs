"use client";

import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt, FaClock } from "react-icons/fa";

export default function LocationMapCard() {
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
    <article className="group relative rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-[#3f7fd0]/50 hover:shadow-[0_12px_40px_rgba(63,127,208,0.12)]">
      {/* Top Accent Rule */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#8fc4ff]/30 to-transparent group-hover:via-[#8fc4ff] transition-all duration-500" />

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-[#8fc4ff] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
              Current Base & Geographic Origin
            </span>
          </div>
          <div className="flex items-baseline gap-2.5">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#8fc4ff] transition-colors">
              Parel, Mumbai
            </h3>
            <span className="font-mono text-xs text-[#8fc4ff]/80">
              [ˈpɑː.rɛl, mʊmˈbaɪ]
            </span>
          </div>
          <p className="mt-1 text-xs font-mono italic text-zinc-400">
            (location / Maharashtra, India • Commercial & Financial Core)
          </p>
        </div>

        {/* Live Mumbai Time Pill */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-zinc-300">
          <FaClock className="text-[#8fc4ff]" />
          <span>MUMBAI: {time || "IST"}</span>
        </div>
      </div>

      {/* Coordinate & Transit Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 font-mono text-xs">
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
          <span className="text-[10px] text-zinc-500 uppercase block">Coordinates</span>
          <span className="text-zinc-200">18.9934° N, 72.8397° E</span>
        </div>
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
          <span className="text-[10px] text-zinc-500 uppercase block">Timezone</span>
          <span className="text-zinc-200">IST (UTC +5:30)</span>
        </div>
        <div className="col-span-2 sm:col-span-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
          <span className="text-[10px] text-zinc-500 uppercase block">Connectivity</span>
          <span className="text-zinc-200">Central & Western Lines</span>
        </div>
      </div>

      {/* Styled Interactive Dark Map Embed */}
      <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-inner">
        <iframe
          title="Map of Parel, Mumbai"
          src="https://maps.google.com/maps?q=Parel,%20Mumbai,%20Maharashtra,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "contrast(110%) invert(92%) hue-rotate(185deg) brightness(85%)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Overlay Marker Pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-[#050506]/90 border border-white/10 px-3 py-1 text-xs font-mono text-white backdrop-blur-md">
          <FaMapMarkerAlt className="text-[#8fc4ff]" />
          <span>Parel, Mumbai 400012</span>
        </div>

        {/* External Link */}
        <a
          href="https://www.google.com/maps/place/Parel,+Mumbai,+Maharashtra"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md bg-[#050506]/90 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-[#8fc4ff] hover:text-white transition-colors backdrop-blur-md"
        >
          <span>Open in Maps</span>
          <FaExternalLinkAlt size={9} />
        </a>
      </div>

      {/* Narrative Context */}
      <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
        Based in Parel, Mumbai—a historic textile-mill turned modern commercial hub strategically positioned between South Mumbai and the Bandra-Kurla Complex (BKC) financial district. Open to local engineering opportunities across Mumbai, hybrid arrangements, and global remote teams.
      </p>
    </article>
  );
}
