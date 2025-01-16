"use client"
import FAQSection from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import HomeNavbar from "@/components/header/home-navbar";
import ProjectsShowcase from "@/components/home/projects-showcase";
import ServiceInfo from "@/components/home/service-info";
import ServiceLists from "@/components/home/service-lists";
import HomeLoader from "@/components/ui/home-loader";
import { useEffect, useState } from "react";
import FooterSection from "@/components/footer/footer";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {isLoading ? (
                <HomeLoader />
            ) : (
                <>
                    <HomeNavbar />
                    <Hero />
                    <ServiceInfo />
                    <ServiceLists />
                    <ProjectsShowcase />
                    <FAQSection />
                    <FooterSection />
                </>
            )}
        </>
    );
}
