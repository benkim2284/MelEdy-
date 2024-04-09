"use client";
import { PlaygroundNavbar } from "@/components/playground-navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { PlaygroundSidebar } from "@/components/playground-sidebar";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { generateLyrics } from "../api/lyrics/route.js";
import { LoadingPopup } from "@/components/ui/loadingPopUp";
import { customGenerateAudio } from "../api/music/route.js";

const font = Montserrat({ weight: "600", subsets: ["latin"] });


const PlaygroundPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const [selectedTab, setSelectedTab] = useState("complete");

  const [fileContent, setFileContent] = useState("");

  const [lyrics, setLyrics] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const [music, setMusic] = useState(['','']);
  const [loading, setLoadingStatus] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  const handleNext = async () => {
    if (fileContent == "") {
      setFileContent("Must input text to generate lyrics!!!");
      return;
    }
    try {
      console.log("Edited text:", fileContent);
      setLoadingStatus(true);
      const lyrics = await generateLyrics(fileContent);
      setLyrics(lyrics);
      setSelectedTab("insert");
      setLoadingStatus(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleLyricChange = async (event) => {
    setLyrics(event.target.value);
  };

  const handleSubmit = async () => {
    if (lyrics == "") {
      setLyrics("Must input lyrics to generate song!!!");
      return;
    }
    try {
      setLoadingStatus(true);
      const generatedSong = await customGenerateAudio(lyrics, title, genre);
      setMusic(generatedSong);
      setSelectedTab("song");
      setLoadingStatus(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleTitleChange = async (event) => {
    setTitle(event.target.value);

  };

  const handleGenreChange = async (event) => {
    setGenre(event.target.value);

  };

  const handleBack1 = () => {
    setSelectedTab("complete");
  };

  const handleBack2 = () => {
    setSelectedTab("insert");
  };

  return (
    <div className="h-screen flex flex-col p-20">
      <PlaygroundNavbar />
      <div className="flex flex-col p-4 py-8">
        <h1 className={cn("flex text-4xl font-bold text-[#111827]", font.className)}>
          Playground
        </h1>
      </div>
      <div className="h-full flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-300 rounded-xl gap">
        <Tabs value={selectedTab} defaultValue={selectedTab} className="flex-1">
          <div className="container h-full py-7 ">
            <div className="h-full items-stretch gap-6 md:grid-cols-[1fr_300px]">
              <div className="flex flex-col space-y-4 ">
                <TabsList className={cn("grid grid-cols-3 h-200", font.className)}>
                  <TabsTrigger value="complete" className="text-lg">Upload File</TabsTrigger>
                  <TabsTrigger value="insert" className="text-lg">Lyric Generation</TabsTrigger>
                  <TabsTrigger value="song" className="text-lg ">Listen</TabsTrigger>
                </TabsList>

                {/* UPLOAD FILE */}
                <TabsContent value="complete" className="mt-0 border-0 p-0 space-y-2">
                  <div className={cn("bg-slate-100 rounded-lg grid max-w-sm items-center gap-1 p-2 text-md", font.className)}>
                    Select a .txt or Paste Below
                    <div className="max-w-sm">
                      <Input
                        id="txt"
                        type="file"
                        accept=" .txt, text/plain"
                        className="hover:bg-gradient-to-r from-purple-200 to-pink-300 w-50 w-full"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="flex h-full flex-col space-y-4">
                    <Textarea
                      placeholder="Text From TXT or Paste Text HERE"
                      className={cn("min-h-[400px] flex-1 p-4", font.className)}
                      value={fileContent}
                      onChange={(e) => setFileContent(e.target.value)}
                      style={{ marginTop: '10px' }}
                    />
                    <div className="flex items-center justify-end">
                      <Button className="rounded-md bg-slate-100 hover:rounded-md hover:bg-[#111827] text-[#111827] hover:text-green-500" onClick={handleNext}>Next</Button>
                      {loading && <LoadingPopup/>}
                    </div>
                  </div>
                </TabsContent>

                {/* LYRICS */}
                <TabsContent value="insert" className="mt-0 border-0 p-0 space-y-2">
                  <div className="h-full p-2">

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className={cn("text-xl font-bold text-[#111827] ", font.className)}>
                          Lyrics
                        </div>
                        <Form {...form}>
                          <form
                            className="space-y-5 rounded-lg border w-full focus-within:shadow-sm grid grid-cols-8 gap-2">
                            <FormField
                              name="lyrics"
                              render={({ field }) => (
                                <FormItem className="col-span-8 lg:col-span-8 border-0 outline-none focus-visible:ring-transparent">
                                  <FormControl className="">
                                    <Textarea
                                      className={cn("min-h-[300px] flex-1 p-4", font.className)}
                                      placeholder="Lyrics will Appear Here"
                                      value={lyrics}
                                      onChange={handleLyricChange}
                                    />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </form>
                        </Form>
                      </div>
                    </div>
                    <div className="flex-row">
                      <div className="w-full grid grid-cols-2 space-x-3 pt-4 pb-4" style={{ marginTop: '10px', marginBottom: '52px'}}>
                        <div className="flex flex-col space-y-1">
                          <div className={cn("text-xl font-bold text-[#111827]", font.className)}>
                            Title
                          </div>
                          <Form {...form}>
                            <form
                              title = "title"
                              className="space-y-5 rounded-lg border w-full focus-within:shadow-sm grid grid-cols-8 gap-2">
                              <FormField
                                name="title"
                                render={({ field }) => (
                                  <FormItem className="col-span-8 lg:col-span-8">
                                    <FormControl>
                                      <Input
                                        className={cn(" flex-1 p-4", font.className)}
                                        placeholder="The Periodic Table Boogie"
                                        {...field}
                                        value={title}
                                        onChange={handleTitleChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </form>
                          </Form >
                        </div >
                        <div className="flex flex-col space-y-1">
                          <div className={cn("text-xl font-bold text-[#111827]", font.className)}>
                            Genre / Style
                          </div>
                          <Form {...form}>
                            <form
                              title = "genre"
                              className="space-y-5 rounded-lg border w-full focus-within:shadow-sm grid grid-cols-8 gap-2">
                              <FormField
                                name="genre"
                                render={({ field }) => (
                                  <FormItem className="col-span-8 lg:col-span-8">
                                    <FormControl>
                                      <Input
                                        className={cn(" flex-1 p-4", font.className)}
                                        placeholder="Guitar Driven Rock with Piano back Track"
                                        {...field}
                                        value={genre}
                                        onChange={handleGenreChange}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                            </form>
                          </Form>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end space-x-2" style={{ marginTop: '10px' }}>
                        <div className="flex items-center justify-end">
                          <Button className={cn("rounded-md bg-slate-100 hover:rounded-md hover:bg-[#111827] text-[#111827] hover:text-green-500", font.className)} onClick={handleBack1}>Back</Button>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button className={cn("rounded-md border-2 bg-green-500 text-white hover:bg-gradient-to-r from-purple-400 to-pink-600 hover:rounded-md hover:text-green-500", font.className)} onClick={handleSubmit}>Submit</Button>
                          {loading && <LoadingPopup/>}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

{/* LISTEN */}
                <TabsContent value="song" className="mt-0 border-0 p-0 space-y-2">
                  <div className="flex h-full flex-col space-y-6" style={{ marginBottom: '262px', marginTop: "20px" }}>
                    <div className={cn("text-xl font-bold text-[#111827] ", font.className)}>
                      Version 1
                    </div>
                    <audio controls className = "w-full mt-4">
                        <source src={music[0]} type="audio/mp3"/>
                    </audio>
                    <div className={cn("text-xl font-bold text-[#111827] ", font.className)}>
                      Version 2
                    </div>
                    <audio controls className = "w-full mt-8">
                        <source src={music[1]} type="audio/mp3"/>
                    </audio>
                  </div>
                  <div className="flex items-center justify-end space-x-2 ">
                      <Button className={cn("rounded-md bg-slate-100 hover:rounded-md hover:bg-[#111827] text-[#111827] hover:text-green-500", font.className)} onClick={handleBack2}>Back</Button>
                  </div>
                </TabsContent>

              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
export default PlaygroundPage;
