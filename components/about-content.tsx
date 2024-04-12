"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: '800', subsets: ['latin'] });


const team = [
  {
    name: "Dennis Lee",
    avatar: "J",
    title: "",
    description: "",
  },
  {
    name: "Ben Kim",
    avatar: "A",
    title: "",
    description: "",
  },
  {
    name: "Nathan Kim",
    avatar: "M",
    title: "",
    description: "",
  },
];

const mission = [
  {
    description1: <div style={{ textIndent: '1em' }}>
      In today&apos;s fast-paced world, distractions are everywhere, significantly impacting students&apos; ability to focus. This challenge is magnified for those with ADHD, a group that is growing at an unprecedented rate. Technology plays a dual role in this trend, both as a cause and a potential solution. At melEDy, we recognize the urgent need for innovative educational tools that cater to the diverse needs of all students, particularly those with focus disorders. Our mission is grounded in the belief that learning should be personalized, engaging, and accessible to everyone.
    </div>,

    description2: <div style={{ textIndent: '1em' }}>
      Have you ever wondered why it&apos;s easier to remember the lyrics of a song than the facts on a flashcard? This phenomenon, known as involuntary musical imagery, is the cornerstone of our approach. By transforming educational materials into catchy songs, melEDy makes learning more enjoyable and effective, especially for students who struggle to maintain their focus.
    </div>,

    description3: <div style={{ textIndent: '1em' }}>
      Our founder&apos;s personal experience with ADHD has deeply influenced melEDy&apos;s vision. We&apos;re committed to creating an environment where every student, regardless of their challenges, can thrive. By integrating cutting-edge AI with the universal appeal of music, we&apos;re revolutionizing how students absorb and retain information.
    </div>,

    description4: <div style={{ textIndent: '1em' }}>
      At melEDy, we&apos;re dedicated to unlocking every student&apos;s potential. Our approach not only adapts to each learner&apos;s unique style but also turns the learning process into a dynamic and memorable experience. We invite school districts to partner with us as we chart a new course in education, making learning more inclusive, engaging, and effective—one melody at a time.
    </div>,
  },
];

export const AboutContent = () => {
  return (
    <div className="px-10 pb-20 gap-2 space-y-20 flex flex-col">
      <div className="space-y-10">
        <div className = "flex flex-row justify-center align-top text-6xl font-extrabold">
          <h1 className={cn(" text-white  ", font.className)}>Meet The mel</h1>
          <h1 className=" font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">ED</h1>
          <h1 className=" text-white ">y Team</h1>
        </div>
        <div className="space-y-10">
        <div className = "flex flex-row justify-center text-4xl font-extrabold">
          <h2 className={cn(" text-white  ", font.className)}>Our Mission</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {mission.map((item, index) => (
            <Card key={index} className="bg-[#192339] border-none text-white">
              <CardHeader>
                <CardContent className="p-5 font-semibold space-y-4">
                  <p className="">{item.description1}</p>
                  <p className="">{item.description2}</p>
                  <p className="">{item.description3}</p>
                  <p className="">{item.description4}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      </div>

    </div>
  );
};
