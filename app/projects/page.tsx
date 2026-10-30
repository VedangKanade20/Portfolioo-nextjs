import projects from "@/components/data/Projects";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Engineering Work | Vedang Kanade",
  description:
    "Explore Java backend BFSI platforms, AI engines, research assistant tools, and full-stack systems engineered by Vedang Kanade.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Editorial Header */}
      <div className="mb-12 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
              Selected Systems & Research
            </span>
          </div>
          <div className="flex items-baseline gap-3 mt-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              projects
            </h1>
            <span className="font-mono text-xs sm:text-sm text-[#8fc4ff]/80">
              [ˈprɒdʒ.ɛkts]
            </span>
          </div>
          <p className="mt-1 text-xs font-mono italic text-zinc-400">
            (noun / shipped software, financial settlement engines & AI research artifacts)
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl font-sans leading-relaxed">
            Enterprise Java backend architectures, BFSI financial reconciliation platforms, AI research assistants, and high-concurrency collaboration tools engineered for high reliability.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          {projects.length} SHIPPED REPOSITORIES
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const indexFormatted = String(index + 1).padStart(2, "0");
          return (
            <article
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#070709]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/60 hover:shadow-[0_16px_40px_rgba(63,127,208,0.14)]"
            >
              {/* Subtle top light-blue accent */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#8fc4ff]/30 to-transparent group-hover:via-[#8fc4ff] transition-all duration-500" />

              <div>
                {/* Video container */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 mb-5 aspect-video flex items-center justify-center">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-black/75 px-2 py-0.5 font-mono text-[11px] text-[#8fc4ff] border border-white/10 backdrop-blur-md">
                    FIG. {indexFormatted}
                  </span>
                  {project.featured && (
                    <span className="absolute top-3 right-3 rounded-md bg-[#3f7fd0]/80 px-2 py-0.5 font-mono text-[10px] text-white font-semibold backdrop-blur-md">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8fc4ff] transition-colors">
                    {project.title}
                  </h2>
                  <span className="rounded-full bg-[#3f7fd0]/15 border border-[#3f7fd0]/30 px-2.5 py-0.5 font-mono text-xs text-[#8fc4ff] whitespace-nowrap">
                    {project.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                  {project.description}
                </p>

                {/* Tech Badges */}
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-zinc-400 group-hover:border-[#3f7fd0]/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-4">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#3f7fd0]/20 border border-[#3f7fd0]/50 px-3.5 py-1.5 text-xs font-mono font-medium text-[#8fc4ff] hover:bg-[#3f7fd0] hover:text-white transition-all shadow-[0_0_12px_rgba(63,127,208,0.2)]"
                >
                  <FaExternalLinkAlt size={11} />
                  <span>Inspect System</span>
                </Link>

                {project.source && (
                  <Link
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-1.5 text-xs font-mono text-zinc-300 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <FaGithub size={13} />
                    <span>Source Code</span>
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
