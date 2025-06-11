// components/navbar-dock.tsx
"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { GoCode } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import Link from "next/link";

export default function NavbarDock() {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <Dock>
        <DockIcon>
          <Link href="/">
            <IoIosHome size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/about">
            <IoMdPerson size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/skills">
            <GoCode size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/contact">
            <MdOutlineEmail size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/projects">
            <BiPencil size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://github.com/vedangkanade20" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://www.linkedin.com/in/vedang-kanade-598a05276/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://x.com/VedangKanade" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
