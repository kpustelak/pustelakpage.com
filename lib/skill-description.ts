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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae iaculis ante. Sed aliquam facilisis viverra. Donec non pharetra diam. Nullam porta quam a purus aliquam, sit amet condimentum mauris accumsan. Vivamus blandit lectus vitae sem feugiat finibus. Duis quis diam nec magna laoreet tristique. Vivamus vitae dictum diam. Praesent quis ante posuere, sagittis est ac, ultrices mauris. Integer eget diam quis justo semper tristique porttitor sit amet nibh.",

    },
    {
        title: "graphic designer",
        image: first,
        cover: horsemen,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae iaculis ante. Sed aliquam facilisis viverra. Donec non pharetra diam. Nullam porta quam a purus aliquam, sit amet condimentum mauris accumsan. Vivamus blandit lectus vitae sem feugiat finibus. Duis quis diam nec magna laoreet tristique. Vivamus vitae dictum diam. Praesent quis ante posuere, sagittis est ac, ultrices mauris. Integer eget diam quis justo semper tristique porttitor sit amet nibh.",
    },
    {
        title: "frontend developer",
        image: second,
        cover: angel,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae iaculis ante. Sed aliquam facilisis viverra. Donec non pharetra diam. Nullam porta quam a purus aliquam, sit amet condimentum mauris accumsan. Vivamus blandit lectus vitae sem feugiat finibus. Duis quis diam nec magna laoreet tristique. Vivamus vitae dictum diam. Praesent quis ante posuere, sagittis est ac, ultrices mauris. Integer eget diam quis justo semper tristique porttitor sit amet nibh.",

    },
    {
        title: "informatics student",
        image: sixth,
        cover: ship,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae iaculis ante. Sed aliquam facilisis viverra. Donec non pharetra diam. Nullam porta quam a purus aliquam, sit amet condimentum mauris accumsan. Vivamus blandit lectus vitae sem feugiat finibus. Duis quis diam nec magna laoreet tristique. Vivamus vitae dictum diam. Praesent quis ante posuere, sagittis est ac, ultrices mauris. Integer eget diam quis justo semper tristique porttitor sit amet nibh.",
    },
    {
        title: "WordPress builder",
        image: fourth,
        cover: river,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae iaculis ante. Sed aliquam facilisis viverra. Donec non pharetra diam. Nullam porta quam a purus aliquam, sit amet condimentum mauris accumsan. Vivamus blandit lectus vitae sem feugiat finibus. Duis quis diam nec magna laoreet tristique. Vivamus vitae dictum diam. Praesent quis ante posuere, sagittis est ac, ultrices mauris. Integer eget diam quis justo semper tristique porttitor sit amet nibh.",

    },
    {
        title: "generative maker",
        image: fifth,
        cover: ocean,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae iaculis ante. Sed aliquam facilisis viverra. Donec non pharetra diam. Nullam porta quam a purus aliquam, sit amet condimentum mauris accumsan. Vivamus blandit lectus vitae sem feugiat finibus. Duis quis diam nec magna laoreet tristique. Vivamus vitae dictum diam. Praesent quis ante posuere, sagittis est ac, ultrices mauris. Integer eget diam quis justo semper tristique porttitor sit amet nibh.",
    },

];