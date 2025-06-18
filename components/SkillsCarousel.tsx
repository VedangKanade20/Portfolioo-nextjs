"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const skillsData = {
  frontend: [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion",
  ],
  backend: [
    "Node.js", "Express", "MongoDB", "JWT", "REST API", "Mongoose", "Prisma", "MySQl", "PostgreSQL"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Postman", "Docker", "Figma", "Notion", "Vercel"
  ],
};

function SkillRow({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="w-full mb-10">
      <h4 className="text-white text-xl font-semibold mb-4">{title}</h4>

      <div className="relative flex items-center justify-center overflow-hidden">
        <VelocityScroll>
          <div className="flex gap-4 px-4 py-2">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="min-w-max bg-[#1f1f1f] text-white border border-[#333] px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:bg-[#2a2a2a] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </VelocityScroll>

        {/* Gradient mask effect on left/right sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
      </div>
    </div>
  );
}

export default function ScrollBasedVelocitySkills() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <SkillRow title="Frontend" skills={skillsData.frontend} />
      <SkillRow title="Backend" skills={skillsData.backend} />
      <SkillRow title="Tools & Others" skills={skillsData.tools} />
    </div>
  );
}
