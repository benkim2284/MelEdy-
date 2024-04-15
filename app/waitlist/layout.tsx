"use client"
import MobileSidebar from "@/components/mobile-sidebar";
import Navbar from "@/components/sidebar";

const WaitlistLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-[#111827] bg-repeat overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          {children}
        </div>
      </main>
     );
  }

  export default WaitlistLayout;