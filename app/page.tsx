
import { CardDemo } from "@/components/CardDemo";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Spotlight } from "@/components/ui/spotlight";
import AboutCard from "@/components/AboutCard";
import Link from "next/link";
import ContactNavCard from "@/components/ContactNavCard";
import { Separator } from "@/components/ui/separator"
import SkillsCarousel from "@/components/SkillsCarousel";
import ProjectsCard from "@/components/ProjectsCardView";
import SkillsCard from "@/components/SkillsCard";
import CopyEmailButton from "@/components/CopyEmailButton";


export default function Home() {
  
  return (
    <>
    <div className="min-h-screen flex flex-col py-12 gap-12 ">
      {/* Top Section - Intro */}
      <section className="relative w-full  max-w-2xl justify-center ">
      <Spotlight />
        <h1 className="text-4xl font-bold text-white mb-2">
          Hey, I am Vedang Kanade
        </h1>
        <ContainerTextFlip />
        <div>
        <h3 className="text-gray-400 max-w-md mx-auto mt-2 text-lg">
          I am a developer who enjoys building web applications and exploring new technologies — basically, I spend most of my time in front of a screen.
        </h3>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Link href={"/about"}>
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">About</button>
          </Link>

          <Link href={"/contact"}>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Contact</button>
          </Link>

          <CopyEmailButton />
        </div>
      </section>
      <Separator className="my-8 bg-muted-foreground/20" />
      {/* Mid Section - Recent work */}
      <section className=" w-full justify-center ">
        <h3 className="text-3xl font-bold text-white mb-2">Recent work</h3>
        <div className="flex flex-row space-x-4 justify-center p-2">
          <ShineBorder/>
          <CardDemo />
          <CardDemo />
        </div>
      </section>

    <Separator className="my-8 bg-muted-foreground/20" />

      {/* 3rd section */}
      <section  className="w-full flex justify-center items-center flex-row gap-5">
        <div className="flex flex-wrap gap-4 justify-center">
          
          <AboutCard />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <ContactNavCard />
        </div>
      </section>

      <Separator className="my-8 bg-muted-foreground/20" />

      {/* 4th section */}
      <section  className="w-full flex justify-center items-center flex-row gap-5">
        <div className="flex flex-wrap gap-4 justify-center">
          <ProjectsCard />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <SkillsCard />
        </div>
      </section>

      <Separator className="my-8 bg-muted-foreground/20" />

      {/* 5th section */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
        <SkillsCarousel />
      </section>
    </div>
    </>
  );
}
