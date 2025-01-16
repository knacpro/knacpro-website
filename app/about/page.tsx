"use client"
import AboutPage from "@/components/about/about-page";
import ServicesSection from "@/components/about/services-section";
import FooterSection from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import Loader from "@/components/ui/loader";
import { useEffect, useState } from "react";

export default function About() {
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
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <AboutPage />
                    <ServicesSection />
                    <FooterSection />
                </>
            )}
        </>
    );
}
