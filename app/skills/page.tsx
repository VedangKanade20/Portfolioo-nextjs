
import Techstack from '@/components/TechStack'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12 ">
      <section className="relative w-full  max-w-2xl justify-center ">
        <Techstack />
      </section>
    </div>
  )
}

export default page