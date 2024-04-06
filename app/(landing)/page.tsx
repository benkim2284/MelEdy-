"use client"
import { useRef } from "react";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const LandingPage = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="z-10 p-20 h-full flex flex-col items-center justify-center space-y-10">
        <LandingNavbar />
      </div>
      <div className="z-10 flex items-center justify-center flex-col p-1">
        <LandingHero />
      </div>
      <div className="pointer-events-auto">
          <div className="absolute inset-0 z-0">
            <Spline scene="https://prod.spline.design/SkhuV4PdEtyY6EUy/scene.splinecode" />
          </div>
        </div>
      <div>
        <button
          className="z-10 absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white py-2 px-4 rounded flex flex-col items-center justify-center animate-bounce"
          onClick={scrollToContent}
        >
          <svg
            className="ml-2 w-4 h-4 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3">
            </path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col" ref={contentRef}>
        <LandingContent />
      </div>
    </div>
  );
};

export default LandingPage;
