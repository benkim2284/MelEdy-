"use client";
import { useRef } from "react";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import Spline from "@splinetool/react-spline";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingHero = () => {
  return (
    <div className="relative h-screen w-screen">

      <div className="relative flex flex-col justify-center items-center space-y-5 text-white font-bold text-center pointer-events-none">
        <div className="sm:text-5xl md:text-6xl lg:text-7xl space-y-6">
          <h1 className={cn("text-8xl font-bold", font.className)}>melEDy</h1>
          <div className="space-x-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex justify-center">
            <div className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-zinc-300 to-zinc-200">Turn</div>
            <div className="flex flex-row">
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
              <div className="text-4xl bg-gradient-to-r text-transparent bg-clip-text from-zinc-200 to-zinc-100">into a song</div>
            </div>
          </div>
          <div className = "pointer-events-auto">
          <Link href={"/playground"}>
            <Button variant="outline" className="rounded-full overflow-hidden p-8 flex-col hover:bg-green-400 hover:text-green-400 bg-gradient-to-r from-purple-400 to-pink-600 justify-center hover:shadow-2xl">
              <div className="p-1 text-3xl md:p-2 font-bold flex flex-row">
                Playground
              <div className="ml-1">
                </div>
              </div>
            </Button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
