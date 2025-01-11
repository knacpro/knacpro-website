import FAQSection from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import HomeNavbar from "@/components/header/home-navbar";
import ProjectsShowcase from "@/components/home/projects-showcase";
import ServiceInfo from "@/components/home/service-info";
import ServiceLists from "@/components/home/service-lists";

export default function Home() {
  return (
      <>
          <HomeNavbar />
          <Hero />
          <ServiceInfo />
          <ServiceLists />
          <ProjectsShowcase />
          <FAQSection />
      </>
  );
}
