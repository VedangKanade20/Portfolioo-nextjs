import Link from "next/link";
import { MailIcon } from "lucide-react"; 
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function ContactNavCard() {
  return (
    <div className="relative bg-[#1a1a1a] rounded-xl p-4 w-full sm:max-w-sm md:max-w-md border border-[#2a2a2a] shadow-md">

      <StarsBackground className="pointer-events-none"/>
      <ShootingStars className="pointer-events-none" />
      <div className="absolute -top-4 left-4 w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-[#333] rounded-full">
        <MailIcon size={18} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mt-6 mb-1 border-b border-[#333] w-fit pr-2">
        Contact
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        Want to connect or collaborate? Reach out to me through my contact page.
      </p>

      {/* CTA */}
      <Link
        href="/contact"
        className="block w-full text-center text-sm px-4 py-2 rounded-md border border-[#444] text-white mt-2 transition-all duration-200 ease-in-out hover:bg-[#2e2e2e] hover:border-[#666] hover:scale-[1.02] active:scale-95"
      >
        See More
      </Link>
    <BorderBeam duration={8} size={100} className="pointer-events-none" />
    </div>
  );
}
