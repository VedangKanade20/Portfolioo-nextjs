"use client";

import React from "react";
import { motion } from "motion/react";

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  badge?: string;
  color?: string;
}

export interface SkillSubGroup {
  subTitle: string;
  tag?: string;
  skills: SkillItem[];
}

export interface SkillEditorialCardProps {
  id: string;
  headword: string;
  phonetic: string;
  classification: string;
  definition: string;
  subGroups?: SkillSubGroup[];
  skills?: SkillItem[];
  seeAlso: string[];
  number: string;
}

export default function SkillEditorialCard({
  headword,
  phonetic,
  classification,
  definition,
  subGroups,
  skills,
  seeAlso,
  number,
}: SkillEditorialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/60 hover:shadow-[0_12px_40px_rgba(63,127,208,0.12)]"
    >
      {/* Top Accent Rule */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#8fc4ff]/40 to-transparent group-hover:via-[#8fc4ff] transition-all duration-500" />

      {/* Dictionary Headword Header */}
      <div>
        <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
          <div className="flex items-baseline gap-3">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-[#8fc4ff] transition-colors">
              {headword}
            </h3>
            <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/90 tracking-wider">
              {phonetic}
            </span>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            SEC. {number}
          </span>
        </div>

        {/* Classification Tag */}
        <p className="mt-2 text-xs font-mono italic text-zinc-400">
          {classification}
        </p>

        {/* Narrative Definition */}
        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-zinc-300 font-sans">
          {definition}
        </p>

        {/* Skills Layout */}
        <div className="mt-6 space-y-6">
          {/* Direct Skill Grid (if no subGroups) */}
          {skills && skills.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-[#3f7fd0]/50 hover:bg-[#3f7fd0]/10 hover:text-white"
                >
                  <span className="text-lg transition-transform duration-200 group-hover/item:scale-110 text-zinc-300 group-hover/item:text-[#8fc4ff]">
                    {skill.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="truncate">{skill.name}</span>
                    {skill.badge && (
                      <span className="text-[10px] font-mono text-zinc-500 group-hover/item:text-[#8fc4ff]/80 truncate">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subgrouped Skills (for Multi-Stack Backend, etc.) */}
          {subGroups &&
            subGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8fc4ff]">
                    {group.subTitle}
                  </span>
                  {group.tag && (
                    <span className="rounded-full bg-[#3f7fd0]/20 px-2 py-0.5 font-mono text-[10px] text-[#8fc4ff] border border-[#3f7fd0]/30">
                      {group.tag}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/item flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-[#3f7fd0]/50 hover:bg-[#3f7fd0]/10 hover:text-white"
                    >
                      <span className="text-base text-zinc-300 group-hover/item:text-[#8fc4ff] transition-transform duration-200 group-hover/item:scale-110">
                        {skill.icon}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="truncate">{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[9px] font-mono text-zinc-500 group-hover/item:text-[#8fc4ff]/70 truncate">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Dictionary Footer / See Also */}
      <div className="mt-8 pt-4 border-t border-white/[0.08] flex flex-wrap items-baseline gap-2 font-mono text-xs">
        <span className="italic text-zinc-500">(see also:</span>
        {seeAlso.map((term, tIdx) => (
          <span
            key={tIdx}
            className="text-zinc-400 hover:text-[#8fc4ff] transition-colors cursor-default"
          >
            {term}
            {tIdx < seeAlso.length - 1 ? "," : ""}
          </span>
        ))}
        <span className="italic text-zinc-500">)</span>
      </div>
    </motion.div>
  );
}
