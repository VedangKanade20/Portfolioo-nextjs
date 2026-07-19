// "use client";

// import { ContainerTextFlip } from "@/components/ui/container-text-flip";
// import { Spotlight } from "@/components/ui/spotlight";
// import AboutCard from "@/components/AboutCard";
// import Link from "next/link";
// import ContactNavCard from "@/components/ContactNavCard";
// import { Separator } from "@/components/ui/separator";
// import SkillsCarousel from "@/components/SkillsCarousel";
// import ProjectsCard from "@/components/ProjectsCardView";
// import SkillsCard from "@/components/SkillsCard";
// import CopyEmailButton from "@/components/CopyEmailButton";
// import projects from "@/components/data/Projects";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col py-12 gap-12 px-4">
//       {/* Top Section - Intro */}
//       <section className="relative max-w-4xl mx-auto text-center">
//         <Spotlight />
//         <h1 className="text-4xl font-bold text-white mb-2">
//           Hey, I am Vedang Kanade
//         </h1>
//         <ContainerTextFlip />
//         <h3 className="text-gray-400 max-w-2xl mx-auto mt-2 text-lg">
//           I am a developer who enjoys building web applications and exploring new technologies — basically, I spend most of my time in front of a screen.
//         </h3>
//         <div className="flex flex-wrap justify-center gap-4 mt-6">
//           <Link href={"/about"}>
//             <button className="bg-white text-black px-4 py-2 rounded-md font-medium">About</button>
//           </Link>
//           <Link href={"/contact"}>
//             <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Contact</button>
//           </Link>
//           <CopyEmailButton />
//         </div>
//       </section>

//       <Separator className="my-8 bg-muted-foreground/20" />

//       {/* Recent Work */}
//       <section className="w-full">
//         <h3 className="text-3xl font-bold text-white mb-6 text-center">Recent Work</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//           {projects.slice(0, 3).map((project, index) => (
//             <div
//               key={index}
//               className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-800/30 transition-shadow duration-300 max-w-md w-full"
//             >
//               <video
//                 src={project.video}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="rounded-lg mb-4 w-full"
//               />
//               <h2 className="text-xl font-semibold mb-1 text-white">{project.title}</h2>
//               <p className="text-sm text-gray-400 mb-4">{project.type}</p>
//               <div className="flex gap-4">
//                 <a
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-purple-400 hover:text-purple-300 underline transition-colors"
//                 >
//                   Visit
//                 </a>
//                 {project.source && (
//                   <a
//                     href={project.source}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-purple-400 hover:text-purple-300 underline transition-colors"
//                   >
//                     GitHub
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Separator className="my-8 bg-muted-foreground/20" />

//       {/* About + Contact section */}
//       <section className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6">
//   <AboutCard />
//   <ContactNavCard />
// </section>

//       <Separator className="my-8 bg-muted-foreground/20" />

//       {/* Projects + Skills card */}
//       <section className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6">
//         <ProjectsCard />
//         <SkillsCard />
//       </section>

//       <Separator className="my-8 bg-muted-foreground/20" />

//       {/* Skills Carousel */}
//       <section>
//         <h3 className="text-2xl font-bold text-white mb-4 text-center">Skills</h3>
//         <SkillsCarousel />
//       </section>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Spotlight } from "@/components/ui/spotlight";
import AboutCard from "@/components/AboutCard";
import Link from "next/link";
import ContactNavCard from "@/components/ContactNavCard";
import { Separator } from "@/components/ui/separator";
import SkillsCarousel from "@/components/SkillsCarousel";
import ProjectsCard from "@/components/ProjectsCardView";
import SkillsCard from "@/components/SkillsCard";
import CopyEmailButton from "@/components/CopyEmailButton";
import projects from "@/components/data/Projects";

// Shared easing — fast out, slow settle. Used on every animation below so
// the whole page reads as one motion system instead of several unrelated
// effects. This is the same curve Linear/Vercel/Apple marketing sites use
// for their default transitions.
const EASE = [0.16, 1, 0.3, 1] as const;

// Stagger container for the hero — children animate in one after another
// rather than all at once, which is what makes a page-load feel choreographed
// instead of just "everything fading in together."
const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// Scroll-triggered reveal for everything below the fold. `once: true` in the
// viewport option (set on each motion element) means this only plays the
// first time a section enters view — it will not re-fire every time someone
// scrolls up and back down, which keeps things feeling premium rather than
// gimmicky, and avoids unnecessary re-renders/layout work on scroll.
const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12 px-4">
      {/* Top Section - Intro
          Animates on mount (no whileInView here) since it's the first thing
          visible on page load — same logic a Linear/Vercel hero uses: the
          hero always plays immediately, only sections further down wait for
          scroll. */}
      <motion.section
        className="relative max-w-4xl mx-auto text-center"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <Spotlight />

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold text-white mb-2"
        >
          Hey, I am Vedang Kanade
        </motion.h1>

        <motion.div variants={fadeUp}>
          <ContainerTextFlip />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          className="text-gray-400 max-w-2xl mx-auto mt-2 text-lg"
        >
          I am a developer who enjoys building web applications and exploring
          new technologies — basically, I spend most of my time in front of a
          screen.
        </motion.h3>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <Link href={"/about"}>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
              About
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">
              Contact
            </button>
          </Link>
          <CopyEmailButton />
        </motion.div>
      </motion.section>

      {/* Separator itself is untouched — just wrapped so it draws in from
          the center rather than appearing instantly, echoing the "grows
          into place" feel of the hero above it without changing its look. */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="my-8 bg-muted-foreground/20" />
      </motion.div>

      {/* Recent Work
          whileInView + once:true so this triggers the first time it scrolls
          into the viewport and never again — cheap on performance since
          Framer unmounts the observer after it fires once. */}
      <motion.section
        className="w-full"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Recent Work
        </h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          variants={cardStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-800/30 transition-shadow duration-300 max-w-md w-full"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg mb-4 w-full"
              />
              <h2 className="text-xl font-semibold mb-1 text-white">
                {project.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{project.type}</p>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  Visit
                </a>
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="my-8 bg-muted-foreground/20" />
      </motion.div>

      {/* About + Contact section */}
      <motion.section
        className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6"
        variants={cardStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardItem}>
          <AboutCard />
        </motion.div>
        <motion.div variants={cardItem}>
          <ContactNavCard />
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="my-8 bg-muted-foreground/20" />
      </motion.div>

      {/* Projects + Skills card */}
      <motion.section
        className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6"
        variants={cardStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardItem}>
          <ProjectsCard />
        </motion.div>
        <motion.div variants={cardItem}>
          <SkillsCard />
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Separator className="my-8 bg-muted-foreground/20" />
      </motion.div>

      {/* Skills Carousel */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Skills
        </h3>
        <SkillsCarousel />
      </motion.section>
    </div>
  );
}
