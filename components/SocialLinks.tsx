/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/vedangkanade20",
      label: "GitHub",
      username: "@vedangkanade20",
      description: "Check out my projects!",
      image: "/vedang-github.jpeg", // GitHub profile pic
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/vedang-kanade-598a05276/",
      label: "LinkedIn",
      username: "Vedang Kanade",
      description: "Let's connect professionally",
      image: "/vedang-linkedin.jpeg", // You can use a static public image if available
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://x.com/VedangKanadee",
      label: "Twitter",
      username: "@VedangKanadee",
      description: "Catch my tech updates",
      image: "/vedang-twitter.jpg", // replace with actual or default profile pic
    },
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:kanadevedang2003@gmail.com",
      label: "Email",
      username: "kanadevedang2003@gmail.com",
      description: "Drop me a message",
      image: "/email-avatar.jpeg", // default email icon
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-10">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 border border-purple-700 rounded-lg hover:bg-purple-800/20 transition duration-300"
        >
          <img
            src={social.image}
            alt={`${social.label} avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-lg">
              {social.icon}
              <span>{social.label}</span>
            </div>
            <p className="text-sm text-white">{social.username}</p>
            <p className="text-sm text-gray-400">{social.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
