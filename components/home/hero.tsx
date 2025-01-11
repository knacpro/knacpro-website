'use client'

import { Globe, Lock, Rss, Settings, Key, Fingerprint } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';

export default function Hero() {
  return (
      <div className="h-[700px] bg-[#2A2D3A] text-white relative overflow-hidden pt-20">
          <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column */}
                  <div className="space-y-6 pr-10">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap">
                          Knacpro Solutions
                          <br />
                          <span className="text-4xl">Your vision Our code</span>
                      </h1>
                      <p className="text-gray-300 text-lg md:text-xl max-w-xl">
                          In todays fast-paced digital landscape, investing in
                          mobile and web app development is essential for
                          businesses. Studies show that the number of app users
                          is rapidly growing each year, making it crucial for
                          companies to harness this trend.
                      </p>
                      <div className="flex flex-wrap gap-4 mt-8">
                          <Link href={'/contact'} className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center gap-2 ml-1">
                              <span className="w-2 h-2 bg-orange-300 rounded-full"></span>
                              Contact sales
                          </Link>
                      </div>
                  </div>

                  {/* Right Column */}
                  <div className="ml-40">
                      {/* Shield Container */}
                      <div className="relative w-full aspect-[4/3]">
                          <div className="absolute inset-0">
                              <div className="relative w-full h-full">
                                  <Image
                                      src="/assets/software-engineer-1.png"
                                      alt="Cybersecurity Professional"
                                      fill
                                      className="object-cover rounded-[100px] border-8"
                                  />
                              </div>
                          </div>

                          {/* Decorative Icons */}
                          <div className="absolute -top-8 right-16">
                              <Lock
                                  className="w-12 h-12 text-blue-400"
                                  strokeWidth={1.5}
                              />
                          </div>
                          <div className="absolute top-1/4 -left-8">
                              <Fingerprint
                                  className="w-16 h-16 text-blue-400"
                                  strokeWidth={1.5}
                              />
                          </div>
                          <div className="absolute bottom-1/4 -right-8">
                              <Rss
                                  className="w-16 h-16 text-blue-400"
                                  strokeWidth={1.5}
                              />
                          </div>
                          <div className="absolute -top-4 -right-4">
                              <Globe
                                  className="w-12 h-12 text-teal-400"
                                  strokeWidth={1.5}
                              />
                          </div>
                          <div className="absolute bottom-16 -left-4">
                              <Key
                                  className="w-12 h-12 text-gray-400"
                                  strokeWidth={1.5}
                              />
                          </div>
                          <div className="absolute bottom-8 right-0">
                              <Settings
                                  className="w-12 h-12 text-gray-400"
                                  strokeWidth={1.5}
                              />
                          </div>

                          {/* Circuit Lines */}
                          <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-1/2 right-0 w-24 h-px bg-gradient-to-r from-blue-400/20 to-blue-400/0"></div>
                              <div className="absolute top-1/3 right-0 w-16 h-px bg-gradient-to-r from-blue-400/20 to-blue-400/0"></div>
                              <div className="absolute bottom-1/3 right-0 w-20 h-px bg-gradient-to-r from-blue-400/20 to-blue-400/0"></div>
                          </div>

                          {/* Geometric Shapes */}
                          <div className="absolute top-1/4 right-1/4">
                              <div className="w-4 h-4 bg-blue-400/20 rotate-45"></div>
                          </div>
                          <div className="absolute bottom-1/4 left-1/4">
                              <div className="w-4 h-4 bg-blue-400/20 rotate-45"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

