"use client"
import FooterSection from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import PricingPlans from "@/components/pricing/pricing-plans";
import PricingLoader from "@/components/ui/pricing-loader";
import { useEffect, useState } from "react";

export default function Pricing() {
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
                <PricingLoader />
            ) : (
                <>
                    <Navbar />
                    <PricingPlans />
                    <FooterSection />
                </>
            )}
        </>
    );
}