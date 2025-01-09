'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function ProjectsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      image: '/assets/bite-heaven.png',
      alt: 'Developer working on security',
    },
    {
      image: '/placeholder.svg?height=600&width=400',
      alt: 'Digital security lock',
    },
    {
      image: '/placeholder.svg?height=600&width=400',
      alt: 'Developer with glasses',
    },
    {
      image: '/placeholder.svg?height=600&width=400',
      alt: 'Security researcher',
    },
    {
      title: 'Data Loss Prevention (DLP)',
      description: 'This includes implementing strategies and tools to prevent sensitive data...',
      image: '/placeholder.svg?height=600&width=800',
      alt: 'Data loss prevention illustration',
      hasReadMore: true,
    },
  ]

  return (
      <div className="bg-[#2A2D3A] min-h-screen p-6 md:p-12">
          <div className="max-w-[1400px] mx-auto">
              <div className="flex justify-between items-start mb-6">
                  <div className="space-y-4">
                      <h2 className="text-[#FF7B47] text-lg font-medium">
                          Our Projects
                      </h2>
                      <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
                          Feat to Celebrate: Showcasing Some of Our Proud
                          Projects.
                      </h1>
                  </div>
                  <button className="hidden md:flex items-center gap-2 px-6 py-3 text-white rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-transparent hover:bg-purple-500/20 transition-colors">
                      <span className="h-2 w-2 rounded-full bg-[#FF7B47]" />
                      View All Projects
                  </button>
              </div>

              <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide h-[1000px]">
                  {projects.map((project, index) => (
                      <div
                          key={index}
                          className={`flex-shrink-0 relative ${
                              index === projects.length - 1
                                  ? "w-[800px]"
                                  : "w-[400px]"
                          } h-[600px] rounded-2xl overflow-hidden group`}>
                          <Image
                              src={project.image}
                              alt={project.alt}
                              fill
                              className="object-cover"
                          />
                          {project.title && (
                              <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
                                  <h3 className="text-white text-2xl font-bold mb-4">
                                      {project.title}
                                  </h3>
                                  <p className="text-white/80 mb-6">
                                      {project.description}
                                  </p>
                                  {project.hasReadMore && (
                                      <button className="flex items-center gap-2 text-white group">
                                          Read More
                                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                      </button>
                                  )}
                              </div>
                          )}
                      </div>
                  ))}
              </div>

              <button className="md:hidden flex items-center gap-2 px-6 py-3 text-white rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-transparent w-full justify-center mt-6">
                  <span className="h-2 w-2 rounded-full bg-[#FF7B47]" />
                  View All Projects
              </button>
          </div>
      </div>
  );
}

