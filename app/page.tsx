"use client";

import { motion } from "motion/react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Spotlight } from "@/components/ui/spotlight";
import AboutCard from "@/components/AboutCard";
import Link from "next/link";
import ContactNavCard from "@/components/ContactNavCard";
import { Separator } from "@/components/ui/separator";
import SkillsEditorialSection from "@/components/skills/SkillsEditorialSection";
import CopyEmailButton from "@/components/CopyEmailButton";
import projects from "@/components/data/Projects";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1] as const;

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-8 sm:py-14 gap-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.section
        className="relative max-w-4xl mx-auto text-center pt-4 sm:pt-10"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <Spotlight fill="#8fc4ff" />

        {/* Status Pill */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 mb-6 text-xs font-mono text-zinc-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#8fc4ff] animate-pulse" />
          <span>Full Stack Software Developer</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-serif mb-4"
        >
          Vedang Kanade
        </motion.h1>

        <motion.div variants={fadeUp} className="mb-4">
          <ContainerTextFlip />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
        >
          Engineering full-stack architectures across modern TypeScript/React ecosystems, high-performance Java Spring Boot & Python backends, and cloud delivery pipelines.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Link href="/about">
            <button className="bg-white text-black hover:bg-[#8fc4ff] hover:text-black px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              About Me
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border border-white/20 hover:border-[#8fc4ff] hover:text-[#8fc4ff] text-white px-5 py-2.5 rounded-lg text-sm transition-all">
              Contact
            </button>
          </Link>
          <CopyEmailButton />
        </motion.div>
      </motion.section>

      {/* Separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="bg-white/10" />
      </motion.div>

      {/* Featured Projects Section */}
      <motion.section
        className="w-full"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
                Featured Systems
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif mt-1">
              Recent Work
            </h2>
          </div>

          <Link
            href="/projects"
            className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#8fc4ff] hover:text-white transition-colors"
          >
            <span>All Projects</span>
            <FaArrowRight size={12} />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#070709]/90 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/60 hover:shadow-[0_16px_40px_rgba(63,127,208,0.12)]"
            >
              <div>
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 mb-4 aspect-video flex items-center justify-center">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#8fc4ff] transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#8fc4ff] bg-[#3f7fd0]/15 border border-[#3f7fd0]/30 rounded-full px-2 py-0.5 whitespace-nowrap">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex gap-3 text-xs font-mono">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8fc4ff] hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={10} />
                  <span>Visit</span>
                </a>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={12} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="bg-white/10" />
      </motion.div>

      {/* Skills Showcase Section */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full"
      >
        <SkillsEditorialSection showHeader={true} defaultFilter="all" />
      </motion.section>

      {/* Separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="bg-white/10" />
      </motion.div>

      {/* About & Contact Highlights */}
      <motion.section
        className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6"
        variants={cardStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardItem} className="w-full md:w-auto">
          <AboutCard />
        </motion.div>
        <motion.div variants={cardItem} className="w-full md:w-auto">
          <ContactNavCard />
        </motion.div>
      </motion.section>
    </div>
  );
}
