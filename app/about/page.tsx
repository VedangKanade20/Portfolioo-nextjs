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
          I am Vedang Kanade, a Full Stack Developer specializing in the MERN stack. With a strong foundation in building robust, responsive, and user-friendly web applications, I excel at designing APIs, developing dynamic frontends, and crafting scalable backend solutions. My expertise spans the entire development lifecycle, but my true strength lies in creating seamless web experiences that power innovative projects. I am passionate about solving complex problems, collaborating with teams to deliver high-quality solutions, and continuously enhancing my skills through hands-on projects and emerging technologies. With over six months of experience and a portfolio featuring an e-commerce platform and a blog application, I am eager to contribute to cutting-edge developments while growing within the industry.
        </p>
        <a
          href="https://drive.google.com/file/d/1R1mpqsU_IZcjl5bwxG9l-ELUw3JCDJ9X/view?usp=sharing"
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
          Participated in AVISHKAR (competition organised by the UNIVERSITY of MUMBAI) and cleared the zonal Round.
        </p>
        <p className="text-lg text-white mb-8">
          Secured 2nd Runner-up for Care-Connect (MERN stack-based NGO-donor platform) at Mini Project Competition, NMITD.
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
