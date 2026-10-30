"use client";

import React from "react";
import { FaShieldAlt, FaCheckCircle } from "react-icons/fa";

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
  metrics?: string;
  isCurrent?: boolean;
  seeAlso: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Engineer — Java Full Stack",
    phoneticRole: "[ˈsɒft.weər ˌɛn.dʒɪˈnɪər]",
    company: "C-Edge Technologies (TCS & SBI Joint Venture)",
    period: "Jun 2026 - Present",
    location: "Mumbai, India",
    classification: "(current role / enterprise BFSI & core banking fintech)",
    metrics: "Mission-Critical Banking Systems",
    isCurrent: true,
    summary:
      "Engineering enterprise-scale banking settlement and financial reconciliation platforms at C-Edge Technologies (a joint venture between Tata Consultancy Services and State Bank of India). Developing high-concurrency Java Spring Boot backend services, multi-way transaction reconciliation, secure automated file downloaders, and hardened REST APIs.",
    highlights: [
      "Architect and maintain mission-critical BFSI backend microservices using Java 17+, Spring Boot 3, Hibernate/JPA, and Spring Security for financial transaction processing.",
      "Engineered automated multi-party transaction settlement and ATM 5-way reconciliation pipelines, matching records across switches, core banking ledgers, and terminal logs.",
      "Implemented secure, automated file download pipelines with cryptographic verification (BouncyCastle, SFTP, checksum validation) for automated banking settlement files.",
      "Designed and optimized high-performance SQL queries and stored procedures across Oracle and PostgreSQL, reducing batch reconciliation processing windows.",
      "Ensured regulatory compliance, zero-data-loss architecture, and strict audit logging across financial transactions.",
    ],
    technologies: [
      "Java 17+",
      "Spring Boot 3",
      "Spring Security",
      "Hibernate / JPA",
      "Oracle SQL",
      "PostgreSQL",
      "BouncyCastle",
      "Microservices",
      "REST APIs",
      "Maven",
    ],
    seeAlso: [
      "ATM 5-Way Recon",
      "Financial Settlement",
      "BouncyCastle Encryption",
      "TCS-SBI Banking JV",
      "ACID Ledgers",
    ],
  },
  {
    role: "Software Engineer",
    phoneticRole: "[ˈsɒft.weər ˌɛn.dʒɪˈnɪər]",
    company: "Ardra Innovations",
    period: "Jan 2026 - May 2026",
    location: "Mumbai, India",
    classification: "(full-stack engineering & business systems)",
    metrics: "25% API Latency Reduction",
    summary:
      "Engineered end-to-end full-stack platforms including Team Sync and multi-tenant Inventory management systems, architecting resilient backend services, state synchronization, and scalable cloud deployments.",
    highlights: [
      "Built and deployed scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js for real-time inventory and team synchronization.",
      "Designed and optimized REST APIs with Express.js, reducing average endpoint response time by 25% via query execution plan profiling and compound indexing.",
      "Implemented resilient error-handling middleware, payload validation schemas, and automated database backups to prevent data corruption under concurrent load.",
      "Handled production deployment pipelines and environment configuration, reducing redundant API roundtrips and improving system efficiency.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "Cloud Deployment",
    ],
    seeAlso: [
      "Inventory Architecture",
      "Query Profiling",
      "Team Sync Platform",
      "Compound Indexing",
    ],
  },
  {
    role: "Full Stack Engineer Intern",
    phoneticRole: "[fʊl stæk ˌɛn.dʒɪˈnɪər ˈɪn.tɜːn]",
    company: "DataCircles Technologies",
    period: "Oct 2025 - Jan 2026",
    location: "Remote / Hybrid",
    classification: "(internship / enterprise CRM & backend architectures)",
    metrics: "30% Query Optimization",
    summary:
      "Developed high-throughput workflow engines for CRM automation, client lifecycle management, and relational database migrations with fine-grained role-based access control.",
    highlights: [
      "Architected backend micro-services using Node.js, Express.js, PostgreSQL, and MongoDB to streamline client management and complex CRM sales workflows.",
      "Engineered granular Role-Based Access Control (RBAC) security across REST endpoints, ensuring strict data governance across managerial and staff roles.",
      "Optimized relational database queries and normalized schemas in PostgreSQL, improving backend query throughput by 30%.",
      "Integrated AWS cloud services and Redis in-memory caching strategies to cache recurring dashboard queries, drastically slashing p95 latency.",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "Redis",
      "AWS",
      "MongoDB",
      "RBAC",
    ],
    seeAlso: [
      "Role-Based Access Control",
      "Redis In-Memory Caching",
      "PostgreSQL Normalization",
      "AWS S3",
    ],
  },
  {
    role: "Backend Software Engineer Intern",
    phoneticRole: "[ˈbæk.ɛnd ˌɛn.dʒɪˈnɪər ˈɪn.tɜːn]",
    company: "UpWork",
    period: "Dec 2024 - Apr 2025",
    location: "Remote",
    classification: "(contract / API engineering & schema optimization)",
    metrics: "Production API Pipelines",
    summary:
      "Engineered production-grade asynchronous REST services with FastAPI and Express.js, managing complex data validation pipelines, relational schema indexing, and third-party integrations.",
    highlights: [
      "Developed and deployed asynchronous REST APIs using Python FastAPI and Express.js, handling mission-critical business logic and high-volume data flow.",
      "Designed and tuned database schemas across PostgreSQL and MongoDB, guaranteeing data consistency and enforcing foreign key constraints.",
      "Implemented secure JWT authentication, Pydantic request/response validation, and business logic for production-ready client applications.",
      "Containerized micro-services using Docker for deterministic local development and seamless production parity.",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Express.js",
      "MongoDB",
      "Docker",
      "JWT Auth",
    ],
    seeAlso: [
      "AsyncIO",
      "Pydantic Schemas",
      "Schema Normalization",
      "Docker Containers",
    ],
  },
  {
    role: "Junior Full Stack Engineering Trainee",
    phoneticRole: "[ˈdʒuː.njər fʊl stæk treɪˈniː]",
    company: "RSTForum",
    period: "Apr 2024 - Sept 2024",
    location: "Mumbai, India",
    classification: "(training program / software engineering foundations)",
    metrics: "Full MERN Mastery",
    summary:
      "Rigorous professional training in software engineering best practices, component lifecycle architecture, REST conventions, and automated deployment pipelines.",
    highlights: [
      "Built responsive, accessible web applications using React.js, Node.js, and MongoDB, following clean code architecture and component best practices.",
      "Collaborated with senior engineers to conduct code reviews, implement unit testing, and master modern Git branching workflows.",
      "Gained hands-on experience in API integration, dynamic state management with Context/Redux, and modern CI/CD deployment workflows.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "HTML5/CSS3",
      "Git Workflows",
    ],
    seeAlso: [
      "Component Lifecycle",
      "REST Standards",
      "Git Workflows",
      "Clean Architecture",
    ],
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
              Professional Experience & Delivery
            </span>
          </div>
          <div className="flex items-baseline gap-3 mt-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              work
            </h1>
            <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/80">
              [wɜːk]
            </span>
          </div>
          <p className="mt-1 text-xs font-mono italic text-zinc-400">
            (noun / career chronology, enterprise software systems & technical achievements)
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl font-sans leading-relaxed">
            A track record of engineering core banking systems at C-Edge Technologies (TCS-SBI JV), architecting full-stack platforms, optimizing backend latency, and building secure financial transaction workflows.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          {EXPERIENCES.length} FORMAL ENGAGEMENTS
        </div>
      </div>

      {/* Enterprise & BFSI Focus Banner */}
      <div className="mb-12 rounded-2xl border border-[#3f7fd0]/40 bg-gradient-to-br from-[#0c1a30]/80 via-[#070709] to-[#050506] p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(63,127,208,0.15)]">
        <div className="flex items-center gap-3 text-[#8fc4ff] mb-3">
          <FaShieldAlt size={20} />
          <span className="font-mono text-xs uppercase tracking-widest font-semibold">
            BFSI & Enterprise Banking Domain Specialization
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif mb-2">
          C-Edge Technologies (TCS & SBI JV) • Banking Settlement & Reconciliation
        </h2>
        <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300 max-w-4xl font-sans">
          Currently engineering mission-critical BFSI software systems: building high-volume Java Spring Boot microservices, ATM 5-way reconciliation engines, automated settlement file download pipelines with cryptographic verification (BouncyCastle), and hardened REST APIs connecting banks and financial switches.
        </p>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-zinc-300">
            <FaCheckCircle className="text-[#8fc4ff]" />
            <span>ATM 5-Way Recon</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <FaCheckCircle className="text-[#8fc4ff]" />
            <span>BouncyCastle Crypto</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <FaCheckCircle className="text-[#8fc4ff]" />
            <span>Java 17 & Spring Boot 3</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <FaCheckCircle className="text-[#8fc4ff]" />
            <span>ACID Banking Ledgers</span>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => {
          return (
            <article
              key={index}
              className={`group relative rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                exp.isCurrent
                  ? "border-[#3f7fd0]/60 bg-[#080d1a]/95 shadow-[0_12px_45px_rgba(63,127,208,0.18)]"
                  : "border-white/10 bg-[#070709]/90 hover:border-[#3f7fd0]/60 hover:shadow-[0_12px_40px_rgba(63,127,208,0.14)]"
              }`}
            >
              {/* Subtle top light-blue accent */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#8fc4ff]/50 to-transparent ${
                  exp.isCurrent ? "via-[#8fc4ff]" : "group-hover:via-[#8fc4ff]"
                } transition-all duration-500`}
              />

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
                  <span className="text-[#8fc4ff] font-semibold flex items-center gap-1.5">
                    {exp.isCurrent && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fc4ff] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fc4ff]"></span>
                      </span>
                    )}
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Classification Tag & Metrics */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                <p className="text-xs font-mono italic text-zinc-400">
                  {exp.classification} — <span className="text-zinc-500">{exp.location}</span>
                </p>
                {exp.metrics && (
                  <span className="rounded-full bg-[#3f7fd0]/20 border border-[#8fc4ff]/40 px-3 py-0.5 font-mono text-[11px] text-[#8fc4ff] font-semibold">
                    ★ {exp.metrics}
                  </span>
                )}
              </div>

              {/* Narrative Summary */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-200 font-sans">
                {exp.summary}
              </p>

              {/* Bulleted Achievements */}
              <div className="mt-5 space-y-2.5">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="font-mono text-xs text-[#8fc4ff] mt-0.5 select-none">
                      →
                    </span>
                    <span className="leading-relaxed font-sans">{highlight}</span>
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
