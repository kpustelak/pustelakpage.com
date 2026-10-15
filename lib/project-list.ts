import random from "@/public/random.jpg";
import angel from "@/public/wide-images/angel.webp";
import heaven from "@/public/wide-images/heaven.webp";
import horsemen from "@/public/wide-images/horsemen.webp";
import ocean from "@/public/wide-images/ocean.webp";
import river from "@/public/wide-images/river.webp";
import ship from "@/public/wide-images/ship.webp";
import high1 from "@/public/high-images/1.jpg";
import high2 from "@/public/high-images/2.jpg";
import high3 from "@/public/high-images/3.jpg";
import high4 from "@/public/high-images/4.jpg";
import high5 from "@/public/high-images/5.jpg";
import high6 from "@/public/high-images/6.jpg";
import {Project, ProjectDetail, ProjectHighlight, ProjectInfo} from "@/lib/project-description";

export type {Project} from "@/lib/project-description";

const loremDetails: ProjectDetail[] = [
    {title: "Client", description: "Lorem ipsum"},
    {title: "Year", description: "2026"},
    {title: "Role", description: "Design & development"},
    {title: "Duration", description: "3 months"},
];

const loremInfo: ProjectInfo = {
    title: "Lorem ipsum sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lectus eget feugiat efficitur. " +
        "Ut et sollicitudin sem, sed feugiat lacus. Donec pulvinar lorem eget nibh scelerisque tincidunt. Sed dignissim " +
        "ante in lacus pretium suscipit. Praesent nec consequat nunc. Nam sodales euismod diam at suscipit.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
};

const loremHighlights: ProjectHighlight[] = Array.from({length: 4}, () => ({
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis lectus eget feugiat efficitur. " +
        "Ut et sollicitudin sem, sed feugiat lacus. Donec pulvinar lorem eget nibh scelerisque tincidunt.",
}));

export const projects: Project[] = [
    {
        slug: "project-one",
        name: "Project one",
        image: random,
        details: loremDetails,
        heroImage: angel,
        info: loremInfo,
        gallery: [high1, high2],
        highlights: loremHighlights,
    },
    {
        slug: "project-two",
        name: "Project two",
        image: random,
        details: loremDetails,
        heroImage: heaven,
        info: loremInfo,
        gallery: [high3, high4],
        highlights: loremHighlights,
    },
    {
        slug: "project-three",
        name: "Project three",
        image: random,
        details: loremDetails,
        heroImage: horsemen,
        info: loremInfo,
        gallery: [high5, high6],
        highlights: loremHighlights,
    },
    {
        slug: "project-four",
        name: "Project four",
        image: random,
        details: loremDetails,
        heroImage: ocean,
        info: loremInfo,
        gallery: [high1, high3],
        highlights: loremHighlights,
    },
    {
        slug: "project-five",
        name: "Project five",
        image: random,
        details: loremDetails,
        heroImage: river,
        info: loremInfo,
        gallery: [high2, high4],
        highlights: loremHighlights,
    },
    {
        slug: "project-six",
        name: "Project six",
        image: random,
        details: loremDetails,
        heroImage: ship,
        info: loremInfo,
        gallery: [high5, high1],
        highlights: loremHighlights,
    },
];

export function getProject(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getNextProject(slug: string): Project {
    const index = projects.findIndex(project => project.slug === slug);
    return projects[(index + 1) % projects.length];
}
