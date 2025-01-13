"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Circle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "23edcf39-1e81-4564-bef2-2de46cae2c29");

        const formObject = Object.fromEntries(formData);
        const json = JSON.stringify(formObject);

        if (resultRef.current) resultRef.current.innerHTML = "Please wait...";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (response.ok && resultRef.current) {
                resultRef.current.innerHTML = result.message;
            } else {
                console.error(result);
                if (resultRef.current)
                    resultRef.current!.innerHTML =
                        result.message || "Error occurred";
            }
        } catch (error) {
            console.error(error);
            if (resultRef.current)
                resultRef.current!.innerHTML = "Something went wrong!";
        } finally {
            (e.target as HTMLFormElement).reset();
            setTimeout(() => {
                if (resultRef.current) resultRef.current.style.display = "none";
            }, 3000);
        }
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 py-12">
            <div className="space-y-2 text-center mb-8">
                <p className="text-[#FF8B42]">Send Us A Message</p>
                <h1 className="text-4xl md:text-5xl font-bold">
                    Get in Touch With Us Today.
                </h1>
            </div>

            <form
                id="form"
                method="POST"
                onSubmit={handleSubmit}
                className="max-w-[1000px] mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <Input
                        placeholder="Name"
                        id="name"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
                    />
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
                    />
                    <Input
                        type="tel"
                        name="number"
                        id="number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        placeholder="Phone"
                        className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
                    />
                    <Input
                        placeholder="Subject"
                        id="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        name="subject"
                        className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
                    />
                </div>

                <Textarea
                    placeholder="Enter Your Comments"
                    id="comments"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    name="comments"
                    className="bg-[#F4F5FA] border-none min-h-[200px] text-base placeholder:text-gray-500"
                />

                <Button className="bg-[#FF8B42] hover:bg-[#FF8B42]/90 text-white px-6 h-12 rounded-full">
                    <Circle className="w-2 h-2 mr-2 fill-current" /> Send A
                    Message
                </Button>
                <div
                    id="result"
                    ref={resultRef}
                    className="dark:text-white ml-4"></div>
            </form>
        </div>
    );
}
