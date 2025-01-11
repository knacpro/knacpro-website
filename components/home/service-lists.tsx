import { Bot, FolderCode, FolderCog, Laptop, Smartphone, TabletSmartphone } from "lucide-react";

export default function ServiceLists() {
  const services = [
      {
          icon: <Laptop size={48} className="text-white" />,
          title: "Web Development",
          description:
              "Web development involves creating and maintaining websites, ensuring functionality, performance, and seamless user experiences."
      },
      {
          icon: <Smartphone size={48} className="text-white" />,
          title: "Mobile Applications",
          description:
              "Mobile app development focuses on creating software applications for smartphones and tablets, ensuring smooth functionality on Android and iOS platforms."
      },
      {
          icon: <TabletSmartphone size={48} className="text-white" />,
          title: "UI/UX Designs",
          description:
              "UI/UX design focuses on creating intuitive, visually appealing, and user-friendly interfaces to enhance user interaction and satisfaction."
      },
      {
          icon: <Bot size={48} className="text-white" />,
          title: "Industrial Automation",
          description:
              "Industrial automation involves using control systems like robots, sensors, and AI to operate machinery and processes with minimal human intervention."
      },
      {
          icon: <FolderCog size={48} className="text-white" />,
          title: "Software Testing",
          description:
              "Software testing ensures the quality, functionality, and reliability of applications by identifying and fixing bugs or issues before deployment."
      },
      {
          icon: <FolderCode size={48} className="text-white" />,
          title: "Project Management",
          description:
              "Project management involves planning, organizing, and overseeing tasks to ensure projects are completed on time, within scope, and under budget."
      }
  ];

  return (
    <div className="min-h-screen bg-[#2A2D3A] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#FF9F5A] text-center mb-4">Our Services</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          Our Software Development Services.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#31344180] backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-center">{service.icon}</div>
              <h3 className="text-white text-2xl font-semibold ml-14">{service.title}</h3>
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

