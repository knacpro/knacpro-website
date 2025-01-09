import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: "Web Applications",
      image: "/assets/images/webdev.jpg?height=400&width=600",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      title: "Mobile Applications",
      image: "/assets/images/mobileapp.jpg?height=400&width=600",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      title: "UI/UX Designs",
      image: "/assets/images/UI.jpg?height=400&width=600",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
    {
      title: "Testing",
      image: "/assets/images/testing.jpg?height=400&width=600",
      description: "The Imperative of Cybersecurity in an Interconnected World.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-[#FF6B00] text-lg mb-4">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-thin max-w-7xl">
          Tailored Solutions for your Success, Elevate your Experience with Our Exceptional and Comprehensive Services Today
          </h2>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-black rounded-full">
          <span className="h-2 w-2 bg-[#FF6B00] rounded-full" />
          View All Services
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a 
              href="#" 
              className="inline-flex items-center text-black hover:text-[#FF6B00] transition-colors"
            >
              Read More <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 px-6 py-3 border border-black rounded-full">
        <span className="h-2 w-2 bg-[#FF6B00] rounded-full" />
        View All Services
      </button>
    </section>
  )
}

