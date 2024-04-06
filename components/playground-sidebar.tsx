"use client"
import * as React from "react"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { MessageSquare, Music } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heading } from "@/components/heading";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const PlaygroundSidebar = () => {
  const form = useForm();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="grid gap-3 pt-2 h-full ">
      <div className="">
        <div className={cn("text-xl font-bold text-[#111827]", font.className)}>
          Title
        </div>
        <Form {...form}>
          <form
            className="rounded-lg border w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-8 gap-2"
          >
            <FormField
              name="title"
              render={({ field }) => (
                <FormItem className="col-span-8 lg:col-span-8">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="The Periodic Table Boogie "
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="">
        <div className={cn("text-xl font-bold text-[#111827]", font.className)}>
          Genre / Style
        </div>
        <Form {...form}>
          <form
            className="rounded-lg border w-full p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-8 gap-2">
            <FormField
              name="genre"
              render={({ field }) => (
                <FormItem className="col-span-8 lg:col-span-8">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Guitar Driven Rock with Piano back Track"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};