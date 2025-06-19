import React from 'react'
import Link from "next/link";


const page = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12 ">
      <section className="relative w-full  max-w-2xl justify-center ">
        <div className="flex justify-start gap-4 mt-4">
          <div className="flex items-center border border-white/20 rounded-full px-4 py-1 gap-1.5 text-sm">
            <span className="text-base">📍</span>
            <span className="font-semibold text-white">Based in India</span>
          </div>
          <div className="flex items-center border border-white/20 rounded-full px-4 py-1 gap-1.5 text-sm">
            <span className="font-semibold text-white">Open to Work</span>
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="inline-block w-2.5 h-2.5 rounded-full border-2 border-green-400"></span>
            </span>

          </div>
        </div>
      </section>

      {/* decription part*/}

      <section>
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
      </section>
        <section className="max-w-2xl">
      <p className="text-lg text-white mb-8">
        I'm Vedang Kanade, a Full Stack Developer specializing in the MERN stack. With a strong foundation in building robust, responsive, and user-friendly web applications, I excel at designing APIs, developing dynamic frontends, and crafting scalable backend solutions. My expertise spans the entire development lifecycle, but my true strength lies in creating seamless web experiences that power innovative projects. I am passionate about solving complex problems, collaborating with teams to deliver high-quality solutions, and continuously enhancing my skills through hands-on projects and emerging technologies. With over six months of experience and a portfolio featuring an e-commerce platform and a blog application, I am eager to contribute to cutting-edge developments while growing within the industry.
      </p>
      <Link
        href="/Vedang_Kanade_Resume.pdf"
        download
        className="inline-block bg-white/10 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-white/20 transition"
      >
        Download Resume
      </Link>
    </section>
    </div>
  )
}

export default page