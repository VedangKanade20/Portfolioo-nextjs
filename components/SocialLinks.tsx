/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/vedangkanade20",
      label: "GitHub",
      username: "@vedangkanade20",
      description: "Explore my source repositories",
      image: "/vedang-github.jpeg",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/vedang-kanade-598a05276/",
      label: "LinkedIn",
      username: "Vedang Kanade",
      description: "Connect with me professionally",
      image: "/vedang-linkedin.jpeg",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://x.com/VedangKanade",
      label: "Twitter / X",
      username: "@VedangKanade",
      description: "Tech insights and updates",
      image: "/vedang-twitter.jpg",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:kanadevedang2003@gmail.com",
      label: "Direct Email",
      username: "kanadevedang2003@gmail.com",
      description: "Drop a line directly",
      image: "/email-avatar.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-4 border border-white/10 bg-[#070709]/80 rounded-2xl hover:border-[#3f7fd0]/50 hover:bg-[#3f7fd0]/10 hover:shadow-[0_8px_30px_rgba(63,127,208,0.12)] transition-all duration-300"
        >
          <img
            src={social.image}
            alt={`${social.label} avatar`}
            className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-[#8fc4ff] transition-colors"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[#8fc4ff] font-semibold text-base">
              {social.icon}
              <span>{social.label}</span>
            </div>
            <p className="text-xs font-mono text-zinc-300 truncate">{social.username}</p>
            <p className="text-xs text-zinc-500">{social.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
