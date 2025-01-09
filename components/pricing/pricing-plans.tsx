import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import Link from "next/link"

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic Plan",
      description: "Seamless Integration: Unifying Local and Cloud Funds, User Traffic, & Endpoints",
      price: "95",
      features: [
        "Upgrade Anytime Protection for...",
        "Swift and Effective Removal of...",
        "Configure Your Software Effortlessly...",
        "30-Day Product Testing for...",
        "24/7 Live Assistance for Your...",
      ],
    },
    {
      name: "Standard Plan",
      description: "Seamless Integration: Unifying Local and Cloud Funds, User Traffic, & Endpoints",
      price: "95",
      features: [
        "Upgrade Anytime Protection for...",
        "Swift and Effective Removal of...",
        "Configure Your Software Effortlessly...",
        "30-Day Product Testing for...",
        "24/7 Live Assistance for Your...",
      ],
    },
    {
      name: "Premium Plan",
      description: "Seamless Integration: Unifying Local and Cloud Funds, User Traffic, & Endpoints",
      price: "95",
      features: [
        "Upgrade Anytime Protection for...",
        "Swift and Effective Removal of...",
        "Configure Your Software Effortlessly...",
        "30-Day Product Testing for...",
        "24/7 Live Assistance for Your...",
      ],
    },
  ]

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
        <div className="text-[#FF7846] font-medium mb-4">Awesome Pricing Plans</div>
        <h2 className="text-4xl font-bold">Uncovering the Ideal Plan for Your Needs.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="pb-8">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-gray-600 ml-2">/ MONTHLY</span>
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#6C5CE7]" />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
                variant="outline"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7846] mr-2" />
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

