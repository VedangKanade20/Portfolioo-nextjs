"use client";

import React from "react";
import Github from "@/components/GithubCard";
import { Separator } from "@/components/ui/separator";
import { ConfettiButton } from "@/components/magicui/confetti";
import ExtraCards from "@/components/ExtraCards";
import ProjectsCard from "@/components/ProjectsCardView";
import ContactNavCard from "@/components/ContactNavCard";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12 px-4">
      {/* Location & Availability */}
      <section className="relative w-full max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-start gap-4 mt-4">
          <div className="flex items-center border border-white/20 rounded-full px-4 py-1 gap-1.5 text-sm">
            <span className="text-base">📍</span>
            <span className="font-semibold text-white">Based in India</span>
          </div>
          <div className="flex items-center border border-white/20 rounded-full px-4 py-1 gap-1.5 text-sm">
            <span className="font-semibold text-white">Open to Work</span>
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="inline-block w-2.5 h-2.5 rounded-full border-2 border-green-400"></span>
            </span>
          </div>
        </div>
      </section>

      <Separator />

      {/* About Me */}
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-white mb-8">
          I’m Vedang Kanade, a Full Stack Developer specializing in the MERN
          stack, focused on building scalable, responsive, and user-centric web
          applications. I enjoy transforming ideas into seamless digital
          experiences through dynamic frontend interfaces, efficient backend
          systems, and well-structured APIs. My expertise spans across React.js,
          Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and modern
          development workflows including Docker, AWS, and CI/CD. I’ve developed
          and deployed multiple full-stack projects ranging from collaboration
          platforms to real-time communication and management systems, with a
          strong emphasis on performance optimization, scalability, and clean
          architecture. Passionate about problem-solving and continuous
          learning, I actively explore emerging technologies, contribute to
          innovative projects, and enjoy collaborating with teams to create
          impactful software solutions. As a final-year MCA student, I’m eager
          to grow as a developer while building meaningful products that deliver
          real-world value.
        </p>
        <a
          href="https://drive.google.com/file/d/15ADuHgG74NxsYoKv8MHNQVE9SR87Tdri/view?usp=sharing"
          download
          className="inline-block text-white"
        >
          <ConfettiButton>Download Resume</ConfettiButton>
        </a>
      </section>

      <Separator />

      {/* Extra Cards */}
      <ExtraCards />

      <Separator />

      {/* Projects & Contact Cards */}
      <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
        <ProjectsCard />
        <ContactNavCard />
      </section>

      <Separator />

      {/* Achievements */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Achievements</h2>
        <p className="text-lg text-white mb-2">
          Participated in AVISHKAR (competition organised by the UNIVERSITY of
          MUMBAI) and cleared the zonal Round.
        </p>
        <p className="text-lg text-white mb-8">
          Secured 2nd Runner-up for Care-Connect (MERN stack-based NGO-donor
          platform) at Mini Project Competition, NMITD.
        </p>
      </section>

      <Separator />

      {/* GitHub Section (full width) */}
      <section className="w-full">
        <Github />
      </section>
    </div>
  );
};

export default page;
