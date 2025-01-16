"use client";
import FooterSection from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import CyberServices from "@/components/services/cyber-services";
import ServicesComponent from "@/components/services/services";
import { ParentTestimonials } from "@/components/services/testimonial-section";
import Loader from "@/components/ui/loader";
import { useEffect, useState } from "react";

export default function Services() {
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
                    <ServicesComponent />
                    <CyberServices />
                    <ParentTestimonials />
                    <FooterSection />
                </>
            )}
        </>
    );
}
