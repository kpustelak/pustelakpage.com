'use client'

import random from "@/public/random.jpg"
import mock from "@/public/showcase/mock.jpg"
import {useState} from "react"
import Image, {StaticImageData} from "next/image"

const projects = [
    { name: "Lorem ipsum", link: "#", image: random },
    { name: "Lorem ipsum sit amet", link: "#", image: mock  },
    { name: "Lorem ipsum hola", link: "#", image: random  },
    { name: "Lorem zibzibum", link: "#", image: mock  },
    { name: "Lorem ipsum dolor", link: "#", image: random  },
    { name: "Lorem ipsum sit amet consectetur", link: "#", image: random  },
];

export default function Projects() {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const [hoverImage, setHoverImage] = useState<StaticImageData>(mock);

    function followingImage(x: number, y: number, project: StaticImageData ) {
        setPos({x,y});
        setHoverImage(project);
    }

    return (
        <section className="overflow-x-clip">
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
                {projects.map((project, i) => (
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
                            <span className="tabular-nums">[ {i + 1} ]</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
