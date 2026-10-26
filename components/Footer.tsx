import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050506] text-sm text-zinc-400 py-10 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-white font-medium">
            Vedang Kanade <span className="text-[#8fc4ff] font-mono text-xs">/ Engineering</span>
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Crafted with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Quick Socials */}
        <div className="flex items-center gap-5 text-zinc-400">
          <Link
            href="https://github.com/vedangkanade20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8fc4ff] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vedang-kanade-598a05276/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8fc4ff] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </Link>
          <Link
            href="https://x.com/VedangKanade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8fc4ff] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </Link>
        </div>

        <p className="text-xs text-zinc-500 font-mono">
          © {new Date().getFullYear()} Vedang Kanade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
