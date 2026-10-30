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
      { name: "React.js", icon: <SiReact />, badge: "v19 / Concurrent" },
      { name: "Next.js", icon: <SiNextdotjs />, badge: "App Router / SSR" },
      { name: "TypeScript", icon: <SiTypescript />, badge: "Strict Type Safety" },
      { name: "JavaScript", icon: <SiJavascript />, badge: "ESNext / Async" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, badge: "v4 Design Tokens" },
      { name: "Motion", icon: <SiFramer />, badge: "Physics & 60fps" },
      { name: "Zustand", icon: <TbLayersLinked />, badge: "Atomic Store" },
      { name: "Redux Toolkit", icon: <SiRedux />, badge: "Predictable State" },
      { name: "HTML5 & CSS3", icon: <SiHtml5 />, badge: "Semantic & Responsive" },
      { name: "Radix UI", icon: <SiRadixui />, badge: "Headless A11y" },
    ],
    seeAlso: [
      "Responsive Layouts",
      "Core Web Vitals",
      "SSR / SSG / ISR",
      "Component Systems",
      "Hydration Strategies",
      "Client Cache Validation",
    ],
  },

  // 02. BACKEND (Java Full Stack, JS Full Stack, Python, C# ASP.NET)
  {
    id: "backend",
    number: "02",
    headword: "backend",
    phonetic: "[ˈbæk.ɛnd]",
    classification: "(noun / distributed server-side engineering & microservices)",
    definition:
      "The high-throughput, fault-tolerant infrastructure orchestrating business logic, secure authentication pipelines, asynchronous task queuing, and enterprise microservices across multiple enterprise runtimes.",
    subGroups: [
      {
        subTitle: "01. Java Full Stack",
        tag: "Enterprise Core",
        skills: [
          { name: "Java 17 / 21", icon: <DiJava />, badge: "OOP & Multithreading" },
          { name: "Spring Boot 3", icon: <SiSpringboot />, badge: "Microservices & IoC" },
          { name: "Spring Security", icon: <SiSpringboot />, badge: "JWT & OAuth2" },
          { name: "Hibernate / JPA", icon: <SiHibernate />, badge: "ORM & L2 Cache" },
          { name: "RESTful Web APIs", icon: <SiSpringboot />, badge: "High-Throughput" },
          { name: "Apache Maven", icon: <SiApachemaven />, badge: "Dependency Pipeline" },
        ],
      },
      {
        subTitle: "02. JS & TS Full Stack",
        tag: "High-Throughput Asynchronous",
        skills: [
          { name: "Node.js", icon: <SiNodedotjs />, badge: "Event-Loop Non-Blocking" },
          { name: "Express.js", icon: <SiExpress />, badge: "Middleware REST Engine" },
          { name: "Next.js Server API", icon: <SiNextdotjs />, badge: "Server Actions / RSC" },
          { name: "NestJS", icon: <SiNestjs />, badge: "Enterprise Architecture" },
          { name: "WebSockets", icon: <SiSocketdotio />, badge: "Realtime Bidirectional" },
          { name: "GraphQL", icon: <SiGraphql />, badge: "Typed Query Schemas" },
        ],
      },
      {
        subTitle: "03. Python Backend",
        tag: "Async & Data API Pipelines",
        skills: [
          { name: "Python 3.11+", icon: <DiPython />, badge: "AsyncIO & Type Hints" },
          { name: "FastAPI", icon: <SiFastapi />, badge: "Pydantic Schema Validation" },
          { name: "Django & DRF", icon: <SiDjango />, badge: "Batteries-Included Framework" },
          { name: "Flask", icon: <SiFlask />, badge: "Microservices & Light REST" },
          { name: "Celery", icon: <SiCelery />, badge: "Distributed Worker Queues" },
        ],
      },
      {
        subTitle: "04. C# & ASP.NET Backend",
        tag: "Enterprise .NET Services",
        skills: [
          { name: "C# (.NET 8)", icon: <TbBrandCSharp />, badge: "High Performance CLR" },
          { name: "ASP.NET Core", icon: <SiDotnet />, badge: "Web API Services" },
          { name: "EF Core", icon: <SiDotnet />, badge: "Code-First Migrations" },
          { name: "LINQ", icon: <SiDotnet />, badge: "Declarative Queries" },
        ],
      },
    ],
    seeAlso: [
      "Microservices Architecture",
      "Role-Based Access Control (RBAC)",
      "Financial Transaction Settlement",
      "API Gateways & Circuit Breakers",
      "Idempotent Endpoints",
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
      "Structured relational and non-relational storage layers engineered for strict transactional ACID guarantees, sub-millisecond in-memory caching, indexing optimization, and high availability.",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, badge: "Relational ACID & JSONB" },
      { name: "MongoDB", icon: <SiMongodb />, badge: "Document & Aggregation" },
      { name: "MySQL", icon: <SiMysql />, badge: "Structured Normalization" },
      { name: "Redis", icon: <SiRedis />, badge: "In-Memory Caching & Pub-Sub" },
      { name: "Supabase", icon: <SiSupabase />, badge: "Managed Postgres BaaS" },
      { name: "Prisma ORM", icon: <SiPrisma />, badge: "Type-Safe Query Client" },
      { name: "Drizzle ORM", icon: <SiDrizzle />, badge: "Zero-Overhead SQL" },
      { name: "Firebase Firestore", icon: <SiFirebase />, badge: "Realtime NoSQL" },
    ],
    seeAlso: [
      "B-Tree & GIN Index Tuning",
      "Database Normalization (3NF)",
      "Connection Pooling (PgBouncer)",
      "Cache-Aside Pattern",
      "Zero-Downtime Schema Migrations",
    ],
  },

  // 04. DEPLOYMENT & DEVOPS
  {
    id: "deployment",
    number: "04",
    headword: "deployment",
    phonetic: "[dɪˈplɔɪ.mənt]",
    classification: "(noun / cloud delivery, virtualization & infrastructure)",
    definition:
      "The lifecycle automation responsible for immutable containerization, multi-stage compilation builds, reverse proxy load-balancing, and deterministic cloud delivery pipelines.",
    skills: [
      { name: "Docker", icon: <SiDocker />, badge: "Multi-Stage Containers" },
      { name: "Kubernetes", icon: <SiKubernetes />, badge: "Pods & Orchestration" },
      { name: "AWS Cloud", icon: <SiAmazonwebservices />, badge: "EC2 / S3 / CloudFront" },
      { name: "Vercel", icon: <SiVercel />, badge: "Edge Compute & SSR" },
      { name: "Netlify", icon: <SiNetlify />, badge: "Static Asset CDN" },
      { name: "Nginx", icon: <SiNginx />, badge: "Reverse Proxy & SSL" },
      { name: "GitHub Actions", icon: <SiGithubactions />, badge: "Automated CI/CD" },
      { name: "Jenkins", icon: <SiJenkins />, badge: "Build Pipeline Orchestration" },
      { name: "Linux OS", icon: <SiLinux />, badge: "Bash Scripting & Systemd" },
    ],
    seeAlso: [
      "Blue/Green Deployments",
      "SSL/TLS Encryption Offloading",
      "Container Registries (DockerHub/ECR)",
      "Environment Variables Isolation",
      "Automated Smoke Testing",
    ],
  },

  // 05. DEVELOPMENT TOOLS
  {
    id: "tools",
    number: "05",
    headword: "tools",
    phonetic: "[tuːlz]",
    classification: "(noun / engineering tooling, diagnostics & design translation)",
    definition:
      "The mission-critical instrument stack powering day-to-day software engineering, API contract verification, distributed version control, and design-to-code translation.",
    skills: [
      { name: "Git", icon: <SiGit />, badge: "Branching & Rebase" },
      { name: "GitHub", icon: <SiGithub />, badge: "Code Reviews & PRs" },
      { name: "Postman", icon: <SiPostman />, badge: "API Collections & Tests" },
      { name: "VS Code", icon: <TbBrandVscode />, badge: "Primary Development IDE" },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea />, badge: "Java & Spring Suite" },
      { name: "Docker Desktop", icon: <SiDocker />, badge: "Local Virtualization" },
      { name: "Linux CLI", icon: <SiLinux />, badge: "POSIX Tools & Shell" },
      { name: "Figma", icon: <SiFigma />, badge: "UI/UX Inspection & Dev Mode" },
    ],
    seeAlso: [
      "Git Flow & Trunk-Based Dev",
      "OpenAPI 3.0 / Swagger Specs",
      "ESLint & Prettier Tooling",
      "Performance Profiling",
      "Postman Mock Servers",
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
                Technical Proficiencies & Architectural Domains
              </span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              skills
            </h2>
            <p className="mt-1 text-xs font-mono italic text-zinc-400">
              [skɪlz] (noun / capabilities, runtimes, frameworks & production toolchains)
            </p>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl font-sans">
              Segregated architectural proficiencies spanning client engineering, multi-language backend systems (Java Spring Boot, Node.js, Python, C# ASP.NET), transactional databases, and automated cloud delivery.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-500">
            5 CORE DOMAINS / 40+ TECHNOLOGIES
          </div>
        </div>
      )}

      {/* Architecture Matrix Strip */}
      <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-3.5 backdrop-blur-md">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Languages</span>
          <span className="text-white font-semibold">Java, TS, JS, Python, C#, SQL</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-3.5 backdrop-blur-md">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Web & Server</span>
          <span className="text-white font-semibold">Spring Boot, Next.js, Express, FastAPI</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-3.5 backdrop-blur-md">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Databases & Cache</span>
          <span className="text-white font-semibold">PostgreSQL, MongoDB, Redis, MySQL</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#070709]/80 p-3.5 backdrop-blur-md">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Cloud & DevOps</span>
          <span className="text-white font-semibold">Docker, AWS, Nginx, CI/CD Actions</span>
        </div>
      </div>

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
