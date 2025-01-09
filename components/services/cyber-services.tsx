import { Lock, Shield, Users, Key, ShieldBan, ShieldPlus } from 'lucide-react'

export default function CyberServices() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-[#FF6B00] text-lg mb-4">Our Services</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          From Your Cyber Security Services.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Endpoint Security */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-gray-600 mb-2">Endpoint Security</h3>
          <h2 className="text-2xl font-bold">
            Tailored Services for a Secure Tomorrow.
          </h2>
        </div>

        {/* Cloud Security */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="text-gray-600 mb-2">Cloud Security</h3>
          <h2 className="text-2xl font-bold">
            Tailored Services for a Secure Tomorrow.
          </h2>
        </div>

        {/* Security Consulting */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-gray-600 mb-2">Security Consulting</h3>
          <h2 className="text-2xl font-bold">
            Our Robust Cybersecurity Service Suite.
          </h2>
        </div>

        {/* Network Security */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
            <Key className="w-8 h-8" />
          </div>
          <h3 className="text-gray-600 mb-2">Network Security</h3>
          <h2 className="text-2xl font-bold">
            Elevate Your Protection with Our Cyber Services.
          </h2>
        </div>

        {/* Application Security */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
            <ShieldBan className="w-8 h-8" />
          </div>
          <h3 className="text-gray-600 mb-2">Application Security</h3>
          <h2 className="text-2xl font-bold">
            Your Trusted Partner in Digital Security
          </h2>
        </div>

        {/* Security Awareness */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
            <ShieldPlus className="w-8 h-8" />
          </div>
          <h3 className="text-gray-600 mb-2">Security Awareness</h3>
          <h2 className="text-2xl font-bold">
            Unveiling Our Cybersecurity Service Arsenal.
          </h2>
        </div>
      </div>
    </div>
  )
}

