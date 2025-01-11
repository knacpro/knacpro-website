"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function FAQSection() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(1);

    const faqs = [
        {
            id: 0,
            question:
                "What types of projects can you handle across your services?",
            answer: "We handle a wide range of projects, including mobile and web applications, custom UI/UX designs, industrial automation systems, and end-to-end testing. Our expertise also extends to managing projects of varying complexity and scale."
        },
        {
            id: 1,
            question:
                "How do you ensure quality across development, testing, and design?",
            answer: "We follow industry best practices, use modern tools and frameworks, and conduct rigorous testing. Our UI/UX designs prioritize user experience, while our testing services ensure applications are bug-free and optimized for performance."
        },
        {
            id: 2,
            question:
                "Can you customize your solutions to meet unique business needs?",
            answer: "Absolutely! We specialize in tailoring mobile apps, websites, automation systems, and project management strategies to align with your specific business goals and requirements."
        },
        {
            id: 3,
            question: "Do you provide ongoing support after project delivery?",
            answer: "Yes, we offer post-launch support and maintenance to ensure your applications, designs, and systems run smoothly. This includes updates, troubleshooting, and scaling support as your business grows."
        },
        {
            id: 4,
            question: "How do you approach project timelines and delivery?",
            answer: "We work closely with you to define clear milestones and deadlines, ensuring transparency throughout the project lifecycle. Our agile methodology allows us to adapt to changes while delivering on time without compromising quality."
        }
    ];

    const stats = [
        { value: "3 +", label: "YEARS' EXPERIENCE" },
        { value: "8 +", label: "SOFTWARE ENGINEERING EXPERTS" },
        { value: "100 %", label: "CUSTOMER SATISFACTION" },
        { value: "10 +", label: "CUSTOMER SERVED GLOBALLY" }
    ];

    return (
        <div className="bg-[#2A2D3A] min-h-screen text-white px-6 py-12 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <span className="text-[#F97316] text-lg font-medium">
                            FAQs
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-8">
                            A Dedication to Supporting All Aspects of Your Life.
                        </h1>
                        <p className="text-gray-400 mb-8">
                            Can't find what you are looking for?
                        </p>
                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-12">
                                Let's Talk: Engage with Us in a Conversation
                                Tailored Just for You.
                            </h2>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                                <svg
                                    width="100"
                                    height="80"
                                    viewBox="0 0 100 80"
                                    fill="none">
                                    <path
                                        d="M10 40 Q 30 10, 90 40"
                                        stroke="url(#gradient)"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="gradient"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%">
                                            <stop
                                                offset="0%"
                                                stopColor="#D946EF"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#A855F7"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - FAQs */}
                    <div className="space-y-4">
                        {faqs.map(faq => (
                            <div
                                key={faq.id}
                                className="border-b border-gray-700 pb-4">
                                <button
                                    onClick={() =>
                                        setOpenQuestion(
                                            openQuestion === faq.id
                                                ? null
                                                : faq.id
                                        )
                                    }
                                    className="w-full flex justify-between items-center text-left">
                                    <span className="text-lg font-medium">
                                        {faq.question}
                                    </span>
                                    <X
                                        className={`w-5 h-5 transform transition-transform ${
                                            openQuestion === faq.id
                                                ? "rotate-0"
                                                : "rotate-45"
                                        }`}
                                    />
                                </button>
                                {openQuestion === faq.id && faq.answer && (
                                    <p className="mt-4 text-gray-400">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold whitespace-nowrap">
                                {stat.value}
                            </div>
                            <div className="text-sm mt-2 text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
