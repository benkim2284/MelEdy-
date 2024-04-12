"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";


const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
                <Link href="/playground">
                    <Button variant="ghost" className="bg-transparent text-white rounded-half hover:text-green-400 hover:bg-gradient-to-r from-purple-300 to-pink-400 hover:shadow-xl">
                        Playground
                    </Button>
                </Link>
                <Link href="/about">
                    <Button variant="ghost" className="bg-transparent text-white rounded-half hover:text-green-400 hover:bg-gradient-to-r from-purple-300 to-pink-400 hover:shadow-xl">
                        About
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button variant="outline" className="rounded-full hover:bg-green-400 hover:shadow-xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Request Demo <span className="ml-1">&gt;</span>
                        </span>
                    </Button>
                </Link>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;