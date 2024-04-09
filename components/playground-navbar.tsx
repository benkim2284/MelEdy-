"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const PlaygroundNavbar = () => {
  return (
    <nav className="p-4 bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 pr-8">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/musicLogo.png" className="rounded-md" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white hover:text-green-400", font.className)}>
          MelEdy
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={"/"}>
          <Button variant="ghost" className="bg-transparent text-white rounded-half hover:text-green-400 hover:bg-gradient-to-r from-purple-300 to-pink-400 hover:shadow-xl">
            Home
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button variant="outline" className="rounded-full hover:bg-green-400 hover:shadow-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Contact <span className="ml-1">&gt;</span>
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
