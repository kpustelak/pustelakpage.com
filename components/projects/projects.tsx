'use client'

import {useState} from "react"
import Image, {StaticImageData} from "next/image"
import Link from "next/link";
import {projects} from "@/lib/project-list";
import {projectHref} from "@/lib/project-description";
import SectionTab from "@/components/global/section-tab";
import first from "@/public/high-images/1.jpg"

export default function Projects() {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const [hoverImage, setHoverImage] = useState<StaticImageData>(first);

    function followingImage(x: number, y: number, project: StaticImageData) {
        setPos({x, y});
        setHoverImage(project);
    }

    return (
        <section id="projects" className="overflow-x-clip">
            {pos && (
                <Image
                    src={hoverImage}
                    sizes="20rem"
                    alt=""
                    className="pointer-events-none fixed z-50 w-80"
                    style={{left: pos.x + 24, top: pos.y + 24}}
                />
            )}
            <div className="section-container">
                <SectionTab title="Projects" fullWidth={true} >
                    <h2>Project list</h2>
                    <ul className="border-t border-primary-20">
                        {projects.map((project, i) => (
                            <li key={project.slug} className="border-b border-primary-20">
                                <Link
                                    href={projectHref(project)}
                                    className="group relative isolate flex items-baseline justify-between gap-6 py-5 font-serif text-h2 leading-none uppercase text-primary
                                        transition-[padding,color] duration-300 hover:px-8 hover:text-background focus-visible:px-8 focus-visible:text-background focus-visible:outline-none md:py-6"
                                    onMouseMove={(e) => followingImage(e.clientX, e.clientY, project.image)}
                                    onMouseLeave={() => setPos(null)}
                                >
                                    <span className="absolute inset-y-0 -inset-x-[100vw] -z-10 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                                    <span>{project.name}</span>
                                    <div className="flex justify-between w-1/20">
                                        <p>[</p>
                                        <p>{i + 1}</p>
                                        <p>]</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </SectionTab>
            </div>
        </section>
    );
}
