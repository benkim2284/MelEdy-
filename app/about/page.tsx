"use client"
import { useRef } from "react";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { AboutContent } from "@/components/about-content";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaygroundNavbar } from "@/components/playground-navbar";


const LandingPage = () => {
  const contentRef = useRef(null);

  return (
    <div className="min-h-screen min-w-screen flex items-center flex-col">
      <div className="z-11 p-20 h-full flex flex-col items-center justify-center space-y-10">
        <PlaygroundNavbar />
      </div>
      <div className="flex flex-col" ref={contentRef}>
        <AboutContent />
      </div>
    </div>
  );
};

export default LandingPage;
