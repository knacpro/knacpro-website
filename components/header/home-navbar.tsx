

"use client";

import { useState } from "react";
import Link from "next/link";
import { House, IndianRupee, Menu, Settings, UserRound, UserRoundSearch } from "lucide-react";
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

  return (
      <header className="fixed z-50 w-full bg-[#1f2125] h-16 border-b">
          <div className="container mx-auto flex h-16 items-center px-4 justify-between">
              {/* Mobile Menu */}
              <Sheet>
                  <SheetTrigger asChild>
                      <Button
                          variant="ghost"
                          className="mr-2 px-0 text-white hover:bg-transparent hover:text-white lg:hidden">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="bg-[#1f2125] text-white">
                      <div className="flex flex-col space-y-4 pt-4">
                          <div className="flex space-x-2">
                              <House size={20} className="mt-1" />
                              <Link
                                  href="/"
                                  className="flex items-center text-lg font-semibold">
                                  Home
                              </Link>
                          </div>
                          <div className="flex space-x-2">
                              <UserRound size={20} className="mt-1" />
                              <Link
                                  href="/about"
                                  className="flex items-center text-lg font-semibold">
                                  About
                              </Link>
                          </div>

                          <div className="flex space-x-2">
                              <Settings size={20} className="mt-1" />
                              <Link
                                  href="/services"
                                  className="flex items-center text-lg font-semibold">
                                  Services
                              </Link>
                          </div>

                          <div className="flex space-x-2">
                              <IndianRupee size={20} className="mt-1" />
                              <Link
                                  href="/pricing"
                                  className="flex items-center text-lg font-semibold">
                                  Pricing
                              </Link>
                          </div>

                          <div className="flex space-x-2">
                              <UserRoundSearch size={20} className="mt-1" />
                              <Link
                                  href="/contact"
                                  className="flex items-center text-lg font-semibold">
                                  Contact
                              </Link>
                          </div>

                          {/* WhatsApp Button in Mobile Menu */}
                          <Link
                              href="https://wa.me/917676193045?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center py-2 text-white font-semibold bg-gradient-to-r space-x-2">
                              <Image
                                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                  alt="WhatsApp logo"
                                  className="w-5 h-5"
                              />
                              <span>WhatsApp </span>
                          </Link>
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
                          { label: "Pricing", href: "/pricing" }
                      ].map((item, index) => (
                          <NavigationMenuItem key={index}>
                              <NavigationMenuLink
                                  asChild
                                  className="group inline-flex h-9 w-max items-center justify-center text-white hover:bg-[#2a2d32] px-4 rounded-md">
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
                      asChild>
                      <Link href="/contact">Get in touch</Link>
                  </Button>

                  {/* WhatsApp Button in Desktop Navbar */}
                  <Link
                      href="https://wa.me/917676193045?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden lg:inline-flex px-2 py-2 text-white font-semibold bg-gradient-to-r rounded-md md:rounded-full">
                      <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                          alt="WhatsApp logo"
                          className="w-10 h-10 rounded-full"
                      />
                  </Link>
              </div>
          </div>
      </header>
  );
}
