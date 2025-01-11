import {Smartphone, Laptop, FolderCog, CloudCog, TabletSmartphone, LaptopMinimalCheck } from 'lucide-react'

export default function CyberServices() {
  return (
      <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
              <h2 className="text-[#FF6B00] text-lg mb-4">Our Services</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-16">
                  Our Software Development Services.
              </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Endpoint Security */}
              <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <Smartphone size={48} />{" "}
                  </div>
                  <h3 className="text-gray-600 mb-2">Mobile Applications</h3>
                  <h2 className="text-2xl font-bold">
                      Tailored Services for Mobile Application Development.
                  </h2>
              </div>

              {/* Cloud Security */}
              <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <Laptop size={48} />{" "}
                  </div>
                  <h3 className="text-gray-600 mb-2">Web Development</h3>
                  <h2 className="text-2xl font-bold">
                      Tailored Services for Website Development.
                  </h2>
              </div>

              {/* Security Consulting */}
              <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <FolderCog size={48} />{" "}
                  </div>
                  <h3 className="text-gray-600 mb-2">Integration Testing</h3>
                  <h2 className="text-2xl font-bold">
                      Our Robust Integration Testing Service Suite.
                  </h2>
              </div>

              {/* Network Security */}
              <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <CloudCog size={48} />{" "}
                  </div>
                  <h3 className="text-gray-600 mb-2">Cloud Storage</h3>
                  <h2 className="text-2xl font-bold">
                      Elevate Your Project with Our Cloud Storage Services.
                  </h2>
              </div>

              {/* Application Security */}
              <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <TabletSmartphone size={48} />{" "}
                  </div>
                  <h3 className="text-gray-600 mb-2">UI/UX Designs</h3>
                  <h2 className="text-2xl font-bold">
                      Your Trusted Partner in Implementing Elegant UI/UX Designs
                  </h2>
              </div>

              {/* Security Awareness */}
              <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <LaptopMinimalCheck size={48} />{" "}
                  </div>
                  <h3 className="text-gray-600 mb-2">
                      Hoisting and Deployment
                  </h3>
                  <h2 className="text-2xl font-bold">
                      Unveiling Our Hoisting and Deployment Service Arsenal.
                  </h2>
              </div>
          </div>
      </div>
  );
}

