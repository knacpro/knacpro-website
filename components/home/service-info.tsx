

import { ArrowRight, Users, Radio } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

export default function ServiceInfo() {
  return (
      <div className="bg-[#2A2D3A] text-white min-h-screen p-6 sm:p-8">
          {/* What We Do Section */}
          <div className="max-w-7xl mx-auto">
              <p className="font-bold text-[#F97316] text-4xl mb-4 text-center  sm:text-left">What We Do</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center sm:text-left">
                  Our Extensive Software Development Services
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {/* Service Cards */}
                  {["Unleashing Ability through Web Development.", "Building Robust Mobile Applications", "Developing Elegant UI/UX Designs."].map((title, index) => (
                      <div key={index} className="flex gap-4 items-start">
                          <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-[#E879F9]/20 rounded-lg flex items-center justify-center">
                                  <div className="w-6 h-6 bg-[#E879F9] rounded-sm transform rotate-45" />
                              </div>
                          </div>
                          <div>
                              <h3 className="font-semibold mb-2 text-lg">{title}</h3>
                              <button className="text-[#E879F9] flex items-center gap-2 hover:gap-3 transition-all">
                              
                              </button>
                          </div>
                      </div>
                  ))}
              </div>

              {/* About Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                      <Image
                          src="/assets/software-engineer-2.png"
                          alt="Network Security"
                          width={800}
                          height={400}
                          className="rounded-lg max-w-full h-auto mx-auto"
                      />
                      <div className="absolute -bottom-10 right-0 lg:-right-10 hidden md:block">
                          <Image
                              src="/assets/software-engineer-team.png"
                              alt="Team Collaboration"
                              width={600}
                              height={400}
                              className="w-48 sm:w-56 md:w-64 h-auto rounded-full"
                          />
                      </div>
                  </div>

                  <div className="pt-12 lg:pt-0">
                      <p className="text-[#F97316] text-4xl mb-4">About Knacpro</p>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                          The Comprehensive Solution for Your Needs
                      </h2>
                      <p className="text-gray-400 mb-8">
                          Knac Pro combines diverse expertise with a client-focused approach, delivering tailored solutions
                          on time. Our agile methods ensure flexibility, and our ongoing support keeps your applications
                          running smoothly. With a proven track record, we are dedicated to driving your success.
                      </p>

                      {/* Features */}
                      <div className="space-y-8 mb-8">
                          <div className="flex gap-4 items-start">
                              <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                                  <Users className="w-6 h-6 text-[#F97316]" />
                              </div>
                              <div>
                                  <h3 className="font-semibold mb-2 text-lg">Highly Professional Members</h3>
                                  <p className="text-gray-400">
                                      We develop robust mobile and web applications.
                                  </p>
                              </div>
                          </div>

                          <div className="flex gap-4 items-start">
                              <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                                  <Radio className="w-6 h-6 text-[#F97316]" />
                              </div>
                              <div>
                                  <h3 className="font-semibold mb-2 text-lg">Infrastructure Integration Technology</h3>
                                  <p className="text-gray-400">
                                      We provide elegant UI/UX designs and perform end-to-end testing.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* CTA Button */}
                      <Link href={'/about'} className="bg-gradient-to-r from-[#E879F9] to-[#F97316] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:gap-3 transition-all w-52">
                          Know More About <ArrowRight className="w-4 h-4" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  );
}
