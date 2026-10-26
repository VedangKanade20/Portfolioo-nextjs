"use client";

import React from "react";
import Github from "@/components/GithubCard";
import { Separator } from "@/components/ui/separator";
import { ConfettiButton } from "@/components/magicui/confetti";
import ExtraCards from "@/components/ExtraCards";
import ProjectsCard from "@/components/ProjectsCardView";
import ContactNavCard from "@/components/ContactNavCard";

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
                Engineer Profile
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
              (noun / engineer biography, background & technical philosophy)
            </p>
          </div>

          {/* Location & Availability Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center border border-white/10 bg-white/[0.02] rounded-full px-3 py-1 gap-1.5 text-xs font-mono text-zinc-300">
              <span className="text-sm">📍</span>
              <span>Based in India</span>
            </div>
            <div className="flex items-center border border-[#3f7fd0]/30 bg-[#3f7fd0]/10 rounded-full px-3 py-1 gap-2 text-xs font-mono text-[#8fc4ff]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8fc4ff] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8fc4ff]"></span>
              </span>
              <span>Open to Roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Narrative */}
      <article className="rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-white font-serif mb-4">
          Engineering Focus & Philosophy
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300 font-sans">
          <p>
            I’m Vedang Kanade, a Full Stack Developer specializing in building resilient, scalable, and responsive software systems. I enjoy transforming complex problems into fluid digital experiences through dynamic client interfaces, robust backend services, and clean RESTful APIs.
          </p>
          <p>
            My engineering repertoire spans React.js, Next.js, Node.js, Express.js, Java Spring Boot, Python FastAPI, PostgreSQL, and MongoDB, augmented by modern containerization and DevOps workflows using Docker, AWS, and CI/CD pipelines.
          </p>
          <p>
            As a final-year Master of Computer Applications (MCA) student, I actively architect and ship production applications—ranging from real-time collaboration platforms to transactional management systems—with an unyielding focus on code craft, latency reduction, and elegant UX.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.08]">
          <a
            href="https://drive.google.com/file/d/15ADuHgG74NxsYoKv8MHNQVE9SR87Tdri/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <ConfettiButton className="bg-[#3f7fd0] hover:bg-[#8fc4ff] hover:text-black text-white font-mono text-xs px-5 py-2.5 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(63,127,208,0.25)]">
              Download Resume 📄
            </ConfettiButton>
          </a>
        </div>
      </article>

      <Separator className="bg-white/10" />

      {/* Education & Interests */}
      <ExtraCards />

      <Separator className="bg-white/10" />

      {/* Quick Navigation Cards */}
      <section className="w-full flex flex-col sm:flex-row justify-center items-center gap-6">
        <ProjectsCard />
        <ContactNavCard />
      </section>

      <Separator className="bg-white/10" />

      {/* Achievements */}
      <article className="rounded-2xl border border-white/10 bg-[#070709]/90 p-6 sm:p-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-white font-serif mb-4">
          Honors & Achievements
        </h2>
        <div className="space-y-3 font-sans">
          <div className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="font-mono text-xs text-[#8fc4ff] mt-0.5 select-none">
              🏆
            </span>
            <span>
              <strong className="text-white">AVISHKAR Zonal Finalist:</strong> Participated in the university-wide research convention organized by the University of Mumbai and cleared the competitive zonal round.
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-zinc-300">
            <span className="font-mono text-xs text-[#8fc4ff] mt-0.5 select-none">
              🥈
            </span>
            <span>
              <strong className="text-white">2nd Runner-up (Care-Connect):</strong> Awarded at Mini Project Competition, NMITD for architecting an end-to-end MERN stack NGO-donor platform.
            </span>
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
