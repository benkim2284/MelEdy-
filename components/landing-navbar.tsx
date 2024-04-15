"use client";
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { useState } from 'react';
import MobileMenu from "./mobile-menu";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"


const font = Montserrat({ weight: '800', subsets: ['latin'] });

export const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 pr-8">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-1">
          <Image fill sizes="100%" alt="Logo" src="/melEDy.png" className="rounded-md" />
        </div>
        <div className={cn("flex flex-row text-2xl font-bold hover:text-green-400", font.className)}>
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
        <div className="pl-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="rounded-full hover:bg-green-400 hover:shadow-xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Join Waitlist <span className="ml-1">&gt;</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className={cn("sm:max-w-[425px] bg-gradient-to-r from-purple-400 to-pink-600 border-none", font.className)}>
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">Waitlist</DialogTitle>
                <DialogDescription className="text-[#111827]">
                  Sign up to get access to the playground and start using melEDy
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4 text-[#111827]">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="JohnDoe@gmail.com"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Input
                    id="role"
                    placeholder="Student"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="school" className="text-right">
                    School / District
                  </Label>
                  <Input
                    id="school"
                    placeholder="John Doe College"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="hover:bg-green-400">Sign-Up</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  )
}
