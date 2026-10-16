import type { StaticImageData } from "next/image";

import horsemen from "@/public/wide-images/horsemen.webp";
import angel from "@/public/wide-images/angel.webp";
import heaven from "@/public/wide-images/heaven.webp";
import river from "@/public/wide-images/river.webp";
import ship from "@/public/wide-images/ship.webp";
import ocean from "@/public/wide-images/ocean.webp";

import first from "@/public/high-images/1.jpg";
import second from "@/public/high-images/2.jpg";
import third from "@/public/high-images/3.jpg";
import fourth from "@/public/high-images/4.jpg";
import fifth from "@/public/high-images/5.jpg";
import sixth from "@/public/high-images/6.jpg";

export type Skill = {
    title: string;
    image: StaticImageData;
    cover: StaticImageData;
    description: string;
};

export const skills: Skill[] = [
    {
        title: "backend developer",
        image: third,
        cover: heaven,
        description: "I'm really passionate about the .NET ecosystem and everything that happens behind the scenes. I choose it for most of my projects. MVC, CQRS, SOLID or a plain Web API are all familiar to me, and I have tried a lot of technologies and libraries in this stack. The one thing I haven't done yet is building this kind of application as part of a team, and that is exactly the experience I'm looking for now.",

    },
    {
        title: "graphic designer",
        image: first,
        cover: horsemen,
        description: "Building things that hundreds of thousands of people will see is really exciting for me. The whole process of connecting visuals with people's attention is thrilling, so I do my best to build up-to-date UI with modern features. I really enjoy working in Figma and creating branding for my own projects, like webpagecult.",
    },
    {
        title: "frontend developer",
        image: second,
        cover: angel,
        description: "I do my best to create responsive and smooth interfaces in React with Tailwind. The way people interact with my interfaces fascinates me: how to make something fresh without reinventing the wheel. I have read a few books, like 'Don't Make Me Think', and they show exactly what I mean by that.",

    },
    {
        title: "informatics student",
        image: sixth,
        cover: ship,
        description: "I'm currently studying at Rzeszów University of Technology (PRz). Some people say that an IT person doesn't need a degree, but from my perspective university has given me a lot of new perspectives and shown me paths I would never have found by myself. Understanding things from scratch is very important to me, and I think everyone in this field should have that kind of knowledge.",
    },
    {
        title: "WordPress builder",
        image: fourth,
        cover: river,
        description: "I worked at two companies that gave me the opportunity to build websites with WordPress. I worked with many clients on pages with a lot of traffic, and it helped me truly understand that working under pressure and dealing with clients who want 'this button more red' is a huge part of an IT job. I'm currently shifting towards a more code-focused career path.",

    },
    {
        title: "generative maker",
        image: fifth,
        cover: ocean,
        description: "\"Programmers are dead\", they say. I work with AI a lot (I'm a student, so you know...) and I have reached the point where I know what to ask and how to steer a conversation with an LLM so it actually helps my projects. I think AI is just a tool: if you don't know how to use a drill, you won't drill a hole. If you want results, you need to know how to work with it, and that comes from courses and experience.",
    },

];