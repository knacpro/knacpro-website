"use client"

// import { Card } from "@/components/ui/card"
// import { Star } from 'lucide-react'
// import Image from "next/image"
// import { useState } from "react"

// interface Testimonial {
//   id: number
//   name: string
//   role: string
//   image: string
//   rating: number
//   text: string
// }

// const testimonials: Testimonial[] = [
//     {
//         id: 1,
//         name: "Gregory Hays",
//         role: "Developer",
//         image: "/placeholder.svg",
//         rating: 4,
//         text: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems. And how to respond to security incidents."
//     },
//     {
//         id: 2,
//         name: "Pamela Downs",
//         role: "Developer",
//         image: "/placeholder.svg",
//         rating: 5,
//         text: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems. And how to respond to security incidents."
//     },
//     {
//         id: 3,
//         name: "Ganesha",
//         role: "Developer",
//         image: "/placeholder.svg",
//         rating: 5,
//         text: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems. And how to respond to security incidents."
//     },
//     {
//         id: 4,
//         name: "Shiva",
//         role: "Developer",
//         image: "/placeholder.svg",
//         rating: 5,
//         text: "This involves outsourcing some or all of a company's safety potency to a service provider. Services may include security monitoring, incident response, and managing security devices and systems. And how to respond to security incidents."
//     }
//     // Add more testimonials as needed
// ];

// export default function TestimonialSection() {
//   const [activeIndex, setActiveIndex] = useState(3) // Set to 3 to match the design

//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 py-16">
//       <div className="space-y-8">
//         <div className="text-center space-y-4">
//           <p className="text-[#FF6B00]">Testimonial</p>
//           <h2 className="text-4xl md:text-5xl font-bold">Our Customer Thought About Us.</h2>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.slice(0, 2).map((testimonial) => (
//             <Card key={testimonial.id} className="p-8 rounded-3xl">
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                       <Image
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold">{testimonial.name}</h3>
//                       <p className="text-[#A855F7]">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, index) => (
//                       <Star
//                         key={index}
//                         className={`w-5 h-5 ${
//                           index < testimonial.rating
//                             ? "fill-[#FFB800] text-[#FFB800]"
//                             : "fill-gray-200 text-gray-200"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {testimonial.text}
//                 </p>
//               </div>
//             </Card>
//           ))}
//         </div>

//         <div className="flex justify-center gap-2 mt-8">
//           {[...Array(4)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-2.5 h-2.5 rounded-full transition-colors ${
//                 index === activeIndex
//                   ? "bg-[#A855F7]"
//                   : "bg-gray-200"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card-3";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Ayesha is happy with the school. She loves the library, the teaching staff, especially the class teacher, who is the most supportive. She was always a good learning, however the teaching pattern, extra-curricular activities are giving her a better exposure. She is improving with every passing day. The focus on etiquettes and good habits at the school is very fruitful. I can see Ayesha learning to share, being good to others; all these reflect the classroom rules taught by the class teacher.",
        author: "AYESHA KHATIB – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
    },
    {
        content:
            "Our child would love to attend school because in this school, every child is encouraged, given equal opportunity to participate in activities. She does her homework without taking parents support much. She won't spend time watching TV and mobile. She used to check her uniform daily. School is good for its curriculum, co-curricular activities, students-teacher ratio and teaching and learning styles.",
        author: "SPOORTI SAJJAN – VI A",
        avatar: "/assets/logo.png"
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
                    Parent's Testimonials
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div className="w-1/3">
                    <Image
                        src={"/assets/parent-testimonials.png"}
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
                            <Avatar className="h-10 w-10 mr-4">
                                <AvatarImage
                                    src={testimonials[currentIndex].avatar}
                                    alt="Avatar"
                                />
                                <AvatarFallback>PA</AvatarFallback>
                            </Avatar>
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

