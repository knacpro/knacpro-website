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
        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-4">Our Address:</h2>
            <p className="text-gray-600">
              521684 Majadra Street Victoria Road, New York.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-4">Contact Info:</h2>
            <div className="text-gray-600 space-y-2">
              <p>+523 6738 8264</p>
              <p>+522 3452 7986</p>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center p-6">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold mb-4">Email:</h2>
            <div className="text-gray-600 space-y-2">
              <p>support@gmail.com</p>
              <p>info@email.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

