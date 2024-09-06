
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const domains = [
  {
    id: "graphics",
    name: "Graphics",
  },
  {
    id: "technical",
    name: "Technical",
  },
  {
    id: "webd",
    name: "Web Development",
  },
  {
    id: "alumni",
    name: "Alumni",
  },
  {
    id: "video",
    name: "Video Editing",
  }
];

export default function QuestionsPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div
      className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="text-white max-w-5xl mx-auto p-8 dark">
        
        <p className="text-2xl font-bold my-4">Audition Questions</p>
        <p className="text-lg m-2 text-slate-300">
          These audition questions are designed to evaluate your skills, creativity, and problem-solving abilities. Take your time to demonstrate your expertise and passion for the domain you&apos;re applying to. Show us what makes you a great fit for the Electronics and Communication Engineering Society!
        </p>
        <form onSubmit={handleSubmit} className="my-10 ">
          <Label className="m-2 text-lg" htmlFor="name">Name</Label>
          <Input className="" id="name" type="text" placeholder="Enter your name" />
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="flex-1 py-2">
              <Label className="m-2 text-lg" htmlFor="email">Email</Label>
              <Input className="" id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex-1 py-2">
              <Label className="m-2 text-lg" htmlFor="phone">Phone</Label>
              <Input className="" id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
          <Label className="m-2 text-lg" htmlFor="department">Department</Label>
          <div className="my-2 mb-7">
            <Select>
              <SelectTrigger className="md:max-w-[50%]">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="biotechnology">Biotechnology</SelectItem>
                  <SelectItem value="chemical">Chemical</SelectItem>
                  <SelectItem value="civil">Civil</SelectItem>
                  <SelectItem value="computer science">Computer Science</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Label className="mx-2 my-4 text-lg" htmlFor="domains">Interested Domains</Label>
          <div className="my-2">
            {domains.map((domain) => (
              <div key={domain.id} className="ml-2">
                <Checkbox id={domain.id} />
                <Label className="text-lg my-2 mx-4" htmlFor={domain.id}>{domain.name}</Label>
              </div>
            ))}
          </div>

          <div className="my-6">
            <Label className="m-2 text-lg" htmlFor="question">Why do you want to join ECESS?</Label>
            <Textarea className="" id="question" placeholder="Enter your answer" />
          </div>

          <Button className="my-2 text-md w-full" type="submit">Submit</Button>
        </form>
      </div>
    </div>);
}