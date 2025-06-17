
import { CardDemo } from "@/components/CardDemo";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
   const words = [
    {
      text: "A",
    },
    {
      text: "Software",
       className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Engineer",
       className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "/",
    },
    {
      text: "Software",
       className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
       className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12">
      {/* Top Section - Intro */}
      <section className="relative w-full  max-w-2xl ">
      <Spotlight />
        <h1 className="text-4xl font-bold text-white mb-2">
          Hey, I am Vedang Kanade
        </h1>
        <TypewriterEffect words={words} />
        <p className="text-gray-400 max-w-md mx-auto mt-2">
          I am a developer who enjoys building web applications and exploring new technologies — basically, I spend most of my time in front of a screen.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">About</button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Email</button>
        </div>
      </section>

      {/* Mid Section - Recent work */}
      <section className=" w-full justify-center ">
        <h3 className="text-2xl font-bold text-white mb-2">Recent work</h3>
        <div className="flex flex-row space-x-4 justify-center p-2">
          <ShineBorder/>
          <CardDemo />
          <CardDemo />
        </div>
      </section>

      {/* 3rd section */}
      <section>
        
      </section>
    </div>
  );
}
