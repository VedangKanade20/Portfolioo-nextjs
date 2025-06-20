
"use client";

import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiMongoose,
  SiTypescript,
  SiTailwindcss,
 SiGit,
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiNetlify,
  SiFigma,
  SiVercel,
  SiMysql,
  SiJenkins,
  SiDocker,
  SiPostman,
  SiThunderstore,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";

type SkillProps = {
  icon: React.ReactElement;
  label: string;
};

const Skill: React.FC<SkillProps> = ({ icon, label }) => (
  <div className="flex flex-col items-center text-center w-20 justify-center">
    <div className="text-4xl justify-center">{icon}</div>
    <span className="mt-2 text-sm">{label}</span>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-10 text-center justify-center">
    <h2 className="text-xl font-semibold mb-6 text-purple-400">{title}</h2>
    <div className="flex flex-wrap justify-center gap-6">{children}</div>
  </div>
);

const Techstack: React.FC = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center px-4 justify-center">
      <h1 className="text-3xl font-bold pb-8 text-center">
        My <span className="text-purple-500">Tech Stack</span>
      </h1>

      {/* Programming Languages */}
      <Section title="Programming Languages">
        <Skill icon={<DiJavascript1 />} label="JavaScript" />
        <Skill icon={<SiTypescript />} label="TypeScript" />
        <Skill icon={<DiPython />} label="Python" />
        <Skill icon={<DiJava />} label="Java" />
        <Skill icon={<SiCplusplus />} label="C++" />
      </Section>

      {/* Frontend */}
      <Section title="Frontend">
        <Skill icon={<DiReact />} label="React.js" />
        <Skill icon={<SiNextdotjs />} label="Next.js" />
        <Skill icon={<SiHtml5 />} label="HTML5" />
        <Skill icon={<SiCss3 />} label="CSS3" />
        <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
        {/* <Skill icon={<SiMaterialui />} label="Material UI" /> */}
        <Skill icon={<SiChakraui />} label="Chakra UI" />
        <Skill icon={<SiFigma />} label="Figma" />
      </Section>

      {/* Backend */}
      <Section title="Backend">
        <Skill icon={<DiNodejs />} label="Node.js" />
        <Skill icon={<SiExpress />} label="Express.js" />
        <Skill icon={<SiMongoose />} label="Mongoose" />
      </Section>

      {/* Databases */}
      <Section title="Databases">
        <Skill icon={<DiMongodb />} label="MongoDB" />
        <Skill icon={<SiMysql />} label="MySQL" />
        <Skill icon={<SiPostgresql />} label="PostgreSQL" />
      </Section>

      {/* Development Tools */}
      <Section title="Development Tools">
        <Skill icon={<SiNetlify />} label="Netlify" />
        <Skill icon={<DiGit />} label="Git" />
        <Skill icon={<SiPostman />} label="Postman" />
        <Skill icon={<SiThunderstore />} label="Thunder Client" />
        <Skill icon={<SiVercel />} label="Vercel" />
      </Section>

      {/* DevOps */}
      <Section title="DevOps">
        <Skill icon={<SiGit />} label="Git" />
        <Skill icon={<SiJenkins />} label="Jenkins" />
        <Skill icon={<SiDocker />} label="Docker" />
        <Skill icon={<SiVercel />} label="Vercel" />
        <Skill
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="text-4xl"
            >
              <title>NGINX</title>
              <path
                fill="#009639"
                d="M256 0L0 128v256l256 128 256-128V128zm115.2 341.3h-57.6V256l-57.6 85.3h-57.6V170.7h57.6v85.3l57.6-85.3h57.6z"
              />
            </svg>
          }
          label="NGINX"
        />
      </Section>
    </div>
  );
};

export default Techstack;
