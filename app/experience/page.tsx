"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";

const ExperiencePage = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Ardra Innovations",
      period: "Jan 2026 - May 2026",
      highlights: [
        "Built and deployed full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js), including Team Sync and Inventory systems.",
        "Designed and optimized REST APIs with Express.js, improving response time by 25% via query tuning and indexing.",
        "Implemented scalable backend services and handled deployment, reducing redundant API calls and improving system efficiency.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "DataCircles Technologies",
      period: "Oct 2025 - Jan 2026",
      highlights: [
        "Developed scalable systems using Node.js, Express.js, PostgreSQL, MongoDB for CRM workflows & client management.",
        "Built RBAC-based REST APIs and optimized database queries, improving backend efficiency by 30%.",
        "Integrated AWS, Redis, and caching strategies to enhance performance and reduce latency.",
      ],
    },
    {
      role: "Backend Web Developer Intern",
      company: "UpWork",
      period: "Dec 2024 - Apr 2025",
      highlights: [
        "Developed and deployed REST APIs using FastAPI and Express.js, handling application logic and data flow.",
        "Optimized database schemas (PostgreSQL, MongoDB) improving query efficiency and performance.",
        "Implemented authentication, validation, and business logic for production-ready applications.",
      ],
    },
    {
      role: "Junior Full Stack Web Development Trainee",
      company: "RSTForum",
      period: "Apr 2024 - Sept 2024",
      highlights: [
        "Built responsive web apps using React.js, Node.js, MongoDB, following full-stack best practices.",
        "Gained hands-on experience in API integration, UI development, and deployment workflows.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col py-12 gap-8 px-4">
      {/* Header */}
      <section className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-white mb-2">Work Experience</h1>
        <p className="text-lg text-white/70">
          My professional journey and key contributions across different roles.
        </p>
      </section>

      <Separator />

      {/* Experience Timeline */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-white/20 hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white/10"></div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-white/50 mt-1">{exp.period}</p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-white/80 leading-relaxed flex gap-3"
                    >
                      <span className="text-blue-400 font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Key Skills Section */}
      <section className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-white mb-4">Key Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "REST APIs",
            "FastAPI",
            "AWS",
            "Redis",
            "Docker",
            "CI/CD",
          ].map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-center hover:bg-blue-500/10 hover:border-blue-500/30 transition-all"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
