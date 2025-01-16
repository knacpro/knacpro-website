"use client"
import ContactForm from "@/components/contact/contact-form";
import ContactPage from "@/components/contact/contact-page";
import FooterSection from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import Loader from "@/components/ui/loader";
import { useEffect, useState } from "react";

export default function Contact() {
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
                    <ContactPage />
                    <ContactForm />
                    <FooterSection />
                </>
            )}
        </>
    );
}