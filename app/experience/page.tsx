"use client";

import React from "react";
import type { Metadata } from "next";

export interface ExperienceItem {
  role: string;
  phoneticRole?: string;
  company: string;
  period: string;
  location: string;
  classification: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  seeAlso: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Developer",
    phoneticRole: "[ˈsɒft.weər dɪˈvɛl.ə.pər]",
    company: "Ardra Innovations",
    period: "Jan 2026 - May 2026",
    location: "Mumbai, India",
    classification: "(professional role / full-stack engineering)",
    summary:
      "Engineered end-to-end MERN stack platforms including Team Sync and Inventory management systems, architecting resilient backend logic and high-performance client state.",
    highlights: [
      "Built and deployed full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js), including Team Sync and Inventory systems.",
      "Designed and optimized REST APIs with Express.js, improving average endpoint response time by 25% via query tuning and compound indexing.",
      "Implemented scalable backend services and handled cloud deployment, reducing redundant API roundtrips and optimizing system throughput.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
    seeAlso: ["Inventory Architecture", "Query Profiling", "Team Sync Platform"],
  },
  {
    role: "Full Stack Developer Intern",
    phoneticRole: "[fʊl stæk dɪˈvɛl.ə.pər ˈɪn.tɜːn]",
    company: "DataCircles Technologies",
    period: "Oct 2025 - Jan 2026",
    location: "Remote / Hybrid",
    classification: "(internship / enterprise CRM & backend systems)",
    summary:
      "Developed high-throughput workflow engines for CRM automation, client lifecycle management, and relational database migrations with fine-grained access control.",
    highlights: [
      "Developed scalable systems using Node.js, Express.js, PostgreSQL, and MongoDB for CRM workflows & client management.",
      "Built RBAC-based REST APIs and optimized database queries, improving backend efficiency by 30%.",
      "Integrated AWS cloud services, Redis in-memory caching strategies to enhance performance and reduce p95 latency.",
    ],
    technologies: ["Node.js", "PostgreSQL", "Express.js", "Redis", "AWS", "MongoDB"],
    seeAlso: ["Role-Based Access Control", "Redis Caching", "PostgreSQL Schemas"],
  },
  {
    role: "Backend Web Developer Intern",
    phoneticRole: "[ˈbæk.ɛnd wɛb dɪˈvɛl.ə.pər]",
    company: "UpWork",
    period: "Dec 2024 - Apr 2025",
    location: "Remote",
    classification: "(contract / API development & schema optimization)",
    summary:
      "Engineered production-grade REST services with FastAPI and Express.js, managing complex data validation pipelines and relational schema indexing.",
    highlights: [
      "Developed and deployed REST APIs using FastAPI and Express.js, handling mission-critical application logic and high-volume data flow.",
      "Optimized database schemas across PostgreSQL and MongoDB, improving complex query efficiency and transaction integrity.",
      "Implemented JWT authentication, input validation, and business logic for production-ready client applications.",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "Express.js", "MongoDB", "Docker"],
    seeAlso: ["AsyncIO", "Pydantic Schemas", "Schema Normalization"],
  },
  {
    role: "Junior Full Stack Trainee",
    phoneticRole: "[ˈdʒuː.njər fʊl stæk treɪˈniː]",
    company: "RSTForum",
    period: "Apr 2024 - Sept 2024",
    location: "Mumbai, India",
    classification: "(training program / software development fundamentals)",
    summary:
      "Comprehensive training in modern software engineering principles, component lifecycle architecture, REST conventions, and deployment pipelines.",
    highlights: [
      "Built responsive web applications using React.js, Node.js, and MongoDB, following clean code architecture and component best practices.",
      "Gained hands-on experience in API integration, dynamic state management, and modern CI/CD deployment workflows.",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "JavaScript", "HTML5/CSS3"],
    seeAlso: ["Component Lifecycle", "REST Standards", "Git Workflows"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
              Chronology of Engagements
            </span>
          </div>
          <div className="flex items-baseline gap-3 mt-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              experience
            </h1>
            <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/80">
              [ɪkˈspɪə.ri.əns]
            </span>
          </div>
          <p className="mt-1 text-xs font-mono italic text-zinc-400">
            (noun / professional engineering engagements & production delivery)
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl font-sans leading-relaxed">
            A track record of shipping full-stack systems, optimizing backend performance, and delivering robust software solutions across industry roles.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          {EXPERIENCES.length} ENGAGEMENTS RECORDED
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => {
          const indexFormatted = String(index + 1).padStart(2, "0");
          return (
            <article
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/60 hover:shadow-[0_12px_40px_rgba(63,127,208,0.12)]"
            >
              {/* Subtle top light-blue accent */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#8fc4ff]/30 to-transparent group-hover:via-[#8fc4ff] transition-all duration-500" />

              {/* Headword row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#8fc4ff] transition-colors">
                    {exp.role}
                  </h2>
                  {exp.phoneticRole && (
                    <span className="font-mono text-xs text-[#8fc4ff]/80">
                      {exp.phoneticRole}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span className="text-[#8fc4ff] font-semibold">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Classification Tag */}
              <p className="mt-2 text-xs font-mono italic text-zinc-400">
                {exp.classification} — <span className="text-zinc-500">{exp.location}</span>
              </p>

              {/* Narrative Summary */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-200">
                {exp.summary}
              </p>

              {/* Bulleted Achievements */}
              <div className="mt-5 space-y-2.5">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="font-mono text-xs text-[#8fc4ff] mt-0.5 select-none">
                      →
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-zinc-300 group-hover:border-[#3f7fd0]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Dictionary Footer */}
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex flex-wrap items-baseline gap-2 font-mono text-xs">
                <span className="italic text-zinc-500">(see also:</span>
                {exp.seeAlso.map((term, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-zinc-400 hover:text-[#8fc4ff] transition-colors cursor-default"
                  >
                    {term}
                    {sIdx < exp.seeAlso.length - 1 ? "," : ""}
                  </span>
                ))}
                <span className="italic text-zinc-500">)</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
