"use client"
import MobileSidebar from "@/components/mobile-sidebar";
import Navbar from "@/components/sidebar";

const PlaygroundLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-[#fafafaz] overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          {children}
        </div>
      </main>
     );
  }

  export default PlaygroundLayout;