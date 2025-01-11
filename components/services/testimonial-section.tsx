"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card-3";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        content:
            "Our team has been impressed by the service quality and professionalism of this company. They are proactive in understanding our needs and provide tailored solutions that help us achieve our business goals. Their quick turnaround and attention to detail make them a reliable partner for our IT requirements.",
        author: "Shreenivas Iyer – CEO, Tech Innovators",
    },
    {
        content:
            "The team at this IT service company is exceptional. They are highly skilled, attentive to our needs, and quick to resolve issues. Their innovative approach to problem-solving has significantly improved our operations. We value their ability to seamlessly integrate with our internal processes.",
        author: "Arun Kumar – Operations Manager, GreenTech Solutions",
    },
    {
        content:
            "Working with this IT service provider has been a game-changer for our business. Their expertise and support helped us streamline our workflows and improve efficiency. The team is approachable, knowledgeable, and always ready to go the extra mile. Highly recommended!",
        author: "Manjunath Patil – CTO, Bright Futures Inc.",
    },
    {
        content:
            "We’ve had an excellent experience with this IT service provider. Their solutions are innovative, cost-effective, and perfectly suited to our needs. The team's dedication to customer satisfaction is truly commendable. They’ve become an integral part of our growth strategy.",
        author: "Ganesh Kulkarni – Founder, CloudWave Technologies",
    },
    {
        content:
            "This IT service company has exceeded our expectations. Their expert team not only delivered outstanding results but also ensured that the implementation process was smooth and hassle-free. Their commitment to excellence is evident in every aspect of their work.",
        author: "Parvati Shetty – Project Manager, Nexus Digital",
    }
];


export function ParentTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            prevIndex =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="w-[1200px] mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <p className="text-red-500 font-semibold">Feedbacks</p>
                <h2 className="text-3xl font-bold mt-2">
                    Our Customer Thoughts
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div className="w-1/3">
                    <Image
                        src={"/assets/images/services1.jpg"}
                        alt={"parent testimonials"}
                        width={300}
                        height={200}
                        className="w-96 h-72 object-cover mb-2"
                    />
                </div>
                <Card className="w-2/3 ml-8 h-60 flex-shrink-0 overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                        <p className="text-gray-700 mb-4 overflow-y-auto max-h-36">
                            {testimonials[currentIndex].content}
                        </p>
                        <div className="flex items-center mt-4">
                            <p className="font-semibold">
                                {testimonials[currentIndex].author}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center space-x-4">
                <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

