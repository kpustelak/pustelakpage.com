'use client'

import mock from "@/public/showcase/mock.jpg"
import {useState} from "react"
import Image, {StaticImageData} from "next/image"
import {projects} from "@/lib/project-list";

const projectList = projects
export default function Projects() {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const [hoverImage, setHoverImage] = useState<StaticImageData>(mock);

    function followingImage(x: number, y: number, project: StaticImageData ) {
        setPos({x,y});
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
                    style={{ left: pos.x + 24, top: pos.y + 24 }}
                />
            )}
            <ul className="section-container">
                <h2>Project list</h2>
                {projectList.map((project, i) => (
                    <li key={`${project.name}-${i}`}>
                        <a
                            href={project.link}
                            className="group relative isolate flex justify-between px-0 font-serif text-h2 leading-none uppercase
                             text-primary transition-[padding,color] duration-300 hover:px-8 hover:text-background"
                            onMouseMove={(e) =>
                                followingImage(e.clientX, e.clientY,project.image)}
                            onMouseLeave={() => {setPos(null)}}
                        >
                            <span className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span>{project.name}</span>
                            <div className="flex justify-between w-1/20">
                                <p>[</p>
                                <p>{i + 1}</p>
                                <p>]</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
