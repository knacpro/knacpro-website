import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl pt-24">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      
      <div className="flex items-center gap-2 mb-16 justify-center">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-purple-600">Contact</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="text-center p-6 bg-blue-200">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-4">Our Address:</h2>
            <p className="text-gray-600 font-bold">
              Keshwapur Kusugal road Hubballi Karnataka 580-023.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6 bg-blue-200">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Link href="tel:+917676193045">
            <Phone className="text-black w-6 h-6" />
            </Link>
            </div>
            <h2 className="text-xl font-bold mb-4">Contact Info:</h2>
            <div className="text-gray-600 space-y-2 font-bold">
             <p>+91 7676193045</p>
              <p>+91 9611828660</p>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center p-6 bg-blue-200">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Link
              href="mailto:knacprosolutions@gmail.com?subject=Subject"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Mail className="text-black w-8 h-8" />
            </Link>

            </div>
            <h2 className="text-xl font-bold mb-4">Email:</h2>
            <div className="text-gray-600 space-y-2 font-bold">
              <p>knacprosolutions@gmail.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

