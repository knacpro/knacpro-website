'use client'

import Link from 'next/link'

export default function ServicesComponent() {
  const services = [
    {
      number: "01",
      title: "Security Management",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      number: "02",
      title: "Data Privacy",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      number: "03",
      title: "Network Security",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      number: "04",
      title: "DDOS Protection",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Link href="/" className="hover:opacity-80">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-[#2A2D3A]/80">Services</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <span className="text-6xl font-bold text-[#2A2D3A]/10">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href="/"
                className="inline-flex items-center text-[#2A2D3A] font-semibold group-hover:text-orange-500 transition-colors duration-300"
              >
                Read More{' '}
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  ›
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

