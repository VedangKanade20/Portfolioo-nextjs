import Link from "next/link";
import { MailIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function ContactNavCard() {
  return (
    <div className="relative bg-[#070709]/90 rounded-2xl p-6 w-full sm:max-w-sm md:max-w-md border border-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-[#3f7fd0]/50 hover:shadow-[0_12px_35px_rgba(63,127,208,0.12)]">
      <StarsBackground className="pointer-events-none" />
      <ShootingStars className="pointer-events-none" />

      <div className="absolute -top-4 left-6 w-9 h-9 flex items-center justify-center bg-[#070709] border border-[#3f7fd0]/40 rounded-full text-[#8fc4ff] shadow-md">
        <MailIcon size={16} />
      </div>

      <h3 className="text-white text-xl font-bold font-serif mt-4 mb-1">
        Contact & Inquiries
      </h3>

      <p className="text-zinc-400 text-sm leading-relaxed mb-5">
        Interested in collaborating, hiring, or discussing engineering architecture? Let&apos;s talk.
      </p>

      <Link
        href="/contact"
        className="block w-full text-center text-xs font-mono px-4 py-2.5 rounded-lg border border-white/10 text-white bg-white/[0.02] hover:bg-[#3f7fd0]/20 hover:border-[#8fc4ff]/50 hover:text-[#8fc4ff] transition-all duration-200"
      >
        Get in Touch →
      </Link>
      <BorderBeam duration={8} size={100} className="pointer-events-none" />
    </div>
  );
}
