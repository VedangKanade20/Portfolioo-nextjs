"use client";

import React from "react";
import Github from "@/components/GithubCard";
import { Separator } from "@/components/ui/separator";
import { ConfettiButton } from "@/components/magicui/confetti";
import ExtraCards from "@/components/ExtraCards";
import ProjectsCard from "@/components/ProjectsCardView";
import ContactNavCard from "@/components/ContactNavCard";
import LocationMapCard from "@/components/LocationMapCard";
import { FaLinkedin, FaGithub, FaLaptopCode, FaDatabase, FaShieldAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col py-10 sm:py-16 gap-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Editorial Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
                Engineer Profile & Dossier
              </span>
            </div>
            <div className="flex items-baseline gap-3 mt-2">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
                about
              </h1>
              <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/80">
                [əˈbaʊt]
              </span>
            </div>
            <p className="mt-1 text-xs font-mono italic text-zinc-400">
              (noun / engineer background, technical philosophy & enterprise banking focus)
            </p>
          </div>

          {/* Location & Availability Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center border border-white/10 bg-white/[0.02] rounded-full px-3.5 py-1 gap-1.5 text-xs font-mono text-zinc-300">
              <span className="text-sm">📍</span>
              <span>Parel, Mumbai, IN</span>
            </div>
            <div className="flex items-center border border-[#3f7fd0]/30 bg-[#3f7fd0]/10 rounded-full px-3.5 py-1 gap-2 text-xs font-mono text-[#8fc4ff]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fc4ff] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fc4ff]"></span>
              </span>
              <span>SWE @ C-Edge Technologies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Narrative — Full Bio */}
      <article className="rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-5">
          <div>
            <h2 className="text-2xl font-bold text-white font-serif">
              Software Engineer
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              Java Full Stack • BFSI & Core Banking Systems
            </p>
          </div>
          <span className="font-mono text-xs text-[#8fc4ff] bg-[#3f7fd0]/15 border border-[#3f7fd0]/30 rounded-full px-3 py-1">
            C-EDGE TECHNOLOGIES (TCS-SBI JV)
          </span>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300 font-sans">
          <p>
            I&apos;m a <strong className="text-white font-semibold">Software Engineer</strong> with hands-on experience building and maintaining full-stack applications, backend services, and business-focused software solutions.
          </p>
          <p>
            My experience spans technologies such as <strong className="text-white">Java, Spring Boot, JavaScript, TypeScript, React, Next.js, Node.js, SQL, and relational databases</strong>. I&apos;ve worked on projects involving REST APIs, database integration, authentication, application architecture, and end-to-end feature development.
          </p>
          <div className="border-l-2 border-[#3f7fd0] pl-4 italic text-zinc-200 bg-[#3f7fd0]/5 py-3 rounded-r-lg space-y-1">
            <p>
              Currently working as a <strong className="text-white">Software Engineer (Java Full Stack) at C-Edge Technologies</strong> (a joint venture between Tata Consultancy Services and State Bank of India).
            </p>
            <p className="text-xs font-mono text-[#8fc4ff]">
              Focus: BFSI / Fintech software systems, ATM multi-way reconciliation, automated file downloaders, transaction-oriented workflows, and scalable core banking architecture.
            </p>
          </div>
          <p>
            I&apos;m passionate about writing clean, maintainable code, solving complex problems, and continuously improving my skills in data structures and algorithms, system design, and backend engineering.
          </p>
          <p>
            My goal is to grow into a well-rounded Software Engineer who can design reliable systems, take ownership of challenging problems, and build software that delivers real-world impact.
          </p>
        </div>

        <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
          <a
            href="https://drive.google.com/file/d/15ADuHgG74NxsYoKv8MHNQVE9SR87Tdri/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ConfettiButton className="bg-[#3f7fd0] hover:bg-[#8fc4ff] hover:text-black text-white font-mono text-xs px-5 py-2.5 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(63,127,208,0.25)]">
              Download Resume 📄
            </ConfettiButton>
          </a>

          <a
            href="https://in.linkedin.com/in/vedang-kanade-598a05276"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-zinc-300 hover:border-[#3f7fd0] hover:text-[#8fc4ff] transition-all"
          >
            <FaLinkedin size={14} className="text-[#8fc4ff]" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/vedangkanade20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-zinc-300 hover:border-white/30 hover:text-white transition-all"
          >
            <FaGithub size={14} />
            <span>GitHub Repositories</span>
          </a>
        </div>
      </article>

      {/* Core Engineering Disciplines */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 text-[#8fc4ff] mb-2 font-mono text-xs">
            <FaShieldAlt size={16} />
            <span className="font-semibold uppercase">BFSI & Fintech</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Enterprise banking settlement, ATM multi-way reconciliation, automated file downloaders, cryptographic validation (BouncyCastle), and ACID ledgers.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 text-[#8fc4ff] mb-2 font-mono text-xs">
            <FaDatabase size={16} />
            <span className="font-semibold uppercase">Java & Enterprise Backend</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            High-performance Java 17+, Spring Boot microservices, Hibernate/JPA, relational modeling, and query execution plan optimization.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-2.5 text-[#8fc4ff] mb-2 font-mono text-xs">
            <FaLaptopCode size={16} />
            <span className="font-semibold uppercase">Full-Stack & AI Systems</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Responsive, typed UIs in Next.js & React paired with AI research assistant tools, RAG vector retrieval, and Python FastAPI microservices.
          </p>
        </div>
      </section>

      {/* Location Map Card — Parel, Mumbai */}
      <LocationMapCard />

      <Separator className="bg-white/10" />

      {/* Education & Qualifications */}
      <ExtraCards />

      <Separator className="bg-white/10" />

      {/* Quick Navigation Cards */}
      <section className="w-full flex flex-col sm:flex-row justify-center items-center gap-6">
        <ProjectsCard />
        <ContactNavCard />
      </section>

      <Separator className="bg-white/10" />

      {/* Achievements & Research */}
      <article className="rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-white font-serif mb-4">
          Honors & Research Recognition
        </h2>
        <div className="space-y-4 font-sans text-sm">
          <div className="flex items-start gap-3 text-zinc-300">
            <span className="font-mono text-xs text-[#8fc4ff] mt-0.5 select-none">
              🏆
            </span>
            <div>
              <strong className="text-white">AVISHKAR Research Convention Zonal Finalist:</strong>
              <p className="text-zinc-400 text-xs mt-0.5">
                Represented university project work at AVISHKAR, organized by the University of Mumbai, advancing past the competitive zonal evaluation with an intelligent research assistant system.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-zinc-300">
            <span className="font-mono text-xs text-[#8fc4ff] mt-0.5 select-none">
              🥈
            </span>
            <div>
              <strong className="text-white">2nd Runner-up — Care-Connect Platform:</strong>
              <p className="text-zinc-400 text-xs mt-0.5">
                Mini Project Competition, NMITD. Recognized for architecting a production-ready MERN platform bridging NGOs and donors with live inventory tracking.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Separator className="bg-white/10" />

      {/* GitHub Activity Section */}
      <section className="w-full">
        <Github />
      </section>
    </div>
  );
}
