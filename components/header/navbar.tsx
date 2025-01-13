"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, House, IndianRupee, Menu, Search, Settings, Shield, UserRound, UserRoundSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="fixed z-50 w-full border-b bg-white h-16">
            <div className="container flex h-16 items-center px-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-black hover:bg-transparent hover:text-black lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white text-black">
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
                                <UserRoundSearch size={20} className="mt-1"/>
                                <Link
                                    href="/contact"
                                    className="flex items-center text-lg font-semibold">
                                    Contact
                                </Link>
                            </div>

                            <Link
                                href="https://wa.me/917676193045?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center py-2 text-black font-semibold bg-gradient-to-r space-x-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp logo"
                                    className="w-5 h-5"
                                />
                                <span>WhatsApp </span>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={"/assets/logo.png"}
                        width={300}
                        height={300}
                        alt={"logo"}
                        className="object-cover w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full p-1 md:ml-14"
                    />{" "}
                    <span className="sm:text-xl font-bold text-black whitespace-nowrap ml-20">
                        Knacpro Solutions
                    </span>
                </Link>
                <NavigationMenu className="hidden lg:flex pl-80">
                    <NavigationMenuList className="gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="group inline-flex h-9 w-max items-center justify-center text-black hover:bg-[#e6e7ea] p-2">
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="group inline-flex h-9 w-max items-center justify-center text-black hover:bg-[#e6e7ea] p-2">
                                <Link href="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="group inline-flex h-9 w-max items-center justify-center text-black hover:bg-[#e6e7ea] p-2">
                                <Link href="/services">Services</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="group inline-flex h-9 w-max items-center justify-center text-black hover:bg-[#e6e7ea] p-2">
                                <Link href="/pricing">Pricing</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="ml-auto flex items-center space-x-4 -mr-32">
                    <Button
                        className="hidden bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white hover:from-[#8B5CF6] hover:to-[#F472B6] lg:inline-flex"
                        asChild>
                        <Link href="/contact">Get in touch</Link>
                    </Button>

                    <Link
                        href="https://wa.me/917676193045?text=Hi%2C%20I%20am%20interested%20in%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:inline-flex px-2 py-2 text-white font-semibold bg-gradient-to-r rounded-md md:rounded-full">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp logo"
                            className="w-10 h-10 rounded-full"
                        />
                    </Link>
                </div>
            </div>
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
