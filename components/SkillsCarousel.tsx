"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const skillsData = {
  frontend: [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion",
  ],
  backend: [
    "Node.js", "Express", "MongoDB", "JWT", "REST API", "Mongoose", "Prisma", "MySQL", "PostgreSQL",
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Postman", "Docker", "Figma", "Notion", "Vercel",
  ],
};

function SkillRow({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="w-full mb-6 sm:mb-10">
      <h4 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
        {title}
      </h4>

      <div className="relative w-full overflow-x-auto">
        <VelocityScroll>
          <div className="flex gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="min-w-max bg-[#1f1f1f] text-white border border-[#333] px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-sm hover:bg-[#2a2a2a] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </VelocityScroll>

        {/* Gradient fade sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/12 bg-gradient-to-r from-[#0e0e0e] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/12 bg-gradient-to-l from-[#0e0e0e] to-transparent z-10" />
      </div>
    </div>
  );
}

export default function ScrollBasedVelocitySkills() {
  return (
    <div className="w-full max-w-6xl mx-auto py-6 sm:py-8 px-3 sm:px-4">
      <SkillRow title="Frontend" skills={skillsData.frontend} />
      <SkillRow title="Backend" skills={skillsData.backend} />
      <SkillRow title="Tools & Others" skills={skillsData.tools} />
    </div>
  );
}
