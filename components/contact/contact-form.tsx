"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Circle } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <div className="space-y-2 text-center mb-8">
        <p className="text-[#FF8B42]">Send Us A Message</p>
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch With Us Today.</h1>
      </div>
      
      <form className="max-w-[1000px] mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input 
            placeholder="Name" 
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
          />
          <Input 
            type="email" 
            placeholder="Email" 
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
          />
          <Input 
            type="tel" 
            placeholder="Phone" 
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
          />
          <Input 
            placeholder="Subject" 
            className="bg-[#F4F5FA] border-none h-14 text-base placeholder:text-gray-500"
          />
        </div>
        
        <Textarea 
          placeholder="Enter Your Comments" 
          className="bg-[#F4F5FA] border-none min-h-[200px] text-base placeholder:text-gray-500"
        />
        
        <div className="flex items-center space-x-2">
          <Checkbox id="save" className="border-gray-400" />
          <label htmlFor="save" className="text-gray-600 text-sm">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
        
        <Button 
          className="bg-[#FF8B42] hover:bg-[#FF8B42]/90 text-white px-6 h-12 rounded-full"
        >
          <Circle className="w-2 h-2 mr-2 fill-current" /> Send A Message
        </Button>
      </form>
    </div>
  )
}

