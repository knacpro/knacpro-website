import Navbar from "@/components/header/navbar";
import CyberServices from "@/components/services/cyber-services";
import ServicesComponent from "@/components/services/services";
import { ParentTestimonials } from "@/components/services/testimonial-section";

export default function Services() {
    return (
        <>
        <Navbar />
        <ServicesComponent />
        <CyberServices />
        <ParentTestimonials />
        </>
    );
}