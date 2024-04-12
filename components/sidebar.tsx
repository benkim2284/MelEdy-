"use client";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'


import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation"; 

const montserrat = Montserrat(
    {weight: "600", subsets:["latin"]}
    );

const routes = [
    {
        label: "Playground",
        href: "/playground",
        color: "text-white",
    },
    {
        label: "About",
        href: "/about",
        color: "text-white",
    },
    {
        label: "Request Demo",
        href: "/contact",
        color: "text-",
    }
];
const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div
        className = "space-y4 p-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className = "flex item-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                        fill
                        alt="Logo"
                        src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold")}>
                        Dennis Lee
                    </h1>
                </Link>
                <div className = "space-y-1">
                    {routes.map((route) => (
                        <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                        pathname == route.href ? "text-white bg-white/10" : "text-zinc-400"
                        )}
                        >
                            <div className = "flex item-center flex-1">
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;