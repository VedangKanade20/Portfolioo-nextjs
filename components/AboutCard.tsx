import Link from "next/link";
import { UserIcon } from "lucide-react"; // swap icon for each card if needed
import { BorderBeam } from "@/components/magicui/border-beam";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function AboutCard() {
  return (
    <div className="relative bg-[#1a1a1a] rounded-xl p-4 w-full max-w-sm border border-[#2a2a2a] shadow-md">
     <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="absolute -top-4 left-4 w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-[#333] rounded-full">
        <UserIcon size={18} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mt-6 mb-1 border-b border-[#333] w-fit pr-2">
        About Me
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        Learn about my journey, skills, and experiences in the world of development.
      </p>

      {/* CTA */}
      <Link
        href="/about"
        className="inline-block text-sm px-3 py-1 rounded-md border border-[#444] hover:bg-[#2e2e2e] text-white transition"
      >
        See More
      </Link>
      <BorderBeam duration={8} size={100} />
    </div>
  );
}
