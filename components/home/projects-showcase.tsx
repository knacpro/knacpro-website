"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function ProjectsShowcase() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            image: "/assets/bite-heaven.png",
            alt: "Developer working on security"
        },
        {
            image: "/assets/ullas-school.png",
            alt: "Digital security lock"
        },
        {
            image: "/assets/petrol-bunk.png",
            alt: "Developer with glasses"
        }
    ];

    return (
        <div className="bg-[#2A2D3A] p-6 md:p-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-4">
                        <h2 className="text-[#FF7B47] font-bold  text-5xl">
                            Our Projects
                        </h2>
                        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
                            Feat to Celebrate: Showcasing Some of Our Proud
                            Projects.
                        </h1>
                    </div>
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Project */}
                    <div className="relative w-full h-[600px] md:h-[900px] md:w-[450px] rounded-2xl overflow-hidden group">
                        <Image
                            src={projects[0].image}
                            alt={projects[0].alt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Second and Third Projects */}
                    <div className="grid grid-cols-1 md:grid-rows-2 gap-6">
                        {projects.slice(1).map((project, index) => (
                            <div
                                key={index}
                                className="relative w-full h-[200px] md:h-[400px] md:w-[700px] rounded-xl overflow-hidden group">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* <button className="md:hidden flex items-center gap-2 px-6 py-3 text-white rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-transparent w-full justify-center mt-6">
                    <span className="h-2 w-2 rounded-full bg-[#FF7B47]" />
                    View All Projects
                </button> */}
            </div>
        </div>
    );
}
