"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Spotlight } from "@/components/ui/spotlight";
import AboutCard from "@/components/AboutCard";
import Link from "next/link";
import ContactNavCard from "@/components/ContactNavCard";
import { Separator } from "@/components/ui/separator";
import SkillsCarousel from "@/components/SkillsCarousel";
import ProjectsCard from "@/components/ProjectsCardView";
import SkillsCard from "@/components/SkillsCard";
import CopyEmailButton from "@/components/CopyEmailButton";
import projects from "@/components/data/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12 px-4">
      {/* Top Section - Intro */}
      <section className="relative max-w-4xl mx-auto text-center">
        <Spotlight />
        <h1 className="text-4xl font-bold text-white mb-2">
          Hey, I am Vedang Kanade
        </h1>
        <ContainerTextFlip />
        <h3 className="text-gray-400 max-w-2xl mx-auto mt-2 text-lg">
          I am a developer who enjoys building web applications and exploring new technologies — basically, I spend most of my time in front of a screen.
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href={"/about"}>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium">About</button>
          </Link>
          <Link href={"/contact"}>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Contact</button>
          </Link>
          <CopyEmailButton />
        </div>
      </section>

      <Separator className="my-8 bg-muted-foreground/20" />

      {/* Recent Work */}
      <section className="w-full">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">Recent Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-800/30 transition-shadow duration-300 max-w-md w-full"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg mb-4 w-full"
              />
              <h2 className="text-xl font-semibold mb-1 text-white">{project.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{project.type}</p>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  Visit
                </a>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8 bg-muted-foreground/20" />

      {/* About + Contact section */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
        <AboutCard />
        <ContactNavCard />
      </section>

      <Separator className="my-8 bg-muted-foreground/20" />

      {/* Projects + Skills card */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
        <ProjectsCard />
        <SkillsCard />
      </section>

      <Separator className="my-8 bg-muted-foreground/20" />

      {/* Skills Carousel */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Skills</h3>
        <SkillsCarousel />
      </section>
    </div>
  );
}
