import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-white text-4xl mt-20 font-bold">Our domains</h1>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Graphic Designing",
        description:
            "Unleash your creativity and design stunning visuals that captivate and communicate. As a graphic designer, you'll transform concepts into eye-catching designs that resonate with our audience.",
        link: "https://stripe.com",
    },
    {
        title: "Web development",
        description:
            "Develop and maintain dynamic, user-friendly websites that are both functional and aesthetically pleasing. As a web developer, you'll be at the forefront of our digital presence, coding the future and enhancing user experiences.",
        link: "https://netflix.com",
    },
    {
        title: "Technical",
        description:
            "Dive into the world of technology, solving complex problems and driving innovation. As a member of the technical domain, you'll work with cutting-edge tools and methodologies to advance our technical initiatives.",
        link: "https://google.com",
    },
    {
        title: "Alumni",
        description:
            "Strengthen our community by fostering connections and building lasting relationships with our alumni. As part of the alumni network, you'll play a vital role in maintaining ties and creating opportunities for collaboration.",
        link: "https://meta.com",
    },
    {
        title: "Video Editing",
        description:
            "Transform raw footage into compelling visual stories that engage and inspire. As a video editor, you'll craft videos that capture attention and communicate our message effectively.",
        link: "https://amazon.com",
    },
    {
        title: "Content Writing",
        description:
            "Craft compelling narratives and articulate impactful messages. As a content writer, you'll shape the voice and story of our organization, bringing ideas to life with the power of words.",
        link: "https://microsoft.com",
    },
];