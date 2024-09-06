
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    return <div className="text-white max-w-5xl mx-auto p-8 dark">
        <p className="text-2xl font-bold m-2">Audition Questions</p>
        <p className="text-lg m-2 text-slate-300">
            These audition questions are designed to evaluate your skills, creativity, and problem-solving abilities. Take your time to demonstrate your expertise and passion for the domain you&apos;re applying to. Show us what makes you a great fit for the Electronics and Communication Engineering Society!
        </p>
        <form onSubmit={handleSubmit} className="my-10 ">
            <Label className="m-2 text-lg" htmlFor="name">Name</Label>
            <Input className="" id="name" type="text" placeholder="Enter your name" />
            <div className="flex space-x-5">
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
                    <SelectTrigger className="max-w-[50%]">
                        <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
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

            <div className="my-5">
                <Label className="m-2 text-lg" htmlFor="question">Why do you want to join ECESS?</Label>
                <Textarea className="" id="question" placeholder="Enter your answer" />
            </div>

            <Button className="my-2 w-full" type="submit">Submit</Button>
        </form>
    </div>;
}