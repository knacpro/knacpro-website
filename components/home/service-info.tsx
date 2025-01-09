import { ArrowRight, Users, Radio } from 'lucide-react'
import Image from "next/image"

export default function ServiceInfo() {
  return (
      <div className="bg-[#2A2D3A] text-white min-h-screen p-8">
          {/* What We Do Section */}
          <div className="max-w-7xl mx-auto">
              <p className="text-[#F97316] mb-4">What We Do</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-12">
                  Our Extensive Network Security Services.
              </h1>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                  {/* Service Cards */}
                  {[
                      "Unleashing Ability through Network Management.",
                      "Building a Robust Defense Against Cyber-Attacks",
                      "Harnessing the Power of Online Network Security Systems."
                  ].map((title, index) => (
                      <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-[#E879F9]/20 rounded-lg flex items-center justify-center">
                                  <div className="w-6 h-6 bg-[#E879F9] rounded-sm transform rotate-45" />
                              </div>
                          </div>
                          <div>
                              <h3 className="font-semibold mb-2">{title}</h3>
                              <button className="text-[#E879F9] flex items-center gap-2 hover:gap-3 transition-all">
                                  Read More <ArrowRight className="w-4 h-4" />
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
                          className="rounded-lg h-[600px] w-[400px]"
                      />
                      <div className="absolute -bottom-10 right-0 lg:-right-10">
                          <Image
                              src="/assets/software-engineer-team.png"
                              alt="Team Collaboration"
                              width={600}
                              height={400}
                              className="rounded-lg w-[350px] h-[400px] mr-10"
                          />
                      </div>
                  </div>

                  <div className="pt-12 lg:pt-0">
                      <p className="text-[#F97316] mb-4">About Paheli</p>
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                          The Comprehensive Solution for Your Needs.
                      </h2>
                      <p className="text-gray-400 mb-8">
                          Organizations are now compelled to complete
                          comprehensive cybersecurity strategies to safeguard
                          their systems, networks, and data from the relentless
                          onslaught of cyber threats, ensuring the protection of
                          privacy...
                      </p>

                      {/* Features */}
                      <div className="space-y-8 mb-8">
                          <div className="flex gap-4">
                              <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                                  <Users className="w-6 h-6 text-[#F97316]" />
                              </div>
                              <div>
                                  <h3 className="font-semibold mb-2">
                                      Highly Professional Members
                                  </h3>
                                  <p className="text-gray-400">
                                      Organizations are now forced to implement
                                      comprehensive cyber security strategies to
                                      protect their systems,
                                  </p>
                              </div>
                          </div>

                          <div className="flex gap-4">
                              <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center">
                                  <Radio className="w-6 h-6 text-[#F97316]" />
                              </div>
                              <div>
                                  <h3 className="font-semibold mb-2">
                                      Infrastructure Integration Technology
                                  </h3>
                                  <p className="text-gray-400">
                                      Organizations are now forced to implement
                                      comprehensive cyber security strategies to
                                      protect their systems,
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* CTA Button */}
                      <button className="bg-gradient-to-r from-[#E879F9] to-[#F97316] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:gap-3 transition-all">
                          Know More About <ArrowRight className="w-4 h-4" />
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

