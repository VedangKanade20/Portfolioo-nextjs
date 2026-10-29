// components/navbar-dock.tsx
"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal, FaGamepad } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { GoCode } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarDock() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <IoIosHome size={21} />, label: "Home" },
    { href: "/about", icon: <IoMdPerson size={21} />, label: "About" },
    { href: "/skills", icon: <GoCode size={21} />, label: "Skills" },
    { href: "/experience", icon: <MdWorkHistory size={21} />, label: "Work" },
    { href: "/projects", icon: <BiPencil size={21} />, label: "Projects" },
    { href: "/terminal", icon: <FaTerminal size={17} />, label: "Terminal CLI" },
    { href: "/playground", icon: <FaGamepad size={18} />, label: "Systems Playground" },
    { href: "/contact", icon: <MdOutlineEmail size={21} />, label: "Contact" },
  ];

  const socialItems = [
    {
      href: "https://github.com/vedangkanade20",
      icon: <FaGithub size={19} />,
      label: "GitHub",
    },
    {
      href: "https://in.linkedin.com/in/vedang-kanade-598a05276",
      icon: <FaLinkedin size={19} />,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/VedangKanade",
      icon: <FaTwitter size={19} />,
      label: "Twitter",
    },
  ];

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none px-2"
    >
      <div className="pointer-events-auto">
        <Dock className="border border-white/10 bg-[#0a0a0c]/90 shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(63,127,208,0.18)] backdrop-blur-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <DockIcon key={item.href}>
                <Link
                  href={item.href}
                  className={`flex h-full w-full items-center justify-center rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-[#8fc4ff] bg-[#3f7fd0]/25 shadow-[0_0_12px_rgba(143,196,255,0.35)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </Link>
              </DockIcon>
            );
          })}

          <div className="h-5 w-px bg-white/10 mx-1 self-center" />

          {socialItems.map((item) => (
            <DockIcon key={item.href}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center text-zinc-400 hover:text-[#8fc4ff] transition-colors"
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </Link>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </nav>
  );
}
