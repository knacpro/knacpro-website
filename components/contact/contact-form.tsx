"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Circle } from "lucide-react";
import { useState, useRef } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      access_key: "23edcf39-1e81-4564-bef2-2de46cae2c29",
      name,
      email,
      phone,
      subject,
      message,
    };

    if (resultRef.current) resultRef.current.innerHTML = "Please wait...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        resultRef.current!.innerHTML = result.message;
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
   } else {
        console.error(result);
        resultRef.current!.innerHTML = result.message || "Error occurred";
      }
    } catch (error) {
      console.error(error);
      resultRef.current!.innerHTML = "Something went wrong!";
    } finally {
      setTimeout(() => {
        if (resultRef.current) resultRef.current.innerHTML = "";
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <div className="space-y-2 text-center mb-8">
        <p className="text-[#FF8B42]">Send Us A Message</p>
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch With Us Today.</h1>
      </div>

      <form className="max-w-[1000px] mx-auto space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
            required
          />
          <Input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
          />
          <Input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
          />
        </div>

        <Textarea
          placeholder="Enter Your Comments"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#F4F5FA] border-none min-h-[200px] text-base placeholder:text-gray-500"
          required
        />

        <div className="flex items-center space-x-2">
          <Checkbox id="save" className="border-gray-400" />
          <label htmlFor="save" className="text-gray-600 text-sm">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        <Button className="bg-[#FF8B42] hover:bg-[#FF8B42]/90 text-white px-6 h-12 rounded-full">
          <Circle className="w-2 h-2 mr-2 fill-current" /> Send A Message
        </Button>
        <div id="result" ref={resultRef} className="text-center mt-4 text-gray-600"></div>
      </form>
    </div>
  );
}
