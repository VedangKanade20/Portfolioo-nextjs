import SkillsEditorialSection from "@/components/skills/SkillsEditorialSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technical Stack | Vedang Kanade",
  description:
    "Segregated architectural skills across Frontend, Backend (Java Full Stack, JS Full Stack, Python, C# ASP.NET), Databases, Deployment, and Development Tools.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <SkillsEditorialSection showHeader={true} defaultFilter="all" />
    </div>
  );
}