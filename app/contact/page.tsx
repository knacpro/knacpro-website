import ContactForm from "@/components/contact/contact-form";
import ContactPage from "@/components/contact/contact-page";
import Navbar from "@/components/header/navbar";

export default function Contact() {
    return (
        <>
        <Navbar />
        <ContactPage />
        <ContactForm />
        </>
    );
}