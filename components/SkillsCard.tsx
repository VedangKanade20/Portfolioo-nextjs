import Link from "next/link";
import { BrainIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

export default function SkillsCard() {
  return (
    <div className="relative bg-[#1a1a1a] rounded-xl p-4 w-full max-w-sm border border-[#2a2a2a] shadow-md">
      
      <StarsBackground />
      <ShootingStars />
      <div className="absolute -top-4 left-4 w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-[#333] rounded-full">
        <BrainIcon size={18} className="text-white" />
      </div>

      <h3 className="text-white text-lg font-semibold mt-6 mb-1 border-b border-[#333] w-fit pr-2">
        Skills
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        Explore my proficiency in frontend, backend, and the dev tools I use.
      </p>

      <Link
        href="/skills"
        className="inline-block text-sm px-3 py-1 rounded-md border border-[#444] hover:bg-[#2e2e2e] text-white transition"
      >
        See More
      </Link>
      <BorderBeam duration={8} size={100} />
      
    </div>
  );
}
