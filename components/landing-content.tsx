"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: '600', subsets: ['latin'] });


const team = [
  {
    name: "Dennis Lee",
    avatar: "J",
    title: "CEO",
    description: "",
  },
  {
    name: "Ben Kim",
    avatar: "A",
    title: "CTO",
    description: "",
  },
  {
    name: "Nathan Kim",
    avatar: "M",
    title: "CMO",
    description: "",
  },
];

const instructions = [
  {
    name: "1. Upload Study Material",
    avatar: "",
    title: "Our specially trained model will parse your file, highlight the crucial topics, and generate custom lyrics.",
    describe: "",
  },
  {
    name: "2. Edit the Lyrics and Select Style",
    avatar: "",
    title: "Customize the lyrics, genre, and style of the song using your words.",
    describe: "",
  },
  {
    name: "3. Play and Download the Song",
    avatar: "",
    title: "Listen to your custom song and re-create as necessary. Once you're ready just hit download.",
    describe: "",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-30 gap-2 space-y-20 flex flex-col">
      <div className="flex flex-row justify-center items-center space-x-12">
        <div className="w-1/2 flex-col justify-center items-center">
          <h2 className={cn("flex justify-center text-6xl font-bold text-white mb-10", font.className)}>Redefining Education</h2>
          <div className="grid grid-cols-1 gap-4">
            {instructions.map((item) => (
              <Card key={item.describe} className="bg-[#192339] border-none text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-x-2">
                    <div>
                      <p className="text-lg">{item.name}</p>
                      <p className="text-zinc-400 text-sm">{item.title}</p>
                    </div>
                  </CardTitle>
                  <CardContent className="pt-4 px-0">
                    {item.describe}
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <h2 className="text-center text-4xl text-white font-extrabold gap-5">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {team.map((item) => (
            <Card key={item.description} className="bg-[#192339] border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};