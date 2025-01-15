import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, IndianRupee } from "lucide-react";
import Link from "next/link";

export default function PricingPlans() {
    const plans = [
        {
            name: "Marketing Website",
            description:
                "A marketing website is a digital platform designed to promote a business.",
            price: "15000",
            features: [
                "Upto 5 Pages",
                "Mobile Responsive",
                "Contact Form",
                "Social Media Integration",
                "Click to Call/Email",
                "Testimonials",
                "Hosting Free for 1st Year",
                "500 Rs/Extra Page",
                "Domain (charges apply according to the domain)",
                "3000-5000 Rs for Animations",
                "Delivery in 12-15 days",
                "Support (charges apply according to the service)"
            ]
        },
        {
            name: "Full Stack Web Application",
            description:
                "A full-stack web application is a software platform that integrates both frontend and backend development.",
            price: "25000",
            features: [
                "Upto 5 Features",
                "Mobile Responsive",
                "Contact Form",
                "Social Media Integration",
                "Login Details will be Provided",
                "Easy to Edit",
                "Authentication and Authorization",
                "2000 Rs/Extra Feature",
                "Server (charges are negotiable)",
                "Cloud Storage (charges according to cloud service provider)",
                "Hosting Free for 1st Year",
                "Domain (charges apply according to domain)",
                "4000 for Animations",
                "Delivery in 30-40 Days",
                "Support (charges apply according to the service)"
            ]
        },
        {
            name: "Mobile Application",
            description:
                "A mobile application is software designed to run on smartphones or tablets.",
            price: "35000",
            features: [
                "Upto 5 Features",
                "Contact Form",
                "Social Media Integration",
                "Login Details will be Provided",
                "Easy to Edit",
                "Authenticationa and Authorization",
                "3000 Rs/Extra Feature",
                "Cloud Storage (charges according to cloud service provider)",
                "Hosting Free for 1st Year",
                "Domain (charges apply according to domain)",
                "5000 for Animations",
                "Delivery in 50-60 Days",
                "Support (charges apply according to the service)"
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
                <div className="flex items-center justify-center gap-2 mb-24">
                    <Link href="/" className="text-gray-900 hover:underline">
                        Home
                    </Link>
                    <span className="text-[#6C5CE7]">›</span>
                    <span className="text-[#6C5CE7]">Pricing Plans</span>
                </div>
                <div className="text-[#FF7846] font-medium mb-4">
                    Awesome Pricing Plans
                </div>
                <h2 className="text-4xl font-bold">
                    Uncovering the Ideal Plan for Your Needs.
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, index) => (
                    <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-8">
                            <h3 className="text-xl font-bold mb-4">
                                {plan.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {plan.description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-8 flex">
                                <IndianRupee size={40} className="mt-1"/>
                                <span className="text-5xl font-bold">
                                    {plan.price}
                                </span>
                            </div>
                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-[#6C5CE7]" />
                                        </div>
                                        <span className="text-gray-600 text-sm">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href={'/contact'}
                                className="w-full bg-purple-200 hover:bg-purple-300 text-gray-900 border border-gray-200 p-3 rounded-lg"
                                >
                                <span className="w-2 h-2 rounded-full bg-[#FF7846] mr-2" />
                                Get Started Today
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
