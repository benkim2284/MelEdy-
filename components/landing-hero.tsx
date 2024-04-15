"use client";
import { useRef } from "react";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Montserrat } from "next/font/google";
import Spline from "@splinetool/react-spline";
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

export const LandingHero = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="relative flex flex-col justify-center items-center space-y-5 text-white font-bold text-center pointer-events-none">
        <div className="sm:text-5xl md:text-6xl lg:text-7xl space-y-6">
          <div className={cn("flex flex-row text-8xl font-bold justify-center", font.className)}>
            <h1 className="text-white ">
              mel
            </h1>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:text-green-400">
              ED
            </h1>
            <h1 className="text-white">
              y
            </h1>
          </div>
          <div className="space-x-4 text-4xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex flex-col sm:flex-row justify-center ">
            <div className="bg-gradient-to-r text-transparent bg-clip-text from-zinc-300 to-zinc-200">Turn</div>
            <div className="flex flex-col sm:flex-row">
              <TypewriterComponent
                options={{
                  strings: [
                    "your notes",
                    "study guides",
                    "research papers",
                    "newspapers",
                    "books",
                    "past exams"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <div className="bg-gradient-to-r text-transparent bg-clip-text from-zinc-200 to-zinc-100 sm:ml-2">into a song</div>
            </div>
          </div>
          <div className="pointer-events-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="rounded-full overflow-hidden p-8 flex-col hover:bg-green-400 hover:text-green-400 bg-gradient-to-r from-purple-400 to-pink-600 justify-center hover:shadow-2xl">
                  <span className="text-3xl md:p-2 font-bold flex flex-row ">
                    Join Waitlist <span className="ml-1 font-light">&gt;</span>
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
      </div>
    </div>
  );
};
