import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <span>Home</span>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-[#7C4DFF]">About</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="/assets/images/aboutweb.jpg?height=300&width=300"
              alt="Cybersecurity professional with holographic shield"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative mt-8 sm:mt-12">
            <img
              src="/assets/images/aboutui.jpg?height=200&width=160"
              alt="Digital security interface"
              className="w-full aspect-square object-cover rounded-full mb-6"
            />
          </div>
          <div className="relative">
            <img
              src="/assets/images/aboutdesk.jpg?height=200&width=200"
              alt="Laptop with security shield"
              className="w-full object-cover rounded-full aspect-square"
            />
          </div>
          <div className="relative mt-[-10px] sm:mt-[-20px]">
            <img
              src="/assets/images/aboutdesk1.jpg?height=280&width=280"
              alt="Cybersecurity dashboard"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Your Trusted Partner in Cybersecurity
          </h2>
          <p className="text-gray-600 leading-relaxed font-normal text-sm sm:text-base">
            At KnacPro Solutions, we have built a solid foundation of expertise to meet the growing demands of our clients. 
            Our skilled and proficient teams have helped companies enhance their efficiency, knowledge, and profitability. 
            As a closely held company, we pride ourselves on delivering a personalized, hands-on approach to every partnership.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-4">4.7+</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Review Customer</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Organizations are now forced to implement comprehensive cybersecurity strategies.
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-4">10+</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Project Completed</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Organizations are now forced to implement comprehensive cybersecurity strategies.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href={'/contact'} 
            className="inline-flex items-center px-6 py-3 border border-[#FF5722] text-[#FF5722] rounded-lg hover:bg-[#FF5722] hover:text-white transition-colors text-sm sm:text-base">
            <span className="w-2 h-2 bg-[#FF5722] rounded-full mr-2"></span>
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

