export default function ServiceLists() {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path d="M20 44L44 20M20 20L44 44" stroke="#E6D5B8" strokeWidth="2" />
        </svg>
      ),
      title: "Endpoint Security",
      description:
        "This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="20" y="20" width="24" height="24" stroke="#B8B5E6" strokeWidth="2" />
          <rect x="28" y="28" width="8" height="8" stroke="#B8B5E6" strokeWidth="2" />
        </svg>
      ),
      title: "Security Consulting",
      description:
        "This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="16" stroke="#B8E6E6" strokeWidth="2" />
          <circle cx="32" cy="32" r="4" fill="#B8E6E6" />
        </svg>
      ),
      title: "Threat Intelligence Services",
      description:
        "This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="20" r="4" fill="#E6B8D4" />
          <circle cx="20" cy="44" r="4" fill="#E6B8D4" />
          <circle cx="44" cy="44" r="4" fill="#E6B8D4" />
          <path d="M32 24L20 40M32 24L44 40M20 44L44 44" stroke="#E6B8D4" strokeWidth="2" />
        </svg>
      ),
      title: "Security Training and Awareness",
      description:
        "This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="16" stroke="#C4B8E6" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      ),
      title: "Security Awareness Training",
      description:
        "This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.",
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="16" stroke="#E6D5B8" strokeWidth="2" />
          <circle cx="32" cy="32" r="12" stroke="#E6D5B8" strokeWidth="2" />
          <circle cx="32" cy="32" r="8" stroke="#E6D5B8" strokeWidth="2" />
        </svg>
      ),
      title: "Application Security Testing",
      description:
        "This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#2A2D3A] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#FF9F5A] text-center mb-4">Our Services</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          From Your Cyber Security Services.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#31344180] backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-center">{service.icon}</div>
              <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 flex-grow">{service.description}</p>
              <button className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                Read More
                <span className="font-bold">↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

