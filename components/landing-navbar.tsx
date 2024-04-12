"use client";
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { useState } from 'react';
import MobileMenu from "./mobile-menu";



const font = Montserrat({ weight: '800', subsets: ['latin'] });

export const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="p-4 bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 pr-8">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-1">
          <Image fill alt="Logo" src="/melEDy.png" className="rounded-md" />
        </div>
        <div className= {cn("flex flex-row text-2xl font-bold hover:text-green-400", font.className)}>
          <h1 className="text-white ">
            mel
          </h1>
          <h1 className="bg-clip-text hover:text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-green-400">
            <span className="text-stroke-[#111827]">ED</span>
          </h1>
          <h1 className="text-white">
            y
          </h1>
        </div>
      </Link>
      <div className={`flex items-center gap-x-2`}>
        <Link href={"/playground"}>
          <Button variant="ghost" className="bg-transparent text-white rounded-half hover:text-green-400 hover:bg-gradient-to-r from-purple-300 to-pink-400 hover:shadow-xl">
            Playground
          </Button>
        </Link>
        <Link href={"/about"}>
          <Button variant="ghost" className="bg-transparent text-white rounded-half hover:text-green-400 hover:bg-gradient-to-r from-purple-300 to-pink-400 hover:shadow-xl">
            About
          </Button>
        </Link>
        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSe-u3sAXu9P7J0P9Sc51TefCSb5ihivSuDTOunjujnCs66mvQ/viewform"} target="_blank">
          <Button variant="outline" className="rounded-full hover:bg-green-400 hover:shadow-xl">
            <span className="text-transparent bg-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Request Demo <span className="ml-1">&gt;</span>
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}

