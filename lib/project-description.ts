import {StaticImageData} from "next/image";

export type ProjectDetail = {
    title: string,
    description: string,
    href?: string,
}

export type ProjectHighlight = {
    title: string,
    description: string,
}

export type ProjectInfo = {
    title: string,
    description: string,
    technologies: string[],
}

export type Project = {
    slug: string,
    name: string,
    image: StaticImageData,
    details: ProjectDetail[],
    heroImage: StaticImageData,
    info: ProjectInfo,
    gallery: [StaticImageData, StaticImageData],
    highlights: ProjectHighlight[],
}

export function projectHref(project: Project): string {
    return `/projects/${project.slug}`;
}
