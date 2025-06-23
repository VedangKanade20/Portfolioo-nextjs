
import Techstack from '@/components/TechStack'
import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex flex-col py-12 gap-12 items-center px-4 sm:px-6 lg:px-12">
      <section className="w-full max-w-7xl">
        <Techstack />
      </section>
    </div>
  )
}

export default page