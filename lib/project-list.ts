import {StaticImageData} from "next/image";
import random from "@/public/random.jpg";

export type Project = {
    name: string,
    link: string,
    image: StaticImageData
}

export const projects: Project[] = [
    {
        name: "Lorem ipsum",
        link: "#",
        image: random
    },
    {
        name: "Lorem ipsum",
        link: "#",
        image: random
    },
    {
        name: "Lorem ipsum",
        link: "#",
        image: random
    },
    {
        name: "Lorem ipsum",
        link: "#",
        image: random
    },
    {
        name: "Lorem ipsum",
        link: "#",
        image: random
    },
    {
        name: "Lorem ipsum",
        link: "#",
        image: random
    },
]