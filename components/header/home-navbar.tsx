

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function HomeNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-[#1f2125] h-16 border-b">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-white hover:bg-transparent hover:text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#1f2125] text-white">
            <div className="flex flex-col space-y-4 pt-4">
              {["Home", "About", "Services", "Pricing", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="flex items-center text-lg font-semibold"
                >
                  {item}
                </Link>
              ))}

              {/* WhatsApp Button in Mobile Menu */}
              <a
                href="https://wa.me/917676193045?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-white font-semibold bg-gradient-to-r from-green-400 to-green-600 rounded-md hover:from-green-500 hover:to-green-700 space-x-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp logo"
                  className="w-5 h-5"
                />
                <span>WhatsApp </span>
              </a>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/assets/logo.png"}
            width={300}
            height={300}
            alt={"logo"}
            className="object-cover w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-base sm:text-xl font-bold text-white whitespace-nowrap">
            Knacpro Solutions
          </span>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center">
          <NavigationMenuList className="flex gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
            ].map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className="group inline-flex h-9 w-max items-center justify-center text-white hover:bg-[#2a2d32] px-4 rounded-md"
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call-to-Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Contact Button */}
          <Button
            className="hidden lg:inline-flex bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white hover:from-[#8B5CF6] hover:to-[#F472B6]"
            asChild
          >
            <Link href="/contact">Get in touch</Link>
          </Button>

          {/* WhatsApp Button in Desktop Navbar */}
          <a
            href="https://wa.me/917676193045?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex px-6 py-2 text-white font-semibold bg-gradient-to-r from-green-400 to-green-600 rounded-md hover:from-green-500 hover:to-green-700"
          >
            <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp logo"
                  className="w-7 h-7 rounded-full" 
                />
            
          </a>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="container mx-auto">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border px-4 py-2 focus:border-[#9333EA] focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            />
          </div>
        </div>
      )}
    </header>
  );
}
