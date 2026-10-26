"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SkillEditorialCard, {
  SkillEditorialCardProps,
} from "./SkillEditorialCard";

// Frontend Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiRadixui,
} from "react-icons/si";
import { TbLayersLinked, TbBrandCSharp, TbBrandVscode } from "react-icons/tb";

// Backend Icons - Java, JS, Python, C# .NET
import { DiJava, DiPython } from "react-icons/di";
import {
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiSocketdotio,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiCelery,
  SiDotnet,
} from "react-icons/si";
// Database Icons
import {
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiPrisma,
  SiDrizzle,
  SiFirebase,
} from "react-icons/si";

// Deployment / DevOps Icons
import {
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiNginx,
  SiGithubactions,
  SiJenkins,
  SiLinux,
} from "react-icons/si";

// Tools Icons
import {
  SiGit,
  SiGithub,
  SiPostman,
  SiIntellijidea,
  SiFigma,
} from "react-icons/si";

export const SKILL_CARDS_DATA: SkillEditorialCardProps[] = [
  // 01. FRONTEND
  {
    id: "frontend",
    number: "01",
    headword: "frontend",
    phonetic: "[ˈfrʌnt.ɛnd]",
    classification: "(noun / reactive interface architecture)",
    definition:
      "The client-side surface layer engineering accessible, performant, and dynamic user interfaces with type-safe state machines, fluid micro-interactions, and server-rendered optimizations.",
    skills: [
      { name: "React.js", icon: <SiReact />, badge: "v19 / SPA" },
      { name: "Next.js", icon: <SiNextdotjs />, badge: "App Router / SSR" },
      { name: "TypeScript", icon: <SiTypescript />, badge: "Type Safety" },
      { name: "JavaScript", icon: <SiJavascript />, badge: "ESNext" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, badge: "v4 Tokens" },
      { name: "Motion", icon: <SiFramer />, badge: "60fps Physics" },
      { name: "Zustand", icon: <TbLayersLinked />, badge: "State Store" },
      { name: "Redux Toolkit", icon: <SiRedux />, badge: "Complex State" },
      { name: "HTML5 & CSS3", icon: <SiHtml5 />, badge: "Semantic" },
      { name: "Radix UI", icon: <SiRadixui />, badge: "Headless A11y" },
    ],
    seeAlso: [
      "Responsive Layouts",
      "Core Web Vitals",
      "SSR / SSG / ISR",
      "Component Systems",
    ],
  },

  // 02. BACKEND (Java Full Stack, JS Full Stack, Python, C# ASP.NET)
  {
    id: "backend",
    number: "02",
    headword: "backend",
    phonetic: "[ˈbæk.ɛnd]",
    classification: "(noun / distributed server-side engineering)",
    definition:
      "The high-throughput, fault-tolerant infrastructure orchestrating business logic, secure authentication pipelines, asynchronous task queuing, and enterprise microservices across multiple enterprise runtimes.",
    subGroups: [
      {
        subTitle: "01. Java Full Stack",
        tag: "Enterprise Core",
        skills: [
          { name: "Java 17+", icon: <DiJava />, badge: "OOP & Concurrency" },
          { name: "Spring Boot 3", icon: <SiSpringboot />, badge: "Microservices" },
          { name: "Spring Security", icon: <SiSpringboot />, badge: "JWT / OAuth2" },
          { name: "Hibernate / JPA", icon: <SiHibernate />, badge: "ORM & Caching" },
          { name: "RESTful APIs", icon: <SiSpringboot />, badge: "Design & Tuning" },
          { name: "Apache Maven", icon: <SiApachemaven />, badge: "Build Pipeline" },
        ],
      },
      {
        subTitle: "02. JS & TS Full Stack",
        tag: "High-Throughput",
        skills: [
          { name: "Node.js", icon: <SiNodedotjs />, badge: "Event-Loop I/O" },
          { name: "Express.js", icon: <SiExpress />, badge: "Middleware REST" },
          { name: "Next.js API", icon: <SiNextdotjs />, badge: "Server Actions" },
          { name: "NestJS", icon: <SiNestjs />, badge: "Modular Arch" },
          { name: "WebSockets", icon: <SiSocketdotio />, badge: "Realtime Bidir" },
          { name: "GraphQL", icon: <SiGraphql />, badge: "Typed Schemas" },
        ],
      },
      {
        subTitle: "03. Python Backend",
        tag: "Async & Data API",
        skills: [
          { name: "Python 3.11+", icon: <DiPython />, badge: "AsyncIO Engine" },
          { name: "FastAPI", icon: <SiFastapi />, badge: "Pydantic Schemas" },
          { name: "Django & DRF", icon: <SiDjango />, badge: "Batteries-Included" },
          { name: "Flask", icon: <SiFlask />, badge: "Microservices" },
          { name: "Celery", icon: <SiCelery />, badge: "Worker Queues" },
        ],
      },
      {
        subTitle: "04. C# & ASP.NET Backend",
        tag: "Enterprise .NET",
        skills: [
          { name: "C# (.NET 8)", icon: <TbBrandCSharp />, badge: "Type-Safe Backend" },
          { name: "ASP.NET Core", icon: <SiDotnet />, badge: "Web APIs" },
          { name: "EF Core", icon: <SiDotnet />, badge: "Code-First ORM" },
          { name: "LINQ", icon: <SiDotnet />, badge: "Declarative Query" },
        ],
      },
    ],
    seeAlso: [
      "Microservices Architecture",
      "Role-Based Access Control (RBAC)",
      "Zero-Downtime Migration",
      "API Gateways",
    ],
  },

  // 03. DATABASE
  {
    id: "database",
    number: "03",
    headword: "database",
    phonetic: "[ˈdeɪ.tə.beɪs]",
    classification: "(noun / persistence & transaction management)",
    definition:
      "Structured and non-relational storage layers engineered for transactional ACID guarantees, sub-millisecond in-memory caching, indexing optimization, and high availability.",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, badge: "Relational ACID" },
      { name: "MongoDB", icon: <SiMongodb />, badge: "Document / Aggregation" },
      { name: "MySQL", icon: <SiMysql />, badge: "Structured Schema" },
      { name: "Redis", icon: <SiRedis />, badge: "In-Memory Caching" },
      { name: "Supabase", icon: <SiSupabase />, badge: "Postgres BaaS" },
      { name: "Prisma ORM", icon: <SiPrisma />, badge: "Type-Safe Client" },
      { name: "Drizzle ORM", icon: <SiDrizzle />, badge: "Zero-Overhead" },
      { name: "Firebase", icon: <SiFirebase />, badge: "Firestore / Auth" },
    ],
    seeAlso: [
      "Index Tuning (B-Tree/GIN)",
      "Schema Normalization",
      "Connection Pooling",
      "Replica Sets",
    ],
  },

  // 04. DEPLOYMENT & DEVOPS
  {
    id: "deployment",
    number: "04",
    headword: "deployment",
    phonetic: "[dɪˈplɔɪ.mənt]",
    classification: "(noun / cloud delivery & virtualization)",
    definition:
      "The lifecycle automation responsible for immutable containerization, multi-stage compilation builds, reverse proxy load-balancing, and deterministic cloud delivery pipelines.",
    skills: [
      { name: "Docker", icon: <SiDocker />, badge: "Containerization" },
      { name: "Kubernetes", icon: <SiKubernetes />, badge: "Pods & Orchestration" },
      { name: "AWS", icon: <SiAmazonwebservices />, badge: "EC2 / S3 / CloudFront" },
      { name: "Vercel", icon: <SiVercel />, badge: "Edge Network" },
      { name: "Netlify", icon: <SiNetlify />, badge: "Static Hosting" },
      { name: "Nginx", icon: <SiNginx />, badge: "Reverse Proxy / SSL" },
      { name: "GitHub Actions", icon: <SiGithubactions />, badge: "Automated CI/CD" },
      { name: "Jenkins", icon: <SiJenkins />, badge: "Pipeline Automation" },
      { name: "Linux", icon: <SiLinux />, badge: "CLI / Bash Scripting" },
    ],
    seeAlso: [
      "Blue/Green Deployments",
      "SSL/TLS Encryption",
      "Container Registry",
      "CloudWatch Metrics",
    ],
  },

  // 05. DEVELOPMENT TOOLS
  {
    id: "tools",
    number: "05",
    headword: "tools",
    phonetic: "[tuːlz]",
    classification: "(noun / developer tooling & diagnostics)",
    definition:
      "The mission-critical instrument stack powering day-to-day software development, API contract verification, distributed version control, and design-to-code translation.",
    skills: [
      { name: "Git", icon: <SiGit />, badge: "Version Control" },
      { name: "GitHub", icon: <SiGithub />, badge: "Code Reviews & PRs" },
      { name: "Postman", icon: <SiPostman />, badge: "API Testing & Docs" },
      { name: "VS Code", icon: <TbBrandVscode />, badge: "Primary Editor" },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea />, badge: "Java / Spring IDE" },
      { name: "Docker Desktop", icon: <SiDocker />, badge: "Local Virtualization" },
      { name: "Linux Terminal", icon: <SiLinux />, badge: "Bash & Environment" },
      { name: "Figma", icon: <SiFigma />, badge: "UI/UX Inspection" },
    ],
    seeAlso: [
      "Branching Strategies",
      "OpenAPI Specification",
      "Linting & Prettier",
      "Performance Profiling",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "deployment", label: "Deployment & Cloud" },
  { id: "tools", label: "Tools" },
];

export default function SkillsEditorialSection({
  showHeader = true,
  defaultFilter = "all",
}: {
  showHeader?: boolean;
  defaultFilter?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultFilter);

  const filteredCards =
    activeTab === "all"
      ? SKILL_CARDS_DATA
      : SKILL_CARDS_DATA.filter((card) => card.id === activeTab);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {showHeader && (
        <div className="mb-10 text-center sm:text-left border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="h-2 w-2 rounded-full bg-[#8fc4ff]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#8fc4ff]">
                Technical Proficiencies
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              Engineering Stacks
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
              Segregated architectural proficiencies categorized by domain, runtime, and infrastructure.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500">
            5 CATEGORIES / MULTI-STACK
          </div>
        </div>
      )}

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 font-mono text-xs tracking-wide transition-all duration-200 border ${
                isActive
                  ? "bg-[#3f7fd0] text-white border-[#8fc4ff] shadow-[0_0_15px_rgba(143,196,255,0.3)]"
                  : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {filteredCards.map((card) => {
            // Give backend card full width on 2-col grid when all is selected
            const isBackend = card.id === "backend";
            return (
              <div
                key={card.id}
                className={isBackend && activeTab === "all" ? "lg:col-span-2" : "col-span-1"}
              >
                <SkillEditorialCard {...card} />
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
